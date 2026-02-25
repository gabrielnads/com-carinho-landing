import mascotImg from "@/assets/mascot-bear.png";
import phoneImg from "@/assets/phone-mockup.png";
import cardImg from "@/assets/card-mockup-1.png";

const Hero = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-foreground mb-6">
              Envie carinho de verdade,{" "}
              <span className="text-primary">com um toque digital</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Cartões físicos personalizados com QR Code exclusivo que leva a uma experiência digital inesquecível. Físico + digital = emoção completa.
            </p>
            <a
              href="#modelos"
              className="inline-flex items-center justify-center px-8 py-4 bg-cta text-cta-foreground font-display font-bold text-lg rounded-button shadow-soft hover:shadow-hover hover:scale-[1.03] transition-all duration-200"
            >
              Escolher meu cartão
            </a>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center min-h-[340px] md:min-h-[420px]">
            {/* Card mockup */}
            <img
              src={cardImg}
              alt="Cartão Com Carinho"
              className="w-40 md:w-52 rounded-card shadow-card object-cover absolute left-[10%] md:left-[5%] top-[10%] -rotate-6 z-10"
              loading="lazy"
            />
            {/* Phone mockup */}
            <img
              src={phoneImg}
              alt="Experiência digital no celular"
              className="w-44 md:w-56 rounded-[24px] shadow-hover object-cover relative z-20"
              loading="lazy"
            />
            {/* Mascot */}
            <img
              src={mascotImg}
              alt="Mascote Com Carinho"
              className="w-24 md:w-32 absolute right-[5%] md:right-[5%] bottom-[5%] z-30 drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
