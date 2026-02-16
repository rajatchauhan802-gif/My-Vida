
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Lock,
  MapPin,
  TrendingUp,
  Bluetooth,
  CloudOff,
  ExternalLink,
  Loader2,
  Activity,
  AlertCircle,
  RefreshCw,
  Camera
} from 'lucide-react';
import { Screen } from '../types';
import { GoogleGenAI } from "@google/genai";

const ValuationSparkline = ({ points, isUpdating }: { points: number[], isUpdating: boolean }) => {
  const width = 80;
  const height = 30;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = (max - min) || 1;
  
  const getX = (i: number) => (i / (points.length - 1)) * width;
  const getY = (val: number) => height - ((val - min) / range) * height;

  const pathData = points.map((p, i) => {
    const x = getX(i);
    const y = getY(p);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const lastPoint = {
    x: getX(points.length - 1),
    y: getY(points[points.length - 1])
  };

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path d={pathData} fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.2" />
      <path d={pathData} fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastPoint.x} cy={lastPoint.y} r="3" fill="#10b981" className={`transition-all duration-500 ease-out origin-center ${isUpdating ? 'scale-[1.8]' : 'scale-100'}`} />
    </svg>
  );
};

const DashboardScreen: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  const [valuation, setValuation] = useState(92850);
  const [trendPoints, setTrendPoints] = useState([42, 44, 40, 47, 45, 50, 48]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [nearbyCharger, setNearbyCharger] = useState<{ name: string; uri: string } | null>(null);
  const [loadingCharger, setLoadingCharger] = useState(false);
  const [isMockMode, setIsMockMode] = useState(false);
  const [digitalTwinReady, setDigitalTwinReady] = useState(false);

  // High-fidelity VIDA V1 Image matching the White/Orange aesthetic provided
  const HERO_VIDA_IMAGE = "https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=1000";

  useEffect(() => {
    const timer = setTimeout(() => setDigitalTwinReady(true), 1500);
    const interval = setInterval(() => {
      setIsUpdating(true);
      setValuation(prev => Math.floor(prev + (Math.random() - 0.4) * 80));
      setTrendPoints(prev => [...prev.slice(1), prev[prev.length - 1] + (Math.random() - 0.4) * 10]);
      setTimeout(() => setIsUpdating(false), 800);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const fetchNearbyChargers = async () => {
    setLoadingCharger(true);
    setIsMockMode(false);
    
    setTimeout(() => {
        setNearbyCharger({
            name: "VIDA Hub - Indiranagar",
            uri: "https://www.google.com/maps/search/Hero+VIDA+Charger"
        });
        setLoadingCharger(false);
        setIsMockMode(true);
    }, 1000);
  };

  useEffect(() => { fetchNearbyChargers(); }, []);

  return (
    <div className="space-y-4 pb-8 pt-2">
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden min-h-[380px] flex flex-col justify-between group">
        <div className="flex justify-between items-start z-10">
          <div className="flex flex-col">
             <div className="flex items-center gap-1">
                <span className="text-3xl font-black italic tracking-tighter text-slate-800 leading-none">V1<span className="text-orange-600"> Pro</span></span>
             </div>
             <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Abraxas Edition • VD-92850</p>
          </div>
          <div className="flex gap-4 items-center">
            <Bluetooth size={18} className="text-blue-500" />
            <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
               <span className="text-[8px] font-black text-emerald-600 uppercase">Asset Sync</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          {!digitalTwinReady ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="animate-spin text-orange-600" size={32} />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verifying Digital Signature...</p>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in duration-1000">
              <img 
                src={HERO_VIDA_IMAGE} 
                alt="VIDA V1 Pro" 
                className="h-72 w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-16 w-64 h-12 bg-black/5 rounded-[100%] blur-3xl opacity-40"></div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-end z-10">
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-sm">
             <div className="flex items-center gap-2 mb-1">
                <Camera size={14} className="text-orange-600" />
                <span className="text-[9px] font-black text-slate-800 uppercase tracking-tighter">Verified Render</span>
             </div>
             <p className="text-[8px] font-bold text-emerald-600 uppercase">Matched to Physical Asset</p>
          </div>
          <button onClick={() => onNavigate(Screen.BUYBACK_FLOW)} className="bg-slate-900 p-5 rounded-full text-white hover:bg-orange-600 transition-all active:scale-90 shadow-xl">
            <ArrowRight size={24} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-44 relative overflow-hidden group/tile">
          <div className="z-10">
            {loadingCharger ? (
              <div className="flex flex-col gap-2">
                <Loader2 className="animate-spin text-orange-600" size={24} />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scanning Grid...</p>
              </div>
            ) : nearbyCharger ? (
              <>
                <div className="flex justify-between items-start">
                  <p className="text-lg font-black text-slate-800 tracking-tighter leading-tight mb-1 truncate max-w-[120px]">{nearbyCharger.name}</p>
                  <button onClick={fetchNearbyChargers} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                    <RefreshCw size={12} className="text-slate-300" />
                  </button>
                </div>
                <a href={nearbyCharger.uri} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold text-orange-600 flex items-center gap-1 uppercase tracking-wider">
                  Navigate Now <ExternalLink size={10} />
                </a>
              </>
            ) : null}
          </div>
          <div className="z-10 bg-white shadow-md border border-gray-100 rounded-xl p-3 self-center">
            <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
              <Zap size={20} className="fill-current" />
            </div>
          </div>
        </div>

        <div onClick={() => onNavigate(Screen.CHARGING_STATUS)} className="bg-[#00B11E] rounded-3xl p-4 shadow-sm text-white flex flex-col justify-between h-44 cursor-pointer active:scale-95 transition-all">
          <div>
            <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Battery Status</p>
            <div className="flex items-baseline gap-1">
              <p className="text-5xl font-black tracking-tighter">82</p>
              <span className="text-xl font-bold">%</span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-[9px] font-bold opacity-80 uppercase tracking-tighter">RIDE READY</div>
            <p className="text-xl font-black">82 km</p>
          </div>
        </div>
      </div>

      <div onClick={() => onNavigate(Screen.VALUATION_DETAILS)} className="bg-slate-900 text-white rounded-3xl p-5 shadow-xl flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all relative overflow-hidden">
        <div className="flex items-center gap-4 z-10 flex-1">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ecosystem Value</p>
            <div className="flex items-center gap-2">
              <p className={`text-lg font-bold ${isUpdating ? 'text-emerald-400' : 'text-white'}`}>₹{valuation.toLocaleString()}</p>
              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">+2.4%</span>
            </div>
          </div>
        </div>
        <div className="z-10 px-4">
          <ValuationSparkline points={trendPoints} isUpdating={isUpdating} />
        </div>
        <ChevronRight className="text-slate-600" />
      </div>

      <div className="space-y-3">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-1">Asset Control</h3>
        <div className="grid grid-cols-4 gap-2">
          <div onClick={() => onNavigate(Screen.REMOTE_IMMOBILIZATION)} className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm border border-gray-50 cursor-pointer">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Lock</p>
            <div className="p-2 bg-slate-50 rounded-xl"><Lock className="text-slate-900" size={20} /></div>
          </div>
          <div onClick={() => onNavigate(Screen.DIAGNOSTIC)} className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm border border-orange-100 cursor-pointer group">
            <p className="text-[8px] font-black text-orange-600 uppercase tracking-tighter">Health</p>
            <div className="p-2 bg-orange-50 rounded-xl group-hover:scale-110 transition-transform"><Activity className="text-orange-600" size={20} /></div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm border border-gray-50 opacity-40">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Track</p>
            <div className="p-2 bg-slate-50 rounded-xl"><MapPin className="text-slate-900" size={20} /></div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm border border-gray-50 opacity-40">
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Safe</p>
            <div className="p-2 bg-slate-50 rounded-xl"><ShieldCheck className="text-slate-900" size={20} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
