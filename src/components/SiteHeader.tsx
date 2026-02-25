import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const SiteHeader = () => {
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container-page flex items-center justify-between h-16 px-4 md:px-6">
        <a href="/" className="font-display font-bold text-xl text-foreground tracking-tight">
          Com Carinho 🧸
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Como Funciona</a>
          <a href="#modelos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Modelos</a>
          <a href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Depoimentos</a>
        </nav>
        <button
          onClick={toggleCart}
          className="relative p-2 rounded-button text-foreground hover:bg-muted transition-colors duration-200"
          aria-label="Abrir carrinho"
        >
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-cta text-cta-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
