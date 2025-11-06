'use client';

import Image from 'next/image';
import { useState } from 'react';

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: 'Transparent &\nReliable\nPartnership',
    description:
      'We believe in clear communication, ethical practices, and long-term trust, making us a dependable partner for your growth journey.',
  },
  {
    title: 'Unmatched\nQuality',
    description:
      'Every solution is delivered with precision and attention to detail, ensuring the highest standards in financial management, auditing, and outsourcing.',
  },
  {
    title: 'High Data\nSecurity',
    description:
      'Your sensitive information is safeguarded with enterprise-grade encryption, multi-layer protection, and strict compliance with international regulations.',
  },
  {
    title: 'Cost\nEfficiency',
    description:
      'We help businesses minimize operational costs without compromising on quality, offering smart and scalable financial solutions tailored to your needs.',
  },
  {
    title: 'Tailored\nExpertise',
    description:
      'Our team of certified professionals and industry experts create customized strategies that align with your business goals for maximum impact.',
  },
];

export default function WhyUs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <section id="why-us" className="relative w-full" aria-labelledby="why-heading">
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

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Top row: image left, copy right */}
        <div className="flex flex-col-reverse items-center justify-between gap-10 sm:flex-row">
          {/* Left image (bigger) */}
          <div className="relative">
            <Image src="/balls.png" alt="Cloud orb" width={420} height={420} priority />
          </div>

          {/* Right text */}
          <div className="w-full sm:w-auto sm:flex-1 max-w-2xl text-left">
            <h2
              id="why-heading"
              className="text-[44px] sm:text-6xl font-extrabold tracking-tight text-[#2F5696]"
            >
              Why Choose Us
            </h2>
            <p className="mt-5 text-sm sm:text-base text-gray-700">
              We combine 40+ years of expertise with modern outsourcing solutions,
              helping businesses cut cost while gaining efficiency, security and trust.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-col gap-6 sm:flex-row">
          {reasons.map((reason, idx) => {
            const isExpanded = expandedIndex === idx;
            const hasExpanded = expandedIndex !== null;
            
            // Calculate flex grow: expanded card gets more, others get less
            let flexGrow = 1;
            if (hasExpanded) {
              if (isExpanded) {
                flexGrow = 1.4; // Expanded card is 40% wider
              } else {
                flexGrow = 0.9; // Other cards shrink proportionally
              }
            }
            
            return (
            <div
              key={idx}
              className="relative flex h-[320px] flex-col justify-between bg-gradient-to-b from-[#375C99] to-[#14427C] p-6 text-white shadow-[0_8px_24px_rgba(23,61,120,0.25)] transition-all duration-500 ease-in-out rounded-lg"
              style={{
                flexGrow: flexGrow,
                flexShrink: 1,
                flexBasis: 0,
              }}
            >
              {/* bold L-strokes with V-cut faded ends */}
              {/* top-left */}
              <div className="pointer-events-none absolute top-0 left-0 h-6 w-6" aria-hidden="true">
                <span className="absolute top-0 left-0 h-[4px] w-full bg-black [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]" />
                <span className="absolute top-0 left-0 h-full w-[4px] bg-black [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]" />
              </div>
              {/* top-right (mirror X) */}
              <div className="pointer-events-none absolute top-0 right-0 h-6 w-6" style={{transform:'scaleX(-1)'}} aria-hidden="true">
                <span className="absolute top-0 left-0 h-[4px] w-full bg-black [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]" />
                <span className="absolute top-0 left-0 h-full w-[4px] bg-black [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]" />
              </div>
              {/* bottom-left (mirror Y) */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6" style={{transform:'scaleY(-1)'}} aria-hidden="true">
                <span className="absolute top-0 left-0 h-[4px] w-full bg-black [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]" />
                <span className="absolute top-0 left-0 h-full w-[4px] bg-black [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]" />
              </div>
              {/* bottom-right (mirror both) */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6" style={{transform:'scale(-1)'}} aria-hidden="true">
                <span className="absolute top-0 left-0 h-[4px] w-full bg-black [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]" />
                <span className="absolute top-0 left-0 h-full w-[4px] bg-black [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(0,0,0,0))] [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold leading-snug whitespace-pre-line">
                    {reason.title}
                  </h3>
                  <div className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[13px] font-bold">
                    {idx + 1}
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-6 text-white/90">
                  {reason.description}
                </p>
              </div>

              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={isExpanded ? 'Collapse card' : 'Expand card'}
              >
                <span className="-mt-[2px] text-xl">+</span>
              </button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


