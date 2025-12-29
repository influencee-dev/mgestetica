
import React from 'react';
import { HOME_IMG_1, HERO_FEATURES, CATEGORIES, STATS } from '../constants';
import { Quote, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[750px] flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={HOME_IMG_1} 
            alt="Benessere MG Studio Estetica" 
            className="w-full h-full object-cover object-[70%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-white/60 md:bg-gradient-to-r md:from-white/90 md:via-white/50 md:to-transparent backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif text-primary leading-tight">
              Esperienza Unica <br />
              <span className="text-secondary italic">& Bellezza</span>
            </h1>
            <p className="text-gray-700 text-sm md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Il nostro Studio Estetico offre trattamenti innovativi in un ambiente elegante e rilassante a Foggia.
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 md:gap-4 pt-4 text-left max-w-sm mx-auto md:mx-0">
              {HERO_FEATURES.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3 text-primary font-semibold">
                  <div className="p-1.5 md:p-2 bg-secondary/20 rounded-full text-secondary">
                    {React.cloneElement(feat.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <span className="text-[10px] md:text-xs tracking-wide uppercase">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/servizi" className="inline-block bg-primary text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full font-bold shadow-xl hover:bg-secondary active:scale-95 transition-all uppercase tracking-widest text-[10px] md:text-xs">
                VEDI IL LISTINO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Responsive Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-5xl font-serif text-primary mb-2">I Nostri Servizi</h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-500 italic mb-12 md:mb-16 text-sm md:text-lg">Specialisti della tua bellezza naturale</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-10">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/servizi" key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-full aspect-square mb-4 border-2 md:border-4 border-accent group-hover:border-secondary transition-all shadow-md md:shadow-lg">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-[10px] tracking-widest uppercase hidden md:inline">Dettagli</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight px-2">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promos - Optimized Stacking */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-2xl md:text-5xl font-serif mb-4 md:mb-6">Promozioni Attive</h2>
          <p className="max-w-2xl mx-auto mb-10 md:mb-16 text-accent font-light text-sm md:text-base px-4">
            Scopri i vantaggi dei nostri pacchetti tecnologici esclusivi.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Promo 1 */}
            <div className="bg-white p-1.5 rounded-3xl shadow-xl">
              <div className="bg-accent rounded-2xl p-6 md:p-8 text-primary text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-sm">
                      <Zap size={24} />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">Risparmio Immediato</p>
                    <h4 className="font-serif text-xl md:text-3xl mb-3">Pressoterapia Pack</h4>
                    <p className="text-gray-600 mb-6 text-xs md:text-sm">Protocollo drenante intensivo per gambe leggere e toniche.</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className="line-through text-gray-400 text-lg font-medium">€250</span>
                      <span className="font-serif text-3xl md:text-5xl text-primary">€220</span>
                    </div>
                    <Link to="/servizi" className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 rounded-full text-[10px] md:text-sm font-bold hover:bg-secondary transition-colors">
                      SCOPRI DI PIÙ <ArrowRight size={14} />
                    </Link>
                  </div>
              </div>
            </div>

            {/* Promo 2 */}
            <div className="bg-white p-1.5 rounded-3xl shadow-xl">
              <div className="bg-secondary/10 rounded-2xl p-6 md:p-8 text-primary text-center h-full flex flex-col justify-between border-2 border-secondary/10">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-sm">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">Offerta Laser</p>
                    <h4 className="font-serif text-xl md:text-3xl mb-3">Promo Laser 3+1</h4>
                    <p className="text-gray-600 mb-6 text-xs md:text-sm">Ogni 3 zone trattate, la quarta è un nostro regalo per te.</p>
                  </div>
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-widest mb-2">4ª ZONA FREE</span>
                      <p className="text-[10px] text-gray-500 italic">Da soli 19€ a seduta</p>
                    </div>
                    <Link to="/servizi" className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 rounded-full text-[10px] md:text-sm font-bold hover:bg-secondary transition-colors">
                      LISTINO LASER <ArrowRight size={14} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Responsive grid */}
      <section className="py-12 md:py-24 bg-accent">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="text-3xl md:text-5xl font-serif text-primary">{stat.value}</div>
                        <div className="text-[9px] md:text-xs uppercase tracking-widest text-secondary font-bold">{stat.label}</div>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <Quote size={40} className="mx-auto mb-6 opacity-30 rotate-180" />
          <p className="text-lg md:text-2xl font-serif italic mb-6 leading-relaxed">
            "MG Studio Estetica non è solo un centro estetico, è un'esperienza che rigenera lo spirito. Esco sempre luminosa."
          </p>
          <div className="font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">- Alessandra Marini, Foggia</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
