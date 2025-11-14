import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PeopleStrip from './components/PeopleStrip';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <PeopleStrip />
      <About />
      <Services />
      <WhyUs />
      <Stats />
      <Testimonials />
      <HowItWorks />
      <Teams />
      <ContactUs />
      <Footer/>
    </div>
  );
}
