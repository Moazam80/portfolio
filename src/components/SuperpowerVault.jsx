import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Terminal, Volume2, VolumeX, Check, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { superpowers } from '../data/portfolioData';
import Reveal from './Reveal';

// Web Audio API synthesizer for retro chimes (zero external assets, zero 404s!)
const playSound = (type, soundEnabled) => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'unlock') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {
    // Autoplay fallback
  }
};

export default function SuperpowerVault() {
  const [activeCapsule, setActiveCapsule] = useState(superpowers[0]);
  const [unlockedIds, setUnlockedIds] = useState([1]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('vault'); // 'vault' | 'cli'

  // CLI state
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState([
    "Moazam DevOps Shell v2.0-aws [Lightweight Mode]",
    "Type 'help' to see commands, or try 'aws s3 ls', 'skills', or 'sudo hire-moazam'.",
  ]);
  const cliBottomRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'cli' && cliBottomRef.current) {
      cliBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cliLogs, activeTab]);

  const handleSelectSuperpower = (sp) => {
    setActiveCapsule(sp);
    if (!unlockedIds.includes(sp.id)) {
      setUnlockedIds([...unlockedIds, sp.id]);
      playSound('unlock', soundEnabled);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#590907', '#E8D2B5', '#1C1917', '#B88455'],
      });
    }
  };

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === 'help') {
      response = "Commands: help, whoami, aws s3 ls, docker ps, skills, sudo hire-moazam, clear";
    } else if (cmd === 'whoami') {
      response = "Moazam Ali | B.S. Computer Engineering (BZU Multan) | CGPA: 3.65 | Aspiring DevOps & Cloud Engineer.";
    } else if (cmd === 'aws s3 ls') {
      response = "2026-11-03 00:15:00 s3://moazam-aws-portfolio-static-assets\n2026-11-03 00:15:00 s3://moazam-server-backups-encrypted";
    } else if (cmd === 'docker ps') {
      response = "CONTAINER ID  IMAGE               STATUS        PORTS\n9f8b7c6a5e12  3tier-api:v1.2.0    Up 4 days     0.0.0.0:8080->8080/tcp\n3e2d1c0b9a8f  3tier-web:v2.0.1    Up 4 days     0.0.0.0:80->80/tcp";
    } else if (cmd === 'skills') {
      response = "AWS (Amplify, S3, CloudFront, EC2, IAM) | Docker | Linux | CI/CD | Bash | Networking";
    } else if (cmd === 'sudo hire-moazam') {
      playSound('unlock', soundEnabled);
      confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
      response = "ACCESS GRANTED: Excellent decision! Let's build scalable cloud infrastructure together! Contact: moazamali517500@gmail.com";
    } else if (cmd === 'clear') {
      setCliLogs([]);
      setCliInput('');
      return;
    } else {
      response = `bash: command not found: ${cmd}. Type 'help' for valid commands.`;
    }

    setCliLogs(prev => [...prev, `moazam@aws-cloud:~$ ${cliInput}`, response]);
    setCliInput('');
  };

  return (
    <section id="vault" className="py-24 bg-canvas-subtle/50 relative border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-burgundy text-xs font-mono font-semibold border border-sand-200">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>05 // Interactive Creative Feature</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                The Superpower Vault & Interactive CLI
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base max-w-xl leading-relaxed">
                An interactive experience revealing personal engineering origin stories and a lightweight cloud terminal.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2.5 rounded-xl bg-white border border-sand-200 text-charcoal-muted hover:text-burgundy hover:border-burgundy/30 transition-all text-xs flex items-center gap-1.5 shadow-subtle hover:scale-105"
                title={soundEnabled ? "Mute audio" : "Enable audio"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-burgundy" /> : <VolumeX className="w-4 h-4 text-charcoal-soft" />}
                <span className="font-mono text-[11px]">{soundEnabled ? "Audio On" : "Muted"}</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tab switchers: Vault Cards vs Interactive Shell */}
        <Reveal delay={100}>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('vault')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                activeTab === 'vault'
                  ? 'bg-burgundy text-white shadow-burgundy scale-105'
                  : 'bg-white text-charcoal-muted hover:text-charcoal border border-sand-200'
              }`}
            >
              Superpower Capsules
            </button>
            <button
              onClick={() => setActiveTab('cli')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                activeTab === 'cli'
                  ? 'bg-burgundy text-white shadow-burgundy scale-105'
                  : 'bg-white text-charcoal-muted hover:text-charcoal border border-sand-200'
              }`}
            >
              Interactive DevOps Shell
            </button>
          </div>
        </Reveal>

        {/* Main Vault Panel */}
        <Reveal delay={150}>
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-subtle">
            
            {activeTab === 'vault' ? (
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Capsule Selector List */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="text-xs font-mono uppercase text-charcoal-soft tracking-wider mb-2">
                    Select a capsule to inspect:
                  </div>
                  {superpowers.map((sp) => {
                    const isSelected = activeCapsule.id === sp.id;
                    const isUnlocked = unlockedIds.includes(sp.id);
                    return (
                      <div
                        key={sp.id}
                        onClick={() => handleSelectSuperpower(sp)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                          isSelected
                            ? 'bg-sand-50 border-burgundy shadow-elevated -translate-y-0.5'
                            : 'bg-canvas border-sand-200 hover:border-sand-300 hover:bg-white'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.2 rounded bg-sand-100 text-burgundy">
                              {sp.tag}
                            </span>
                            <span className="font-bold text-sm text-charcoal">{sp.title}</span>
                          </div>
                          <div className="text-xs text-charcoal-muted line-clamp-1">{sp.subtitle}</div>
                        </div>

                        <div className="shrink-0 pl-2">
                          {isUnlocked ? (
                            <div className="w-6 h-6 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center animate-in zoom-in-50 duration-300">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-sand-100 text-charcoal-soft flex items-center justify-center text-[10px] font-mono">
                              ?
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Active Capsule Detailed View */}
                <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-canvas border border-sand-200 space-y-4 transition-all duration-300 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-sand-100 text-burgundy border border-sand-200">
                      {activeCapsule.tag} SUPERPOWER
                    </span>
                    <span className="text-xs font-mono text-charcoal-soft">
                      Capsule #{activeCapsule.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-charcoal">
                    {activeCapsule.title}
                  </h3>

                  <div className="text-xs font-mono text-burgundy font-semibold">
                    {activeCapsule.subtitle}
                  </div>

                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {activeCapsule.story}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-sand-200 text-xs italic text-charcoal font-serif">
                    {activeCapsule.quote}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-charcoal-soft">
                    <span>Capsules Discovered: {unlockedIds.length} / {superpowers.length}</span>
                    <span className="text-burgundy font-semibold">Non-intrusive interactive design</span>
                  </div>
                </div>

              </div>
            ) : (
              /* Tab 2: Interactive Terminal Shell */
              <div className="space-y-3 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-charcoal text-canvas min-h-[240px] max-h-[320px] overflow-y-auto space-y-2 shadow-inner">
                  {cliLogs.map((log, idx) => (
                    <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                      {log.startsWith("moazam@aws") ? (
                        <span className="text-sand-300 font-bold">{log}</span>
                      ) : log.startsWith("ACCESS GRANTED") ? (
                        <span className="text-emerald-400 font-bold">{log}</span>
                      ) : (
                        <span className="text-slate-300">{log}</span>
                      )}
                    </div>
                  ))}
                  <div ref={cliBottomRef} />
                </div>

                <form onSubmit={handleCliSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-burgundy font-bold">$</span>
                    <input
                      type="text"
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      placeholder="Type 'help', 'aws s3 ls', or 'sudo hire-moazam'..."
                      className="w-full bg-white border border-sand-200 rounded-xl pl-8 pr-4 py-2.5 text-xs text-charcoal placeholder-charcoal-soft focus:outline-none focus:border-burgundy font-mono transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-shimmer px-4 py-2.5 rounded-xl bg-burgundy hover:bg-burgundy-600 text-white font-semibold text-xs transition-all hover:scale-105"
                  >
                    Execute
                  </button>
                </form>
              </div>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}
