
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Info */}
        <div className="flex flex-col space-y-6">
          {/* Logo in a white box */}
          <div className="bg-white p-4 rounded-xl inline-block self-start shadow-inner">
            <img src={LOGO_URL} alt="MG Studio Estetica" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed">
            MG Studio Estetica è il tuo rifugio di bellezza dove ogni trattamento è studiato per rigenerare corpo e mente. La nostra missione è esaltare la tua bellezza naturale.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary hover:text-white transition-all"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-lg font-serif mb-6 border-b border-gray-700 pb-2">Link Rapidi</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/servizi" className="hover:text-secondary transition-colors">I Nostri Servizi</Link></li>
            <li><Link to="/contatti" className="hover:text-secondary transition-colors">Contattaci</Link></li>
            <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookie" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white text-lg font-serif mb-6 border-b border-gray-700 pb-2">Contattaci</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>Via della Bellezza, 12<br />00100 Roma (RM)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <span>+39 0123 456789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <span>info@mgstudioestetica.it</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500 container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 MG Studio Estetica. Tutti i diritti riservati. Designed with love.</p>
        <button 
          onClick={scrollToTop}
          className="bg-primary p-2 rounded-full text-white hover:bg-secondary transition-all"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
