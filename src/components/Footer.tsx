import { Fish, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Fish className="h-8 w-8" />
              <span className="text-2xl font-bold">AquaPesca</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Sua melhor escolha para experiências de pesca inesquecíveis. 
              Conectamos você com a natureza através da pesca responsável e sustentável.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Pesca Guiada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aluguel de Equipamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expedições Especiais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cursos de Pesca</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © 2024 AquaPesca. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Feito com</span>
            <Fish className="h-4 w-4" />
            <span>para pescadores apaixonados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;