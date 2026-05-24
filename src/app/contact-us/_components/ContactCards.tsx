"use client";
import React, { useState } from "react";
import { Skeleton } from "@heroui/react";
import ContactCard from "@src/components/Cards/ContactCard";
import { useGeneralSettings } from "@src/components/lib/woocommerce";
import { FiPhoneCall, FiClock, FiMessageSquare } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
// import { SITE_EMAIL } from "@constants/seoContants";
import FormToast from "@src/components/Reusables/Toast/SigninToast";

/* ─────────────────────────────────────────────
   Card skeleton
───────────────────────────────────────────── */
const CardSkeleton = () => (
  <div className="flex flex-col items-center text-center bg-white border border-black/[0.07] rounded-2xl p-7 gap-4 shadow-sm animate-pulse">
    <div className="w-12 h-12 rounded-xl bg-gray-100" />
    <div className="h-3.5 w-20 rounded-full bg-gray-100" />
    <div className="w-6 h-px bg-gray-100" />
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="h-3.5 w-32 rounded-full bg-gray-100" />
      <div className="h-3 w-24 rounded-full bg-gray-100" />
    </div>
  </div>
);

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const ContactCards = () => {
  const { data: generalSettings, isLoading, isError } = useGeneralSettings();
  const GeneralSettings: WooCommerceSetting[] = generalSettings;

  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit message.");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setStatusMessage("Your message has been sent successfully.");
      FormToast({
        message: "Your message has been sent successfully.",
        success: true,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.";
      setStatusMessage(errorMessage);
      FormToast({
        message: errorMessage,
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCardData = [
    {
      id: 1,
      title: "Email Us",
      type: "email",
      icon: <RxEnvelopeClosed />,
      additionalText: "support@brightaxis.com",
      // additionalText: GeneralSettings ? GeneralSettings[0]?.value : "N/A",
    },
    {
      id: 2,
      title: "Call Us",
      type: "tel",
      icon: <FiPhoneCall />,
      additionalText: "08169843744",
      // additionalText: GeneralSettings ? GeneralSettings[1]?.value : "N/A",
    },
    {
      id: 3,
      title: "Our Location",
      type: "text",
      icon: <IoLocationOutline />,
      description: "Igbehin-adun street Oworoshoki Lagos.",
      // description: GeneralSettings ? GeneralSettings[2]?.value : "N/A",
    },
    {
      id: 4,
      title: "Business Hours",
      type: "text",
      icon: <FiClock />,
      additionalText: "Mon – Fri",
      description: "9:00 AM – 6:00 PM WAT",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-gray-950 text-white px-6 py-20 sm:py-28 text-center">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ghost heading watermark */}
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[clamp(80px,18vw,200px)] font-black tracking-tighter leading-none text-white/[0.03] pointer-events-none select-none uppercase"
          aria-hidden
        >
          Contact
        </span>

        {/* Subtle blue glow behind content */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-[1] max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse" />
            We'd love to hear from you
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(38px,6vw,72px)] font-bold tracking-tight leading-[1.05] mb-5">
            Get in{" "}
            <span className="italic font-light text-[#fff]">Touch</span>
          </h1>

          <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed max-w-lg mx-auto">
            Have a question, feedback, or just want to say hello? Our team is
            ready and happy to help.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          CARDS  (pulls up over hero)
      ══════════════════════════════════════ */}
      <div className="relative z-[1] max-w-5xl mx-auto px-4 sm:px-6 -mt-10 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            contactCardData.map((card) => (
              <ContactCard
                key={card.id}
                isLoading={isLoading}
                type={card.type}
                title={card.title}
                icon={card.icon}
                additionalText={card.additionalText}
                description={card.description}
              />
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          CONTACT FORM  +  MAP — side by side
      ══════════════════════════════════════ */}
      <div className="w-[100%] mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 lg:grid-cols-[1fr] gap-6">
        {/* ── FORM ── */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-8 sm:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="mb-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#000] mb-1.5">
              Send a Message
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us a little more about your enquiry…"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-[#000] text-white font-semibold text-sm tracking-wide py-3.5 px-6 rounded-xl transition-all duration-200 hover:bg-[#00080] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiMessageSquare className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className="text-[11px] text-center text-gray-500">
                {statusMessage}
              </p>
            )}

            <p className="text-[11px] text-center text-gray-400">
              We typically respond within 24 hours on business days.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
