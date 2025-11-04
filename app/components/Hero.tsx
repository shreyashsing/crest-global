'use client';

import OrbitalIcons from './OrbitalIcons';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl min-h-[800px] md:min-h-0" aria-labelledby="hero-heading">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #4D77BE 20%, #09224D 95%)' }}
        aria-hidden="true"
      />

      {/* Right edge vertical SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2" aria-hidden="true">
        <svg width="110" height="220" viewBox="0 0 147 292" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_210_1166)">
            <rect x="25.5" y="266.5" width="241" height="242" transform="rotate(-90 25.5 266.5)" fill="#216BB8"/>
          </g>
          <defs>
            <filter id="filter0_f_210_1166" x="0" y="0" width="293" height="292" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="12.75" result="effect1_foregroundBlur_210_1166"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Decorative rotating SVG */}
      <div className="absolute top-28 left-[520px]" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_259_1307)">
            <rect x="70.0527" y="8.5" width="83" height="83" transform="rotate(47.8678 70.0527 8.5)" fill="#216BB8"/>
          </g>
          <defs>
            <filter id="filter0_f_259_1307" x="0" y="0" width="134.232" height="134.233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4.25" result="effect1_foregroundBlur_259_1307"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Soft vignette bottom-left-center to mimic design glow */}
      <div className="absolute -bottom-32 left-[40%] -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-28 left-[35%] -translate-x-1/2 h-[380px] w-[380px] rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />

      {/* Decorative SVG */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2">
        <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_259_1303)">
            <rect x="23.5996" y="45.082" width="83" height="83" transform="rotate(-15 23.5996 45.082)" fill="#216BB8"/>
          </g>
          <defs>
            <filter id="filter0_f_259_1303" x="-0.000391006" y="-2.47955e-05" width="148.854" height="148.854" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="11.8" result="effect1_foregroundBlur_259_1303"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-28">
        <div className="flex items-center justify-between">
          {/* Left column */}
          <div className="max-w-xl ml-16 sm:ml-24 md:ml-32 mb-60 md:mb-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur">
              Explore who we are ↗
            </div>
            <h1 id="hero-heading" className="mt-8 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              <span className="block">Precision.</span>
              <span className="block">Trust.</span>
              <span className="block">Growth.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/85">
              Maximize your business's profits with our professional accounting services.
            </p>
          </div>

          {/* Right column - Orbital UI */}
          <OrbitalIcons />
        </div>
      </div>
    </section>
  );
}

