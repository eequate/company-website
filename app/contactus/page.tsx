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

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject || "New Contact Form Submission",
                    message: formData.message,
                    from_name: "Eequate Website",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", phone: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    return (
        <div >
            <div className="py-[60px] md:px-[48px] px-5">
                <div className="flex justify-center items-center  rounded-[30px]" style={{ background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)" }}>
                    <Card className="w-full  md:p-[48px] p-5 text-white bg-transparent border-none shadow-lg rounded-2xl">
                        <h2 className="md:text-[48px] text-[32px] font-semibold leading-[62px] text-center">Contact Us</h2>
                        <p className="md:text-[24px] text-[18px] font-medium md:leading-[40px] leading-[32px] text-[#D5DAE2] text-center mb-6">
                            Have a specific inquiry? Send us an email, and we’ll get back to you promptly.
                        </p>
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
                                                zIndex: 1,
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
                                                zIndex: 1,
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
                                    <div className="flex gap-2 w-full">
                                        <div className="flex flex-col w-full">
                                            <PhoneInput
                                                country={"au"} // Default country (Australia: +61)
                                                enableSearch={true}
                                                inputClass="!w-full !bg-transparent !border !border-[#1F2541] !text-white !rounded-full px-4 h-[56px]"
                                                containerClass="w-full"
                                                buttonClass="!bg-transparent"
                                                dropdownClass="!text-black "
                                                value={formData.phone} onChange={handlePhoneChange}
                                            />


                                        </div>
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
                                                zIndex: 1,
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
