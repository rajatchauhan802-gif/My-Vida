
import React from 'react';
import { Zap, ChevronLeft, Battery } from 'lucide-react';
import { Screen } from '../types';

const ChargingScreen: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FF4D00] min-h-screen text-white p-6 relative overflow-hidden">
      <header className="flex justify-between items-center mb-8 relative z-10">
        <button 
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="p-3 bg-white/20 backdrop-blur-md rounded-2xl"
        >
          <ChevronLeft size={24} />
        </button>
      </header>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="fill-white" size={20} />
          <span className="text-xs font-black italic tracking-widest uppercase">Fast</span>
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Charging</h2>

        <div className="flex justify-between">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-medium opacity-80 mb-2">Current Charge</p>
              <p className="text-8xl font-black tracking-tighter">80%</p>
            </div>

            <div>
              <p className="text-sm font-medium opacity-80 mb-1">Current range estimate</p>
              <p className="text-5xl font-bold">80 kms</p>
            </div>

            <div>
              <p className="text-sm font-medium opacity-80 mb-1">Time remaining</p>
              <p className="text-5xl font-bold">0h 20m</p>
            </div>
          </div>

          {/* Vertical Battery Indicator (Image 1 style) */}
          <div className="w-24 bg-white/20 rounded-2xl flex flex-col justify-end p-2 border border-white/30 h-[400px]">
            <div className="h-[80%] bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.4)]"></div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <button 
            onClick={() => onNavigate(Screen.DASHBOARD)}
            className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold text-lg shadow-2xl active:scale-[0.98] transition-all"
          >
            End Charging
          </button>
          
          <button 
            onClick={() => onNavigate(Screen.BATTERY_ANALYTICS)}
            className="w-full text-white text-sm font-bold underline text-center block"
          >
            View Battery Analytics
          </button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
    </div>
  );
};

export default ChargingScreen;
