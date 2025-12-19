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
            const prevWordsLength = words.slice(0, wordIndex).join("").length + wordIndex;
            const globalIndex = prevWordsLength + charIndex;
            
            return (
              <span
                key={charIndex}
                aria-hidden="true"
                className={useGradient ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-300 to-white" : ""}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  animation: 'heroFadeInUp 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards',
                  animationDelay: `${delay + (globalIndex * 0.03)}s`,
                  WebkitBackgroundClip: useGradient ? 'text' : 'unset',
                  backgroundClip: useGradient ? 'text' : 'unset',
                  // Ensure background is visible even if clipping is finicky
                  backgroundImage: useGradient ? 'linear-gradient(to right, #ffffff, #c4b5fd, #ffffff)' : 'none',
                }}
              >
                {char}
              </span>
            );
          })}
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
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center pt-24 overflow-hidden bg-black">
      <style>{`
        @keyframes heroFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob-pulse-vivid {
          0%, 100% { opacity: 0.2; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.4; transform: scale(1.4) translate(-50%, -50%); }
        }
      `}</style>

      {/* Hero-Specific Background Blobs - High Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Central Vivid Glow */}
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-violet-600/30 blur-[80px] md:blur-[150px] rounded-full animate-[blob-pulse-vivid_10s_infinite_ease-in-out]"></div>
        
        {/* Top-Left Violet Blob */}
        <div className="absolute -top-10 -left-10 w-[200px] md:w-[450px] h-[200px] md:h-[450px] bg-indigo-500/25 blur-[60px] md:blur-[120px] rounded-full animate-[blob-float_15s_infinite_ease-in-out]"></div>
        
        {/* Bottom-Right Fuchsia Blob */}
        <div className="absolute bottom-20 -right-10 w-[220px] md:w-[500px] h-[220px] md:h-[500px] bg-fuchsia-600/20 blur-[70px] md:blur-[140px] rounded-full animate-[blob-float_12s_infinite_linear_reverse]"></div>
        
        {/* Extra Mobile-Focused Blob (Center Bottom) */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[200px] bg-violet-500/20 blur-[70px] rounded-full md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.2] md:leading-tight px-2">
          <div className="mb-2">
            <AnimatedText 
              text="More leads" 
              className="text-white"
              delay={0}
              useGradient={true}
            />
          </div>
          <div className="mb-2">
            <AnimatedText 
              text="More sales" 
              className="text-white"
              delay={0.5}
              useGradient={true}
            />
          </div>
          <AnimatedText 
            text="More growth." 
            className="text-white"
            delay={1.0} 
          />
        </h1>

        <div className="opacity-0 animate-[heroFadeInUp_0.8s_ease-out_1.8s_forwards] px-4">
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We help brands increase visibility, engagement, and sales through strategic digital experiences and data-driven marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-10">
            <a 
              href="tel:+916235448211"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-xl border border-violet-500 hover:bg-violet-600/20 hover:border-violet-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] flex items-center justify-center gap-2 group"
            >
              Call Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;