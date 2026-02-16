
import React from 'react';
import { Award, Star, Zap, Shield, TrendingUp, Info } from 'lucide-react';

const KarmaScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="space-y-6 pb-20">
      {/* Karma Header */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] p-8 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Award size={200} />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-orange-100 mb-2">VIDA Karma Points</p>
        <h2 className="text-5xl font-black mb-2">842</h2>
        <div className="flex justify-center gap-1 mb-6">
          <Star size={16} className="fill-white" />
          <Star size={16} className="fill-white" />
          <Star size={16} className="fill-white" />
          <Star size={16} className="fill-white" />
          <Star size={16} className="fill-orange-300" />
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 inline-block">
          <p className="text-[10px] font-bold uppercase tracking-wider">Gold Tier Member</p>
        </div>
      </div>

      {/* Benefits List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Active Benefits</h3>
        
        <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
            <Zap size={24} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">BaaS Discount</p>
            <p className="text-[11px] text-gray-400">15% off monthly subscription</p>
          </div>
          <span className="text-[10px] font-bold bg-gray-50 px-2 py-1 rounded text-gray-500">ACTIVE</span>
        </div>

        <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <Shield size={24} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Extended Warranty</p>
            <p className="text-[11px] text-gray-400">+12 months free coverage</p>
          </div>
          <span className="text-[10px] font-bold bg-blue-600 px-2 py-1 rounded text-white">EARNED</span>
        </div>

        <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
            <TrendingUp size={24} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Resale Multiplier</p>
            <p className="text-[11px] text-gray-400">1.2x boost on final valuation</p>
          </div>
          <span className="text-[10px] font-bold bg-gray-50 px-2 py-1 rounded text-gray-500">NEXT</span>
        </div>
      </div>

      {/* Earn Section */}
      <div className="bg-slate-900 rounded-[2rem] p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Earn More Karma</h3>
          <Info size={16} className="text-slate-400" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <span className="text-sm text-slate-300 italic">Charge only up to 80% (x5)</span>
            <span className="text-orange-400 font-bold">+50 PTS</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <span className="text-sm text-slate-300 italic">No hard braking for 50km</span>
            <span className="text-orange-400 font-bold">+25 PTS</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300 italic">Bi-monthly diagnostic check</span>
            <span className="text-orange-400 font-bold">+100 PTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KarmaScreen;
