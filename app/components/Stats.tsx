'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = {
  label: string;
  value: number;
  suffix?: string; // '+', '%', '/7'
};

const stats: Stat[] = [
  { label: 'Years Experience', value: 40, suffix: '+' },
  { label: 'Satisfied Clients', value: 500, suffix: '+' },
  { label: 'Data Security', value: 100, suffix: '%' },
  { label: 'Support Available', value: 24, suffix: '/7' },
];

function useCountUp(target: number, run: boolean, durationMs = 1200) {
  const [current, setCurrent] = useState(0);
  const startTs = useRef<number | null>(null);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const step = (ts: number) => {
      if (startTs.current === null) startTs.current = ts;
      const elapsed = ts - startTs.current;
      const t = Math.min(1, elapsed / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, durationMs]);
  return current;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Fallback: if already in view on mount (e.g., above the fold), start soon after hydrate
  useEffect(() => {
    if (visible) return;
    const t = setTimeout(() => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) setVisible(true);
    }, 150);
    return () => clearTimeout(t);
  }, [visible]);

  const values = stats.map(s => useCountUp(s.value, visible));

  return (
    <section ref={sectionRef} className="relative w-full" aria-label="Key metrics section">
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

      {/* subtle top/bottom shadows to match design */}
      <div className="absolute left-0 right-0 top-0 h-6 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="text-5xl font-extrabold text-sky-500 sm:text-6xl">
                {values[i]}
                <span>{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-800">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


