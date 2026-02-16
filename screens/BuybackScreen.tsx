import React from 'react';
import { RefreshCw, FileCheck, Landmark, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const BuybackScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="space-y-6 pb-20">
      {/* Asset Exchange Header - Replaced Tree with Scooter Visual */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-center border border-slate-800 mt-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
             <svg viewBox="0 0 240 140" className="w-12 h-12 fill-orange-500 drop-shadow-[0_0_8px_#f97316]">
               <path d="M55 105 L75 45 L100 45 L120 70 L170 70 L185 105 M75 45 L60 40 L65 25 L85 25 L90 35 L75 45 M85 70 Q120 60 160 70 L165 90 Q120 100 80 90 Z M110 45 Q140 35 170 45 L175 60 Q140 70 115 60 Z" fill="none" stroke="currentColor" strokeWidth="8"/>
               <circle cx="185" cy="105" r="22" fill="none" stroke="currentColor" strokeWidth="8"/>
               <circle cx="55" cy="105" r="22" fill="none" stroke="currentColor" strokeWidth="8"/>
             </svg>
          </div>
          <h2 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">Direct Asset Buyback</h2>
          <p className="text-xs text-slate-400 leading-relaxed px-4">
            Convert your VIDA's hardware integrity into immediate liquidity or upgrade credit.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Valuation Pillars</h3>
        
        <div className="bg-white border border-gray-100 p-5 rounded-3xl flex gap-4 shadow-sm">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
            <Landmark className="text-orange-600" size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Guaranteed Residual Value</p>
            <p className="text-xs text-gray-500 mt-1 leading-normal">
              Cloud-verified price of <strong>₹92,850</strong>. Locked for 48 hours based on your last scan.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-5 rounded-3xl flex gap-4 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <FileCheck className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Automated RC Transfer</p>
            <p className="text-xs text-gray-500 mt-1 leading-normal">
              VIDA Digital Vault handles all RTO documentation and ownership transfer instantly.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-5 rounded-3xl flex gap-4 shadow-sm">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
            <RefreshCw className="text-emerald-600" size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Second-Life Certification</p>
            <p className="text-xs text-gray-500 mt-1 leading-normal">
              Your battery enters our refurb-cycle, sustaining the VIDA ecosystem revenue loop.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-5 rounded-[2.5rem] shadow-2xl space-y-4">
        <div className="flex items-center gap-2 justify-center mb-1">
            <ShieldCheck className="text-emerald-400" size={14} />
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">Hardware Signature Verified</p>
        </div>
        <button className="w-full bg-orange-600 text-white py-6 rounded-[2rem] font-black text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl active:scale-[0.96] transition-all hover:bg-orange-500">
          Unlock Asset Value <ArrowRight size={22} strokeWidth={3} />
        </button>
        <p className="text-center text-[10px] text-slate-500 italic font-medium">Funds processed directly to VIDA Wallet.</p>
      </div>
    </div>
  );
};

export default BuybackScreen;