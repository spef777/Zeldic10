import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm relative z-10 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Zeldic Digital Agency. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;