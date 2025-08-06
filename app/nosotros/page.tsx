import { Scissors, Star, Users, Award, Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NosotrosPage() {
  const team = [
    {
      name: "Carlos Mendoza",
      role: "Maestro Barbero",
      experience: "15 años",
      specialty: "Cortes clásicos y afeitado tradicional",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Miguel Torres",
      role: "Especialista en Styling",
      experience: "12 años",
      specialty: "Peinados modernos y tratamientos",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Roberto Silva",
      role: "Barbero Senior",
      experience: "18 años",
      specialty: "Técnicas avanzadas y cuidado facial",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const testimonials = [
    {
      name: "Juan Pérez",
      comment: "Excelente servicio, siempre salgo satisfecho con mi corte. El ambiente es muy profesional.",
      rating: 5,
    },
    {
      name: "Carlos López",
      comment: "La mejor barbería de la ciudad. Atención personalizada y productos de calidad.",
      rating: 5,
    },
    {
      name: "Miguel Rodríguez",
      comment: "Llevo años viniendo aquí. Nunca me han decepcionado, siempre un trabajo impecable.",
      rating: 5,
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Innovación",
      description: "Técnicas vanguardistas combinadas con tradición clásica para resultados únicos.",
    },
    {
      icon: Star,
      title: "Versatilidad",
      description: "Adaptamos nuestros servicios a cada estilo y personalidad de nuestros clientes.",
    },
    {
      icon: Users,
      title: "Calidad",
      description: "Productos premium y herramientas profesionales para garantizar la excelencia.",
    },
    {
      icon: Heart,
      title: "Autenticidad",
      description: "Experiencias genuinas que reflejan tu verdadera personalidad y estilo.",
    },
    {
      icon: Scissors,
      title: "Cercanía",
      description: "Trato personalizado y ambiente acogedor donde cada cliente es especial.",
    },
    {
      icon: Target,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la confianza y satisfacción.",
    },
  ]

  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Nosotros</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Conoce la historia, valores y equipo que hace de ELEMENTZ una experiencia única
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="bg-elementz-dark border-elementz-brown p-8">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-elementz-brown mr-4" />
                <h2 className="text-3xl font-anton text-elementz-cream">Nuestra Misión</h2>
              </div>
              <p className="text-elementz-gray text-lg leading-relaxed">
                Elementz tiene como misión crear experiencias memorables únicas inspirando confianza y estilo en cada
                cliente.
              </p>
            </Card>

            <Card className="bg-elementz-dark border-elementz-brown p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-elementz-brown mr-4" />
                <h2 className="text-3xl font-anton text-elementz-cream">Nuestra Visión</h2>
              </div>
              <p className="text-elementz-gray text-lg leading-relaxed">
                Elementz proyecta convertirse a corto plazo en el lugar preferido de todos los hombres donde pueda
                descubrir y proyectar su mejor versión.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-elementz-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Nuestros Valores</h2>
            <p className="text-xl text-elementz-gray max-w-3xl mx-auto">
              Elementz combina innovación, calidad y confianza para ofrecer una experiencia auténtica y versátil. Su
              compromiso con la cercanía, el orden y la organización garantiza un servicio impecable que refleja estilo
              y profesionalismo en cada detalle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-elementz-slate border-elementz-brown hover:border-elementz-brown/80 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-elementz-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">{value.title}</h3>
                  <p className="text-elementz-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-elementz-gray max-w-2xl mx-auto">
              Profesionales experimentados dedicados a brindarte el mejor servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-elementz-dark border-elementz-brown hover:border-elementz-brown/80 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-elementz-brown text-elementz-cream">
                    {member.experience}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-anton text-elementz-cream mb-2">{member.name}</h3>
                  <p className="text-elementz-brown font-semibold mb-2">{member.role}</p>
                  <p className="text-elementz-gray text-sm">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-elementz-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-elementz-gray max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-elementz-slate border-elementz-brown">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-elementz-brown fill-current" />
                    ))}
                  </div>
                  <p className="text-elementz-gray mb-4 italic">"{testimonial.comment}"</p>
                  <p className="text-elementz-cream font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-elementz-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-6">¿Listo para Conocernos?</h2>
          <p className="text-xl text-elementz-cream mb-8 max-w-2xl mx-auto">
            Visítanos y descubre por qué somos la barbería de confianza para cientos de clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-elementz-cream text-elementz-brown hover:bg-elementz-cream/80 px-8 py-4 text-lg"
            >
              Reservar Cita
            </Button>
            <Button
              size="lg"
              className="bg-elementz-dark text-elementz-cream hover:bg-elementz-slate px-8 py-4 text-lg"
            >
              Contactar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
