import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCart } from "@/contexts/CartContext";
import cardImg1 from "@/assets/card-mockup-1.png";
import cardImg2 from "@/assets/card-mockup-2.png";
import cardImg3 from "@/assets/card-mockup-3.png";
import cardImg4 from "@/assets/card-mockup-4.png";

const cards = [
  { id: "1", name: "Ursinho Fofo", price: 39.9, image: cardImg1 },
  { id: "2", name: "Flor de Lavanda", price: 39.9, image: cardImg2 },
  { id: "3", name: "Arco-Íris", price: 39.9, image: cardImg3 },
  { id: "4", name: "Estrelinha", price: 39.9, image: cardImg4 },
];

const CardGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { addItem } = useCart();

  return (
    <section id="modelos" className="section-padding bg-section-white">
      <div className="container-page" ref={ref}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
          Nossos modelos
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-md mx-auto">
          Cada cartão é único — escolha o que mais combina com o momento.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`group bg-card rounded-card overflow-hidden shadow-card hover:shadow-hover transition-all duration-200 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground mb-1">{card.name}</h3>
                <p className="text-primary font-bold mb-3">
                  R$ {card.price.toFixed(2).replace(".", ",")}
                </p>
                <button
                  onClick={() => addItem({ id: card.id, name: card.name, price: card.price, image: card.image })}
                  className="w-full py-2.5 bg-cta text-cta-foreground font-display font-bold text-sm rounded-button hover:opacity-90 transition-opacity duration-200"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGallery;
