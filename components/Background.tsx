import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      
      {/* Significantly reduced subtle violet glow */}
      <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-violet-900/5 rounded-full blur-[130px] mix-blend-screen"></div>
      
      {/* Significantly reduced subtle indigo glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-900/3 rounded-full blur-[110px] mix-blend-screen"></div>
      
      {/* Removed center ambient glow to ensure a darker overall background */}
    </div>
  );
};

export default Background;