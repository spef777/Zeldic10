import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      
      {/* Static subtle violet glow */}
      <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[130px] mix-blend-screen"></div>
      
      {/* Static subtle indigo glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-900/15 rounded-full blur-[110px] mix-blend-screen"></div>
      
      {/* Center ambient glow */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-950/10 rounded-full blur-[160px] mix-blend-screen"></div>
      
    </div>
  );
};

export default Background;