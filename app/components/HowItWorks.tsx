'use client';

import { useRef } from 'react';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

type Step = {
  title: string;
  subtitle: string;
  bullets: string[];
  cta?: string;
};

const steps: Step[] = [
  {
    title: 'Deep insights that start with you',
    subtitle:
      'We take time to understand your goals, challenges, and financial landscape — so every move we make is rooted in clarity.',
    bullets: ['In-depth financial analysis', 'Personalized consultation'],
    cta: 'Get Started',
  },
  {
    title: 'Strategies built around your success',
    subtitle:
      'Together, we craft a roadmap that fine-tunes your resources and maximizes growth — all aligned with your financial vision.',
    bullets: ['Tailored financial planning', 'Smart risk & opportunity mapping'],
    cta: 'Get Started',
  },
  {
    title: 'From plan to performance',
    subtitle:
      'We turn strategy into action, tracking results every step of the way to help you reach clarity, confidence, and measurable success.',
    bullets: ['Performance monitoring', 'Real-time growth insights'],
    cta: 'Get Started',
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  

  return (
    <section id="how-it-works" className="relative w-full" aria-labelledby="how-heading">
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

      <div className="relative mx-auto max-w-7xl px-6 py-24" ref={containerRef}>
        <div className="text-center">
          <h1 id="how-heading" className="font-extrabold tracking-tight">
            <span className="block text-4xl sm:text-5xl text-gray-600">HERE IS HOW</span>
            <span className="mt-2 block text-[44px] sm:text-7xl text-[#2F5696]">IT’S DONE</span>
          </h1>
          <button
            type="button"
            className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-neutral-800 shadow-[0_6px_0_rgba(0,0,0,0.2)] ring-1 ring-black/10"
          >
            Schedule a call with out experts
          </button>
          <p className="mt-3 text-[13px] text-gray-600">
            Don’t hesitate to reach out—we’re here to assist!
          </p>
        </div>

        {/* Stacking cards (no parallax, solid background) */}
        <div className="relative mt-16 h-[300vh] md:h-[220vh]">
          {[...steps].reverse().map((step, i) => (
            <article
              key={step.title}
              className="sticky top-[15vh] sm:top-24 mx-auto mb-6 max-w-6xl"
              style={{ zIndex: (i + 1) * 50 }}
            >
              <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 rounded-3xl bg-white p-6 sm:p-10 shadow-xl ring-1 ring-black/10 sm:grid-cols-2">
                {i % 2 === 0 ? <CardCopy index={i} step={step} /> : <CardVisual index={i} />}
                {i % 2 === 0 ? <CardVisual index={i} /> : <CardCopy index={i} step={step} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumberBadge({ index }: { index: number }) {
  return (
    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-neutral-800 text-white text-lg font-bold">
      {index + 1}
    </div>
  );
}

function CardCopy({ index, step }: { index: number; step: Step }) {
  return (
    <div>
      <NumberBadge index={index} />
      <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-gray-900">{step.title}</h3>
      <p className="mt-2 sm:mt-3 max-w-md text-[14px] sm:text-[14.5px] leading-5 sm:leading-6 text-gray-700">{step.subtitle}</p>
      <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 text-[13px] sm:text-[14px] text-gray-800">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-[3px] border-2 border-gray-700 bg-gray-700">
              <CheckIcon className="h-2.5 w-2.5 text-white" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {step.cta ? (
        <button className="mt-6 inline-flex items-center rounded-full bg-[#1B4C9A] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#153f81]">
          {step.cta}
        </button>
      ) : null}
    </div>
  );
}

function CardVisual({ index }: { index: number }) {
  return (
    <div className="flex items-center justify-center">
      {/* Outer rounded gradient frame with soft drop/ambient shadow */}
      <div className="relative w-[360px] max-w-full rounded-[30px] bg-gradient-to-b from-[#1b4c9a] to-[#dfe8f6] p-8 shadow-[0_20px_60px_rgba(20,66,124,0.25)]">
        <div className="rounded-[22px] bg-white p-10 shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
          {/* placeholder for icon (blank for now) */}
          <div className="h-28 w-28 rounded-[18px] bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}


