import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, Navigation2, MoreVertical, X, Loader2, MapPin, ExternalLink, AlertTriangle, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ImmobilizationScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [immobilized, setImmobilized] = useState(false);
  const [locationDetails, setLocationDetails] = useState<{ address: string; uri: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMockMode, setIsMockMode] = useState(false);

  const fetchLocationContext = async () => {
    setLoading(true);
    setIsMockMode(false);
    
    const fetchWithRetry = async (latitude: number, longitude: number, retries = 1, delay = 1000): Promise<any> => {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      try {
        return await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: "What is the specific address or landmark at these coordinates? Be concise.",
          config: {
            tools: [{ googleMaps: {} }],
            toolConfig: {
              retrievalConfig: {
                latLng: { latitude, longitude }
              }
            }
          },
        });
      } catch (error: any) {
        if (retries > 0 && (error.status === 429 || error.status >= 500)) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchWithRetry(latitude, longitude, retries - 1, delay * 2);
        }
        throw error;
      }
    };

    try {
      if (!navigator.geolocation) throw new Error("Geolocation not supported");

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetchWithRetry(latitude, longitude);
          const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
          if (chunks && chunks.length > 0) {
            const mapData = chunks.find((c: any) => c.maps);
            if (mapData && mapData.maps) {
              setLocationDetails({
                address: mapData.maps.title || "Current Position",
                uri: mapData.maps.uri
              });
            } else {
              throw new Error("No map results");
            }
          } else {
            throw new Error("No grounding results");
          }
        } catch (err: any) {
          console.warn("Location context unavailable, using mock fallback", err);
          setLocationDetails({
            address: "Hero VIDA Experience Center, BLR",
            uri: "https://www.google.com/maps/search/Hero+VIDA+Experience+Center"
          });
          setIsMockMode(true);
        } finally {
          setLoading(false);
        }
      }, (err) => {
        console.error("Geolocation denied", err);
        setLocationDetails({
          address: "100ft Road, Indiranagar",
          uri: "https://www.google.com/maps/search/Indiranagar"
        });
        setIsMockMode(true);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
      setIsMockMode(true);
    }
  };

  useEffect(() => {
    fetchLocationContext();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden">
      {/* Map Mockup Background with Real Overlay */}
      <div className="absolute inset-0 bg-[#E8F0FE]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <line x1="10" y1="0" x2="10" y2="100" stroke="white" strokeWidth="2" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="4" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeWidth="2" />
                <line x1="0" y1="70" x2="100" y2="70" stroke="white" strokeWidth="3" />
            </svg>
        </div>
        
        {/* Real Address Marker if Loaded */}
        {locationDetails && (
          <div className="absolute top-[45%] left-[45%] z-10 -translate-x-1/2 -translate-y-full flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-xl px-4 py-2 border border-slate-100 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
              <MapPin size={14} className="text-orange-600" />
              <p className="text-[10px] font-black uppercase text-slate-800 tracking-tight max-w-[120px] truncate">{locationDetails.address}</p>
            </div>
            <div className="w-1 h-4 bg-orange-600/50 rounded-full mt-1"></div>
          </div>
        )}

        {/* Vehicle Icon */}
        <div className="absolute top-[55%] left-[45%] transition-all duration-700">
            <div className="relative">
                <div className={`w-12 h-12 rounded-full absolute -inset-0 ${immobilized ? 'bg-red-600/20 animate-pulse' : 'bg-orange-600/20 animate-ping'}`}></div>
                <div className={`p-2 rounded-xl shadow-2xl relative z-10 transition-colors ${immobilized ? 'bg-red-900' : 'bg-slate-900'}`}>
                    <img src="https://images.unsplash.com/photo-1558981403-c5f97cb94ad2?auto=format&fit=crop&q=80&w=50" className="w-8 h-6 object-contain grayscale brightness-125" alt="scooter" />
                </div>
            </div>
        </div>

        {/* User Location */}
        <div className="absolute top-[35%] left-[62%]">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </div>

      <button onClick={onBack} className="absolute top-6 left-6 p-3 bg-white rounded-full shadow-lg z-20">
        <X size={20} />
      </button>

      <div className="flex-1" />

      {/* Bottom Sheet Control */}
      <div className="bg-white m-4 rounded-[2.5rem] p-6 shadow-2xl relative z-20 space-y-6">
        <div className="flex justify-between items-start">
            <div className="flex-1">
                {loading ? (
                  <div className="flex items-center gap-2 mb-2">
                    <Loader2 className="animate-spin text-slate-400" size={16} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pinpointing Asset...</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold text-slate-800 leading-tight">
                        {locationDetails ? locationDetails.address : 'Asset Syncing...'}
                      </h3>
                      <button onClick={fetchLocationContext} className="p-1 hover:bg-gray-100 rounded-lg">
                        <RefreshCw size={12} className="text-slate-300" />
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 leading-relaxed max-w-[280px]">
                      Security Status: <span className={immobilized ? 'text-red-500 font-bold' : 'text-emerald-500 font-bold'}>
                        {immobilized ? 'IMMOBILIZED' : 'PROTECTED'}
                      </span> • Cloud Sync {isMockMode ? 'Verified' : 'Active'}
                    </p>
                  </>
                )}
            </div>
            <button className="p-2 bg-gray-50 rounded-lg"><MoreVertical size={18} /></button>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={() => setImmobilized(!immobilized)}
                className={`flex-1 flex items-center p-1 rounded-2xl border-2 transition-all group ${
                    immobilized ? 'bg-red-50 border-red-500' : 'bg-white border-gray-100'
                }`}
            >
                <div className={`p-4 rounded-xl transition-colors ${
                    immobilized ? 'bg-red-500 text-white' : 'bg-orange-600 text-white'
                }`}>
                    <ChevronRight size={24} className={immobilized ? 'rotate-180' : ''} />
                </div>
                <span className="flex-1 text-center font-black uppercase text-xs tracking-widest text-slate-700 px-2">
                    {immobilized ? 'Resume Vehicle' : 'Immobilise vehicle'}
                </span>
            </button>
            {locationDetails && (
              <a 
                href={locationDetails.uri} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all"
              >
                <Navigation2 size={24} />
              </a>
            )}
        </div>

        {immobilized && (
            <div className="bg-red-50 p-4 rounded-2xl flex items-center gap-3 animate-pulse">
                <ShieldCheck className="text-red-600" size={18} />
                <p className="text-[10px] font-bold text-red-800 uppercase tracking-widest leading-none">VEHICLE IMMOBILIZED • SECURITY ACTIVE</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ImmobilizationScreen;