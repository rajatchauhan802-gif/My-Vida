import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Presentation,
  Menu,
  ChevronLeft,
  Info,
  Users
} from 'lucide-react';
import { Screen } from './types';
import DashboardScreen from './screens/DashboardScreen';
import ValuationScreen from './screens/ValuationScreen';
import RewardScreen from './screens/RewardScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import BuybackScreen from './screens/BuybackScreen';
import StrategyScreen from './screens/StrategyScreen';
import ChargingScreen from './screens/ChargingScreen';
import BatteryAnalyticsScreen from './screens/BatteryAnalyticsScreen';
import ImmobilizationScreen from './screens/ImmobilizationScreen';
import CommunityScreen from './screens/CommunityScreen';
import DiagnosticScreen from './screens/DiagnosticScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD);
  const [showWalkthrough, setShowWalkthrough] = useState(true);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD: return <DashboardScreen onNavigate={setCurrentScreen} />;
      case Screen.VALUATION_DETAILS: return <ValuationScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} onNavigate={setCurrentScreen} />;
      case Screen.REWARD_SYSTEM: return <RewardScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} onNavigate={setCurrentScreen} />;
      case Screen.MARKETPLACE: return <MarketplaceScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.BUYBACK_FLOW: return <BuybackScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.STRATEGY_OVERLAY: return <StrategyScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.CHARGING_STATUS: return <ChargingScreen onNavigate={setCurrentScreen} />;
      case Screen.BATTERY_ANALYTICS: return <BatteryAnalyticsScreen onBack={() => setCurrentScreen(Screen.CHARGING_STATUS)} />;
      case Screen.REMOTE_IMMOBILIZATION: return <ImmobilizationScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.COMMUNITY: return <CommunityScreen onNavigate={setCurrentScreen} />;
      case Screen.DIAGNOSTIC: return <DiagnosticScreen onBack={() => setCurrentScreen(Screen.DASHBOARD)} onNavigate={setCurrentScreen} />;
      default: return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  const navItems = [
    { id: Screen.DASHBOARD, icon: LayoutDashboard, label: 'My VIDA' },
    { id: Screen.COMMUNITY, icon: Users, label: 'Community' },
    { id: Screen.MARKETPLACE, icon: ShoppingBag, label: 'Market' },
  ];

  const getNarrative = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD: return "The Hub: Standard VIDA controls mixed with VCLE Asset Valuation to make resale top-of-mind.";
      case Screen.CHARGING_STATUS: return "Utility Context: Every charge session is an opportunity to nudge the user toward better battery health.";
      case Screen.BATTERY_ANALYTICS: return "Data Trust: Granular telemetry transparency that justifies our 'Certified' resale prices.";
      case Screen.REMOTE_IMMOBILIZATION: return "Asset Security: Showing Hero's ability to 'Track & Secure' the asset throughout its lifecycle.";
      case Screen.STRATEGY_OVERLAY: return "The Pitch: How these features transform a bike from a cost to a 'Digital Asset' for Hero.";
      case Screen.REWARD_SYSTEM: return "Incentivized Behavior: Converting good riding and charging habits into direct monetary reward points.";
      case Screen.DIAGNOSTIC: return "Cloud Trust: A real-time hardware scan that verifies asset integrity for both owner and future buyers.";
      default: return "Showing Hero's integrated ecosystem: Usage leads to Data, Data leads to Valuation.";
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#F4F7F8] shadow-2xl relative overflow-hidden font-sans">
      {/* Narrative Toast */}
      {showWalkthrough && (
        <div className="absolute top-20 left-4 right-4 z-50 animate-in slide-in-from-top duration-500">
          <div className="bg-slate-900 text-white p-4 rounded-xl shadow-2xl border border-slate-700 flex items-start gap-3">
            <div className="mt-1"><Info size={18} className="text-blue-400" /></div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Business Logic</p>
              <p className="text-xs leading-snug">{getNarrative()}</p>
              <button 
                onClick={() => setShowWalkthrough(false)}
                className="mt-2 text-[10px] font-bold underline text-blue-400"
              >
                CLOSE WALKTHROUGH
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header (Hidden on specific full-screen views) */}
      {currentScreen !== Screen.CHARGING_STATUS && currentScreen !== Screen.COMMUNITY && currentScreen !== Screen.DIAGNOSTIC && (
        <header className="px-6 pt-4 pb-2 flex items-center gap-3">
          {currentScreen === Screen.DASHBOARD ? (
            <div className="flex-1 bg-white rounded-xl border border-gray-100 p-3 flex items-center gap-3 shadow-sm">
              <Menu size={20} className="text-gray-400" />
              <div className="w-[1px] h-4 bg-gray-200" />
              <span className="text-gray-400 text-sm">Where to?</span>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setCurrentScreen(Screen.DASHBOARD)}
                className="p-2 bg-white rounded-full shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <h1 className="font-bold text-lg uppercase tracking-tight text-slate-700">
                {currentScreen.replace('_', ' ')}
              </h1>
            </>
          )}
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 overflow-y-auto ${currentScreen === Screen.CHARGING_STATUS || currentScreen === Screen.DIAGNOSTIC ? '' : 'px-4'}`}>
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex justify-between items-center z-40">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              currentScreen === item.id 
                ? 'text-orange-600 scale-105' 
                : 'text-gray-400'
            }`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;