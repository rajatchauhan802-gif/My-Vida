import React from 'react';
import { Award, Star, Zap, Shield, TrendingUp, Info, DollarSign, ChevronRight } from 'lucide-react';
import { Screen } from '../types';

const RewardScreen: React.FC<{ onBack: () => void; onNavigate?: (s: Screen) => void }> = ({ onBack, onNavigate }) => {
  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Reward Header - Premium Tier Focus */}
      <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-[3rem] p-10 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
            <Award size={300} strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-100 mb-3 opacity-80">VIDA Reward Points</p>
          <h2 className="text-7xl font-black mb-3 tracking-tighter">842</h2>
          <div className="flex justify-center gap-1.5 mb-8">
            <Star size={18} className="fill-white stroke-none" />
            <Star size={18} className="fill-white stroke-none" />
            <Star size={18} className="fill-white stroke-none" />
            <Star size={18} className="fill-white stroke-none" />
            <Star size={18} className="fill-orange-300 stroke-none" />
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-3 px-6 inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-widest">Gold Tier Active</p>
          </div>
        </div>
      </div>

      {/* Asset Valuation Impact Card */}
      <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/50">
            <DollarSign size={20} />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider">Financial Impact</h3>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Valuation Multiplier</p>
          </div>
        </div>
        <p className="text-2xl font-black text-orange-400 mb-1">+ ₹5,000</p>
        <p className="text-[11px] text-slate-400 leading-relaxed italic">
          Your Reward points currently contribute 4.2% to your vehicle's VIDA Certified resale price.
        </p>
      </div>

      {/* Benefits List */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-2">Current Tier Perks</h3>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white border border-gray-100 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
              <Zap size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">BaaS Optimization</p>
              <p className="text-[11px] text-gray-400 font-medium">15% off monthly subscription</p>
            </div>
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">ACTIVE</span>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Shield size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">Extended Trust</p>
              <p className="text-[11px] text-gray-400 font-medium">+12 months free coverage</p>
            </div>
            <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-tighter">CLAIMED</span>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-3xl flex items-center gap-4 shadow-sm opacity-60">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
              <TrendingUp size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">Priority Buyback</p>
              <p className="text-[11px] text-gray-400 font-medium">Guaranteed 24h payout cycle</p>
            </div>
            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg uppercase tracking-tighter">NEXT TIER</span>
          </div>
        </div>
      </div>

      {/* Earn Section with Nudges */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-black text-lg text-slate-800 leading-tight">Boost Your Points</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Higher points = Higher Resale Value</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl">
            <Info size={18} className="text-slate-300" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center group">
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-700 block group-hover:text-orange-600 transition-colors">Optimal Charging Discipline</span>
              <span className="text-[10px] text-slate-400 font-medium">Maintain 20%-80% range for 5 sessions</span>
            </div>
            <span className="text-sm font-black text-orange-600 bg-orange-50 px-3 py-1.5 rounded-xl ml-4">+50 PTS</span>
          </div>
          
          <div className="flex justify-between items-center group">
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-700 block group-hover:text-orange-600 transition-colors">Eco-Riding Consistency</span>
              <span className="text-[10px] text-slate-400 font-medium">Zero hard braking events over 100km</span>
            </div>
            <span className="text-sm font-black text-orange-600 bg-orange-50 px-3 py-1.5 rounded-xl ml-4">+25 PTS</span>
          </div>
          
          <div 
            onClick={() => onNavigate && onNavigate(Screen.DIAGNOSTIC)}
            className="flex justify-between items-center group cursor-pointer hover:bg-orange-50 p-2 -mx-2 rounded-xl transition-all border border-transparent hover:border-orange-100"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700 block group-hover:text-orange-600 transition-colors">Cloud Diagnostic Sync</span>
                <ChevronRight size={14} className="text-orange-400" />
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Run full remote health check (Monthly)</span>
            </div>
            <span className="text-sm font-black text-orange-600 bg-orange-50 px-3 py-1.5 rounded-xl ml-4">+100 PTS</span>
          </div>
        </div>

        <button 
          onClick={onBack}
          className="w-full mt-10 bg-slate-900 text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-all"
        >
          View Updated Asset Value
        </button>
      </div>
    </div>
  );
};

export default RewardScreen;