import React, { useState } from 'react';
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
        <div className="space-y-3 mb-12">
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
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-burgundy text-white'
                  : 'bg-white text-charcoal-muted hover:text-charcoal border border-sand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-subtle hover:border-burgundy/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sand-100 text-burgundy font-semibold border border-sand-200">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-charcoal-soft">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
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
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand-50 text-charcoal border border-sand-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-burgundy group/link"
                  >
                    <GithubIcon className="w-4 h-4 text-charcoal-muted group-hover/link:text-burgundy" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-soft group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
