
import React from 'react';
import { HOME_IMG_1, HERO_FEATURES, CATEGORIES, STATS } from '../constants';
import { Quote, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Optimized for Mobile */}
      <section className="relative min-h-[85vh] md:h-[750px] flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={HOME_IMG_1} 
            alt="Benessere MG Studio Estetica" 
            className="w-full h-full object-cover object-[75%_center] md:object-center"
          />
          {/* Overlay differenziato: più scuro su mobile per leggibilità, sfumato su desktop */}
          <div className="absolute inset-0 bg-white/70 md:bg-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/60 md:to-transparent backdrop-blur-[1px] md:backdrop-blur-none"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-5 md:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full">Benvenuti in MG Studio</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-primary leading-[1.1] md:leading-tight">
                Esperienza Unica <br className="hidden xs:block" />
                <span className="text-secondary italic">& Bellezza</span>
              </h1>
            </div>
            
            <p className="text-gray-700 text-sm md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Scopri il segreto di una pelle radiosa e di un benessere profondo nel cuore di Foggia. 
            </p>
            
            {/* Features ridotte a 2 colonne su mobile molto piccolo per non affollare */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:gap-6 pt-2 text-left max-w-sm mx-auto md:mx-0">
              {HERO_FEATURES.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-primary">
                  <div className="shrink-0 p-1.5 bg-secondary/20 rounded-full text-secondary">
                    {React.cloneElement(feat.icon as React.ReactElement, { size: 14 })}
                  </div>
                  <span className="text-[9px] md:text-xs font-bold tracking-wider uppercase leading-none">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6">
              <Link 
                to="/servizi" 
                className="w-full xs:w-auto inline-flex items-center justify-center bg-primary text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-bold shadow-2xl hover:bg-secondary active:scale-95 transition-all uppercase tracking-[0.2em] text-[11px] md:text-xs"
              >
                SCOPRI I TRATTAMENTI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Responsive Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">I Nostri Servizi</h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-500 italic mb-12 md:mb-16 text-sm md:text-lg px-4">Specialisti della tua bellezza naturale e del benessere corporeo</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/servizi" key={idx} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-full aspect-square mb-5 border-2 md:border-4 border-accent group-hover:border-secondary transition-all shadow-lg">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-[10px] tracking-widest uppercase hidden md:inline">Esplora</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight px-2 h-10 flex items-center justify-center italic">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promos - Optimized Stacking */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        {/* Decorazioni di sfondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">Promozioni Attive</h2>
          <p className="max-w-2xl mx-auto mb-10 md:mb-16 text-accent font-light text-sm md:text-base px-6">
            Approfitta delle nostre offerte esclusive sui pacchetti corpo e tecnologia laser.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-5xl mx-auto px-2">
            {/* Promo 1 */}
            <div className="bg-white p-1.5 rounded-[2rem] shadow-2xl transition-transform hover:-translate-y-1 duration-300">
              <div className="bg-accent rounded-[1.8rem] p-8 md:p-10 text-primary text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-secondary shadow-md">
                      <Zap size={28} />
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary font-black mb-3">Risparmio Garantito</p>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4">Pressoterapia Pack</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-base leading-relaxed">Ciclo completo di 10 sedute per il drenaggio linfatico e la riduzione della cellulite.</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <span className="line-through text-gray-400 text-xl font-medium">€250</span>
                      <span className="font-serif text-4xl md:text-6xl text-primary">€220</span>
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      SCOPRI L'OFFERTA <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            {/* Promo 2 */}
            <div className="bg-white p-1.5 rounded-[2rem] shadow-2xl transition-transform hover:-translate-y-1 duration-300">
              <div className="bg-secondary/10 rounded-[1.8rem] p-8 md:p-10 text-primary text-center h-full flex flex-col justify-between border-2 border-secondary/10">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-secondary shadow-md">
                      <Sparkles size={28} />
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary font-black mb-3">Tecnologia Avanzata</p>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4">Promo Laser 3+1</h4>
                    <p className="text-gray-600 mb-8 text-xs md:text-base leading-relaxed">Il piano definitivo per un'epilazione progressiva: 3 zone pagate + 1 in regalo.</p>
                  </div>
                  <div>
                    <div className="mb-8">
                      <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 shadow-md">4ª ZONA IN OMAGGIO</span>
                      <p className="text-xs text-gray-500 italic">Prezzi a partire da 19€ a seduta</p>
                    </div>
                    <Link to="/servizi" className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-lg uppercase tracking-widest">
                      VAI AL LISTINO LASER <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Responsive grid */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                        <div className="text-4xl md:text-6xl font-serif text-primary">{stat.value}</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold">{stat.label}</div>
                        <div className="w-8 h-0.5 bg-secondary/30 mx-auto mt-2"></div>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-secondary text-white text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-secondary p-4 rounded-full shadow-xl">
           <Quote size={32} />
        </div>
        <div className="container mx-auto px-8 max-w-3xl">
          <p className="text-xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            "MG Studio Estetica è diventato il mio punto di riferimento. Professionalità incredibile e un'atmosfera che ti fa sentire subito a casa."
          </p>
          <div className="font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-white/50"></span>
            Alessandra Marini, Foggia
            <span className="w-8 h-[1px] bg-white/50"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
