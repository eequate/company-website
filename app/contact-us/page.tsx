'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import FAQSection from "../pages/Home/compoSections/Faq";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useState } from "react";
import CTABanner from "../pages/Home/compoSections/Banner";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "config_error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = async () => {
        if (!formData.firstName || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        if (!WEB3FORMS_KEY) {
            setStatus("config_error");
            return;
        }

        setStatus("sending");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", WEB3FORMS_KEY);
            formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`.trim());
            formDataToSend.append("email", formData.email);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("subject", formData.subject || "New Contact Form Submission");
            formDataToSend.append("message", formData.message);
            formDataToSend.append("from_name", "Eequate Website");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", phone: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
                console.error("Web3Forms error:", result?.message ?? result?.error ?? response.status);
            }
        } catch (err) {
            setStatus("error");
            console.error("Form submit failed:", err);
        }
    };
    return (
        <div className="md:px-[48px] px-0">
            <div className="lg:px-0 lg:pb-[60px] pb-[40px] px-0 md:px-[20px] pt-[30px]">
                <h1 className="text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center pb-[30px] px-5 md:px-0">
                    Contact Us
                </h1>
                <p className="text-[#6F849E] text-[16px] md:text-[20px] leading-[28px] md:leading-[34px] font-medium text-center max-w-[800px] mx-auto pb-[60px] px-5 md:px-0">
                    Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <div className="flex justify-center items-center rounded-none md:rounded-[30px]" style={{ background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)" }}>
                    <Card className="w-full md:p-[48px] p-5 text-white bg-transparent border-none shadow-lg rounded-2xl">
                        <div className="w-full flex flex-col gap-6">
                            <div className="flex flex-col gap-[24px]">
                                <div className="md:flex-row flex-col flex gap-[24px] w-full">
                                    <div style={{ position: "relative", display: "inline-block" }} className="w-full">
                                        <Input
                                            placeholder="First Name"
                                            className="text-white relative p-[10px] h-[56px] "
                                            style={{
                                                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(31, 37, 65, 0.3) 100%)",
                                                borderRadius: "70px",
                                                padding: "22px",
                                                border: "none",
                                                width: "100%",
                                                position: "relative",
                                            }}
                                            value={formData.firstName} onChange={handleChange}
                                            name="firstName"
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                padding: "1px",
                                                borderRadius: "70px",
                                                background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "destination-out",
                                                maskComposite: "exclude",
                                                pointerEvents: "none",
                                            }}
                                        ></div>
                                    </div>


                                    <div style={{ position: "relative", display: "inline-block" }} className="w-full">
                                        <Input
                                            placeholder="Last Name"
                                            className="text-white relative p-[10px] h-[56px]"
                                            style={{
                                                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(31, 37, 65, 0.3) 100%)",
                                                borderRadius: "70px",
                                                padding: "22px",
                                                border: "none",
                                                width: "100%",
                                                position: "relative",
                                            }}
                                            name="lastName"
                                            value={formData.lastName} onChange={handleChange}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                padding: "1px",
                                                borderRadius: "70px",
                                                background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "destination-out",
                                                maskComposite: "exclude",
                                                pointerEvents: "none",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-[24px] w-full">
                                    <div style={{ position: "relative", display: "inline-block", zIndex: 2 }} className="w-full">
                                        <PhoneInput
                                            country={"au"}
                                            enableSearch={true}
                                            inputClass="phone-input-field"
                                            containerClass="w-full"
                                            buttonClass="phone-input-button"
                                            dropdownClass=""
                                            value={formData.phone} onChange={handlePhoneChange}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                padding: "1px",
                                                borderRadius: "70px",
                                                background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "destination-out",
                                                maskComposite: "exclude",
                                                pointerEvents: "none",
                                            }}
                                        ></div>
                                    </div>
                                    <div style={{ position: "relative", display: "inline-block" }} className="w-full">
                                        <Input
                                            placeholder="Email"
                                            className="text-white relative p-[10px] h-[56px]"
                                            style={{
                                                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(31, 37, 65, 0.3) 100%)",
                                                borderRadius: "70px",
                                                padding: "22px",
                                                border: "none",
                                                width: "100%",
                                                position: "relative",
                                            }}
                                            value={formData.email} onChange={handleChange}
                                            name="email"
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                padding: "1px",
                                                borderRadius: "70px",
                                                background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "destination-out",
                                                maskComposite: "exclude",
                                                pointerEvents: "none",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[24px] w-full">
                                <div style={{ position: "relative", display: "inline-block" }} className="w-full">
                                    <Input
                                        placeholder="Subject"
                                        className="text-white relative p-[10px] h-[56px]"
                                        style={{
                                            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(31, 37, 65, 0.3) 100%)",
                                            borderRadius: "70px",
                                            padding: "22px",
                                            border: "none",
                                            width: "100%",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                        name="subject"
                                        value={formData.subject} onChange={handleChange}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            padding: "1px",
                                            borderRadius: "70px",
                                            background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "destination-out",
                                            maskComposite: "exclude",
                                            pointerEvents: "none",
                                        }}
                                    ></div>
                                </div>
                                <div style={{ position: "relative", display: "inline-block" }}>
                                    <Textarea
                                        placeholder="Message"
                                        className="text-white relative p-[10px] md:h-[400px] h-[200px] p-[40px]"
                                        style={{
                                            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(31, 37, 65, 0.3) 100%)",
                                            borderRadius: "70px",

                                            border: "none",
                                            width: "100%",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                        name="message"
                                        value={formData.message} onChange={handleChange}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            padding: "1px",
                                            borderRadius: "70px",
                                            background: "linear-gradient(90deg, #1F2541 0%, #455491 100%)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "destination-out",
                                            maskComposite: "exclude",
                                            pointerEvents: "none",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-center w-full flex flex-col justify-center items-center gap-4">
                            <Button
                                onClick={handleSubmit}
                                disabled={status === "sending"}
                                className="h-[48px] max-w-max sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold
                                    bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition-all duration-300 shadow-lg disabled:opacity-50"
                            >
                                {status === "sending" ? "Sending..." : "Send Now"}
                                <span>
                                    <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
                                </span>
                            </Button>
                            {status === "success" && (
                                <p className="text-green-400 text-[16px] font-medium">Your message has been sent successfully. We&apos;ll be in touch soon!</p>
                            )}
                            {status === "config_error" && (
                                <p className="text-amber-400 text-[16px] font-medium">Contact form is not configured. Set <code className="text-amber-300 bg-black/30 px-1 rounded">NEXT_PUBLIC_WEB3FORMS_KEY</code> in your environment (Vercel: Project Settings → Environment Variables) and redeploy.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-[16px] font-medium">Something went wrong. Please fill in all required fields and try again.</p>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
            <div className="md:py-[60px]">
                <FAQSection />
            </div>
            <div>
                <CTABanner />
            </div>
        </div>
    );
}
