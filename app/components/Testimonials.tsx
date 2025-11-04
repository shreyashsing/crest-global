"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export default function Testimonials() {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const brightPathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function syncHeights() {
      const card = brightPathRef.current;
      const imgWrap = imageWrapperRef.current;
      if (!card || !imgWrap) return;
      const h = card.offsetHeight;
      // Match image height to BrightPath card height; width follows grid column
      imgWrap.style.height = `${h}px`;
    }

    syncHeights();
    window.addEventListener('resize', syncHeights);
    return () => window.removeEventListener('resize', syncHeights);
  }, []);

  return (
    <section className="relative w-full" aria-labelledby="testimonials-heading">
      {/* dotted background to match other sections */}
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
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f0ff] px-4 py-1 text-sm font-semibold text-[#2F5696] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#5887d3]" />
            Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="mt-6 text-5xl font-extrabold tracking-tight text-[#2F5696] sm:text-6xl"
          >
            Hear what our
            <br className="hidden sm:block" />
            client says
          </h2>
        </div>

        {/* Two aligned rows sharing the same 3-column grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left image: same column width as GreenArc (col-1) */}
          <div ref={imageWrapperRef} className="relative overflow-hidden rounded-2xl md:col-span-1">
            <Image
              src="/2179.jpg"
              alt="Client meeting"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Right large card spans two columns */}
          <div className="md:col-span-2">
            <div ref={brightPathRef} className="h-full rounded-2xl bg-[#dfeaff] p-8 shadow-sm ring-1 ring-black/5">
              <div className="text-xl font-semibold tracking-wide text-[#2F5696]">
                BrightPath
                <br />
                Technologies
              </div>
              <p className="mt-6 text-[13.5px] leading-6 text-gray-700">
                “With CrestGlobal’s guidance, our operations became smoother than ever. Their insights and
                data-driven approach helped us make confident business decisions.”
              </p>
              <div className="mt-6 text-[11.5px] font-semibold text-gray-700">
                Daniel Weber - CTO of BrightPath Technologies
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: three cards aligned under top row */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-[#dfeaff] p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-lg font-semibold text-[#2F5696]">GreenArc</div>
            <p className="mt-3 text-[13px] leading-6 text-gray-700">
              CrestGlobal helped us automate tedious processes and improve transparency across departments. The
              ROI has been phenomenal.
            </p>
            <div className="mt-4 text-[11.5px] font-semibold text-gray-700">
              Jonathan Brooks - CFO, GreenArc Manufacturing
            </div>
          </div>

          <div className="rounded-2xl bg-[#dfeaff] p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-lg font-semibold text-[#2F5696]">Nova Realty</div>
            <p className="mt-3 text-[13px] leading-6 text-gray-700">
              “Partnering with CrestGlobal was one of our best decisions. They streamlined our processes, reduced
              costs, and always delivered ahead of deadlines.”
            </p>
            <div className="mt-4 text-[11.5px] font-semibold text-gray-700">
              Priya Nair - Managing Director, Nova Realty Group
            </div>
          </div>

          <div className="rounded-2xl bg-[#dfeaff] p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-lg font-semibold text-[#2F5696]">Skyline Retail</div>
            <p className="mt-3 text-[13px] leading-6 text-gray-700">
              From start to finish, CrestGlobal’s team was incredibly responsive and strategic. We’ve seen measurable
              growth since working with them.
            </p>
            <div className="mt-4 text-[11.5px] font-semibold text-gray-700">
              Priya Nair - Managing Director, Nova Realty Group
            </div>
          </div>
        </div>

        {/* View more button */}
        <div className="mt-10 flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#2F5696] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#244b87] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5696]"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.22 6.22a.75.75 0 011.06 0L10 9.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 7.28a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
