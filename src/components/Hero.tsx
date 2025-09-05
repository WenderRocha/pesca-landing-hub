import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-fishing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="text-accent font-semibold">Experiência Premium</span>
            <Star className="h-5 w-5 fill-accent text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Viva a Melhor
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Experiência de Pesca
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Descubra os melhores pontos de pesca com guias experientes. 
            Aventuras inesquecíveis aguardam você nas águas cristalinas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Reservar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
              Ver Pacotes
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Múltiplas Localidades</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Guias Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">100%</span>
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;