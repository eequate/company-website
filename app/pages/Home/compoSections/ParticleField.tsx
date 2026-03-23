"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
  hue: number;
  phase: number;
  speed: number;
}

// Simplex-style noise for organic flow
function noise2D(x: number, y: number): number {
  const sx = Math.sin(x * 0.7 + y * 1.1) * 0.5;
  const sy = Math.sin(y * 0.9 + x * 0.8) * 0.5;
  const n1 = Math.sin(x * 1.3 + y * 0.6 + sx * 2.0);
  const n2 = Math.sin(y * 1.7 - x * 0.4 + sy * 2.0);
  const n3 = Math.sin((x + y) * 0.8 + n1 * 0.5);
  return (n1 + n2 + n3) / 3;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const meshCacheRef = useRef<ImageData | null>(null);
  const meshSizeRef = useRef({ w: 0, h: 0 });

  const createParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 5000), 160);

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const baseOpacity = 0.15 + Math.random() * 0.35;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: 1 + Math.random() * 2,
        opacity: baseOpacity,
        baseOpacity,
        hue: 210 + Math.random() * 30,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.6,
      });
    }
    return particles;
  }, []);

  // Pre-render the static mesh/weave texture to an offscreen canvas
  const buildMeshTexture = useCallback((w: number, h: number, dpr: number) => {
    const offscreen = document.createElement("canvas");
    offscreen.width = w * dpr;
    offscreen.height = h * dpr;
    const oc = offscreen.getContext("2d");
    if (!oc) return null;
    oc.scale(dpr, dpr);

    // Dark base
    oc.fillStyle = "#101016";
    oc.fillRect(0, 0, w, h);

    // Dot mesh grid — like carbon fibre / woven texture
    const spacing = 12;
    const dotR = 2.8;
    for (let gx = 0; gx < w + spacing; gx += spacing) {
      for (let gy = 0; gy < h + spacing; gy += spacing) {
        // Offset every other row for a weave pattern
        const offsetX = (Math.floor(gy / spacing) % 2) * (spacing * 0.5);
        const px = gx + offsetX;

        // Slight variation per dot
        const variation = noise2D(px * 0.02, gy * 0.02) * 0.5 + 0.5;
        const brightness = 18 + variation * 12;
        const alpha = 0.35 + variation * 0.25;

        oc.beginPath();
        oc.arc(px, gy, dotR * (0.8 + variation * 0.4), 0, Math.PI * 2);
        oc.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness + 4}, ${alpha})`;
        oc.fill();
      }
    }

    return oc.getImageData(0, 0, offscreen.width, offscreen.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(rect.width, rect.height);

      // Rebuild mesh texture cache
      meshCacheRef.current = buildMeshTexture(rect.width, rect.height, dpr);
      meshSizeRef.current = { w: rect.width, h: rect.height };
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const w = meshSizeRef.current.w;
      const h = meshSizeRef.current.h;
      if (!w || !h) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.006;
      const t = timeRef.current;
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const mouseRadius = 180;

      // === LAYER 1: Draw cached mesh texture ===
      if (meshCacheRef.current) {
        ctx.putImageData(meshCacheRef.current, 0, 0);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      } else {
        ctx.fillStyle = "#101016";
        ctx.fillRect(0, 0, w, h);
      }

      // === LAYER 2: Animated flowing light caustics ===
      ctx.globalCompositeOperation = "lighter";

      // Multiple flowing light bands
      for (let i = 0; i < 3; i++) {
        const phase = t * 0.4 + i * 2.1;
        const cx = w * (0.3 + 0.4 * Math.sin(phase * 0.3 + i));
        const cy = h * (0.2 + 0.6 * Math.sin(phase * 0.2 + i * 1.5));
        const rx = w * (0.35 + 0.15 * Math.sin(phase * 0.5));
        const ry = h * (0.25 + 0.15 * Math.cos(phase * 0.4));

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
        const intensity = 0.04 + 0.025 * Math.sin(phase);
        grad.addColorStop(0, `rgba(200, 210, 230, ${intensity})`);
        grad.addColorStop(0.5, `rgba(150, 165, 200, ${intensity * 0.4})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(phase * 0.15);
        ctx.scale(1, ry / rx || 1);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(rx, ry), 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Diagonal sweep light
      const sweepX = (Math.sin(t * 0.15) * 0.5 + 0.5) * w * 1.5 - w * 0.25;
      const sweepGrad = ctx.createLinearGradient(
        sweepX - w * 0.3, 0,
        sweepX + w * 0.3, h
      );
      sweepGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      sweepGrad.addColorStop(0.4, "rgba(180, 190, 210, 0.025)");
      sweepGrad.addColorStop(0.5, "rgba(200, 210, 230, 0.04)");
      sweepGrad.addColorStop(0.6, "rgba(180, 190, 210, 0.025)");
      sweepGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, 0, w, h);

      // === LAYER 3: Floating particles ===
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle drift
        const driftX = Math.sin(t * p.speed + p.phase) * 18;
        const driftY = Math.cos(t * p.speed * 0.7 + p.phase + 1) * 14;
        let targetX = p.baseX + driftX;
        let targetY = p.baseY + driftY;

        // Mouse interaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * 35;
            const angle = Math.atan2(dy, dx);
            targetX += Math.cos(angle) * force;
            targetY += Math.sin(angle) * force;
            p.opacity = p.baseOpacity + (1 - dist / mouseRadius) * 0.5;
          } else {
            p.opacity += (p.baseOpacity - p.opacity) * 0.02;
          }
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.02;
        }

        p.x += (targetX - p.x) * 0.04;
        p.y += (targetY - p.y) * 0.04;

        // Wrap edges
        if (p.baseX < -20) p.baseX = w + 20;
        if (p.baseX > w + 20) p.baseX = -20;
        if (p.baseY < -20) p.baseY = h + 20;
        if (p.baseY > h + 20) p.baseY = -20;
        p.baseX += p.vx;
        p.baseY += p.vy;

        const breathe = Math.sin(t * 1.5 + p.phase) * 0.06;
        const drawOpacity = Math.max(0, Math.min(1, p.opacity + breathe));

        // Glow — grayscale, darker
        const lightness = 40 + p.hue * 0.05; // subtle variation 40-52
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 5
        );
        gradient.addColorStop(0, `hsla(0, 0%, ${lightness}%, ${drawOpacity * 0.25})`);
        gradient.addColorStop(0.3, `hsla(0, 0%, ${lightness - 5}%, ${drawOpacity * 0.08})`);
        gradient.addColorStop(1, `hsla(0, 0%, ${lightness - 10}%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core — grayscale
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, ${lightness + 10}%, ${drawOpacity * 0.8})`;
        ctx.fill();
      }

      // Subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineOpacity = (1 - dist / 90) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(120, 120, 125, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Reset composite
      ctx.globalCompositeOperation = "source-over";

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticles, buildMeshTexture]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
}
