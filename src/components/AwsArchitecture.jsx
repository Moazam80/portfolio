import React, { useState } from 'react';
import { Cloud, GitBranch, ArrowRight, Zap, HardDrive, CheckCircle2, Globe, Cpu } from 'lucide-react';

export default function AwsArchitecture() {
  const [activeStep, setActiveStep] = useState(0);

  const architectureNodes = [
    {
      id: "source",
      title: "1. Developer & Git",
      icon: GitBranch,
      subtitle: "Source Control",
      desc: "Code commits and pull requests pushed to the GitHub repository automatically trigger AWS Amplify webhooks.",
      awsBadge: "GitHub Webhook",
      metrics: "Instant Trigger",
    },
    {
      id: "ci-cd",
      title: "2. AWS Amplify Hosting",
      icon: Cpu,
      subtitle: "Continuous Deployment",
      desc: "Amplify spins up a managed container, runs `npm ci` and `npm run build`, executes static bundle optimizations, and creates versioned releases.",
      awsBadge: "AWS Amplify CI/CD",
      metrics: "< 45s Build",
    },
    {
      id: "storage",
      title: "3. Amazon S3",
      icon: HardDrive,
      subtitle: "Cloud Object Storage",
      desc: "Static production assets (HTML5, compiled React JS bundles, CSS, images) are securely stored with high durability (99.999999999%).",
      awsBadge: "Amazon S3",
      metrics: "11 9's Durability",
    },
    {
      id: "cdn",
      title: "4. Amazon CloudFront",
      icon: Zap,
      subtitle: "Global Edge Network",
      desc: "Cached across 600+ Points of Presence (PoPs) worldwide, ensuring single-digit millisecond latency and automatic SSL/TLS termination.",
      awsBadge: "CloudFront CDN",
      metrics: "< 50ms Latency",
    },
    {
      id: "end-user",
      title: "5. Global Visitor",
      icon: Globe,
      subtitle: "Production Traffic",
      desc: "Visitors and AWS hackathon judges experience instantaneous page loads, 100/100 Lighthouse performance, and zero downtime.",
      awsBadge: "HTTPS Edge",
      metrics: "100% Uptime",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-canvas relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-burgundy text-xs font-mono font-semibold border border-sand-200">
            <Cloud className="w-3.5 h-3.5" />
            <span>04 // AWS Cloud Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            How This Portfolio Runs On AWS
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            Documenting the end-to-end cloud pipeline from code commit to global CloudFront edge delivery, aligned with the AWS Well-Architected Framework.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-subtle space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {architectureNodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                    isActive
                      ? 'bg-sand-50 border-burgundy shadow-sm'
                      : 'bg-canvas border-sand-200 hover:border-sand-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-burgundy text-white' : 'bg-sand-100 text-burgundy'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-burgundy">
                        {node.metrics}
                      </span>
                    </div>
                    <div className="font-bold text-xs text-charcoal">{node.title}</div>
                    <div className="text-[11px] font-mono text-charcoal-muted mt-0.5">{node.awsBadge}</div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sand-200 flex items-center justify-between text-[11px] text-charcoal-soft">
                    <span>Inspect</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-burgundy translate-x-0.5' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Inspector */}
          <div className="p-6 rounded-2xl bg-canvas-subtle/70 border border-sand-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-xs font-mono uppercase font-semibold text-burgundy">
                Step {activeStep + 1}: {architectureNodes[activeStep].subtitle} ({architectureNodes[activeStep].awsBadge})
              </div>
              <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl leading-relaxed">
                {architectureNodes[activeStep].desc}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white border border-sand-200 text-xs font-mono text-charcoal flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" />
              <span>AWS Well-Architected</span>
            </div>
          </div>

          {/* Service Badges */}
          <div className="pt-4 border-t border-sand-100 grid sm:grid-cols-3 gap-4 text-xs font-mono text-charcoal-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-burgundy"></span>
              <span>Hosting: AWS Amplify Hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sand-400"></span>
              <span>Object Storage: Amazon S3</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-charcoal"></span>
              <span>CDN: Amazon CloudFront</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
