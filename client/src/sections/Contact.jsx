import React, { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { profile } from "../data/profile";
import { Copy, Check } from "lucide-react";

export default function Contact() {
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent(
    "Hi Golam,\n\nI came across your portfolio and would love to connect about...\n\nThanks,"
  );
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  const tel = `tel:${profile.phone.replace(/\s+/g, "")}`;

  const [copied, setCopied] = useState({ email: false, phone: false, linkedin: false });

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, 1000);
    });
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-ink mb-2">Let’s connect</h3>
          <p className="text-slate-700">
            Open to backend, full-stack, and platform roles.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {/* Email */}
            <a
              className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-ink hover:text-white flex justify-between items-center"
              href={mailto}
            >
              Email: {profile.email}
              {copied.email ? (
                <Check size={16} />
              ) : (
                <Copy
                  size={16}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy("email", profile.email);
                  }}
                />
              )}
            </a>

            {/* Phone */}
            <a
              className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-ink hover:text-white flex justify-between items-center"
              href={tel}
            >
              Call: {profile.phone.split(" ")[1]}
              {profile.phone.split(" ")[2]}
              {copied.phone ? (
                <Check size={16} />
              ) : (
                <Copy
                  size={16}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy("phone", profile.phone);
                  }}
                />
              )}
            </a>

            {/* LinkedIn */}
            <a
              className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-ink hover:text-white flex justify-between items-center"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn: {profile.linkedin}
              {copied.linkedin ? (
                <Check size={16} />
              ) : (
                <Copy
                  size={16}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy("linkedin", profile.linkedin);
                  }}
                />
              )}
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}
