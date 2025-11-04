'use client';

import Image from 'next/image';

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'Bookkeeping',
    description:
      'Stay organized with accurate, real-time records. We maintain detailed and up-to-date books, ensuring every transaction is tracked and reconciled.',
  },
  {
    title: 'Tax Preparation',
    description:
      'Get expert help filing your taxes accurately and on time. From income reporting to deductions, we make the process simple and stress-free.',
  },
  {
    title: 'Audit & Assurance',
    description:
      'Thorough audits and credible assurance reporting to build confidence with investors, lenders, and stakeholders.',
  },
];

export default function Services() {
  return (
    <section className="relative w-full" aria-labelledby="services-heading">
      {/* dotted background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-sm font-semibold text-blue-800 shadow-sm">
              Services
            </div>
            <h2
              id="services-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight text-[#2F5696] sm:text-5xl"
            >
              Precision That
              <br />
              Powers Success
            </h2>
          </div>

          <button
            type="button"
            className="ml-auto hidden shrink-0 items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-50 sm:inline-flex"
          >
            Explore All ↗
          </button>
        </div>

        {/* Three services with two vertical gradient dividers (no intersections) */}
        <div className="mt-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-3">
            {/* vertical gradient dividers visible on large screens */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 hidden w-[2px] -translate-x-1/2 lg:left-1/3 lg:block"
              style={{
                background:
                  'linear-gradient(180deg, rgba(59,89,150,0) 0%, rgba(59,89,150,0.85) 22%, rgba(59,89,150,0.85) 78%, rgba(59,89,150,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%)',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-0 bottom-0 hidden w-[2px] -translate-x-1/2 lg:left-2/3 lg:block"
              style={{
                background:
                  'linear-gradient(180deg, rgba(59,89,150,0) 0%, rgba(59,89,150,0.85) 22%, rgba(59,89,150,0.85) 78%, rgba(59,89,150,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%)',
              }}
              aria-hidden="true"
            />

            {services.map((service, idx) => (
              <div key={service.title} className="relative p-8 overflow-hidden">
                {/* background overlays per-column */}
                <div
                  className={
                    `pointer-events-none absolute top-0 bottom-0 ` +
                    (idx === 0 ? 'left-0 right-3' : idx === 1 ? 'left-3 right-3' : 'left-3 right-0')
                  }
                  style={{
                    background:
                      idx === 0
                        ? 'linear-gradient(to left, rgba(92,129,192,0.42) 0%, rgba(217,217,217,0) 100%)'
                        : idx === 1
                        ? 'linear-gradient(0deg, rgba(92,129,192,0.42), rgba(92,129,192,0.42))'
                        : 'linear-gradient(to right, rgba(92,129,192,0.42) 0%, rgba(217,217,217,0) 100%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative mb-4">
                  <Image src="/trust.png" alt="Service icon" width={36} height={36} />
                </div>
                <h3 className="relative text-xl font-semibold text-[#2F5696]">{service.title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-6 text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-[13px] text-gray-700">
          We transform bookkeeping, taxes, audits, and contractor compliance into stress-free processes—accurate, timely, and designed to scale with your business.
        </div>

        <div className="mt-6 flex items-center justify-center gap-10 text-[12px] font-semibold tracking-wide text-gray-700">
          <span>Fast onboarding</span>
          <span>Secure & Encrypted</span>
          <span>Dedicated Expert</span>
        </div>
      </div>
    </section>
  );
}


