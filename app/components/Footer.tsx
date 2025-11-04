import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #83A6E5 0%, #FFFFFF 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative h-[700px]">
        {/* Main footer box */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[92%] max-w-[1200px] rounded-[28px] shadow-[0_28px_60px_rgba(12,49,94,0.35),0_6px_20px_rgba(8,38,76,0.25)] border border-white/20 ring-1 ring-black/5"
          style={{
            background:
              'linear-gradient(135deg, #0E416B 0%, #1F78BF 35%, #3BB1F5 100%)',
          }}
        >
          <div className="p-6 md:p-10 lg:p-12">
            {/* Top row: Brand + nav + underline bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Brand and nav */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image src="/Global Crest.svg" alt="Crest Global" width={72} height={72} priority className="filter brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-white text-[38px] md:text-[44px] leading-none font-extrabold tracking-tight">Crest Global</div>
                    <p className="text-white/90 text-[12px] md:text-[13px] mt-1">Empowering Global Growth with Trust & Innovation</p>
                  </div>
                </div>

                {/* Nav */}
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-white font-semibold text-[14px]">
                  <a className="hover:opacity-80" href="#about">ABOUT</a>
                  <a className="hover:opacity-80" href="#services">SERVICES</a>
                  <a className="hover:opacity-80" href="#insights">INSIGHTS</a>
                  <a className="hover:opacity-80" href="#careers">CAREERS</a>
                  <a className="hover:opacity-80" href="#contact">CONTACT</a>
                </div>
                <div className="mt-4 h-2 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.25) 100%)',
                  }}
                />

                {/* Contact details */}
                <div className="mt-7 space-y-2 text-white/90 text-[13px]">
                  <div>xyza@crestglobal.com</div>
                  <div>+1 0000-000-000</div>
                  <div>+91 0000-000-000</div>
                  <div>1234 XYZ Street, City, Country</div>
                </div>

                <div className="mt-8 text-white/80 text-[12px]">
                  © 2025 Crest Global<br/>
                  All Rights Reserved, Registered under XYZ.
                </div>
              </div>

              {/* Newsletter card */}
              <div className="lg:col-span-5">
                <div className="rounded-[22px] border border-white/30 p-6 md:p-7 backdrop-blur-md"
                  style={{
                    background:
                      'linear-gradient(160deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.06) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), 0 10px 30px rgba(15, 43, 78, 0.35)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/25 text-white backdrop-blur-sm ring-1 ring-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      {/* mail icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16v12H4z" stroke="white" strokeWidth="1.5" opacity=".9"/>
                        <path d="M4 7l8 6 8-6" stroke="white" strokeWidth="1.5" opacity=".9"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">NEWSLETTER</div>
                      <div className="text-white/80 text-[12px] -mt-0.5">Stay Ahead with Market Insights</div>
                    </div>
                  </div>

                  <p className="mt-3 text-white/85 text-[12.5px] leading-6">
                    Join 10,000+ professionals who receive our monthly insights on strategy, innovation, and global growth.
                  </p>

                  <p className="mt-3 text-white/70 text-[11.5px]">Get exclusive updates, trends, and case studies delivered to your inbox.</p>

                  <div className="mt-4">
                    <div className="rounded-xl overflow-hidden ring-1 ring-white/35 focus-within:ring-white/70 transition backdrop-blur-sm">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-white/20 text-white placeholder-white/70 text-[13px] px-4 py-3 outline-none"
                      />
                    </div>
                    <button
                      className="mt-4 w-full rounded-xl text-white text-[13px] font-semibold py-3 shadow-md"
                      style={{
                        background: 'linear-gradient(90deg, #0F3E6A 0%, #1D6AA2 50%, #2E9BDE 100%)',
                      }}
                    >
                      SUBSCRIBE NOW!
                    </button>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-6 flex items-center gap-5">
                  {['M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17v-6h2.5l.5-3H13V8.5c0-.86.24-1.45 1.5-1.45H16V4.26C15.39 4.18 14.55 4 13.5 4 11.42 4 10 5.24 10 7.77V10H7.5v3H10v6h3z',
                    'M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.35 8.56 8.56 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.89A12.09 12.09 0 0 1 3.16 4.9a4.25 4.25 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18c-.47.13-.97.2-1.48.2-.36 0-.72-.03-1.07-.1a4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54 12.06 12.06 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0 0 22.46 6z',
                    'M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
                    'M4 4h16v16H4z M7 7h10v10H7z'].map((d, i) => (
                    <div key={i} className="w-11 h-11 rounded-full grid place-items-center backdrop-blur-sm ring-1 ring-white/35"
                      style={{
                        background: 'linear-gradient(150deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.08) 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 24px rgba(16,56,98,0.35)'
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d={d} />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large blurred text */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center select-none whitespace-nowrap overflow-hidden"
          style={{
            fontSize: 'min(15vw, 180px)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.05em',
            lineHeight: '1'
          }}
          aria-hidden="true"
        >
          CREST GLOBAL
        </div>
      </div>
    </footer>
  );
}
