import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AWS Cloud", "Docker & Infrastructure", "Automation & Cloud"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-canvas-subtle/40 relative border-t border-sand-200">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // Projects & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Featured Engineering & Cloud Deployments
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            Real-world systems containerized with Docker, automated with Linux pipelines, and deployed to AWS.
          </p>
        </motion.div>

        {/* Minimal Filters with Gliding Animated Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-charcoal-muted hover:text-charcoal bg-white border border-sand-200 hover:bg-sand-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-burgundy rounded-xl shadow-burgundy -z-0"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  borderColor: '#590907',
                  boxShadow: '0 20px 40px -10px rgba(89, 9, 7, 0.18)',
                }}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-subtle flex flex-col justify-between group h-full cursor-pointer transition-colors"
              >
                <div>
                  
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      whileHover={{ scale: 1.06 }}
                      className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sand-100 text-burgundy font-semibold border border-sand-200 group-hover:bg-sand-200 transition-colors"
                    >
                      {project.badge}
                    </motion.span>
                    <span className="text-xs font-mono text-charcoal-soft">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-mono uppercase text-charcoal-soft tracking-wider">
                      Key Outcomes:
                    </div>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-muted">
                        <Check className="w-3.5 h-3.5 text-burgundy shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Footer: Tech & Link */}
                <div className="mt-8 pt-5 border-t border-sand-100 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, borderColor: '#590907' }}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand-50 text-charcoal border border-sand-200 transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-burgundy group/link transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-charcoal-muted group-hover/link:text-burgundy transition-colors" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-soft group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1.5 group-hover/link:text-burgundy transition-transform duration-200" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
