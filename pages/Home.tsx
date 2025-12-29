
import React from 'react';
import { HOME_IMG_1, HERO_FEATURES, CATEGORIES, STATS } from '../constants';
import { Quote, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Fix Mobile Layout & Overlap */}
      <section className="relative min-h-[100dvh] md:min-h-[850px] flex flex-col justify-start md:justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HOME_IMG_1} 
            alt="Benessere MG Studio Estetica" 
            className="w-full h-full object-cover object-[75%_center] md:object-center"
          />
          {/* Solid White Top for Header Blending + Gradient */}
          <div className="absolute inset-0 bg-white/40 md:bg-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent"></div>
        </div>
        
        {/* Content Container - Use explicit top padding to avoid header overlap */}
        <div className="container mx-auto px-6 relative z-10 pt-[120px] pb-12 md:pt-0">
          <div className="max-w-2xl space-y-6 md:space-y-10 text-center md:text-left">
            <div className="space-y-3">
              <span className="inline-block text-[9px] md:text-xs font-bold tracking-[0.4em] text-secondary uppercase bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
                MG STUDIO ESTETICA
              </span>
              <h1 className="text-[2.2rem] xs:text-5xl sm:text-6xl md:text-8xl font-serif text-primary leading-[1.15] md:leading-tight">
                Esperienza Unica <br />
                <span className="text-secondary italic">& Bellezza</span>
              </h1>
            </div>
            
            <p className="text-gray-700 text-sm md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed font-medium px-2 md:px-0">
              Il nostro Studio Estetico offre trattamenti innovativi in un ambiente elegante e rilassante. Prenditi cura di te stessa con noi.
            </p>
            
            {/* Features: Cleaner List for Mobile */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-3 gap-x-4 pt-4 text-left max-w-sm mx-auto md:mx-0">
              {HERO_FEATURES.slice(0, 6).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 bg-white/90 rounded-full text-secondary shadow-sm">
                    {React.cloneElement(feat.icon as React.ReactElement, { size: 14 })}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold tracking-wide text-primary uppercase">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 md:pt-10">
              <Link 
                to="/servizi" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-bold shadow-xl hover:bg-secondary active:scale-95 transition-all uppercase tracking-[0.2em] text-[11px] md:text-xs"
              >
                SCOPRI IL LISTINO <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">I Nostri Servizi</h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-500 italic mb-16 text-sm md:text-lg px-6 max-w-2xl mx-auto">
            Scegli il trattamento perfetto per le tue esigenze, dalla cura dei piedi all'epilazione laser avanzata.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 px-2 md:px-0">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/servizi" key={idx} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-full aspect-square mb-6 border-2 md:border-4 border-accent group-hover:border-secondary transition-all shadow-xl">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-sm md:text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight italic px-1 h-12 flex items-center justify-center">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promos Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Promozioni Attive</h2>
          <p className="max-w-xl mx-auto mb-16 text-accent font-light text-sm md:text-lg opacity-90 px-4">
            Scopri i vantaggi dei nostri pacchetti tecnologici e promozioni stagionali.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {/* Promo 1 */}
            <div className="bg-white p-1 rounded-[2.5rem] shadow-2xl">
              <div className="bg-accent rounded-[2.4rem] p-8 md:p-12 text-primary flex flex-col justify-between h-full">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary shadow-md rotate-3">
                      <Zap size={32} />
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4 italic">Pressoterapia Drenante</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-sm leading-relaxed px-2 italic">10 Sedute per rigenerare il corpo e migliorare la circolazione.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <span className="line-through text-gray-400 text-xl font-medium">€250</span>
                      <span className="font-serif text-4xl md:text-5xl text-primary font-bold">€220</span>
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      PRENOTA ORA <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            {/* Promo 2 */}
            <div className="bg-white p-1 rounded-[2.5rem] shadow-2xl">
              <div className="bg-secondary/10 rounded-[2.4rem] p-8 md:p-12 text-primary flex flex-col justify-between h-full border border-secondary/20">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary shadow-md -rotate-3">
                      <Sparkles size={32} />
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4 italic">Laser Diodo 3+1</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-sm leading-relaxed px-2 italic">Libera la tua pelle per sempre. 3 zone acquistate + 1 in regalo.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-primary text-white py-2 px-6 rounded-full inline-block mx-auto text-[10px] font-bold tracking-widest uppercase shadow-md">
                      4ª ZONA FREE
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      VEDI IL LASER <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent/30 border-y border-accent/50">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 text-center">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="text-4xl md:text-6xl font-serif text-primary font-bold">{stat.value}</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary font-black">{stat.label}</div>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 bg-secondary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-8 max-w-4xl relative z-10">
          <Quote size={48} className="mx-auto mb-8 opacity-40 rotate-180" />
          <p className="text-2xl md:text-4xl font-serif italic mb-10 leading-snug">
            "Professionalità e una cura per il cliente fuori dal comune. MG Studio è l'eccellenza che Foggia meritava."
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase">
            <span className="w-12 h-px bg-white/40"></span>
            Chiara Valenti
            <span className="w-12 h-px bg-white/40"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
