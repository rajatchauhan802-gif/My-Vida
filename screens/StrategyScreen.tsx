import React from 'react';
import { Presentation, PieChart, Repeat, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

const StrategyScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="space-y-6 pb-20 pt-4">
      {/* Strategy Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
            <Presentation size={20} />
        </div>
        <div>
            <h2 className="font-extrabold text-xl">VCLE Strategy Hub</h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Internal / CXO View</p>
        </div>
      </div>

      {/* Revenue Pillars */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">New Revenue Streams</h3>
        
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm">
                <DollarSign className="text-blue-600 mb-2" size={20} />
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Commission</p>
                <p className="font-bold text-sm">3-5% P2P Fee</p>
                <p className="text-[9px] text-gray-400 mt-1 leading-tight">Per verified marketplace sale.</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm">
                <BarChart3 className="text-emerald-600 mb-2" size={20} />
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Certification</p>
                <p className="font-bold text-sm">₹2,500 / Unit</p>
                <p className="text-[9px] text-gray-400 mt-1 leading-tight">One-time fee for trust badge.</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm">
                <Repeat className="text-orange-600 mb-2" size={20} />
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Margins</p>
                <p className="font-bold text-sm">12-15% Profit</p>
                <p className="text-[9px] text-gray-400 mt-1 leading-tight">From buyback-refurbish cycle.</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm">
                <TrendingUp className="text-purple-600 mb-2" size={20} />
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Retention</p>
                <p className="font-bold text-sm">BaaS Opti.</p>
                <p className="text-[9px] text-gray-400 mt-1 leading-tight">Reduced churn via loyalty.</p>
            </div>
        </div>
      </div>

      {/* Lifecycle Logic */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Circular Ecosystem Flow</h3>
        
        <div className="relative pl-6 space-y-8 border-l-2 border-slate-200 border-dashed">
            <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></div>
                <p className="font-bold text-xs uppercase text-slate-900">1. Original Sale</p>
                <p className="text-[11px] text-slate-500 mt-1 italic">New unit sold with BaaS subscription.</p>
            </div>
            <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white"></div>
                <p className="font-bold text-xs uppercase text-slate-900">2. Managed Usage</p>
                <p className="text-[11px] text-slate-500 mt-1 italic">Telemetry monitors health. User earns Rewards.</p>
            </div>
            <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <p className="font-bold text-xs uppercase text-slate-900">3. Verified Resale</p>
                <p className="text-[11px] text-slate-500 mt-1 italic">Buyback at 36mo. Refurbishment factory.</p>
            </div>
            <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></div>
                <p className="font-bold text-xs uppercase text-slate-900">4. 2nd Life Monetization</p>
                <p className="text-[11px] text-slate-500 mt-1 italic">Pre-owned sale + Continued BaaS revenue.</p>
            </div>
        </div>
      </div>

      {/* Strategic Impact */}
      <div className="bg-indigo-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-4">Core Business Impact</p>
        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <p className="text-xs text-indigo-100">Resale Anxiety Reduction</p>
                <p className="text-xl font-bold">85%</p>
            </div>
            <div className="w-full bg-indigo-950 h-1.5 rounded-full">
                <div className="bg-emerald-400 h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>
            
            <div className="flex justify-between items-end mt-4">
                <p className="text-xs text-indigo-100">LTV (Lifetime Value) Boost</p>
                <p className="text-xl font-bold">2.4x</p>
            </div>
            <div className="w-full bg-indigo-950 h-1.5 rounded-full">
                <div className="bg-blue-400 h-full rounded-full w-[70%] shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
            </div>
        </div>
        <p className="text-[10px] text-indigo-300 mt-6 italic">
          "Converting the vehicle from a depreciating asset into a managed digital asset."
        </p>
      </div>
    </div>
  );
};

export default StrategyScreen;