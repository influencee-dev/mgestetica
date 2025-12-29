
import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Sparkles, User, UserCheck, PlusCircle } from 'lucide-react';
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
        { id: 'p3', name: 'Abbonamento semestrale (6 sed.)', price: '23€*', note: 'Prezzo a seduta' },
        { id: 'p4', name: 'Abbonamento annuale (12 sed.)', price: '21€*', note: 'Prezzo a seduta' },
        { id: 'p5', name: 'Ricostruzione Unghia Alluce', price: '45€' },
        { id: 'p6', name: 'Pedicure SPA Rigenerante', price: '35€' },
        { id: 'p7', name: 'Semipermanente Piedi', price: '15€' },
        { id: 'p8', name: 'Semipermanente (dopo pedicure)', price: '10€' },
      ]
    },
    {
      title: 'Trattamenti Mani',
      items: [
        { id: 'm1', name: 'Manicure Semplice', price: '15€' },
        { id: 'm2', name: 'Manicure SPA Rigenerante', price: '25€' },
        { id: 'm3', name: 'Semipermanente Mani', price: '22€' },
        { id: 'm4', name: 'French', price: '5€' },
        { id: 'm5', name: 'Rimozione Semipermanente', price: '10€' },
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
    { id: 'ed8', name: 'Glutei', price: '10€' },
    { id: 'ed9', name: 'Cosce', price: '15€' },
    { id: 'ed10', name: 'Gambe', price: '15€' },
    { id: 'ed11', name: 'Cera Completa (G+C+I)', price: '40€' },
    { id: 'ed12', name: 'Epilazione + Tinta Sopracciglia', price: '18€' },
  ];

  const epilazioneUomo = [
    { id: 'eu1', name: 'Sopracciglia', price: '8€' },
    { id: 'eu2', name: 'Ascelle', price: '10€' },
    { id: 'eu3', name: 'Braccia', price: '17€' },
    { id: 'eu4', name: 'Petto', price: '25€' },
    { id: 'eu5', name: 'Schiena', price: '25€' },
    { id: 'eu6', name: 'Cosce', price: '25€' },
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
    <div className="pt-10 bg-white">
      {/* Header Banner */}
      <section className="bg-accent py-20 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Listino Trattamenti</h1>
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-6">Eccellenza e cura professionale</p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-8 text-xs text-gray-500 max-w-sm mx-auto">Aggiungi i trattamenti desiderati al carrello per richiedere un preventivo su WhatsApp.</p>
        </div>
      </section>

      {/* Viso & Corpo Intro */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 border border-gray-100 shadow-xl rounded-2xl border-l-4 border-l-secondary relative">
                <h2 className="text-2xl font-serif text-primary mb-6">Trattamenti Viso</h2>
                <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-gray-700">Pulizia del Viso</span>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-primary text-2xl">40€</span>
                      <button 
                        onClick={() => handleAdd({ id: 'v1', name: 'Pulizia del Viso', price: '40€' })}
                        className="p-1 text-secondary hover:text-primary transition-colors"
                      >
                        <PlusCircle size={28} />
                      </button>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">Trattamento profondo per una pelle luminosa e rigenerata.</p>
            </div>
            
            <div className="bg-primary p-8 shadow-xl rounded-2xl text-white">
                <h2 className="text-2xl font-serif mb-6 text-secondary">Trattamenti Corpo</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-medium">Pressoterapia (Seduta singola)</span>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-xl">25€</span>
                        <button 
                          onClick={() => handleAdd({ id: 'c1', name: 'Pressoterapia (Singola)', price: '25€' })}
                          className="p-1 text-secondary hover:text-white transition-colors"
                        >
                          <PlusCircle size={28} />
                        </button>
                      </div>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg border border-white/5">
                      <div>
                        <span className="block font-bold">Pacchetto 10 Sedute</span>
                        <span className="text-xs text-secondary">Risparmia 30€</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="line-through text-xs opacity-60 mr-2">250€</span>
                          <span className="font-bold text-2xl text-secondary">220€</span>
                        </div>
                        <button 
                          onClick={() => handleAdd({ id: 'c2', name: 'Pack 10 Pressoterapia', price: '220€' })}
                          className="p-1 text-secondary hover:text-white transition-colors"
                        >
                          <PlusCircle size={28} />
                        </button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Mani & Piedi Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {maniPiedi.map((cat, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-100 shadow-lg rounded-2xl">
                    <h2 className="text-2xl font-serif text-primary border-b-2 border-secondary pb-4 mb-8 inline-block italic">{cat.title}</h2>
                    <ul className="grid grid-cols-1 gap-4">
                        {cat.items.map((item, i) => (
                            <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-2 group">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{item.name}</span>
                                    {item.note && <span className="text-[10px] text-gray-400 uppercase tracking-widest">{item.note}</span>}
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="font-bold text-primary">{item.price.replace('*', '')}</span>
                                  <button 
                                    onClick={() => handleAdd(item)}
                                    className="text-secondary hover:text-primary transition-colors p-1"
                                    title="Aggiungi al carrello"
                                  >
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

      {/* Laser Special Promo Card */}
      <section className="container mx-auto px-4 mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-accent relative overflow-hidden max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 bg-secondary text-white text-[12px] font-bold px-8 py-2 rounded-bl-3xl uppercase tracking-widest">
                Speciale Tecnologia
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="bg-accent p-10 rounded-full text-primary shrink-0 animate-pulse">
                    <Sparkles size={64} strokeWidth={1} />
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Epilazione Laser Diodo</h2>
                    <p className="text-gray-600 mb-8 italic">Pelle liscia e vellutata con la nostra tecnologia laser indolore ed efficace su ogni fototipo.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        <div className="bg-accent p-4 rounded-xl text-center border border-secondary/20 group relative overflow-hidden">
                            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Zona Piccola</span>
                            <span className="text-3xl font-serif text-primary">19€</span>
                            <button 
                              onClick={() => handleAdd({ id: 'l1', name: 'Laser Zona Piccola', price: '19€' })}
                              className="mt-2 text-primary hover:text-secondary flex items-center justify-center gap-1 w-full text-xs font-bold uppercase transition-colors"
                            >
                              <PlusCircle size={16} /> AGGIUNGI
                            </button>
                        </div>
                        <div className="bg-accent p-4 rounded-xl text-center border border-secondary/20">
                            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Zona Media</span>
                            <span className="text-3xl font-serif text-primary">29€</span>
                            <button 
                              onClick={() => handleAdd({ id: 'l2', name: 'Laser Zona Media', price: '29€' })}
                              className="mt-2 text-primary hover:text-secondary flex items-center justify-center gap-1 w-full text-xs font-bold uppercase transition-colors"
                            >
                              <PlusCircle size={16} /> AGGIUNGI
                            </button>
                        </div>
                        <div className="bg-accent p-4 rounded-xl text-center border border-secondary/20">
                            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Zona Grande</span>
                            <span className="text-3xl font-serif text-primary">39€</span>
                            <button 
                              onClick={() => handleAdd({ id: 'l3', name: 'Laser Zona Grande', price: '39€' })}
                              className="mt-2 text-primary hover:text-secondary flex items-center justify-center gap-1 w-full text-xs font-bold uppercase transition-colors"
                            >
                              <PlusCircle size={16} /> AGGIUNGI
                            </button>
                        </div>
                    </div>

                    <div className="bg-primary text-white p-6 rounded-2xl flex items-center gap-4 shadow-lg border-2 border-secondary relative group">
                        <CheckCircle2 className="text-secondary shrink-0" size={32} />
                        <div className="flex-grow">
                            <p className="font-bold text-lg">PROMO PACK 10</p>
                            <p className="text-sm opacity-90">Acquista un pacchetto da 10 sedute per tre zone... <span className="text-secondary font-bold underline">la quarta zona è in OMAGGIO!</span></p>
                        </div>
                        <button 
                          onClick={() => handleAdd({ id: 'l_promo', name: 'Promo Pack Laser 3+1', price: '0€' })}
                          className="bg-secondary p-3 rounded-xl hover:bg-white hover:text-secondary transition-all"
                          title="Richiedi Promo"
                        >
                          <PlusCircle size={24} />
                        </button>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Epilazione Tradizionale */}
      <section className="py-20 bg-accent/50 border-y border-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">Epilazione Tradizionale</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-gray-500 font-medium">Metodo cera classica per lui e per lei</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Donna */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-2 rounded-lg text-white"><User size={20} /></div>
                <h3 className="text-2xl font-serif text-primary">Listino Donna</h3>
              </div>
              <ul className="space-y-4 bg-white p-8 rounded-2xl shadow-sm">
                {epilazioneDonna.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button 
                        onClick={() => handleAdd(item)}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uomo */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-2 rounded-lg text-white"><UserCheck size={20} /></div>
                <h3 className="text-2xl font-serif text-primary">Listino Uomo</h3>
              </div>
              <ul className="space-y-4 bg-white p-8 rounded-2xl shadow-sm">
                {epilazioneUomo.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button 
                        onClick={() => handleAdd(item)}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-serif text-primary mb-6 italic">Prenota il tuo momento di Relax</h2>
             <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="inline-flex bg-primary text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-secondary transition-all items-center justify-center gap-3 mx-auto uppercase tracking-widest text-sm">
                SCRIVICI SU WHATSAPP <ArrowRight size={20} />
             </a>
             <p className="mt-8 text-gray-400 text-sm">{CONTACT_INFO.address} | Tel: {CONTACT_INFO.phone}</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
