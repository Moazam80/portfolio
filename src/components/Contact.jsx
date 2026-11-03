import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-burgundy text-xs font-mono font-semibold border border-sand-200">
              <Mail className="w-3.5 h-3.5" />
              <span>06 // Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Let's Build Systems Together
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              Open for DevOps engineering internships, cloud architecture projects, or student developer discussions.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={100}>
              <div className="p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-6">
                <h3 className="text-lg font-bold text-charcoal">Direct Contact</h3>
                
                <div className="space-y-3 text-xs font-mono">
                  
                  {/* Email Box */}
                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center justify-between group hover:border-burgundy/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sand-100 text-burgundy group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-charcoal-soft text-[10px]">EMAIL ADDRESS</div>
                        <div className="text-charcoal font-semibold">{personalInfo.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white border border-sand-200 hover:bg-sand-50 text-charcoal transition-all hover:scale-105"
                      title="Copy Email"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-burgundy" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center justify-between group hover:border-burgundy/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sand-100 text-burgundy group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-charcoal-soft text-[10px]">PHONE / WHATSAPP</div>
                        <div className="text-charcoal font-semibold">{personalInfo.phone}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="p-2 rounded-lg bg-white border border-sand-200 hover:bg-sand-50 text-charcoal transition-all hover:scale-105 text-xs font-semibold"
                    >
                      Call
                    </a>
                  </div>

                  {/* Location Box */}
                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center gap-3 hover:border-burgundy/40 transition-colors">
                    <div className="p-2 rounded-lg bg-sand-100 text-burgundy">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-charcoal-soft text-[10px]">LOCATION</div>
                      <div className="text-charcoal font-semibold">{personalInfo.location}</div>
                    </div>
                  </div>

                </div>

                {/* Social Channels */}
                <div className="pt-2 flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-canvas hover:bg-sand-100 border border-sand-200 text-charcoal transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-canvas hover:bg-sand-100 border border-sand-200 text-charcoal transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-burgundy" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-subtle">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-3 animate-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 rounded-full bg-sand-100 text-burgundy border border-sand-200 mx-auto flex items-center justify-center animate-bounce">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Message Sent!</h3>
                    <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                      Thank you for reaching out. Moazam will respond to <span className="text-burgundy font-semibold">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 px-5 py-2 rounded-xl text-xs font-mono font-semibold bg-canvas border border-sand-200 text-charcoal hover:bg-sand-50 transition-all hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-charcoal mb-2">Send a Direct Inquiry</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-charcoal-muted">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-canvas border border-sand-200 rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-soft focus:outline-none focus:border-burgundy transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-charcoal-muted">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full bg-canvas border border-sand-200 rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-soft focus:outline-none focus:border-burgundy transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-charcoal-muted">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Moazam, I reviewed your AWS Hackathon portfolio and would love to discuss a cloud project..."
                        className="w-full bg-canvas border border-sand-200 rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-soft focus:outline-none focus:border-burgundy transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-shimmer w-full py-3.5 rounded-xl font-semibold text-white bg-burgundy hover:bg-burgundy-600 transition-all shadow-burgundy hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
