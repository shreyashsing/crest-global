import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
    </div>
  );
}
