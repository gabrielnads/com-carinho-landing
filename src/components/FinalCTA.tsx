import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="section-padding bg-primary/10">
      <div
        ref={ref}
        className={`max-w-[800px] mx-auto text-center transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Transforme sentimentos em algo que se pode tocar 💌
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-[600px] mx-auto">
          Escolha seu cartão, personalize com carinho e surpreenda quem você ama com uma experiência única.
        </p>
        <a
          href="#modelos"
          className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-cta text-cta-foreground font-display font-bold text-lg rounded-button shadow-soft hover:shadow-hover hover:scale-[1.03] active:scale-[0.97] transition-all duration-[250ms] ease-in-out"
        >
          Escolher meu cartão agora
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
