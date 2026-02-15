import React from 'react';
import { 
  Share2, 
  Target, 
  Monitor, 
  Search, 
  Smartphone, 
  PenTool, 
  Mail, 
  BarChart2 
} from 'lucide-react';
import { ServiceItem } from '../types';
import ScrollReveal from './ScrollReveal';

const servicesList: ServiceItem[] = [
  {
    title: "Social Media Marketing",
    icon: <Share2 size={32} />,
    description: "Building communities and engaging audiences across all major platforms."
  },
  {
    title: "Strategy & Planning",
    icon: <Target size={32} />,
    description: "Data-backed roadmaps to navigate your brand towards market leadership."
  },
  {
    title: "Website Development",
    icon: <Monitor size={32} />,
    description: "High-performance, responsive websites designed to convert visitors."
  },
  {
    title: "SEO",
    icon: <Search size={32} />,
    description: "Search Engine Optimization to increase organic visibility and ranking."
  },
  {
    title: "App Development",
    icon: <Smartphone size={32} />,
    description: "Smart, scalable mobile apps built to perform beautifully and grow with your business"
  },
  {
    title: "Branding & Creative",
    icon: <PenTool size={32} />,
    description: "Visual identity and creative storytelling that resonates with your customers."
  },
  {
    title: "Email & CRM Marketing",
    icon: <Mail size={32} />,
    description: "Personalized communication flows to nurture leads and retain clients."
  },
  {
    title: "Analytics & Reporting",
    icon: <BarChart2 size={32} />,
    description: "Transparent insights and real-time reporting to measure ROI effectively."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
       <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-fuchsia-400 tracking-widest uppercase mb-3">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Our Expertise</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.1} 
              className="h-full"
            >
              <div 
                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-2 duration-300 group cursor-default h-full border border-white/5 hover:border-violet-500/30"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-300 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-violet-200 transition-colors">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Services;