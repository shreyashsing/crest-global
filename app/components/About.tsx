'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      className="relative w-full"
      aria-labelledby="about-heading"
    >
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

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        {/* Pill */}
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-sm font-semibold text-blue-800 shadow-sm">
          Crest Global
        </div>

        {/* Heading */}
        <h2
          id="about-heading"
          className="mt-6 text-5xl font-extrabold tracking-tight text-[#2F5696] sm:text-6xl"
        >
          ABOUT US
        </h2>

        {/* Copy */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">
          At <span className="font-semibold">Crest Global</span> Financial Services, we provide trusted accounting,
          auditing, and outsourcing solutions tailored to your business needs.
          Backed by a team of professionals with a combined 40+ years of
          experience, we focus on delivering accuracy, security, and measurable
          results.
        </p>

        {/* Icons row */}
        <div className="mt-14 mx-auto max-w-xl flex items-center justify-center gap-10 sm:gap-12">
          <div className="flex flex-col items-center gap-2">
            <Image src="/growth.png" alt="Growth" width={54} height={54} priority />
            <span className="text-[10px] tracking-[0.25em] text-gray-600">GROWTH</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/precision.png" alt="Precision" width={54} height={54} />
            <span className="text-[10px] tracking-[0.25em] text-gray-600">PRECISION</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/trust.png" alt="Trust" width={54} height={54} />
            <span className="text-[10px] tracking-[0.25em] text-gray-600">TRUST</span>
          </div>
        </div>
      </div>
    </section>
  );
}


