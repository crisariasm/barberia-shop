import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Star, Users, Award, Clock, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServiciosPage() {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clásico",
      description: "Cortes tradicionales con técnicas modernas adaptadas a tu estilo personal",
      price: "$25",
      duration: "45 min",
      features: ["Consulta personalizada", "Lavado incluido", "Peinado final"],
    },
    {
      icon: Star,
      title: "Afeitado Premium",
      description: "Afeitado con navaja tradicional y productos de lujo para una experiencia única",
      price: "$35",
      duration: "60 min",
      features: ["Toallas calientes", "Aceites premium", "Masaje facial"],
    },
    {
      icon: Users,
      title: "Tratamientos Faciales",
      description: "Cuidado facial especializado con productos de alta calidad",
      price: "$45",
      duration: "75 min",
      features: ["Limpieza profunda", "Hidratación", "Mascarilla nutritiva"],
    },
    {
      icon: Award,
      title: "Styling Completo",
      description: "Peinados y styling para ocasiones especiales",
      price: "$40",
      duration: "90 min",
      features: ["Diseño personalizado", "Productos de fijación", "Retoque incluido"],
    },
  ]

  const packages = [
    {
      name: "Paquete Básico",
      price: "$50",
      originalPrice: "$60",
      services: ["Corte Clásico", "Lavado", "Peinado"],
      popular: false,
    },
    {
      name: "Paquete Premium",
      price: "$85",
      originalPrice: "$100",
      services: ["Corte Clásico", "Afeitado Premium", "Tratamiento Facial Básico"],
      popular: true,
    },
    {
      name: "Paquete VIP",
      price: "$120",
      originalPrice: "$145",
      services: ["Corte Clásico", "Afeitado Premium", "Tratamiento Facial Completo", "Styling"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Experiencias premium diseñadas para realzar tu estilo y confianza
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Servicios Individuales</h2>
            <p className="text-xl text-elementz-gray max-w-2xl mx-auto">
              Cada servicio está diseñado con atención al detalle para brindarte la mejor experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-elementz-dark border-elementz-brown hover:border-elementz-brown/80 transition-all duration-300 group h-full"
              >
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <service.icon className="h-12 w-12 text-elementz-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">{service.title}</h3>
                  <p className="text-elementz-gray mb-4 flex-1">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-anton text-elementz-brown">{service.price}</span>
                    <div className="flex items-center text-elementz-gray">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-elementz-gray text-sm">
                        <CheckCircle className="h-4 w-4 text-elementz-brown mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream mt-auto">
                    Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-elementz-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Paquetes Especiales</h2>
            <p className="text-xl text-elementz-gray max-w-2xl mx-auto">
              Combina servicios y ahorra con nuestros paquetes diseñados para una experiencia completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-elementz-slate border-elementz-brown relative overflow-hidden h-full ${
                  pkg.popular ? "ring-2 ring-elementz-brown" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-elementz-brown text-elementz-cream">Más Popular</Badge>
                )}
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <h3 className="text-2xl font-anton text-elementz-cream mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-anton text-elementz-brown">{pkg.price}</span>
                    <span className="text-lg text-elementz-gray line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {pkg.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-elementz-gray">
                        <CheckCircle className="h-4 w-4 text-elementz-brown mr-3 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream mt-auto">
                    Reservar Paquete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-elementz-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-6">¿Listo para Reservar?</h2>
          <p className="text-xl text-elementz-cream mb-8 max-w-2xl mx-auto">
            Agenda tu cita hoy y descubre por qué somos la barbería preferida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-elementz-cream text-elementz-brown hover:bg-elementz-cream/80 px-8 py-4 text-lg"
            >
              Reservar Ahora
            </Button>
            <Button
              size="lg"
              className="bg-elementz-dark text-elementz-cream hover:bg-elementz-slate px-8 py-4 text-lg"
            >
              Llamar: +57 (6) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
