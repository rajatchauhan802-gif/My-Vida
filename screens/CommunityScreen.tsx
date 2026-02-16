
import React from 'react';
import { Screen } from '../types';

const CommunityScreen: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-between">
      <div className="space-y-4 pt-12">
        <h1 className="text-3xl font-light text-slate-800">
          Welcome to the <span className="font-black">VIDA</span><br/>
          <span className="font-black text-orange-600">Community</span>
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Join 50,000+ riders leading the shift to sustainable mobility. Share trips, earn Karma, and trade certified parts.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover" 
                alt="Community Riders" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-6 h-2 bg-orange-600 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
        </div>
      </div>

      <div className="space-y-6">
        <button 
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="w-full bg-orange-600 text-white py-5 rounded-3xl font-bold text-lg shadow-xl active:scale-[0.98] transition-all hover:bg-orange-700"
        >
          Got it. Let’s ride!
        </button>
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            By clicking you agree to our Mobility Terms
        </p>
      </div>
    </div>
  );
};

export default CommunityScreen;
