'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-6">
      <nav 
        className="flex items-center justify-between rounded-3xl px-6 md:px-8 lg:px-12 py-4 shadow-lg w-full"
        style={{
          backgroundColor: '#6A90D0',
        }}
      >
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Crest Global
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-normal">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
          <a href="#why-us" className="hover:opacity-80 transition-opacity">Why Us</a>
          <a href="#testimonials" className="hover:opacity-80 transition-opacity">Testimonials</a>
          <a href="#team" className="hover:opacity-80 transition-opacity">Team</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>

        {/* Global Crest Logo */}
        <div className="ml-4">
          <Image 
            src="/Global Crest.svg" 
            alt="Global Crest Logo" 
            width={40} 
            height={40}
            className="filter brightness-0 invert"
          />
        </div>
      </nav>
    </header>
  );
}






