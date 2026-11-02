import React from 'react';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onScrollToVault }) {
  return (
    <footer className="bg-canvas border-t border-sand-200 py-12 text-xs font-mono text-charcoal-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-burgundy text-white font-serif font-bold flex items-center justify-center">
              MA
            </div>
            <div>
              <div className="font-bold text-charcoal text-sm">Moazam Ali</div>
              <div className="text-[11px] text-charcoal-soft">DevOps & Cloud Engineer Portfolio</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-charcoal-muted">
            <a href="#about" className="hover:text-burgundy transition-colors">About</a>
            <a href="#skills" className="hover:text-burgundy transition-colors">Skills</a>
            <a href="#projects" className="hover:text-burgundy transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-burgundy transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-burgundy transition-colors">Contact</a>
            <button onClick={onScrollToVault} className="text-burgundy hover:underline flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Superpower Vault</span>
            </button>
          </div>

          {/* AWS Status */}
          <div className="flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full bg-sand-100 border border-sand-200 text-burgundy font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" />
            <span>AWS Amplify CI/CD: Active</span>
          </div>

        </div>

        {/* Qualification Checklist Badge */}
        <div className="p-4 rounded-xl bg-sand-50 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-charcoal-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-burgundy shrink-0" />
            <span>
              <strong className="text-charcoal">AWS Hackathon Compliance:</strong> Live Amplify Hosting • 3 Core Sections • Interactive Feature (Vault & CLI) • Verified Student
            </span>
          </div>
          <div className="text-charcoal-soft">
            BZU Multan | CGPA 3.65
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-sand-200 text-charcoal-soft text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Moazam Ali. Built for the AWS Student Portfolio Challenge 2026.
          </div>
          <div>
            Hosted on AWS Amplify • Amazon S3 • Amazon CloudFront
          </div>
        </div>

      </div>
    </footer>
  );
}
