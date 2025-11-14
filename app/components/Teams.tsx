'use client';

import React from 'react';
import Image from 'next/image';

// Icon Components
function StethoscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4.5 3v3M4.5 6h3M19.5 3v3M19.5 6h-3M2 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0ZM17 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z" />
      <path d="M7 9.5V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.5" />
      <path d="M12 2v6" />
    </svg>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function PaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Card Component
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg bg-white shadow-lg overflow-hidden ${className || ''}`}>
      {children}
    </div>
  );
}

type TeamMember = {
  name: string;
  role: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Nidhi Kankani",
    role: "Managing Director",
    icon: <StethoscopeIcon className="h-12 w-12 text-blue-600" />,
    description: "",
    details: [
      "Nidhi brings over 13 years of hands-on accounting experience to clients, blending her Chartered Accountant’s expertise with a genuine passion for helping businesses thrive. Her background spans partnerships with top US CPA firms like EisnerAmper, Weaver, and CohnReznick, giving her unique insight into both local and international standards. Nidhi is dedicated to making bookkeeping, auditing, and taxation accessible and worry-free, personally overseeing operations to ensure every client receives work that is accurate, compliant, and tailored to their needs"
    ],
    image: "/da.png"
  },
  {
    name: "Arpit Maheshwari",
    role: "Partner",
    icon: <TrendingUpIcon className="h-12 w-12 text-green-600" />,
    description: "",
    details: [
      "Arpit Maheshwari brings over 14 years of experience in the technology industry, having worked with global leaders such as Uber, CloudKitchens, Revolut, Scale AI, and Reliance Jio. He specializes in ensuring seamless IT operations, robust data security, and reliable system performance. At the core of his role is a commitment to engaging with customers and delivering trusted, technology-driven solutions that empower business success."
    ],
    image: "/d.png"
  }

];

export default function Teams() {
  return (
    <section className="relative w-full" aria-labelledby="teams-heading">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200 shadow-sm">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            Our Team
          </div>
          <h2
            id="teams-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 garamond-italic leading-tight"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Leadership</span>
          </h2>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Simple Horizontal Team Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="h-[500px] w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              {/* Background Image or Placeholder */}
              <div className="relative h-full">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:blur-sm"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <div className="w-24 h-24 mx-auto mb-4 bg-slate-200/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-300/60">
                        <UserIcon className="w-12 h-12 text-slate-400" />
                      </div>
                      <div className="w-16 h-2 bg-slate-300/70 rounded-full mx-auto mb-3"></div>
                      <div className="w-12 h-2 bg-slate-400/70 rounded-full mx-auto"></div>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Default Content (Name and Role) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-lg text-blue-200 font-semibold">{member.role}</p>
                </div>

                {/* Hover Content (Full Information) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                    <p className="text-lg text-blue-200 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-200 mb-4 italic text-sm">{member.description}</p>
                    <ul className="space-y-2">
                      {member.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-blue-500 rounded border-2 border-blue-400 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-100 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


