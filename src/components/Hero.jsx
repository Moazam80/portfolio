import React from 'react';
import { ArrowRight, ArrowDown, Shield, Cloud, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden editorial-bg">
      
      {/* Subtle luxury diagonal background accent */}
      <div className="absolute top-0 right-0 w-2/5 h-full diagonal-accent pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-8">
          
          {/* Subtle Top Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand-100 border border-sand-200 text-burgundy text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-burgundy"></span>
            <span className="font-semibold tracking-wide">AWS Student Portfolio Challenge</span>
            <span className="text-sand-300">/</span>
            <span className="text-charcoal-muted">BZU Multan (CGPA 3.65)</span>
          </div>

          {/* Editorial Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-charcoal tracking-tight leading-[1.08]">
              Architecting <br />
              <span className="text-burgundy font-serif italic font-normal">Cloud Systems</span> <br />
              with Precision.
            </h1>
          </div>

          {/* Refined Minimalist Subtitle */}
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal max-w-2xl">
            I am <strong className="text-charcoal font-semibold">Moazam Ali</strong>, a Computer Engineering student specializing in Linux administration, multi-tier containerization with Docker, and building automated, highly available deployment pipelines on AWS.
          </p>

          {/* Clean Editorial CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-all shadow-burgundy hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-6 py-3.5 rounded-xl font-semibold text-charcoal hover:text-burgundy bg-white border border-sand-200 hover:border-burgundy/40 transition-all shadow-subtle"
            >
              <span>About My Journey</span>
            </a>
          </div>

          {/* Tech stack line */}
          <div className="pt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-charcoal-muted">
            <span className="text-sand-400 font-semibold uppercase tracking-wider">Core Tools:</span>
            <span className="px-3 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">AWS Amplify</span>
            <span className="px-3 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Amazon S3</span>
            <span className="px-3 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Docker Compose</span>
            <span className="px-3 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">Linux & Bash</span>
            <span className="px-3 py-1 rounded-lg bg-white border border-sand-200 text-charcoal">CI/CD Pipelines</span>
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
