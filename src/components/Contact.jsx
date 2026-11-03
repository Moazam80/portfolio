import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // Convert the saved Pakistani mobile number to WhatsApp's international format.
  const whatsappNumber = `92${personalInfo.phone.replace(/\\D/g, '').replace(/^0/, '')}`;
  const whatsappMessage = encodeURIComponent(
    "Hi Moazam! I visited your portfolio and would like to discuss an opportunity with you."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-canvas relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="h-full p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-6">
                <h3 className="text-lg font-bold text-charcoal">Direct Contact</h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center justify-between group hover:border-burgundy/40 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-sand-100 text-burgundy"><Mail className="w-4 h-4" /></div>
                      <div className="min-w-0">
                        <div className="text-charcoal-soft text-[10px]">EMAIL ADDRESS</div>
                        <div className="text-charcoal font-semibold break-all">{personalInfo.email}</div>
                      </div>
                    </div>
                    <button onClick={handleCopyEmail} className="ml-2 p-2 rounded-lg bg-white border border-sand-200 hover:bg-sand-50 text-charcoal transition-all" title="Copy Email">
                      {copied ? <CheckCircle2 className="w-4 h-4 text-burgundy" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center justify-between group hover:border-burgundy/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sand-100 text-burgundy"><Phone className="w-4 h-4" /></div>
                      <div>
                        <div className="text-charcoal-soft text-[10px]">PHONE / WHATSAPP</div>
                        <div className="text-charcoal font-semibold">{personalInfo.phone}</div>
                      </div>
                    </div>
                    <a href={`tel:${personalInfo.phone}`} className="p-2 rounded-lg bg-white border border-sand-200 hover:bg-sand-50 text-charcoal transition-all text-xs font-semibold">Call</a>
                  </div>

                  <div className="p-4 rounded-xl bg-canvas border border-sand-200 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sand-100 text-burgundy"><MapPin className="w-4 h-4" /></div>
                    <div>
                      <div className="text-charcoal-soft text-[10px]">LOCATION</div>
                      <div className="text-charcoal font-semibold">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 px-4 rounded-xl bg-canvas hover:bg-sand-100 border border-sand-200 text-charcoal transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold">
                    <GithubIcon className="w-4 h-4" /><span>GitHub</span>
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 px-4 rounded-xl bg-canvas hover:bg-sand-100 border border-sand-200 text-charcoal transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold">
                    <LinkedinIcon className="w-4 h-4 text-burgundy" /><span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="h-full p-8 sm:p-10 rounded-2xl bg-white border border-sand-200 shadow-subtle flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#25D366]/[0.07] blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#159947] flex items-center justify-center mb-6">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-mono font-semibold tracking-widest text-burgundy mb-3">LET'S TALK DIRECTLY</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mb-4">
                    Have a project or opportunity?
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl mb-8">
                    Send me a message on WhatsApp. The chat will open with a pre-written introduction that you can edit before sending.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#159947] hover:bg-[#12833d] text-white font-semibold shadow-lg shadow-[#159947]/20 transition-all hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Message Me on WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-charcoal-soft mt-4">
                    WhatsApp opens in a new tab. You will review and send the message yourself.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
