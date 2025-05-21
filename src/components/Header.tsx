import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Building2 size={32} className="text-[#FF5A00]" />
            <span className="ml-2 text-2xl font-bold text-[#101010]">SyndicPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors">
              Nos Services
            </a>
            <a href="#client" className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors">
              Espace Client
            </a>
            <a href="#syndic" className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors">
              Espace Syndic
            </a>
            <a href="#about" className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors">
              Apropos de nous
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#101010]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full py-4 px-4 mt-2">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Services
            </a>
            <a 
              href="#client" 
              className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Espace Client
            </a>
            <a 
              href="#syndic" 
              className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Espace Syndic
            </a>
            <a 
              href="#about" 
              className="text-[#101010] hover:text-[#FF5A00] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apropos de nous
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;