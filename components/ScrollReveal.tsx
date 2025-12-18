import React, { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in seconds
  duration?: number; // in seconds
  direction?: Direction;
  threshold?: number; // 0.0 to 1.0
  fullWidth?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = 'up',
  threshold = 0.1,
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'up': return 'translate-y-16 opacity-0';
      case 'down': return '-translate-y-16 opacity-0';
      case 'left': return '-translate-x-16 opacity-0';
      case 'right': return 'translate-x-16 opacity-0';
      case 'none': return 'opacity-0';
      default: return 'translate-y-16 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all cubic-bezier(0.17, 0.55, 0.55, 1) ${getTransformClass()} ${fullWidth ? 'w-full' : ''}`}
      style={{ 
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.65, 0.3, 0.9)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;