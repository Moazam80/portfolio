import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Cloud, CheckCircle2, Award, Sparkles, Copy, Mail, ExternalLink, Terminal, Cpu } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const roles = [
  "DevOps Engineer",
  "AWS Cloud Builder",
  "Docker & Containerization Specialist",
  "Linux & CI/CD Automator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-16 overflow-hidden editorial-bg">
      
      {/* Luxury diagonal ambient aura */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-2/5 h-full diagonal-accent pointer-events-none -z-10"
      />
      
      {/* Subtle background ambient circular gradient */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-sand-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-burgundy/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-7 items-center">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Status & Track Pill with Spring Entrance */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-3.5 py-1.5 rounded-full bg-sand-100/90 border border-sand-200 text-burgundy text-xs font-mono shadow-sm hover:border-burgundy/40 hover:shadow-subtle transition-all cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-semibold text-charcoal">Available for Roles</span>
              <span className="text-sand-300">•</span>
              <span className="font-semibold text-burgundy tracking-wide">AWS Student Portfolio 2026</span>
              <span className="text-sand-300">•</span>
              <span className="text-charcoal-muted">BZU CGPA 3.65</span>
            </motion.div>

            {/* Editorial Headline with Dynamic Animated Role Switcher */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]"
              >
                Architecting <br />
                <motion.span
                  whileHover={{ scale: 1.02, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-burgundy font-serif italic font-normal inline-block"
                >
                  Cloud Systems
                </motion.span> <br />
                with Engineering Rigor.
              </motion.h1>

              {/* Dynamic Role Switcher */}
              <div className="h-8 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-mono font-semibold text-charcoal-muted pt-1">
                <span className="text-sand-400">&gt;</span>
                <span className="text-charcoal-soft">Focus:</span>
                <div className="overflow-hidden h-7 inline-flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="text-burgundy font-bold bg-sand-100/80 px-2.5 py-0.5 rounded-md border border-sand-200"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-normal max-w-xl mx-auto lg:mx-0"
            >
              I am <strong className="text-charcoal font-semibold">Moazam Ali</strong>, a Computer Engineering student at BZU Multan. I bridge application development and production operations through Linux administration, multi-tier Docker containerization, and automated AWS CI/CD pipelines.
            </motion.p>

            {/* Action Buttons & Quick Copy Email Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              {/* Primary Projects CTA */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-shimmer px-6 py-3.5 rounded-xl font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-colors shadow-burgundy flex items-center gap-2 group text-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.a>

              {/* 1-Click Copy Email Pill */}
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-5 py-3.5 rounded-xl font-semibold text-charcoal hover:text-burgundy bg-white border border-sand-200 hover:border-burgundy/40 shadow-subtle text-sm transition-all flex items-center gap-2"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-burgundy" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-charcoal-muted hover:text-burgundy transition-colors"
              >
                Send Inquiry &darr;
              </motion.a>
            </motion.div>

            {/* Core Stack Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-charcoal-muted"
            >
              <span className="text-sand-400 font-semibold uppercase tracking-wider">Stack:</span>
              {["AWS Amplify", "Amazon S3", "CloudFront CDN", "Docker Compose", "Linux / Bash", "CI/CD"].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + idx * 0.07, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -2, borderColor: '#590907', color: '#590907' }}
                  className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal transition-colors cursor-pointer shadow-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Elevated Visual Portrait with Multi-Layer Depth */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.25 }}
              className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[320px]"
            >
              
              {/* Continuous Gentle Floating Motion on the Entire Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Geometric Shadow Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sand-100 via-sand-200/70 to-sand-50 rounded-3xl -rotate-2 transform scale-95 border border-sand-200/90 shadow-subtle"></div>
                
                {/* Glowing Burgundy Halo Pulsing */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-32 h-32 bg-burgundy/25 rounded-full blur-2xl pointer-events-none"
                />

                <div className="absolute bottom-4 left-0 right-0 h-24 bg-gradient-to-t from-canvas via-canvas/60 to-transparent z-10 pointer-events-none"></div>

                {/* Main Portrait Card with Hover Spring */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-white via-sand-50 to-sand-100 border-2 border-white shadow-[0_24px_70px_-24px_rgba(89,9,7,0.35)] ring-1 ring-burgundy/15 p-2.5 group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-sand-100/40">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                      src="/moazam-hero.png"
                      alt="Moazam Ali - Cloud & DevOps Engineer"
                      className="w-full max-h-[390px] object-cover object-top drop-shadow-md"
                    />
                  </div>
                </motion.div>

                {/* Floating Badge 1: Top Left */}
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-3 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sand-200 shadow-elevated flex items-center gap-2 cursor-pointer"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div className="text-[11px] font-mono font-semibold text-charcoal">
                    DevOps & Cloud Engineer
                  </div>
                </motion.div>

                {/* Floating Badge 2: Bottom Right */}
                <motion.div
                  animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="absolute -bottom-3 -right-3 z-20 px-4 py-2 rounded-2xl bg-burgundy text-white shadow-burgundy flex items-center gap-2 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-sand-200" />
                  <div className="text-[11px] font-mono font-semibold tracking-wide">
                    BZU Multan • 3.65 CGPA
                  </div>
                </motion.div>

                {/* Floating Badge 3: Bottom Left Cloud Uptime Chip */}
                <motion.div
                  animate={{ y: [0, 5, 0], x: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute -bottom-6 left-2 z-20 px-3 py-1.5 rounded-xl bg-sand-100/95 backdrop-blur-md border border-sand-200 text-charcoal text-[10px] font-mono shadow-sm flex items-center gap-1.5"
                >
                  <Cloud className="w-3 h-3 text-burgundy" />
                  <span>AWS Global Edge: 100% Uptime</span>
                </motion.div>

              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Minimalist Stats Strip with Spring Stagger and Hover Lift */}
        <div className="mt-14 pt-7 border-t border-sand-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="space-y-1 p-4 rounded-2xl bg-white/70 border border-sand-200/70 shadow-subtle hover:border-burgundy/30 hover:bg-white transition-all cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-burgundy font-serif">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-charcoal">
                {s.label}
              </div>
              <div className="text-xs text-charcoal-muted">
                {s.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
