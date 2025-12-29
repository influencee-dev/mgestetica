
import React from 'react';
import { HOME_IMG_1, HERO_FEATURES, CATEGORIES, STATS } from '../constants';
import { Quote, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Perfezionata per Mobile */}
      <section className="relative min-h-[90vh] md:h-[800px] flex items-center pt-24 md:pt-32 pb-12">
        <div className="absolute inset-0">
          <img 
            src={HOME_IMG_1} 
            alt="Benessere MG Studio Estetica" 
            className="w-full h-full object-cover object-[80%_center] md:object-center"
          />
          {/* Gradiente più robusto per garantire la leggibilità su ogni dispositivo */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/40 md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.4em] text-secondary uppercase bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
                MG Studio Estetica
              </span>
              <h1 className="text-[2.6rem] xs:text-5xl sm:text-6xl md:text-8xl font-serif text-primary leading-[1.05] md:leading-tight">
                Il tuo <span className="text-secondary italic">Benessere</span><br className="hidden xs:block" />
                è la nostra <br className="hidden xs:block" />
                <span className="text-secondary italic">Passione</span>
              </h1>
            </div>
            
            <p className="text-gray-700 text-sm md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Trattamenti esclusivi e tecnologie all'avanguardia per esaltare la tua bellezza naturale a Foggia.
            </p>
            
            {/* Features: Griglia 2x2 compatta su mobile */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-3 pt-2 text-left max-w-sm mx-auto md:mx-0">
              {HERO_FEATURES.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-primary group">
                  <div className="shrink-0 p-2 bg-white rounded-lg text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(feat.icon as React.ReactElement, { size: 14 })}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase leading-none">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">I Nostri Servizi</h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-500 italic mb-16 text-sm md:text-lg px-6 max-w-2xl mx-auto">
            Scegli il trattamento perfetto per le tue esigenze, dalla cura delle mani all'epilazione laser di ultima generazione.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/servizi" key={idx} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-full aspect-square mb-6 border-2 md:border-4 border-accent group-hover:border-secondary transition-all shadow-xl">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-[10px] tracking-widest uppercase hidden md:inline">Esplora</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight italic px-2">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promos Section */}
      <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Promozioni in Corso</h2>
          <p className="max-w-xl mx-auto mb-16 text-accent font-light text-sm md:text-lg opacity-90 px-4">
            Non perdere le offerte esclusive dedicate ai trattamenti più amati dai nostri clienti.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {/* Promo 1 */}
            <div className="bg-white p-1 rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="bg-accent rounded-[2.4rem] p-8 md:p-12 text-primary flex flex-col justify-between h-full">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary shadow-md rotate-3">
                      <Zap size={32} />
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4 italic">Pressoterapia Drenante</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-sm leading-relaxed px-2">Risultati visibili fin dalle prime sedute. Ideale per gambe gonfie e ritenzione idrica.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <span className="line-through text-gray-400 text-xl">€250</span>
                      <span className="font-serif text-4xl md:text-5xl text-primary font-bold">€220</span>
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      ACQUISTA ORA <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            {/* Promo 2 */}
            <div className="bg-white p-1 rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="bg-secondary/10 rounded-[2.4rem] p-8 md:p-12 text-primary flex flex-col justify-between h-full border border-secondary/20">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary shadow-md -rotate-3">
                      <Sparkles size={32} />
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4 italic">Laser Diodo 3+1</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-sm leading-relaxed px-2">Libera la tua pelle dai peli superflui per sempre con il nostro protocollo avanzato.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-primary text-white py-2 px-6 rounded-full inline-block mx-auto text-[10px] font-bold tracking-widest uppercase">
                      4ª ZONA OMAGGIO
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      DETTAGLI LASER <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 text-center">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="text-4xl md:text-6xl font-serif text-primary font-bold">{stat.value}</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-black">{stat.label}</div>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center pointer-events-none">
           <Quote size={400} />
        </div>
        <div className="container mx-auto px-8 max-w-4xl relative z-10">
          <Quote size={48} className="mx-auto mb-8 opacity-40 rotate-180" />
          <p className="text-2xl md:text-4xl font-serif italic mb-10 leading-snug">
            "Professionalità, accoglienza e competenza. MG Studio è l'oasi di pace di cui Foggia aveva bisogno."
          </p>
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
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
