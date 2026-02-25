import { Heart, Smartphone, Sparkles, Gift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Heart,
    title: "Experiência memorável",
    description: "Muito mais do que um cartão — uma lembrança que toca o coração.",
  },
  {
    icon: Smartphone,
    title: "Físico + digital",
    description: "O melhor dos dois mundos: o toque do papel com a magia do digital.",
  },
  {
    icon: Sparkles,
    title: "Personalização total",
    description: "Mensagens, fotos, vídeos e músicas na experiência digital exclusiva.",
  },
  {
    icon: Gift,
    title: "Entrega especial",
    description: "Embalagem cuidadosa que transforma a entrega em um momento.",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div className="container-page" ref={ref}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
          Por que escolher Com Carinho?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-card rounded-card p-6 shadow-card hover:shadow-hover transition-shadow duration-200 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                <b.icon className="text-accent-foreground" size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
