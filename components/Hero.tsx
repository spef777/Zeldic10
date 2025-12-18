import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", delay = 0 }) => {
  // Create an array of characters from the text
  const chars = Array.from(text);

  return (
    <span className={`block ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      {chars.map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(10px)',
            animation: 'heroFadeInUp 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards',
            animationDelay: `${delay + (index * 0.05)}s`,
            whiteSpace: 'pre',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center pt-20">
      <style>{`
        @keyframes heroFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <AnimatedText 
            text="More leads" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-100 to-white pb-2"
            delay={0} 
          />
          <AnimatedText 
            text="More sales" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 pb-2"
            delay={0.6} 
          />
          <AnimatedText 
            text="More growth." 
            className="text-white"
            delay={1.2} 
          />
        </h1>

        <div className="opacity-0 animate-[heroFadeInUp_0.8s_ease-out_2s_forwards]">
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We help brands increase visibility, engagement, and sales through strategic digital experiences and data-driven marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="tel:+916235448211"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center gap-2 group"
            >
              Call Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;