import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, Briefcase, Send, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [logoClicked, setLogoClicked] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setLogoClicked(logoClicked + 1);
    if (logoClicked === 4) {
      document.dispatchEvent(new CustomEvent('secretFound', { detail: 'logo-click' }));
      setLogoClicked(0);
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home', icon: <Moon size={18} /> },
    { href: '#about', label: 'About', icon: <User size={18} /> },
    { href: '#projects', label: 'Projects', icon: <Code size={18} /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { href: '#contact', label: 'Contact', icon: <Send size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-white flex items-center gap-2 hoverable"
            onClick={handleLogoClick}
            id="logo"
          >
            <span className="text-primary font-MyFont">Kartik Pundir</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link hoverable ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                <span className="flex items-center gap-1">
                  {link.icon}
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-white hoverable"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-surface/95 backdrop-blur-lg mt-2"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
