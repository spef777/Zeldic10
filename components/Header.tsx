import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Zeldic Home">
           {/* 
             INSTRUCTIONS: 
             Upload your logo file as "logo.png" to the project root. 
             If the file is missing, this image tag will hide itself.
           */}
           <img 
             src="logo.png" 
             alt="Zeldic Logo" 
             className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
             }}
           />
           <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
               ZELDIC
             </span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Call Button (PC) */}
        <div className="hidden md:block">
          <a 
            href="tel:+916235448211"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            <Phone size={16} className="text-violet-400" />
            <span className="font-semibold text-sm">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-header border-t border-white/5 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-200 hover:text-violet-400 py-2 block text-center cursor-pointer"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="tel:+916235448211"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 rounded-lg text-white font-bold"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;