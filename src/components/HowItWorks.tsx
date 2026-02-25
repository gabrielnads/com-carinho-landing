import { MousePointerClick, Palette, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MousePointerClick,
    title: "Escolha",
    description: "Navegue pela nossa galeria e encontre o cartão perfeito para a ocasião.",
  },
  {
    icon: Palette,
    title: "Personalize",
    description: "Adicione sua mensagem, fotos e crie a experiência digital exclusiva.",
  },
  {
    icon: Send,
    title: "Envie",
    description: "Receba em casa ou envie direto para quem você ama com embalagem especial.",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="section-padding bg-section-white">
      <div className="container-page" ref={ref}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
          Como funciona?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-md mx-auto">
          Em três passos simples, você cria algo inesquecível.
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`text-center ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
