import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  
  const galleries = [
    {
      id: 1,
      title: "Pesca no Rio Grande",
      location: "São Paulo",
      category: "rio",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      description: "Pescaria matinal com resultado incrível"
    },
    {
      id: 2,
      title: "Expedição Marítima",
      location: "Santos",
      category: "mar",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      description: "Pesca oceânica com espécies variadas"
    },
    {
      id: 3,
      title: "Lago dos Sonhos",
      location: "Minas Gerais",
      category: "lago",
      image: "https://images.unsplash.com/photo-1586281010691-3ffc5a032fbc?w=600&h=400&fit=crop",
      description: "Tranquilidade e peixes de qualidade"
    },
    {
      id: 4,
      title: "Aventura Fluvial",
      location: "Pantanal",
      category: "rio",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "Pesca esportiva no coração do Brasil"
    },
    {
      id: 5,
      title: "Costa Atlântica",
      location: "Bahia",
      category: "mar",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&h=400&fit=crop",
      description: "Pesca embarcada com vista espetacular"
    },
    {
      id: 6,
      title: "Represa Cristalina",
      location: "Goiás",
      category: "lago",
      image: "https://images.unsplash.com/photo-1587036275491-2b0cc00ad3ce?w=600&h=400&fit=crop",
      description: "Águas calmas para pescaria relaxante"
    }
  ];

  const filters = [
    { id: "todos", label: "Todos os Locais" },
    { id: "rio", label: "Rios" },
    { id: "mar", label: "Mar" },
    { id: "lago", label: "Lagos" }
  ];

  const filteredGalleries = activeFilter === "todos" 
    ? galleries 
    : galleries.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Galeria de Aventuras
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Conheça os destinos incríveis onde realizamos nossas pescarias
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleries.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-ocean transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="bg-white/90 text-black hover:bg-white">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Ver Mais Destinos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;