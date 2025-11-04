'use client';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          Crest Global
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
          <a href="#why-us" className="hover:opacity-80 transition-opacity">Why Us</a>
          <a href="#testimonials" className="hover:opacity-80 transition-opacity">Testimonials</a>
          <a href="#team" className="hover:opacity-80 transition-opacity">Team</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>
      </nav>
    </header>
  );
}



