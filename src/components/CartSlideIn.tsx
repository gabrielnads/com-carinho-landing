import { X, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartSlideIn = () => {
  const { items, isOpen, closeCart, removeItem, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/30 z-50" onClick={closeCart} />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-hover slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display font-bold text-xl text-foreground">Seu carrinho</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Fechar carrinho">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center mt-12">Seu carrinho está vazio 🧸</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-20 rounded-lg object-cover bg-muted" />
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm text-foreground">{item.name}</h3>
                    <p className="text-primary font-bold text-sm">
                      {item.quantity}x R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-cta transition-colors"
                    aria-label={`Remover ${item.name}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="font-display font-bold text-foreground">Total</span>
              <span className="font-display font-bold text-xl text-foreground">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <button className="w-full py-4 bg-cta text-cta-foreground font-display font-bold text-lg rounded-button hover:opacity-90 transition-opacity duration-200">
              Finalizar pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSlideIn;
