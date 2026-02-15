import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PricingPlan } from '../types';
import ScrollReveal from './ScrollReveal';

interface PricingProps {
  onPlanSelect?: (name: string, price?: number, duration?: string) => void;
}

const agencyPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: 15000,
    duration: "Month",
    features: [
      "Social Media Setup - 1 Platform",
      "Google My Business Optimization",
      "Social Media Management - 1 Platform",
      "8 Posts/Month",
      "4 Videos(30-40 secs) - Shooting + Editing",
      "4 Designed Posters"
    ]
  },
  {
    name: "Growth Plan",
    price: 22000,
    duration: "Month",
    features: [
      "Includes everything in Starter Plan+",
      "Social Media Management - 2 Platforms",
      "Basic SEO",
      "Meta Ads Initialization and Management (Ad Spent Excluded)",
      "Monthly Performance Reports & Analytics"
    ]
  },
  {
    name: "Professional Plan",
    price: 39000,
    duration: "Month",
    features: [
      "Includes everything in Growth Plan",
      "Advanced SEO Optimization",
      "16+ Posts/Month",
      "8 Videos + 8 Posters",
      "Google and Meta Ads Management (Ad Spent Excluded)",
      "Email Marketing & Automation",
      "Weekly Performance Reports & Analytics"
    ]
  },
  {
    name: "Enterprise Plan",
    price: 59000,
    duration: "Month",
    features: [
      "Includes everything in PRO Plan",
      "Comprehensive Strategy & Execution",
      "24+ Posts/Month",
      "8 Videos + 16 Posters",
      "High-impact PPC + Remarketing",
      "Dedicated account manager",
      "Weekly reporting & Insights"
    ]
  }
];

const promotionPlans: PricingPlan[] = [
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

const PricingCard: React.FC<{ plan: PricingPlan; index: number; isPopular?: boolean; onSelect?: (name: string, price: number, duration: string) => void }> = ({ plan, index, isPopular, onSelect }) => (
  <ScrollReveal 
    direction="up" 
    delay={0.1 + (index * 0.1)}
    className="h-full"
  >
    <div 
      className={`glass-panel p-6 rounded-2xl flex flex-col transition-transform hover:scale-105 duration-300 h-full ${isPopular ? 'border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </div>
      )}
      {/* Header */}
      <div className="mb-8 text-center">
        <h4 className="text-2xl font-medium mb-4">{plan.name}</h4>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
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

      {/* Stats Footer (Only if data exists) */}
      {(plan.reachAd || plan.leadAd) && (
        <div className="pt-6 border-t border-white/10 space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-full">
                <p className="text-gray-300 text-sm mb-2">Targeted views (Approx):</p>
                {plan.reachAd && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-violet-400 font-semibold">Reach Ad:</span>
                    <span className="text-gray-300">{plan.reachAd}</span>
                  </div>
                )}
                {plan.leadAd && (
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-violet-400 font-semibold">Lead Ad:</span>
                    <span className="text-gray-300">{plan.leadAd}</span>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <button 
          onClick={() => {
            if (onSelect) {
                onSelect(plan.name, plan.price, plan.duration);
            }
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
        >
          Choose Plan
        </button>
      </div>
    </div>
  </ScrollReveal>
);

const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  const [showPromotions, setShowPromotions] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Main Section Header */}
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-white tracking-tight">Pricing Plans</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose a plan that fits your goals, budget, and stage of growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Agency Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {agencyPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              index={index} 
              isPopular={index === 1}
              onSelect={onPlanSelect}
            />
          ))}
        </div>

        {/* Business Promotion Toggle Header */}
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-12">
             <button 
               onClick={() => setShowPromotions(!showPromotions)}
               className="group relative inline-block w-full focus:outline-none"
             >
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 hidden md:block group-hover:bg-violet-500/50 transition-colors"></div>
                
                <span className="bg-black px-10 py-2 text-xl md:text-2xl font-bold text-violet-400 tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 group-hover:text-violet-300">
                  Business Promotion
                  {showPromotions ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-violet-400 group-hover:translate-y-1 transition-transform" />
                  )}
                </span>
                
                <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto group-hover:text-violet-200 transition-colors">
                   {showPromotions 
                     ? "Cost-effective ad campaigns built for maximum reach and engagement."
                     : "Click to reveal our high-impact promotional ad campaigns."}
                 </p>
             </button>
          </div>
        </ScrollReveal>

        {/* Promotion Plans Grid */}
        {showPromotions && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {promotionPlans.map((plan, index) => (
              <PricingCard 
                key={index} 
                plan={plan} 
                index={index} 
                isPopular={index === 2}
                onSelect={onPlanSelect}
              />
            ))}
          </div>
        )}

        {/* Custom Plans Section */}
        <ScrollReveal direction="up" duration={0.8}>
            <div className="mt-20 mx-auto w-full md:w-2/3 lg:w-1/2">
                <div className="glass-panel p-8 md:p-10 rounded-2xl text-center relative overflow-hidden group border border-violet-500/20 hover:border-violet-500/40 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-50"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                            <Sparkles size={32} className="text-violet-400" />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom Plans</h3>
                        
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Have something else in mind? We provide tailor-made strategies designed around your goals, budget, and growth stage.
                        </p>
                        
                        <a 
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onPlanSelect) onPlanSelect("Custom Plan");
                                const element = document.getElementById('contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                            }}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 cursor-pointer"
                        >
                            Get a Custom Quote
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Pricing;