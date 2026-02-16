
import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ShieldCheck, 
  MapPin, 
  Battery, 
  History, 
  Zap, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  CheckCircle2,
  Users,
  Camera
} from 'lucide-react';

const MarketplaceScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [filter, setFilter] = useState('All');

  // Using high-fidelity images that match the signature VIDA V1 Orange/White aesthetic
  const MOCK_ASSETS = {
    v1_abraxas_primary: "https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=800",
    v1_abraxas_alt: "https://images.unsplash.com/photo-1558981403-c5f97cb94ad2?auto=format&fit=crop&q=80&w=800",
    v1_matte_black: "https://images.unsplash.com/photo-1620242544252-87c12660d1b3?auto=format&fit=crop&q=80&w=800"
  };

  const recentSales = [
    { model: 'VIDA V1 Pro', price: '₹98,500', location: 'Indiranagar', time: '2h ago', status: 'Verified' },
    { model: 'VIDA V1 Plus', price: '₹1,12,000', location: 'Whitefield', time: '5h ago', status: 'Certified' },
    { model: 'VIDA V1 Pro', price: '₹89,000', location: 'Koramangala', time: '1d ago', status: 'Verified' },
  ];

  const listings = [
    {
      id: 1,
      model: 'VIDA V1 Pro (Abraxas)',
      price: '₹1,02,000',
      soh: '97.2%',
      kms: '1,240 km',
      location: 'Indiranagar, BLR',
      tag: 'VIDA CERTIFIED',
      image: MOCK_ASSETS.v1_abraxas_primary,
      trustScore: 99
    },
    {
      id: 2,
      model: 'VIDA V1 Plus (Matte)',
      price: '₹1,18,000',
      soh: '96.5%',
      kms: '4,200 km',
      location: 'HSR Layout, BLR',
      tag: 'DIRECT BUYBACK',
      image: MOCK_ASSETS.v1_matte_black,
      trustScore: 98
    },
    {
      id: 3,
      model: 'VIDA V1 Pro (Sports)',
      price: '₹95,000',
      soh: '91.8%',
      kms: '8,500 km',
      location: 'Koramangala, BLR',
      tag: 'REFURBISHED',
      image: MOCK_ASSETS.v1_abraxas_alt,
      trustScore: 94
    }
  ];

  return (
    <div className="space-y-6 pb-24">
      <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden mt-2">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-1">Live Resale Exchange</p>
            <h3 className="text-xl font-black tracking-tight">Verified Transactions</h3>
          </div>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/10">
            <Users size={18} className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="space-y-1">
            <p className="text-2xl font-black text-white tracking-tighter">12,482</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">VCLE Certified</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-black text-emerald-400 tracking-tighter">₹84.2Cr</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Market Value</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-end px-1">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Closed in Your Area</h3>
          <span className="text-[9px] font-black text-orange-600 uppercase tracking-tighter">Live Audit Feed</span>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {recentSales.map((sale, i) => (
            <div key={i} className="min-w-[220px] bg-white border border-gray-100 rounded-3xl p-4 shadow-sm flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex-1">
                <p className="font-black text-xs text-slate-800">{sale.model}</p>
                <div className="flex justify-between items-center mt-0.5">
                   <p className="text-[10px] font-black text-emerald-600">{sale.price}</p>
                   <p className="text-[8px] font-bold text-slate-400 uppercase">{sale.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Active VCLE Listings</h3>
        {listings.map(l => (
          <div key={l.id} className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm group hover:shadow-xl transition-all">
            <div className="relative h-72 bg-slate-50">
              <img src={l.image} alt={l.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{l.tag}</span>
                 </div>
                 <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10">
                    <Camera size={12} className="text-orange-400" />
                    <span className="text-[8px] font-black text-white uppercase tracking-tighter">Verified Digital Twin</span>
                 </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-[1.5rem] font-black text-lg shadow-2xl">
                {l.price}
              </div>
              
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-2xl text-[10px] font-black shadow-lg">
                <TrendingUp size={14} />
                {l.trustScore}% VERIFIED
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-black text-2xl text-slate-800 tracking-tight">{l.model}</h4>
                  <div className="flex items-center gap-1.5 text-gray-400 mt-1">
                    <MapPin size={12} className="text-orange-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{l.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                  <Battery size={20} className="mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm font-black text-slate-800">{l.soh}</p>
                  <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1">Health</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                  <Zap size={20} className="mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-black text-slate-800">{l.kms}</p>
                  <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1">Usage</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                  <History size={20} className="mx-auto mb-2 text-orange-600" />
                  <p className="text-sm font-black text-slate-800">1 Owner</p>
                  <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1">History</p>
                </div>
              </div>

              <button className="w-full mt-8 bg-slate-900 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-orange-600 transition-all active:scale-[0.98]">
                Request History Vault Access
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceScreen;
