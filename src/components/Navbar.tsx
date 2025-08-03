import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Courses', id: 'courses' },
    { name: 'Career Prep', id: 'career-addons' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'About', id: 'about' },
    { name: 'Contact Us', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-grafanaGray/95 via-grafanaBg/95 to-grafanaGray/95 backdrop-blur-xl shadow-2xl border-b border-grafanaBlue/30' 
        : 'bg-gradient-to-r from-grafanaBg/80 via-grafanaGray/80 to-grafanaBg/80 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-white via-grafanaBlue to-white bg-clip-text text-transparent group-hover:from-grafanaBlue group-hover:to-grafanaGreen transition-all duration-300 drop-shadow-sm">
                Cloud Blogger
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-grafanaGreen transition-colors duration-300">
                Master DevOps • Land Your Dream Job
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm px-4 py-2 rounded-lg group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-grafanaBlue/10 to-grafanaGreen/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-grafanaBlue to-grafanaGreen group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/book-demo')}
              className="relative bg-gradient-to-r from-[#0064d2] to-[#1cb0f6] text-white px-8 py-3 rounded-full font-bold border border-[#1cb0f6] shadow-lg transition-all duration-300 text-sm group overflow-hidden hover:from-[#1cb0f6] hover:to-[#63d0ff] hover:border-[#fa71cd] hover:ring-2 hover:ring-[#1cb0f6]/40 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10">Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-grafanaBlue/20 rounded-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-grafanaGray/95 to-grafanaBg/95 backdrop-blur-xl border-t border-grafanaBlue/30 animate-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-grafanaBlue/10"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); navigate('/book-demo'); }}
                className="w-full bg-gradient-to-r from-grafanaBlue to-grafanaGreen text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-grafana transition-all duration-300 text-sm mt-4"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 