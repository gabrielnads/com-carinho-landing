import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CardGallery from "@/components/CardGallery";
import SocialProof from "@/components/SocialProof";
import CartSlideIn from "@/components/CartSlideIn";
import SiteFooter from "@/components/SiteFooter";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main>
          <Hero />
          <HowItWorks />
          <Benefits />
          <CardGallery />
          <SocialProof />
        </main>
        <SiteFooter />
        <CartSlideIn />
      </div>
    </CartProvider>
  );
};

export default Index;
