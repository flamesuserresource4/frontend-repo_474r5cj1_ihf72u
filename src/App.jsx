import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
        <div className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.14),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Showcase />
      <Modules />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}

export default App