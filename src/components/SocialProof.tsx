import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Ana Clara",
    text: "Minha mãe chorou de emoção ao escanear o QR Code. A experiência digital é mágica!",
    rating: 5,
  },
  {
    name: "Rafael S.",
    text: "Presenteei minha namorada e ela amou. O cartão é lindo e a parte digital surpreendeu demais.",
    rating: 5,
  },
  {
    name: "Camila R.",
    text: "Qualidade incrível, entrega rápida. Já é meu presente favorito pra dar.",
    rating: 5,
  },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-page" ref={ref}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
          Quem recebeu, amou 💕
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12">
          Mais de <span className="font-bold text-foreground">2.000 cartões</span> enviados com carinho.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-card p-6 shadow-card ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-secondary-foreground text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-display font-bold text-sm text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
