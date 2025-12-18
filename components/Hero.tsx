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
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  animation: 'heroFadeInUp 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards',
                  animationDelay: `${delay + (globalIndex * 0.03)}s`,
                  WebkitBackgroundClip: useGradient ? 'text' : 'unset',
                  backgroundClip: useGradient ? 'text' : 'unset',
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
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center pt-24 overflow-hidden">
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
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.2); }
        }
        @keyframes blob-drift {
          0% { transform: translate(-10%, -10%); }
          50% { transform: translate(10%, 10%); }
          100% { transform: translate(-10%, -10%); }
        }
      `}</style>

      {/* Hero-Specific Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Central Large Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/15 blur-[100px] md:blur-[150px] rounded-full animate-[blob-pulse_10s_infinite_ease-in-out]"></div>
        
        {/* Top-Left Violet Blob */}
        <div className="absolute -top-20 -left-20 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-indigo-600/10 blur-[90px] md:blur-[130px] rounded-full animate-[blob-float_15s_infinite_ease-in-out]"></div>
        
        {/* Bottom-Right Fuchsia Blob */}
        <div className="absolute bottom-10 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-fuchsia-600/10 blur-[80px] md:blur-[120px] rounded-full animate-[blob-float_12s_infinite_linear_reverse]"></div>
        
        {/* Middle-Right Purple Accent */}
        <div className="absolute top-1/3 right-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-purple-500/10 blur-[70px] md:blur-[110px] rounded-full animate-[blob-drift_20s_infinite_ease-in-out]"></div>
        
        {/* Bottom-Left Deep Violet Accent */}
        <div className="absolute bottom-1/4 left-1/4 w-[180px] md:w-[350px] h-[180px] md:h-[350px] bg-violet-900/10 blur-[80px] md:blur-[140px] rounded-full animate-[blob-pulse_8s_infinite_reverse]"></div>
      </div>

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