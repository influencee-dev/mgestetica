
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-10">
      {/* Header Banner */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contattaci</h1>
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-6">Siamo qui per prenderci cura di te</p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Where to find us */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-primary mb-2">Dove Trovarci</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-xl text-white shadow-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Indirizzo</h4>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-xl text-white shadow-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Telefono</h4>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    <p className="text-gray-600 font-medium text-secondary">{CONTACT_INFO.phone} (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-xl text-white shadow-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-accent p-10 rounded-3xl border border-secondary border-opacity-20 shadow-lg text-center md:text-left">
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center justify-center md:justify-start gap-2">
                    <MessageCircle size={28} className="text-secondary" /> Parla con noi
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                    "Il nostro servizio clienti è a tua disposizione per qualsiasi dubbio o per concordare il tuo prossimo appuntamento personalizzato."
                </p>
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-full font-bold shadow-md hover:bg-[#128C7E] transition-all"
                  >
                    PRENOTA SU WHATSAPP
                  </a>
                  <a 
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="flex items-center justify-center w-full border-2 border-primary text-primary py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    CHIAMACI ORA
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
