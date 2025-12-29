
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
  { name: 'Trattamenti Piedi', img: 'https://images.unsplash.com/photo-1519415510236-8559b198560e?q=80&w=400&h=400&auto=format&fit=crop' },
  { name: 'Trattamenti Mani', img: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=400&h=400&auto=format&fit=crop' },
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

export const TEAM = [
  {
    id: '1',
    name: 'Marta G.',
    role: 'Fondatrice & Master Aesthetician',
    image: 'https://picsum.photos/300/300?random=10',
    email: 'marta@mgstudioestetica.it'
  },
  {
    id: '2',
    name: 'Giulia R.',
    role: 'Specialista Viso',
    image: 'https://picsum.photos/300/300?random=11',
    email: 'giulia@mgstudioestetica.it'
  },
  {
    id: '3',
    name: 'Elena B.',
    role: 'Esperta Massaggi',
    image: 'https://picsum.photos/300/300?random=12',
    email: 'elena@mgstudioestetica.it'
  }
];
