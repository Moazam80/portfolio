import React from 'react';
import { ArrowRight, Shield, Cloud, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden editorial-bg">
      
      {/* Subtle luxury diagonal background accent from the reference design */}
      <div className="absolute top-0 right-0 w-1/3 h-full diagonal-accent pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand-100 border border-sand-200 text-burgundy text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-burgundy"></span>
              <span className="font-semibold tracking-wide">AWS Student Portfolio Challenge</span>
              <span className="text-sand-300">/</span>
              <span className="text-charcoal-muted">BZU Multan (CGPA 3.65)</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.1]">
                Architecting <br />
                <span className="text-burgundy font-serif italic font-normal">Cloud Systems</span> <br />
                with Precision.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              I am <strong className="text-charcoal font-semibold">Moazam Ali</strong>, a Computer Engineering student specializing in Linux administration, multi-tier containerization with Docker, and automated CI/CD pipelines on AWS.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-all shadow-burgundy hover:-translate-y-0.5 flex items-center gap-2 group text-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-xl font-semibold text-charcoal hover:text-burgundy bg-white border border-sand-200 hover:border-burgundy/40 transition-all shadow-subtle text-sm"
              >
                <span>About My Journey</span>
              </a>
            </div>

            {/* Minimalist Tech Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-charcoal-muted">
              <span className="text-sand-400 font-semibold uppercase tracking-wider">Core Tools:</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">AWS Amplify</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Amazon S3</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Docker Compose</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Linux / Bash</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">CI/CD</span>
            </div>

          </div>

          {/* Right Column: Editorial Visual Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Geometric Backdrop inspired by the reference design */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sand-100 via-sand-200/60 to-sand-50 rounded-3xl -rotate-2 transform scale-95 border border-sand-200/80 shadow-subtle"></div>
              
              {/* Deep Burgundy diagonal accent bar behind the cutout */}
              <div className="absolute -top-3 -right-3 w-28 h-28 bg-burgundy/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-4 left-0 right-0 h-24 bg-gradient-to-t from-canvas via-canvas/60 to-transparent z-10 pointer-events-none"></div>

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-sand-50/90 to-white/90 border border-sand-200 shadow-elevated p-2">
                <div className="relative rounded-2xl overflow-hidden bg-sand-100/40">
                  <img
                    src="/moazam-hero.png"
                    alt="Moazam Ali - Cloud & DevOps Engineer"
                    className="w-full h-auto object-cover object-top drop-shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sand-200 shadow-elevated flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <div className="text-[11px] font-mono font-semibold text-charcoal">
                  DevOps & Cloud Engineer
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute -bottom-3 -right-3 z-20 px-4 py-2 rounded-2xl bg-burgundy text-white shadow-burgundy flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-sand-200" />
                <div className="text-[11px] font-mono font-semibold tracking-wide">
                  BZU Multan • 3.65 CGPA
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Minimalist Stats Strip */}
        <div className="mt-20 pt-10 border-t border-sand-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-burgundy font-serif">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-charcoal">
                {s.label}
              </div>
              <div className="text-xs text-charcoal-muted">
                {s.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
