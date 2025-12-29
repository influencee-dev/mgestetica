
import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppBooking = () => {
    const phoneNumber = '393334445556';
    let message = 'Ciao MG Studio Estetica! 👋\nVorrei prenotare i seguenti trattamenti:\n\n';
    
    cart.forEach((item) => {
      message += `✅ ${item.quantity}x ${item.name} (${(item.price * item.quantity).toFixed(2)}€)\n`;
    });
    
    message += `\n💰 *Totale: ${totalPrice.toFixed(2)}€*\n\nPotreste dirmi le vostre disponibilità? Grazie!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
          {/* Header */}
          <div className="px-6 py-6 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} className="text-secondary" />
              <h2 className="text-xl font-serif font-bold">I Tuoi Trattamenti</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="font-medium">Il tuo carrello è vuoto.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-primary underline font-bold"
                >
                  Sfoglia i trattamenti
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                  <div className="flex-grow">
                    <h3 className="font-bold text-primary">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{(item.price).toFixed(2)}€ / seduta</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 px-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 px-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-bold text-primary">
                    {(item.price * item.quantity).toFixed(2)}€
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-accent border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-center text-xl">
                <span className="font-serif text-primary">Totale Stimato</span>
                <span className="font-bold text-primary">{totalPrice.toFixed(2)}€</span>
              </div>
              <p className="text-xs text-gray-500 italic">
                La prenotazione verrà finalizzata tramite WhatsApp. Riceverai conferma della disponibilità in studio.
              </p>
              <button 
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold shadow-xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
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
