
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full fixed top-0 z-[60] transition-all duration-300">
      {/* Top Bar - Hidden on small mobile for space */}
      <div className="bg-primary text-white py-1.5 px-4 hidden sm:block text-[10px] md:text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 md:space-x-6">
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone size={12} /> <span className="hidden xs:inline">{CONTACT_INFO.phone}</span>
            </a>
            <span className="flex items-center gap-1.5"><Mail size={12} /> <span className="hidden xs:inline">{CONTACT_INFO.email}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} /> <span>Lun - Sab: 09:00 - 19:30</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <img src={LOGO_URL} alt="MG Studio Estetica" className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-16'} w-auto`} />
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
              className="relative p-2 text-primary hover:text-secondary transition-colors group"
              aria-label="Carrello"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile UI */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 text-primary active:scale-90 transition-transform"
              aria-label="Carrello Mobile"
            >
              <ShoppingBag size={26} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-secondary text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="text-primary p-2 active:scale-90 transition-transform" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div className={`fixed inset-0 top-[70px] bg-white z-50 transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-serif tracking-widest transition-colors ${
                  isActive(link.path) ? 'text-secondary italic' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-10 border-t border-gray-100 w-full max-w-xs space-y-4 text-sm text-gray-500">
               <p className="flex items-center justify-center gap-2"><Phone size={14} /> {CONTACT_INFO.phone}</p>
               <p className="flex items-center justify-center gap-2"><Clock size={14} /> 09:00 - 19:30</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
