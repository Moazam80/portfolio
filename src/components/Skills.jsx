import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Cloud, Box, Workflow, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 bg-canvas relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3 mb-12"
        >
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
        </motion.div>

        {/* Category Tabs with Animated Gliding Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-charcoal-muted hover:text-charcoal bg-white border border-sand-200 hover:bg-sand-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-burgundy rounded-xl shadow-burgundy -z-0"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid with AnimatePresence on Category Switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {skillsData[activeCategory].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08, type: "spring", stiffness: 120 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  borderColor: '#590907',
                  boxShadow: '0 15px 30px -5px rgba(89, 9, 7, 0.15)',
                }}
                className="p-6 rounded-2xl bg-white border border-sand-200 shadow-subtle flex flex-col justify-between group h-full cursor-pointer transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-charcoal group-hover:text-burgundy transition-colors duration-200">
                      {skill.name}
                    </h3>
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="font-mono text-xs font-bold text-burgundy px-2 py-0.5 rounded bg-sand-100 border border-sand-200 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-5 pt-3 border-t border-sand-100">
                  <div className="w-full h-2 rounded-full bg-sand-100 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-sand-400 via-burgundy to-burgundy-600 shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
