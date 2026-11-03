import React, { useState } from 'react';
import { Sparkles, Cloud, Box, Workflow, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 bg-canvas relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-burgundy text-xs font-mono font-semibold border border-sand-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // Technical Skills & Cloud Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Tools, Technologies & Infrastructure
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              Hands-on technical competencies built through academic computer engineering coursework and practical infrastructure deployments.
            </p>
          </div>
        </Reveal>

        {/* Minimal Category Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-burgundy text-white shadow-burgundy scale-105'
                    : 'bg-white text-charcoal-muted hover:text-charcoal border border-sand-200 hover:bg-sand-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Grid with Animated Progress Bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData[activeCategory].map((skill, idx) => (
            <Reveal key={skill.name} delay={idx * 80}>
              <div
                className="p-6 rounded-2xl bg-white border border-sand-200 shadow-subtle hover:border-burgundy/40 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-charcoal group-hover:text-burgundy transition-colors duration-200">
                      {skill.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-burgundy px-2 py-0.5 rounded bg-sand-100 border border-sand-200 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-5 pt-3 border-t border-sand-100">
                  <div className="w-full h-1.5 rounded-full bg-sand-100 overflow-hidden relative">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sand-400 to-burgundy transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
