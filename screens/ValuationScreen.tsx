import React from 'react';
import { ShieldCheck, Zap, User, AlertCircle, Settings, CheckCircle2, Award, ChevronRight, TrendingUp, Info, Cpu, ArrowRight, Star } from 'lucide-react';
import { Screen } from '../types';

const ValuationScreen: React.FC<{ onBack: () => void; onNavigate: (s: Screen) => void }> = ({ onBack, onNavigate }) => {
  const factors = [
    {
      icon: Award,
      label: 'Reward Points (Karma)',
      value: '842 Points',
      impact: 'positive',
      points: '+ ₹5,000',
      description: 'Your Gold Tier status and discipline points add a direct premium to the base valuation.',
      actionable: true
    },
    {
      icon: Cpu,
      label: 'Hardware Integrity',
      value: 'Grade A+',
      impact: 'positive',
      points: '+ ₹8,500',
      description: 'System health verified via 42 cloud-points. No unauthorized tampering detected.',
      actionable: true
    },
    {
      icon: Zap,
      label: 'Battery State (SoH)',
      value: '94.2%',
      impact: 'positive',
      points: '+ ₹9,200',
      description: 'Predictive analytics show 4.5 years of prime cycle life remaining.'
    },
    {
      icon: User,
      label: 'Riding Profile',
      value: 'Low Wear',
      impact: 'positive',
      points: '+ ₹3,500',
      description: 'Regenerative braking optimization and smooth powertrain loading profiles.'
    }
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Valuation Summary Header */}
      <div className="text-center pt-8 pb-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Verified Asset Valuation</p>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">₹92,850</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] text-emerald-600 font-black bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
            <ShieldCheck size={12} strokeWidth={3} /> HARDWARE CERTIFIED
          </span>
        </div>
      </div>

      {/* Explicit Reward ROI Breakdown */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pricing Logic</h3>
          <Info size={14} className="text-slate-300" />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center text-sm font-medium text-slate-500">
            <span>Market Base Value (Unverified)</span>
            <span>₹66,650</span>
          </div>
          
          {/* Reward Points specific row */}
          <div 
            onClick={() => onNavigate(Screen.REWARD_SYSTEM)}
            className="flex justify-between items-center text-sm font-bold text-orange-600 cursor-pointer group p-3 bg-orange-50/50 rounded-2xl border border-orange-100 -mx-2"
          >
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-orange-600" />
              <span>Reward Points Bonus (842 pts)</span>
            </div>
            <div className="flex items-center gap-1">
              <span>+ ₹5,000</span>
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-600" />
              <span>Hardware & Usage Premium</span>
            </div>
            <span>+ ₹21,200</span>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Buyback Price</span>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-tighter italic">Highest in segment</span>
            </div>
            <span className="text-2xl font-black text-slate-900">₹92,850</span>
          </div>
        </div>
      </div>

      {/* Detailed Contributors */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-2">Data-Backed Integrity</h3>
        {factors.map((f, i) => (
          <div 
            key={i} 
            onClick={() => f.actionable && (f.label.includes('Reward') ? onNavigate(Screen.REWARD_SYSTEM) : onNavigate(Screen.REWARD_SYSTEM))}
            className={`bg-white border border-gray-100 rounded-3xl p-5 shadow-sm transition-all ${f.actionable ? 'ring-2 ring-orange-50 ring-offset-2 cursor-pointer hover:shadow-md' : ''}`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${f.actionable ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <f.icon size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-sm text-slate-800">{f.label}</p>
                    {f.actionable && <ChevronRight size={14} className="text-orange-400" />}
                  </div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{f.value}</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                f.impact === 'positive' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
              }`}>
                {f.points}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {/* Buyback CTA */}
      <div 
        onClick={() => onNavigate(Screen.BUYBACK_FLOW)}
        className="bg-slate-900 text-white rounded-[2.5rem] p-6 shadow-xl relative overflow-hidden cursor-pointer group active:scale-[0.98] transition-all"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-black leading-tight uppercase tracking-tight">Finalize Buyback</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Withdraw ₹92,850 into VIDA Wallet</p>
          </div>
          <div className="bg-orange-600 p-4 rounded-2xl shadow-lg">
            <ArrowRight size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationScreen;