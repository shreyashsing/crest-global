import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Stats />
      <Testimonials />
      <HowItWorks />
      <ContactUs />
      <Footer/>
    </div>
  );
}
