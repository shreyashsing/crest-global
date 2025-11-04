'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OrbitalIcons() {
  // Desktop angles
  const innerOrbitAngles = [215, 305];
  const middleOrbitAngles = [75];
  const outerOrbitAngles = [45, 135, 315, 225];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Seven evenly spaced angles for the mobile orbit
    const mobileOrbitAngles = [0, 51.43, 102.86, 154.29, 205.71, 257.14, 308.57];
    
    return (
      <div className="absolute -bottom-36 left-0 right-0 h-[400px]">
        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center shadow-lg z-10"
             style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
          <Image
            src="/Global Crest.svg"
            alt="Global Crest Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Circular orbit with rotating icons */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          {/* Circular path */}
          <svg className="absolute inset-0" viewBox="0 0 300 300">
            <circle
              cx="150"
              cy="150"
              r="140"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Rotating container */}
          <div className="absolute inset-0 animate-spin-slow origin-center">
            {/* Orbital icons */}
            {mobileOrbitAngles.map((degree, index) => (
              <div
                key={`outer-${index}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                style={{
                  transform: `rotate(${degree}deg) translateY(-140px)`,
                transition: 'opacity 0.3s'
              }}
            >
              <div className="p-3 rounded-full shadow-lg" 
                   style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
                <Image
                  src="/precision.png"
                  alt={`Orbital Icon ${index + 1}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-[60%] -translate-y-1/2 w-[500px] h-[500px] hidden md:block">
      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
        <Image
          src="/Global Crest.svg"
          alt="Global Crest Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Orbital Paths */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg className="w-full h-full" viewBox="0 0 500 500">
          <circle
            cx="250"
            cy="250"
            r="120"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="250"
            cy="250"
            r="170"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Inner Orbit Icons */}
        <div className="absolute inset-0">
          {innerOrbitAngles.map((degree, index) => (
            <div
              key={`inner-${index}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12"
              style={{
                transform: `rotate(${degree}deg) translateY(-120px) rotate(-${degree}deg)`,
              }}
            >
              <div className="p-2.5 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
                <Image
                  src="/precision.png"
                  alt={`Inner Orbit Icon ${index + 1}`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Middle Orbit Icons */}
        <div className="absolute inset-0">
          {middleOrbitAngles.map((degree, index) => (
            <div
              key={`middle-${index}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14"
              style={{
                transform: `rotate(${degree}deg) translateY(-170px) rotate(-${degree}deg)`,
              }}
            >
              <div className="p-3 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
                <Image
                  src="/precision.png"
                  alt={`Middle Orbit Icon ${index + 1}`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Outer Orbit Icons */}
        <div className="absolute inset-0">
          {outerOrbitAngles.map((degree, index) => (
            <div
              key={`outer-${index}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
              style={{
                transform: `rotate(${degree}deg) translateY(-230px) rotate(-${degree}deg)`,
              }}
            >
              <div className="p-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #A1C4FF 0%, #FFFFFF 100%)' }}>
                <Image
                  src="/precision.png"
                  alt={`Outer Orbit Icon ${index + 1}`}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}