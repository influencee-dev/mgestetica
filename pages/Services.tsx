
import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, User, UserCheck, PlusCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const { addToCart } = useCart();

  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace('€', '').replace(',', '.'));
  };

  const maniPiedi = [
    {
      title: 'Trattamenti Piedi',
      items: [
        { id: 'p1', name: 'Pedicure Professionale', price: '25€' },
        { id: 'p2', name: 'Pedicure Callus Ultra', price: '33€' },
        { id: 'p3', name: 'Abbonamento semestrale', price: '23€*', note: 'A seduta' },
        { id: 'p4', name: 'Abbonamento annuale', price: '21€*', note: 'A seduta' },
        { id: 'p5', name: 'Ricostruzione Unghia', price: '45€' },
        { id: 'p6', name: 'Pedicure SPA', price: '35€' },
        { id: 'p7', name: 'Semipermanente Piedi', price: '15€' },
      ]
    },
    {
      title: 'Trattamenti Mani',
      items: [
        { id: 'm1', name: 'Manicure Semplice', price: '15€' },
        { id: 'm2', name: 'Manicure SPA', price: '25€' },
        { id: 'm3', name: 'Semipermanente Mani', price: '22€' },
        { id: 'm4', name: 'French', price: '5€' },
        { id: 'm5', name: 'Rimozione Semi.', price: '10€' },
        { id: 'm6', name: 'Rimozione + Manicure', price: '18€' },
      ]
    }
  ];

  const epilazioneDonna = [
    { id: 'ed1', name: 'Baffetti', price: '5€' },
    { id: 'ed2', name: 'Sopracciglia', price: '8€' },
    { id: 'ed3', name: 'Ascelle', price: '10€' },
    { id: 'ed4', name: 'Braccia', price: '15€' },
    { id: 'ed5', name: 'Addome', price: '10€' },
    { id: 'ed6', name: 'Inguine', price: '15€' },
    { id: 'ed7', name: 'Inguine Integrale', price: '18€' },
    { id: 'ed10', name: 'Gambe', price: '15€' },
    { id: 'ed11', name: 'Cera Completa', price: '40€' },
  ];

  const epilazioneUomo = [
    { id: 'eu1', name: 'Sopracciglia', price: '8€' },
    { id: 'eu2', name: 'Ascelle', price: '10€' },
    { id: 'eu3', name: 'Braccia', price: '17€' },
    { id: 'eu4', name: 'Petto', price: '25€' },
    { id: 'eu5', name: 'Schiena', price: '25€' },
    { id: 'eu7', name: 'Gambe', price: '25€' },
  ];

  const handleAdd = (item: { id: string, name: string, price: string }) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: parsePrice(item.price)
    });
  };

  return (
    <div className="pt-20 bg-white">
      {/* Header Banner */}
      <section className="bg-accent py-12 md:py-20 mb-8 md:mb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-serif text-primary mb-3">Listino Prezzi</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-500 text-xs md:text-sm max-w-xs mx-auto">Seleziona i trattamenti e prenota in un click tramite WhatsApp.</p>
        </div>
      </section>

      {/* Viso & Corpo - Mobile Responsive */}
      <section className="container mx-auto px-4 mb-12 md:mb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white p-6 md:p-8 border border-gray-100 shadow-lg rounded-2xl border-l-4 border-l-secondary">
                <h2 className="text-xl md:text-2xl font-serif text-primary mb-4">Viso</h2>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                    <span className="font-medium text-sm md:text-base text-gray-700">Pulizia del Viso</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary text-xl">40€</span>
                      <button onClick={() => handleAdd({ id: 'v1', name: 'Pulizia del Viso', price: '40€' })} className="text-secondary active:scale-90 transition-transform">
                        <PlusCircle size={28} />
                      </button>
                    </div>
                </div>
            </div>
            
            <div className="bg-primary p-6 md:p-8 shadow-lg rounded-2xl text-white">
                <h2 className="text-xl md:text-2xl font-serif mb-4 text-secondary">Corpo</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm">Pressoterapia</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">25€</span>
                        <button onClick={() => handleAdd({ id: 'c1', name: 'Pressoterapia (Singola)', price: '25€' })} className="text-secondary active:scale-90 transition-transform">
                          <PlusCircle size={28} />
                        </button>
                      </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <span className="block font-bold text-sm">Pack 10 Sedute</span>
                        <span className="text-[10px] text-secondary font-bold">SALDO -30€</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-xl text-secondary">220€</span>
                        <button onClick={() => handleAdd({ id: 'c2', name: 'Pack 10 Pressoterapia', price: '220€' })} className="text-secondary active:scale-90 transition-transform">
                          <PlusCircle size={28} />
                        </button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Mani & Piedi - Stacking for Mobile */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maniPiedi.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 border border-gray-100 shadow-sm rounded-2xl">
                    <h2 className="text-xl font-serif text-primary border-b border-secondary pb-3 mb-6 italic">{cat.title}</h2>
                    <ul className="space-y-3">
                        {cat.items.map((item, i) => (
                            <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-3">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                    {item.note && <span className="text-[9px] text-gray-400 uppercase">{item.note}</span>}
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="font-bold text-sm text-primary">{item.price.replace('*', '')}</span>
                                  <button onClick={() => handleAdd(item)} className="text-secondary active:scale-90 transition-transform">
                                    <PlusCircle size={22} />
                                  </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Laser Card - Redesigned for Mobile */}
      <section className="container mx-auto px-4 mb-16">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-2 border-accent max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                  <div className="bg-accent p-6 rounded-full text-secondary shrink-0">
                    <Sparkles size={48} strokeWidth={1.5} />
                  </div>
                  
                  <div className="w-full">
                    <h2 className="text-2xl md:text-4xl font-serif text-primary mb-2">Epilazione Laser</h2>
                    <p className="text-gray-500 mb-8 text-xs italic">Risultati permanenti con tecnologia Diodo a Foggia.</p>
                    
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 mb-8">
                        {['Piccola', 'Media', 'Grande'].map((size, i) => {
                          const prices = ['19€', '29€', '39€'];
                          return (
                            <div key={i} className="bg-accent/50 p-4 rounded-xl text-center border border-secondary/10 flex flex-col justify-between">
                              <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">{size}</span>
                              <span className="text-2xl font-serif text-primary mb-2">{prices[i]}</span>
                              <button 
                                onClick={() => handleAdd({ id: `l${i}`, name: `Laser Zona ${size}`, price: prices[i] })}
                                className="text-[9px] font-bold text-primary flex items-center justify-center gap-1 active:text-secondary"
                              >
                                <PlusCircle size={14} /> AGGIUNGI
                              </button>
                            </div>
                          )
                        })}
                    </div>

                    <div className="bg-primary text-white p-5 rounded-2xl flex items-center gap-4 border border-secondary/30">
                        <CheckCircle2 className="text-secondary shrink-0" size={24} />
                        <div className="text-xs">
                            <p className="font-bold uppercase tracking-widest text-secondary">Promo 3+1</p>
                            <p className="opacity-80">Acquista 3 zone, la quarta zona è in omaggio!</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Traditional Epilation - Two Columns Mobile */}
      <section className="py-12 md:py-20 bg-accent/30 border-y border-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary text-center mb-10">Epilazione Cera</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Donna */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-serif text-primary mb-6"><User size={18} /> Donna</h3>
              <ul className="space-y-3">
                {epilazioneDonna.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-600">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button onClick={() => handleAdd(item)} className="text-secondary active:scale-90 transition-transform"><PlusCircle size={18} /></button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uomo */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-serif text-primary mb-6"><UserCheck size={18} /> Uomo</h3>
              <ul className="space-y-3">
                {epilazioneUomo.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-600">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button onClick={() => handleAdd(item)} className="text-secondary active:scale-90 transition-transform"><PlusCircle size={18} /></button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center px-4">
         <h2 className="text-2xl font-serif text-primary mb-6 italic">Scegli la tua Bellezza</h2>
         <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="inline-flex bg-[#25D366] text-white px-10 py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all items-center justify-center gap-2 text-xs uppercase tracking-widest">
            SCRIVICI SU WHATSAPP <ArrowRight size={18} />
         </a>
      </section>
    </div>
  );
};

export default Services;
