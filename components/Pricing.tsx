import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import ScrollReveal from './ScrollReveal';

const pricingPlans: PricingPlan[] = [
  {
    name: "Essential",
    price: 1400,
    duration: "1 week",
    features: [
      "Facebook and instagram",
      "Ad optimization",
      "7 days runtime",
      "1 Ad design",
      "Location campaigning",
      "1 Sponsored Ad"
    ],
    reachAd: "30k-100k+ views",
    leadAd: "2k-10k+ views"
  },
  {
    name: "Essential +",
    price: 2700,
    duration: "2 weeks",
    features: [
      "Facebook and instagram",
      "Ad optimization",
      "14 days runtime",
      "2 Ad designs",
      "Location campaigning",
      "2 Sponsored Ads"
    ],
    reachAd: "50k-200k+ views",
    leadAd: "5k-20k+ views"
  },
  {
    name: "Advanced",
    price: 4000,
    duration: "3 weeks",
    features: [
      "Facebook and instagram",
      "Ad optimization",
      "21 days runtime",
      "3 Ad designs",
      "Location campaigning",
      "3 Sponsored Ads"
    ],
    reachAd: "80k-300k+ views",
    leadAd: "7k-30k+ views"
  },
  {
    name: "Premium",
    price: 5300,
    duration: "4 weeks",
    features: [
      "Facebook and instagram",
      "Ad optimization",
      "28 days runtime",
      "4 Ad designs",
      "Location campaigning",
      "4 Sponsored Ads"
    ],
    reachAd: "110k-400k+ views",
    leadAd: "10k-40k+ views"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-light text-gray-300">Pricing plans</h2>
            <h3 className="text-5xl font-bold text-white tracking-tight">Business Promotion</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)}
              className="h-full"
            >
              <div 
                className={`glass-panel p-6 rounded-2xl flex flex-col transition-transform hover:scale-105 duration-300 h-full ${index === 2 ? 'border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative' : ''}`}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                {/* Header */}
                <div className="mb-8 text-center">
                  <h4 className="text-2xl font-medium mb-4">{plan.name}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-400 text-sm">/ {plan.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-violet-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Footer */}
                <div className="pt-6 border-t border-white/10 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-full">
                       <p className="text-gray-300 text-sm mb-2">Targeted views (Approx):</p>
                       <div className="flex justify-between items-center text-xs">
                         <span className="text-violet-400 font-semibold">Reach Ad:</span>
                         <span className="text-gray-300">{plan.reachAd}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs mt-1">
                         <span className="text-violet-400 font-semibold">Lead Ad:</span>
                         <span className="text-gray-300">{plan.leadAd}</span>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;