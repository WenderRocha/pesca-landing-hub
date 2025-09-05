import { Button } from "@/components/ui/button";
import { Fish } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fish className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AquaPesca
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Galeria
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button variant="hero" size="lg">
          Agendar Pescaria
        </Button>
      </div>
    </header>
  );
};

export default Header;