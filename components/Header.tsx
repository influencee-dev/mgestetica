
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ShoppingBag } from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../constants';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVIZI', path: '/servizi' },
    { name: 'CONTATTI', path: '/contatti' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full fixed top-0 z-[60] transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-primary text-white py-1 px-4 hidden md:block text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone size={12} /> <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} /> <span>Lun - Sab: 09:00 - 19:30</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-1 shadow-md' : 'py-2 md:py-4 shadow-sm'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={LOGO_URL} 
              alt="MG Studio Estetica" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto object-contain`} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold tracking-[0.2em] transition-all hover:text-secondary ${
                  isActive(link.path) ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary hover:text-secondary transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile UI */}
          <div className="flex items-center gap-1 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-secondary text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="text-primary p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 top-[60px] md:top-[70px] bg-white z-50 transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-serif tracking-widest ${
                  isActive(link.path) ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
