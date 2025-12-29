
import React from 'react';
import { Sparkles, Heart, Smartphone, Users, Award, Scissors } from 'lucide-react';

export const COLORS = {
  primary: '#6f5a3f',
  secondary: '#baa98d',
};

export const LOGO_URL = 'https://socialee.it/wp-content/uploads/2025/12/mgestetica-logo.webp';
export const HOME_IMG_1 = 'https://socialee.it/wp-content/uploads/2025/12/522224322_122095770500959612_6430634178454466618_n.webp';
export const HOME_IMG_2 = 'https://socialee.it/wp-content/uploads/2025/12/IMG_1483-scaled.webp';

export const HERO_FEATURES = [
  { icon: <Sparkles size={20} />, text: "Trattamenti Esclusivi" },
  { icon: <Heart size={20} />, text: "Cura del Cliente" },
  { icon: <Smartphone size={20} />, text: "Prenotazione Online" },
  { icon: <Users size={20} />, text: "Esperti Qualificati" },
  { icon: <Award size={20} />, text: "Prodotti Bio" },
  { icon: <Scissors size={20} />, text: "Servizi Su Misura" },
];

export const CATEGORIES = [
  { name: 'Trattamenti Piedi', img: 'https://socialee.it/wp-content/uploads/2025/12/woman-making-pedicure-in-beauty-salon-2024-10-18-06-18-24-utc-scaled.webp' },
  { name: 'Trattamenti Mani', img: 'https://socialee.it/wp-content/uploads/2025/12/peeling-or-moisturizing-procedure-2024-10-18-07-32-14-utc-scaled.webp' },
  { name: 'Trattamenti Viso', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&h=400&auto=format&fit=crop' },
  { name: 'Trattamenti Corpo', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&h=400&auto=format&fit=crop' },
  { name: 'Epilazione', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400&h=400&auto=format&fit=crop' },
];

export const STATS = [
  { label: 'Clienti Felici', value: '500+' },
  { label: 'Esperti', value: '12' },
  { label: 'Trattamenti', value: '45+' },
  { label: 'Anni di Esperienza', value: '15' },
];

export const CONTACT_INFO = {
  phone: '+39 375 748 5705',
  phoneRaw: '393757485705',
  email: 'info@mgstudioestetica.it',
  address: 'Via Marinaccio, 54, 71122 Foggia (FG)',
  instagram: 'https://www.instagram.com/mg_studio_estetica',
  facebook: 'https://www.facebook.com/MGStudioEstetica?locale=it_IT'
};
