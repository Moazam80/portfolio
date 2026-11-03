import React, { useState, useRef } from 'react';
import { ArrowRight, Shield, Cloud, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Hero() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle tilt: max 6 degrees
    setTilt({
      x: -(y / (rect.height / 2)) * 6,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden editorial-bg">
      
      {/* Luxury diagonal background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full diagonal-accent pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill with subtle glow */}
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand-100/90 border border-sand-200 text-burgundy text-xs font-mono shadow-sm hover:border-burgundy/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-burgundy animate-ping"></span>
                <span className="font-semibold tracking-wide">AWS Student Portfolio Challenge</span>
                <span className="text-sand-300">/</span>
                <span className="text-charcoal-muted">BZU Multan (CGPA 3.65)</span>
              </div>
            </Reveal>

            {/* Editorial Headline */}
            <Reveal delay={100}>
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.1]">
                  Architecting <br />
                  <span className="text-burgundy font-serif italic font-normal inline-block hover:scale-[1.02] transition-transform duration-300">
                    Cloud Systems
                  </span> <br />
                  with Precision.
                </h1>
              </div>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                I am <strong className="text-charcoal font-semibold">Moazam Ali</strong>, a Computer Engineering student specializing in Linux administration, multi-tier containerization with Docker, and automated CI/CD pipelines on AWS.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={300}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href="#projects"
                  className="btn-shimmer px-6 py-3.5 rounded-xl font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-all duration-300 shadow-burgundy hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 group text-sm"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>

                <a
                  href="#about"
                  className="px-6 py-3.5 rounded-xl font-semibold text-charcoal hover:text-burgundy bg-white border border-sand-200 hover:border-burgundy/40 transition-all duration-300 shadow-subtle hover:-translate-y-0.5 text-sm"
                >
                  <span>About My Journey</span>
                </a>
              </div>
            </Reveal>

            {/* Minimalist Tech Badges */}
            <Reveal delay={400}>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-charcoal-muted">
                <span className="text-sand-400 font-semibold uppercase tracking-wider">Core Tools:</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal hover:border-burgundy/30 transition-colors">AWS Amplify</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal hover:border-burgundy/30 transition-colors">Amazon S3</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal hover:border-burgundy/30 transition-colors">Docker Compose</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal hover:border-burgundy/30 transition-colors">Linux / Bash</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal hover:border-burgundy/30 transition-colors">CI/CD</span>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Editorial Visual Portrait with Interactive 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={200}>
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative w-full max-w-[340px] sm:max-w-[380px] cursor-pointer group"
              >
                
                {/* Geometric Backdrop with gentle float */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sand-100 via-sand-200/60 to-sand-50 rounded-3xl -rotate-2 transform scale-95 border border-sand-200/80 shadow-subtle group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Burgundy glow behind cutout */}
                <div className="absolute -top-3 -right-3 w-32 h-32 bg-burgundy/15 rounded-full blur-2xl pointer-events-none animate-pulse-glow"></div>
                <div className="absolute bottom-4 left-0 right-0 h-24 bg-gradient-to-t from-canvas via-canvas/60 to-transparent z-10 pointer-events-none"></div>

                {/* Main Portrait Card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-sand-50/90 to-white/90 border border-sand-200 shadow-elevated p-2 group-hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative rounded-2xl overflow-hidden bg-sand-100/40">
                    <img
                      src="/moazam-hero.png"
                      alt="Moazam Ali - Cloud & DevOps Engineer"
                      className="w-full h-auto object-cover object-top drop-shadow-md group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Floating Badge 1: Top Right (Floats gently) */}
                <div className="absolute -top-3 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sand-200 shadow-elevated flex items-center gap-2 animate-float">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div className="text-[11px] font-mono font-semibold text-charcoal">
                    DevOps & Cloud Engineer
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Right (Floats gently with counter-phase) */}
                <div className="absolute -bottom-3 -right-3 z-20 px-4 py-2 rounded-2xl bg-burgundy text-white shadow-burgundy flex items-center gap-2 animate-float-delayed hover:scale-105 transition-transform">
                  <Award className="w-3.5 h-3.5 text-sand-200" />
                  <div className="text-[11px] font-mono font-semibold tracking-wide">
                    BZU Multan • 3.65 CGPA
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* Minimalist Stats Strip with Staggered Reveal */}
        <div className="mt-20 pt-10 border-t border-sand-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="space-y-1 group p-3 rounded-xl hover:bg-sand-50/60 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-burgundy font-serif group-hover:scale-105 origin-left transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-charcoal">
                  {s.label}
                </div>
                <div className="text-xs text-charcoal-muted">
                  {s.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
