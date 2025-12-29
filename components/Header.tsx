
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ShoppingBag } from 'lucide-react';
import { LOGO_URL } from '../constants';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVIZI', path: '/servizi' },
    { name: 'CONTATTI', path: '/contatti' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1"><Phone size={14} /> +39 0123 456789</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@mgstudioestetica.it</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} /> Lun - Sab: 09:00 - 19:30
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={LOGO_URL} alt="MG Studio Estetica" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-widest transition-colors hover:text-secondary ${
                  isActive(link.path) ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary hover:text-secondary transition-colors"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary"
            >
              <ShoppingBag size={28} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="text-primary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 flex flex-col items-center space-y-4 py-6 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold tracking-widest transition-colors ${
                  isActive(link.path) ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
