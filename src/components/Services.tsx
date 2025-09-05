import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Users, Compass, Award } from "lucide-react";
import equipmentImage from "@/assets/equipment.jpg";
import guidedTourImage from "@/assets/guided-tour.jpg";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Pesca Guiada",
      description: "Excursões com guias experientes nos melhores pontos de pesca da região",
      image: guidedTourImage,
      features: ["Guia profissional", "Equipamentos inclusos", "Máximo 6 pessoas"],
      price: "A partir de R$ 200/dia"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Aluguel de Equipamentos",
      description: "Equipamentos de alta qualidade para sua aventura de pesca",
      image: equipmentImage,
      features: ["Varas profissionais", "Iscas variadas", "Suporte técnico"],
      price: "A partir de R$ 50/dia"
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Expedições Especiais",
      description: "Viagens de múltiplos dias para os destinos mais exclusivos",
      features: ["2-5 dias", "Hospedagem inclusa", "Refeições completas"],
      price: "A partir de R$ 800/pessoa"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Curso de Pesca",
      description: "Aprenda técnicas avançadas com nossos instrutores certificados",
      features: ["Teoria e prática", "Certificado", "Material didático"],
      price: "A partir de R$ 150/aula"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para tornar sua experiência de pesca inesquecível
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-ocean rounded-full text-white w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary mb-3">{service.price}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;