# SEO Audit Report – Eequate

**Date:** March 2025

---

## ✅ What's Working Well

### Metadata
- **Root layout** has solid default metadata: title template, description, keywords
- **metadataBase** correctly set to `https://eequate.com`
- **metadataBase** used for Open Graph and other URL resolution
- **Page-specific metadata** for Services, Case Studies, Contact, About Us (title + description)
- **Robots** directive: index, follow, and googleBot options configured

### Technical
- **Sitemap**: `app/sitemap.ts` – all main pages with priority and changeFrequency
- **Robots.txt**: Points to sitemap at `https://eequate.com/sitemap.xml`
- **Manifest**: PWA manifest at `/site.webmanifest`
- **Icons**: Favicon set (16x16, 32x32, apple-touch-icon, android-chrome)
- **Language**: `<html lang="en">` set
- **Redirect**: /aboutus → /about-us (301) for legacy URLs

### Open Graph & Twitter
- Open Graph: type, locale (en_AU), url, siteName, title, description
- Twitter card: summary_large_image with title and description

---

## ⚠️ Gaps & Recommendations

### 1. **Missing Open Graph / Twitter Image**
- **Status:** No `og:image` or `twitter:image` defined
- **Impact:** Shared links on social media won’t show a preview image
- **Recommendation:** Add a 1200×630px default OG image (e.g. `/og-image.jpg`) and reference it:

```ts
// In app/layout.tsx metadata
openGraph: {
  // ...existing
  images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Eequate – Digital Solutions Agency" }],
},
twitter: {
  // ...existing
  images: ["/og-image.jpg"],
},
```

### 2. **No Canonical URLs**
- **Status:** No explicit canonical tags
- **Impact:** Risk of duplicate content if multiple URLs serve similar content
- **Recommendation:** Add canonical URLs per page, e.g.:

```ts
// In layout or page metadata
alternates: {
  canonical: "https://eequate.com/about-us",
},
```

For the root layout, you can set a default and override per page if needed.

### 3. **No Structured Data (JSON-LD)**
- **Status:** No Organization or LocalBusiness schema
- **Impact:** Less rich search results (no enhanced snippets)
- **Recommendation:** Add JSON-LD in the root layout:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eequate",
  "url": "https://eequate.com",
  "description": "Sydney-based digital solutions agency...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "sameAs": ["https://linkedin.com/...", "https://twitter.com/..."]
}
</script>
```

### 4. **Generic Image Alt Text**
- **Status:** Marquee logos use `alt="logo"`
- **Impact:** Weaker accessibility and image SEO
- **Recommendation:** Use descriptive alt text, e.g. `alt="Company logo"` or per logo: `alt="[Company Name] logo"`. For decorative logos, `alt=""` is fine.

### 5. **Case Studies: Metadata Conflict**
- **Status:** Layout title "Case Studies" vs page title "Our Work"
- **Impact:** Page metadata wins; layout title is redundant. If "Our Work" is the page name, this is OK.
- **Recommendation:** ~~Remove layout metadata for case-studies~~ — Resolved: route renamed to /our-work, layout aligned.

### 6. **Web Manifest Tweaks**
- **Current:** `theme_color` and `background_color` are `#ffffff`
- **Recommendation:** Align with brand colours (e.g. `#006AFF` or `#1F2541`) for a more consistent splash/theme experience.

### 7. **Sitemap Detail**
- **Status:** Uses `new Date()` for `lastModified`
- **Impact:** Every request shows “today” as last modified
- **Recommendation:** Consider static or versioned `lastModified` values, or derive from CMS/build time if applicable.

### 8. **Meta Keywords**
- **Status:** Keywords array in layout
- **Note:** Many search engines largely ignore meta keywords. Keeping them does not harm; they are optional.

---

## Summary Priority

| Priority | Item                           | Effort | Impact |
|----------|--------------------------------|--------|--------|
| High     | Add OG/Twitter image           | Low    | High   |
| High     | Add Organization JSON-LD       | Low    | High   |
| Medium   | Add canonical URLs             | Low    | Medium |
| Medium   | Improve image alt text         | Low    | Medium |
| Low      | Refine web manifest colours    | Low    | Low    |
| Low      | ~~Resolve case-studies metadata~~ (Done: /our-work) | Low    | Low    |
