
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="bg-white p-3 rounded-xl inline-block shadow-inner">
            <img src={LOGO_URL} alt="MG Studio Estetica Logo" className="h-12 md:h-16 w-auto" />
          </div>
          <p className="text-xs md:text-sm leading-relaxed max-w-xs">
            Il tuo rifugio di bellezza naturale a Foggia. Rigenera corpo e mente con i nostri trattamenti esclusivi.
          </p>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-secondary text-white transition-all"><Instagram size={20} /></a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-secondary text-white transition-all"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="hidden sm:block">
          <h4 className="text-white text-base md:text-lg font-serif mb-6 border-b border-gray-700 pb-2 inline-block">Navigazione</h4>
          <ul className="space-y-3 text-xs md:text-sm uppercase tracking-widest">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/servizi" className="hover:text-secondary">Servizi</Link></li>
            <li><Link to="/contatti" className="hover:text-secondary">Contatti</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h4 className="text-white text-base md:text-lg font-serif mb-2 md:mb-6 border-b border-gray-700 pb-2 inline-block">Contatti</h4>
          <ul className="space-y-5 text-xs md:text-sm flex flex-col items-center md:items-start">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <span className="break-all">{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8 mt-8 text-center text-[10px] text-gray-500 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© 2025 MG Studio Estetica. Via Marinaccio, 54, Foggia. Tutti i diritti riservati.</p>
        <button 
          onClick={scrollToTop}
          className="bg-primary p-3 rounded-full text-white active:bg-secondary transition-all"
          aria-label="Torna su"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
