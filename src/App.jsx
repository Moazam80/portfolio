import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AwsArchitecture from './components/AwsArchitecture';
import SuperpowerVault from './components/SuperpowerVault';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToVault = () => {
    const el = document.getElementById('vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-charcoal flex flex-col font-sans selection:bg-burgundy selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenSuperpower={scrollToVault} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AwsArchitecture />
        <SuperpowerVault />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollToVault={scrollToVault} />
    </div>
  );
}
