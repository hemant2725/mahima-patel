import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import SpiralShowcase from '../sections/SpiralShowcase';
import Collections from '../sections/Collections';
import AlgorithmDetail from '../sections/AlgorithmDetail';
import Atelier from '../sections/Atelier';
import Press from '../sections/Press';
import Founder from '../sections/Founder';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

interface HomePageProps {
  onNavigate: (id: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="relative">
      <Hero onNavigate={onNavigate} />
      <Manifesto />
      <SpiralShowcase />
      <Collections />
      <AlgorithmDetail />
      <Atelier />
      <Press />
      <Founder />
      <Contact />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
