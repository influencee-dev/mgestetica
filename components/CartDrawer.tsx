
import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../constants';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppBooking = () => {
    const phoneNumber = CONTACT_INFO.phoneRaw;
    let message = 'Ciao MG Studio Estetica! 👋\nVorrei richiedere i seguenti trattamenti:\n\n';
    
    cart.forEach((item) => {
      message += `✅ ${item.quantity}x ${item.name} (${(item.price * item.quantity).toFixed(2)}€)\n`;
    });
    
    message += `\n💰 *Totale: ${totalPrice.toFixed(2)}€*\n\nQuali sono le prossime disponibilità?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen sm:max-w-md bg-white shadow-2xl flex flex-col transform transition-all duration-300">
          {/* Header */}
          <div className="px-6 py-5 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag size={22} className="text-secondary" />
              <h2 className="text-lg font-serif">Prenotazione</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 active:scale-90"><X size={24} /></button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center p-10">
                <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                <p className="text-sm">Il tuo carrello è vuoto.</p>
                <button onClick={() => setIsCartOpen(false)} className="text-secondary font-bold mt-2 text-xs uppercase tracking-widest underline">Vedi trattamenti</button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-4 items-center">
                  <div className="flex-grow">
                    <h3 className="font-bold text-primary text-sm">{item.name}</h3>
                    <p className="text-[10px] text-gray-500 mb-2">{(item.price).toFixed(2)}€ / seduta</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-primary"><Minus size={12} /></button>
                        <span className="px-3 text-xs font-bold text-primary">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-primary"><Plus size={12} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 p-1"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="text-right font-bold text-primary text-sm">
                    {(item.price * item.quantity).toFixed(2)}€
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-accent/50 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-serif text-primary">Totale Stimato</span>
                <span className="font-bold text-primary">{totalPrice.toFixed(2)}€</span>
              </div>
              <p className="text-[10px] text-gray-400 italic text-center leading-tight">
                Inviando la richiesta su WhatsApp concorderemo insieme data e ora del tuo appuntamento.
              </p>
              <button 
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.15em] text-xs"
              >
                PRENOTA SU WHATSAPP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
