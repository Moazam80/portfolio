import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenSuperpower }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    setMobileMenuOpen(false);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-canvas/92 backdrop-blur-md border-b border-sand-200 shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-burgundy flex items-center justify-center text-white font-serif font-bold text-base shadow-sm group-hover:bg-burgundy-600 transition-colors">
              MA
            </div>
            <div>
              <div className="font-bold text-charcoal tracking-tight flex items-center gap-2">
                <span>Moazam Ali</span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-sand-100 text-burgundy font-semibold border border-sand-200">
                  AWS Builder
                </span>
              </div>
              <div className="text-[11px] text-charcoal-soft font-mono">
                Cloud & DevOps Engineer
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.href)}
                whileHover={{ y: -2, color: '#590907' }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted px-3.5 py-2 rounded-lg hover:bg-sand-100/60 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* The Creative Feature Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSuperpower}
              className="relative px-4 py-2 rounded-xl text-xs font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-colors shadow-burgundy flex items-center gap-1.5 overflow-hidden group"
            >
              <Sparkles className="w-3.5 h-3.5 text-sand-200 animate-spin-slow" />
              <span>Superpower Vault</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sand-300"></span>
              </span>
            </motion.button>

            {/* GitHub Link */}
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, borderColor: '#590907', color: '#590907' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-canvas border border-sand-200 text-charcoal-muted hover:border-burgundy/40 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSuperpower}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-burgundy text-white flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-sand-200" />
              <span>Vault</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-canvas text-charcoal-muted border border-sand-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="sm:hidden mt-3 p-4 rounded-2xl bg-canvas/98 border border-sand-200 backdrop-blur-xl shadow-elevated flex flex-col gap-2 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => navigateToSection(event, link.href)}
                  className="text-xs uppercase tracking-wider font-semibold text-charcoal p-2.5 rounded-lg hover:bg-sand-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-sand-200 flex items-center justify-between">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-charcoal-muted flex items-center gap-1.5 p-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Source</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSuperpower();
                  }}
                  className="text-xs font-semibold text-burgundy hover:underline p-2 flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open Superpower Vault</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
