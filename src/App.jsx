import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToVault = () => {
    const el = document.getElementById('vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-charcoal flex flex-col font-sans selection:bg-burgundy selection:text-white relative">
      
      {/* Top Global Animated Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sand-300 via-burgundy to-burgundy-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

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
