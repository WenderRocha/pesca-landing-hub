import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Experiência incrível! O guia conhecia os melhores pontos e conseguimos pescar várias espécies. Recomendo demais!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "Minha primeira vez pescando e foi perfeita! A equipe foi muito paciente e atenciosa. Já marquei a próxima viagem.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b04b?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Organização impecável! Desde o transporte até os equipamentos, tudo funcionou perfeitamente. Voltarei com certeza.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Ana Costa",
      location: "Brasília, DF",
      rating: 5,
      comment: "A expedição de 3 dias foi sensacional! Paisagens lindas, boa comida e muitos peixes. Uma experiência única!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Roberto Lima",
      location: "Salvador, BA",
      rating: 5,
      comment: "Profissionais excelentes e locais paradisíacos. A pesca no mar foi inesquecível. Super recomendo a AquaPesca!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Luciana Ferreira",
      location: "Goiânia, GO",
      rating: 5,
      comment: "Levei meu filho de 12 anos e foi perfeito para toda a família. Segurança e diversão garantidas!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pescadores que viveram experiências inesquecíveis conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-ocean text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card p-4 rounded-lg shadow-float">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">• Baseado em 150+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;