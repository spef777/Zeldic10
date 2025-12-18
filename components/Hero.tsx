import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  useGradient?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", delay = 0, useGradient = false }) => {
  const words = text.split(" ");

  return (
    <span className={`block ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => {
            // Calculate global index for delay
            const prevWordsLength = words.slice(0, wordIndex).join("").length + wordIndex;
            const globalIndex = prevWordsLength + charIndex;
            
            return (
              <span
                key={charIndex}
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  animation: 'heroFadeInUp 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards',
                  animationDelay: `${delay + (globalIndex * 0.03)}s`,
                  // Crucial for mobile visibility of gradient text
                  WebkitBackgroundClip: useGradient ? 'text' : 'unset',
                  backgroundClip: useGradient ? 'text' : 'unset',
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Add space after word if it's not the last word */}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center pt-24 overflow-hidden">
      <style>{`
        @keyframes heroFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-violet-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] md:leading-tight">
          <AnimatedText 
            text="More leads" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-100 to-white pb-1"
            delay={0}
            useGradient={true}
          />
          <AnimatedText 
            text="More sales" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 pb-1"
            delay={0.5}
            useGradient={true}
          />
          <AnimatedText 
            text="More growth." 
            className="text-white"
            delay={1.0} 
          />
        </h1>

        <div className="opacity-0 animate-[heroFadeInUp_0.8s_ease-out_1.8s_forwards] px-2">
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We help brands increase visibility, engagement, and sales through strategic digital experiences and data-driven marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-10">
            <a 
              href="tel:+916235448211"
              className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 group"
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