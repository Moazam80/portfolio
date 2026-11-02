import React from 'react';
import { Award, BookOpen, Terminal, CheckCircle2, Shield, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const principles = [
    {
      title: "Automate Before Scaling",
      desc: "Repetitive manual steps breed human error. I use Bash scripting and CI/CD automation to make every deployment deterministic.",
    },
    {
      title: "Container-First Consistency",
      desc: "Standardizing environments with custom Dockerfiles and multi-container Docker Compose stacks eliminates 'works on my machine' forever.",
    },
    {
      title: "Cloud-Native Reliability",
      desc: "Architecting with AWS managed services like S3 and CloudFront ensures high durability, edge caching, and zero infrastructure babysitting.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-canvas-subtle/50 relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-burgundy text-xs font-mono font-semibold border border-sand-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01 // About Me & Personal Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            From Engineering Rigor to Cloud Systems
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            How a dedication to computer science fundamentals and Linux evolved into hands-on cloud architecture and containerization.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Story Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Profile Header Card */}
            <div className="p-6 rounded-2xl bg-white border border-sand-200 shadow-subtle flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-sand to-sand-300 p-1 shadow-sm">
                  <div className="w-full h-full rounded-[14px] bg-canvas overflow-hidden flex items-center justify-center relative">
                    <img
                      src="/profile.png"
                      alt="Moazam Ali"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Fallback Monogram Avatar */}
                    <div className="w-full h-full bg-sand-100 items-center justify-center text-burgundy font-serif font-bold text-2xl hidden flex-col">
                      <span>MA</span>
                      <span className="text-[10px] font-mono text-charcoal-muted uppercase">DevOps</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-burgundy text-white font-mono font-bold text-[9px] border-2 border-white">
                  STUDENT
                </div>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl font-bold text-charcoal">{personalInfo.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sand-100 text-burgundy font-semibold border border-sand-200">
                    CGPA {personalInfo.cgpa}
                  </span>
                </div>
                <div className="text-xs text-charcoal-muted font-mono">{personalInfo.role}</div>
                <div className="text-xs text-charcoal-soft">{personalInfo.university}</div>
              </div>
            </div>

            {/* The Story */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-4 text-charcoal-muted leading-relaxed text-sm">
              <h4 className="text-base font-bold text-charcoal">
                The Story Behind My Engineering Journey
              </h4>
              
              <p>
                My passion for software systems began with a curiosity about what happens after the code is written. While many focus solely on application syntax, I became fascinated by the operating environments, networks, and automated pipelines that bring applications to life.
              </p>

              <p>
                As a Computer Engineering student at <strong className="text-charcoal font-semibold">Bahauddin Zakariya University (BZU), Multan</strong>, maintaining a <strong className="text-burgundy font-semibold">3.65 CGPA</strong> taught me the value of theoretical discipline—operating systems, data structures, and computer networking.
              </p>

              <p>
                Outside the classroom, I immersed myself in Linux and open-source tooling. Automating repetitive administration tasks with custom Bash scripts quickly led me to <strong className="text-charcoal font-semibold">Docker containerization</strong>—packaging multi-tier applications with isolated networks and persistent volumes.
              </p>

              <p>
                Today, I am applying this foundation to the <strong className="text-charcoal font-semibold">AWS Cloud ecosystem</strong>—building automated, highly available infrastructures using AWS Amplify, Amazon S3, CloudFront CDN, and IAM.
              </p>

              {/* Education Info Grid */}
              <div className="pt-4 border-t border-sand-200 grid sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-charcoal-soft uppercase text-[10px]">Degree & University:</div>
                  <div className="text-charcoal font-semibold">{personalInfo.degree}</div>
                  <div className="text-burgundy">{personalInfo.university}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-charcoal-soft uppercase text-[10px]">Academic Record:</div>
                  <div className="text-charcoal font-semibold">CGPA: {personalInfo.cgpa} / 4.00</div>
                  <div className="text-charcoal-muted">{personalInfo.semester} (Active Student)</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Tags */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-sand-200 text-charcoal flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-burgundy" />
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3 py-1.5 rounded-lg bg-white border border-sand-200 text-charcoal hover:text-burgundy hover:border-burgundy/40 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-burgundy" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-sand-200 text-charcoal flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-burgundy" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Principles & Verification */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-charcoal-muted">
              Engineering Mindset & Philosophy
            </h3>

            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-1.5"
              >
                <h4 className="text-sm font-bold text-charcoal flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy"></span>
                  <span>{p.title}</span>
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}

            {/* AWS Hackathon Student Verification Box */}
            <div className="p-5 rounded-2xl bg-sand-100/70 border border-sand-200 space-y-2 text-xs">
              <div className="font-bold text-burgundy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-burgundy" />
                <span>AWS Student Portfolio Verification</span>
              </div>
              <p className="text-charcoal-muted leading-relaxed">
                Individual submission for the AWS Student Portfolio Challenge 2026. Built and deployed on AWS Amplify Hosting following official AWS architecture guidelines.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
