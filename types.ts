export enum Screen {
  DASHBOARD = 'DASHBOARD',
  VALUATION_DETAILS = 'VALUATION_DETAILS',
  REWARD_SYSTEM = 'REWARD_SYSTEM',
  MARKETPLACE = 'MARKETPLACE',
  BUYBACK_FLOW = 'BUYBACK_FLOW',
  STRATEGY_OVERLAY = 'STRATEGY_OVERLAY',
  CHARGING_STATUS = 'CHARGING_STATUS',
  BATTERY_ANALYTICS = 'BATTERY_ANALYTICS',
  REMOTE_IMMOBILIZATION = 'REMOTE_IMMOBILIZATION',
  COMMUNITY = 'COMMUNITY',
  DIAGNOSTIC = 'DIAGNOSTIC'
}

export interface ValuationFactor {
  label: string;
  impact: 'positive' | 'negative' | 'neutral';
  score: number;
  description: string;
}

export interface Vehicle {
  id: string;
  model: string;
  price: number;
  soh: number;
  kms: number;
  image: string;
  isVerified: boolean;
  history: string;
}