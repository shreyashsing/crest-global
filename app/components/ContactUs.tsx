'use client';

import React from 'react';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 10.5C21 16 12 22 12 22s-9-6-9-11.5a9 9 0 1118 0z" />
      <circle cx="12" cy="10.5" r="3" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.9.33 1.78.62 2.63a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.45-1.71a2 2 0 012.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export default function ContactUs() {
  return (
    <section id="contact" className="relative w-full" aria-labelledby="contact-heading">
      {/* dotted background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left info board */}
          <div className="relative rounded-[32px] bg-gradient-to-b from-[#eaf1fa] to-[#d7e1ee] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/10">
            {/* Vertical CONTACT US */}
            <div className="absolute left-4 top-6 select-none">
              <div className="flex flex-col items-center">
                <span className="rotate-180 [writing-mode:vertical-rl] text-5xl font-extrabold tracking-widest text-[#1b4c9a] drop-shadow-sm">US</span>
                <span className="mt-6 rotate-180 [writing-mode:vertical-rl] text-5xl font-extrabold tracking-widest text-neutral-800">CONTACT</span>
              </div>
            </div>

            <div className="pl-28">
              <h2 id="contact-heading" className="text-2xl font-extrabold text-neutral-800">
                GET IN TOUCH <span className="text-[#2F5696]">WITH US</span>
              </h2>
              <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-neutral-700">
                We’re here to help. Whether you’re interested in learning more about our services or need support, we’re happy to assist you.
              </p>

              <ul className="mt-6 space-y-3 text-[14px] text-neutral-900">
                <li className="flex items-center gap-3"><CheckIcon className="h-4 w-4" /> Reliable Service</li>
                <li className="flex items-center gap-3"><CheckIcon className="h-4 w-4" /> Real-Time Updates</li>
                <li className="flex items-center gap-3"><CheckIcon className="h-4 w-4" /> Seamless Integration</li>
              </ul>

              <div className="mt-8 space-y-4 text-[14px] text-neutral-900">
                <div className="flex items-center gap-3"><PinIcon className="h-5 w-5" /> 1234 Maple Street, Springfield, IL 62701</div>
                <div className="flex items-center gap-3"><PhoneIcon className="h-5 w-5" /> 0000-000-000</div>
                <div className="flex items-center gap-3"><MailIcon className="h-5 w-5" /> crestglobal@gmail.com</div>
              </div>

              <div className="mt-8 flex items-center gap-8 text-xl text-neutral-800">
                <span className="hover:text-[#1b4c9a] cursor-pointer">f</span>
                <span className="hover:text-[#1b4c9a] cursor-pointer">X</span>
                <span className="hover:text-[#1b4c9a] cursor-pointer">@</span>
                <span className="hover:text-[#1b4c9a] cursor-pointer">in</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="First Name" placeholder="" />
              <Field label="Last Name" placeholder="" />
            </div>
            <Field label="Email Address" placeholder="" full />
            <Field label="Company Name" placeholder="" full />
            <TextArea label="Message Us" placeholder="" />
            <div>
              <button type="submit" className="rounded-full bg-[#1B4C9A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#153f81]">Submit</button>
            </div>
          </form>
        </div>

        {/* Need More Help */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-neutral-800">Need More Help?</h3>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <HelpCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M7 8h10M7 12h6" />
                </svg>
              }
              title="Text us at 0000-000-000"
              subtitle="Message data rates may apply"
              cta="Text us"
            />
            <HelpCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 15l-2 4 4-2" />
                </svg>
              }
              title="Chat with a specialist"
              subtitle="Available 7am - 11pm IST, 7 days a week"
              cta="Chat now"
            />
            <HelpCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M4 12a8 8 0 0116 0M6 19l1-3M18 19l-1-3" />
                </svg>
              }
              title="Call us at 0000-000-000"
              subtitle="Available 7am - 11pm IST, 7 days a week"
              cta="Call us"
            />
            <HelpCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              }
              title="Send us a email"
              subtitle="We’d love to hear from you"
              cta="Email us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, full }: { label: string; placeholder?: string; full?: boolean }) {
  return (
    <label className={full ? 'col-span-full' : ''}>
      <div className="mb-2 text-[12px] font-medium text-neutral-700">{label}</div>
      <input
        placeholder={placeholder}
        className="h-14 w-full rounded-full bg-gradient-to-r from-[#cfe1f3] to-white px-5 text-[14px] text-neutral-900 shadow-[0_6px_0_rgba(0,0,0,0.15)] ring-1 ring-black/10 outline-none"
        type="text"
      />
    </label>
  );
}

function HelpCard({ icon, title, subtitle, cta }: { icon: React.ReactNode; title: string; subtitle: string; cta: string }) {
  return (
    <div className="rounded-[14px] bg-white p-6 shadow-md ring-1 ring-black/10">
      <div className="flex items-start gap-4">
        <div className="text-black">{icon}</div>
        <div>
          <div className="text-[18px] font-semibold text-neutral-900">{title}</div>
          <div className="mt-2 text-[13px] text-neutral-600">{subtitle}</div>
          <button type="button" className="mt-3 inline-flex text-[14px] font-semibold text-neutral-900 underline underline-offset-4">{cta}</button>
        </div>
      </div>
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="col-span-full">
      <div className="mb-2 text-[12px] font-medium text-neutral-700">{label}</div>
      <textarea
        placeholder={placeholder}
        className="h-24 w-full resize-none rounded-[32px] bg-gradient-to-r from-[#cfe1f3] to-white px-5 py-4 text-[14px] text-neutral-900 shadow-[0_6px_0_rgba(0,0,0,0.15)] ring-1 ring-black/10 outline-none"
      />
    </label>
  );
}


