
import React from 'react';
import { Info, Zap, ChevronLeft, Battery } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  level: Math.floor(Math.random() * 40) + 20 + (i > 12 ? 10 : 0)
}));

const BatteryAnalyticsScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen text-slate-800 pb-20 pt-4">
      <div className="px-6 space-y-8">
        {/* Battery State Card */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Battery State</h3>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <p className="text-xs font-bold text-gray-400">Battery #1</p>
              <p className="text-2xl font-black text-slate-800">56%</p>
            </div>
            <div className="w-full bg-gray-200 h-10 rounded-xl overflow-hidden mb-6 flex">
              <div className="bg-emerald-500 h-full w-[56%]" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Battery Health</span>
              <span className="text-sm font-bold text-slate-800">Good</span>
            </div>
          </div>
        </section>

        {/* Battery Usage Chart */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Battery Usage</h3>
            <Info size={16} className="text-gray-300" />
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-slate-800">20 Feb, 2025</h4>
              <div className="flex gap-2 text-[10px] font-bold text-gray-400">
                <span>Fri 14</span>
                <span>Sat 15</span>
                <span>Sun 16</span>
                <span className="text-slate-800 border-b-2 border-slate-800">Thu 20</span>
              </div>
            </div>

            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="time" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Bar dataKey="level">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === data.length - 1 ? "#1e293b" : "#94a3b8"} opacity={0.5} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute top-0 right-0 bg-slate-800 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                49% <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Battery Level</span>
            </div>
          </div>
        </section>

        {/* Charging Statistics */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Charging Statistics</h3>
            <div className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-2 text-[10px] font-bold text-slate-600">
              Today <ChevronLeft size={10} className="-rotate-90" />
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 space-y-6 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Energy Consumed (While Charging)</span>
              <span className="font-bold text-slate-800 text-sm">130 kWh</span>
            </div>
            
            <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-orange-600 fill-orange-600" />
                <span className="text-[10px] font-black uppercase tracking-widest italic text-gray-400">Fast</span>
                <span className="text-xs font-bold text-slate-800">Charging Sessions</span>
              </div>
              <span className="font-bold text-slate-800 text-sm">12</span>
            </div>

            <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Battery size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Standard</span>
                <span className="text-xs font-bold text-slate-800">Charging Sessions</span>
              </div>
              <span className="font-bold text-slate-800 text-sm">18</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BatteryAnalyticsScreen;
