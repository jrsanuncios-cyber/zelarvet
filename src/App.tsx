import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-marrom focus:px-5 focus:py-3 focus:font-bold focus:text-creme"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
