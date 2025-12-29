
import React from 'react';
import { HOME_IMG_1, HERO_FEATURES, CATEGORIES, STATS, HOME_IMG_2 } from '../constants';
import { Mail, Facebook, Instagram, Linkedin, Quote, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={HOME_IMG_1} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Enhanced Overlay for Legibility */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] md:bg-gradient-to-r md:from-white/80 md:to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-7xl font-serif text-primary leading-tight drop-shadow-sm">
              Esperienza Unica <br />
              <span className="text-secondary">& Bellezza</span>
            </h1>
            <p className="text-gray-800 text-lg md:text-xl max-w-md leading-relaxed font-medium">
              Il nostro Studio Estetico offre trattamenti innovativi in un ambiente elegante e rilassante. Prenditi cura di te stessa con MG Studio Estetica.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {HERO_FEATURES.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-primary font-semibold group">
                  <div className="p-2 bg-secondary bg-opacity-20 rounded-full group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    {feat.icon}
                  </div>
                  <span className="text-sm tracking-wide">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/servizi" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-secondary transform hover:scale-105 transition-all uppercase tracking-widest text-sm">
                SCOPRI DI PIÙ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">Benvenuti in MG Studio Estetica</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-500 italic mb-16 text-lg">L'arte della cura della persona a Foggia</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/servizi" key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-full aspect-square mb-6 border-4 border-accent group-hover:border-secondary transition-all shadow-lg">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-xs tracking-tighter uppercase">Vedi Listino</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight px-2">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Offerte Speciali & Promo</h2>
          <p className="max-w-2xl mx-auto mb-16 text-accent font-light">
            Scegli la convenienza dei nostri pacchetti tecnologici. Risparmio e risultati garantiti dai nostri esperti.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Promo Pressoterapia */}
            <div className="bg-white p-2 rounded-3xl shadow-2xl transform hover:-rotate-1 transition-transform">
              <div className="bg-accent rounded-2xl p-8 text-primary text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-sm">
                      <Zap size={32} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2">Risparmia 30€</p>
                    <h4 className="font-serif text-3xl mb-4">Pack 10 Sedute Pressoterapia</h4>
                    <p className="text-gray-600 mb-6 text-sm">Gambe leggere e addio cellulite con il nostro protocollo drenante intensivo.</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className="line-through text-gray-400 text-xl font-medium">€250</span>
                      <span className="font-serif text-5xl text-primary">€220</span>
                    </div>
                    <Link to="/servizi" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-secondary transition-colors">
                      DETTAGLI PROMO <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            {/* Promo Laser */}
            <div className="bg-white p-2 rounded-3xl shadow-2xl transform hover:rotate-1 transition-transform">
              <div className="bg-secondary bg-opacity-10 rounded-2xl p-8 text-primary text-center h-full flex flex-col justify-between border-2 border-secondary/20">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-sm">
                      <Sparkles size={32} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2">Promozione Laser</p>
                    <h4 className="font-serif text-3xl mb-4">Promo Pack Laser 3+1</h4>
                    <p className="text-gray-600 mb-6 text-sm">Acquista un pacchetto da 10 sedute per tre zone a scelta e la quarta è un nostro regalo!</p>
                  </div>
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2">4ª Zona OMAGGIO</span>
                      <p className="text-sm text-gray-500 italic">Prezzi a seduta a partire da 19€</p>
                    </div>
                    <Link to="/servizi" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-secondary transition-colors">
                      VEDI LISTINO LASER <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-accent relative">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                        <div className="text-5xl font-serif text-primary">{stat.value}</div>
                        <div className="text-sm uppercase tracking-widest text-secondary font-semibold">{stat.label}</div>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Testimonials Quote */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Quote size={60} className="mx-auto mb-8 opacity-40 rotate-180" />
          <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            "MG Studio Estetica non è solo un centro estetico, è un'esperienza sensoriale che rigenera lo spirito. Esco sempre rigenerata e luminosa."
          </p>
          <div className="font-bold tracking-widest uppercase text-sm">- Alessandra Marini, Cliente Fedele</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
