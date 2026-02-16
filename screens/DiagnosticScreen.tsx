import React, { useState, useEffect } from 'react';
import { ChevronLeft, Zap, ShieldCheck, Cpu, Database, Activity, CheckCircle2, Loader2 } from 'lucide-react';
import { Screen } from '../types';

const DiagnosticScreen: React.FC<{ onBack: () => void; onNavigate: (s: Screen) => void }> = ({ onBack, onNavigate }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const diagnosticSteps = [
    { label: "Syncing Cloud Profile", icon: Database, range: [0, 15] },
    { label: "Probing Front Sensors", icon: Activity, range: [16, 35] },
    { label: "Analyzing Battery Pack", icon: Zap, range: [36, 65] },
    { label: "Verifying Hub Motor", icon: Cpu, range: [66, 90] },
    { label: "Compiling Trust Report", icon: ShieldCheck, range: [91, 100] }
  ];

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress(prev => {
          const next = prev + 0.4;
          const currentStepIndex = diagnosticSteps.findIndex(s => next >= s.range[0] && next <= s.range[1]);
          if (currentStepIndex !== -1) setStep(currentStepIndex);
          return next > 100 ? 100 : next;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setTimeout(() => setIsFinished(true), 1000);
    }
  }, [progress]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Background HUD elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <header className="px-6 pt-12 pb-4 flex items-center justify-between relative z-20">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          <ChevronLeft size={20} />
        </button>
        <div className="text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500 animate-pulse">Telemetry Scan</h2>
            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">VIDA Certified Hardware Check</p>
        </div>
        <div className="w-9" />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        {/* High-Fidelity Neon Scooter Wireframe */}
        <div className="relative w-full max-w-[340px] aspect-video flex items-center justify-center mb-12">
          
          {/* Ambient Glow */}
          <div className={`absolute inset-0 rounded-full blur-[100px] transition-all duration-1000 ${isFinished ? 'bg-emerald-500/10' : 'bg-orange-500/5'}`}></div>

          <svg viewBox="0 0 240 140" className="w-full h-auto drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="scanBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Base Wireframe (Dark State) */}
            <g stroke="#1e293b" strokeWidth="0.75" fill="none">
              {/* Rear Wheel & Motor Hub */}
              <circle cx="185" cy="105" r="22" />
              <circle cx="185" cy="105" r="12" strokeWidth="0.5" />
              {/* Front Wheel */}
              <circle cx="55" cy="105" r="22" />
              {/* Main Frame / Body Shell */}
              <path d="M55 105 L75 45 L100 45 L120 70 L170 70 L185 105" />
              <path d="M75 45 L60 40 L65 25 L85 25 L90 35 L75 45" /> {/* Handlebars/Display area */}
              <path d="M85 70 Q120 60 160 70 L165 90 Q120 100 80 90 Z" /> {/* Footboard/Battery Bay */}
              <path d="M110 45 Q140 35 170 45 L175 60 Q140 70 115 60 Z" /> {/* Seat area */}
            </g>

            {/* Scanning Highlights - Sequentially lighting up the body */}
            <g filter="url(#glow)">
              {/* 1. Handlebars & Front Sensors */}
              <path 
                d="M60 40 L65 25 L85 25 L90 35 L75 45 Z" 
                stroke="#3b82f6" strokeWidth="1.5" fill="none"
                className={`transition-opacity duration-300 ${progress > 15 && progress < 35 ? 'opacity-100' : 'opacity-0'}`}
              />
              {progress >= 35 && <path d="M60 40 L65 25 L85 25 L90 35 L75 45 Z" stroke="#10b981" strokeWidth="1" opacity="0.4" />}

              {/* 2. Battery Bay (The Core) */}
              <path 
                d="M85 70 Q120 60 160 70 L165 90 Q120 100 80 90 Z" 
                stroke="#f97316" strokeWidth="2" fill="none"
                className={`transition-opacity duration-300 ${progress > 35 && progress < 65 ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
              />
              {progress >= 65 && <path d="M85 70 Q120 60 160 70 L165 90 Q120 100 80 90 Z" stroke="#10b981" strokeWidth="1" opacity="0.4" />}

              {/* 3. Powertrain / Rear Motor */}
              <circle 
                cx="185" cy="105" r="22" 
                stroke="#facc15" strokeWidth="1.5" fill="none"
                className={`transition-opacity duration-300 ${progress > 65 && progress < 90 ? 'opacity-100' : 'opacity-0'}`}
              />
              {progress >= 90 && <circle cx="185" cy="105" r="22" stroke="#10b981" strokeWidth="1" opacity="0.4" />}
            </g>

            {/* Vertical Scanning Beam */}
            {!isFinished && (
              <rect 
                x="30" y={progress * 1.4} 
                width="180" height="2" 
                fill="url(#scanBeam)" 
                className="transition-all duration-100 linear shadow-[0_0_15px_#f97316]"
              />
            )}
          </svg>

          {/* Floating Diagnostic Nodes */}
          <div className="absolute inset-0 pointer-events-none">
            {diagnosticSteps.map((s, i) => (
              <div 
                key={i}
                className={`absolute flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-700 ${
                  progress >= s.range[0] 
                    ? 'opacity-100 scale-100 border-white/20 bg-white/5 backdrop-blur-sm' 
                    : 'opacity-0 scale-50 border-transparent'
                }`}
                style={{ 
                  top: i % 2 === 0 ? '10%' : '70%', 
                  left: i * 20 + 5 + '%' 
                }}
              >
                <s.icon size={12} className={progress >= s.range[1] ? 'text-emerald-500' : 'text-orange-500 animate-pulse'} />
                <span className="text-[6px] font-black uppercase tracking-widest mt-1 text-slate-400">
                  {progress >= s.range[1] ? 'PASS' : 'TEST'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status HUD Text */}
        <div className="w-full max-w-sm space-y-6">
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {!isFinished ? (
                    <Loader2 className="animate-spin text-orange-500" size={18} />
                  ) : (
                    <CheckCircle2 className="text-emerald-500" size={20} />
                  )}
                  <h3 className={`text-2xl font-black tracking-tighter uppercase italic ${isFinished ? 'text-emerald-400' : 'text-white'}`}>
                      {isFinished ? 'Trust Verified' : diagnosticSteps[step].label}
                  </h3>
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                   {isFinished ? 'Cloud Sync Complete' : 'Analyzing Hardware Signature'}
                </p>
            </div>

            <div className="relative">
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                        className={`h-full transition-all duration-300 rounded-full ${isFinished ? 'bg-emerald-500 shadow-[0_0_20px_#10b981]' : 'bg-orange-600 shadow-[0_0_20px_#f97316]'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[9px] font-mono text-slate-600">ID: VID_X92_00{Math.floor(progress)}</span>
                  <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">{Math.floor(progress)}% COMPLETE</span>
                </div>
            </div>
        </div>
      </div>

      {/* Results HUD Overlay */}
      <div className={`p-8 bg-gradient-to-t from-black via-slate-900/60 to-transparent backdrop-blur-2xl border-t border-white/10 transition-all duration-1000 transform ${isFinished ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center">
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">State of Health</p>
                <p className="text-2xl font-black text-emerald-400 tracking-tighter">94.2%</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center">
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Asset Value Boost</p>
                <p className="text-2xl font-black text-orange-400 tracking-tighter">+ ₹1,450</p>
            </div>
        </div>
        
        <div className="flex items-center gap-4 p-5 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 mb-8">
            <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
            <div>
               <p className="text-xs font-bold text-emerald-200">VIDA Certified Badge Issued</p>
               <p className="text-[10px] text-emerald-200/60 leading-tight">Your hardware signature is now locked to your VCLE profile.</p>
            </div>
        </div>

        <button 
          onClick={() => onNavigate(Screen.VALUATION_DETAILS)}
          className="w-full bg-orange-600 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl active:scale-[0.98] transition-all hover:bg-orange-500"
        >
          Confirm Assessment
        </button>
      </div>

      {/* Side Decorative Data Stream */}
      <div className="absolute left-4 bottom-1/4 space-y-2 opacity-10 pointer-events-none text-[6px] font-mono">
        {["BATT_TEMP: 32C", "SOH_VAL: 0.942", "CYCLE_CNT: 142", "V_BUS: 52.4V", "IMU_BIAS: 0.002"].map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticScreen;