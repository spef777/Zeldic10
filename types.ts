import React from 'react';

export interface PricingFeature {
  text: string;
  highlight?: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  duration: string;
  features: string[];
  reachAd?: string;
  leadAd?: string;
}

export interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}