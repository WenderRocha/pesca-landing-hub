import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Fish, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-fishing.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        {/* Animated Water Ripples */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 animate-ping animation-delay-1000"></div>
          <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full bg-white/10 animate-ping animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 rounded-full bg-white/10 animate-ping animation-delay-3000"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Fish className="absolute top-20 left-10 h-8 w-8 text-white/20 animate-float" />
        <Fish className="absolute top-40 right-20 h-6 w-6 text-white/15 animate-float animation-delay-1000" />
        <Fish className="absolute bottom-40 left-1/4 h-10 w-10 text-white/10 animate-float animation-delay-2000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12 bg-gradient-sunset"></div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Star className="h-5 w-5 fill-accent text-accent animate-pulse" />
              <span className="text-accent font-semibold tracking-wide">Experiência Premium</span>
              <Star className="h-5 w-5 fill-accent text-accent animate-pulse" />
            </div>
            <div className="h-px w-12 bg-gradient-sunset"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in animation-delay-300">
            <span className="block text-white drop-shadow-2xl">Viva a</span>
            <span className="block bg-gradient-sunset bg-clip-text text-transparent drop-shadow-lg">
              Melhor Aventura
            </span>
            <span className="block text-white drop-shadow-2xl">de Pesca</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600 drop-shadow-lg">
            Embarque em expedições épicas com nossos guias especializados. 
            Explore águas cristalinas e capture memórias que durarão para sempre.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-900">
            <Button variant="hero" size="lg" className="min-w-[220px] group transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center">
                Reservar Aventura
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[220px] border-white/40 text-white hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explorar Pacotes
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-1200">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-sm text-gray-300">Localidades Exclusivas</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Award className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-gray-300">Aventuras Realizadas</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Users className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-sm text-gray-300">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/60 text-xs font-medium tracking-widest">EXPLORE</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-accent transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-gradient-sunset rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;