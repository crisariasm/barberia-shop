"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Estilo Clásico, Técnica Moderna",
      subtitle: "Descubre la mejor experiencia en barbería",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Reservar Cita",
    },
    {
      title: "Productos Premium",
      subtitle: "Los mejores productos para tu cuidado personal",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Ver Tienda",
    },
    {
      title: "Maestros del Estilo",
      subtitle: "Más de 20 años perfeccionando tu look",
      image: "/placeholder.svg?height=600&width=800",
      cta: "Conocer Más",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Pomada Clásica",
      price: "$25.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Styling",
    },
    {
      id: 2,
      name: "Aceite para Barba",
      price: "$18.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Cuidado",
    },
    {
      id: 3,
      name: "Champú Premium",
      price: "$22.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Limpieza",
    },
    {
      id: 4,
      name: "Cera Modeladora",
      price: "$28.99",
      image: "/placeholder.svg?height=300&width=300",
      category: "Styling",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-elementz-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-16 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-elementz-dark/90 to-elementz-dark/50 z-10" />

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
          </div>
        ))}

        <div className="relative z-20 text-center text-elementz-cream max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-anton mb-6 animate-fade-in">{heroSlides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-elementz-gray font-lato">{heroSlides[currentSlide].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-lato font-semibold px-8 py-4 text-lg"
            >
              {heroSlides[currentSlide].cta}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-elementz-brown" : "bg-elementz-gray"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Conoce Nuestra Tienda</h2>
            <p className="text-xl text-elementz-gray font-lato max-w-2xl mx-auto">
              Descubre el ambiente único de ELEMENTZ y la experiencia que te espera
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-elementz-dark rounded-lg overflow-hidden shadow-2xl border border-elementz-brown/30">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-elementz-slate to-elementz-dark">
                <div className="text-center">
                  <Play className="h-20 w-20 text-elementz-brown mx-auto mb-4" />
                  <h3 className="text-2xl font-anton text-elementz-cream mb-2">Video Tour</h3>
                  <p className="text-elementz-gray font-lato">Próximamente disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-4">Productos Destacados</h2>
            <p className="text-xl text-elementz-gray font-lato max-w-2xl mx-auto">
              Los mejores productos para el cuidado masculino, seleccionados por nuestros expertos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-elementz-dark border-elementz-brown hover:border-elementz-brown/80 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-elementz-brown text-elementz-cream font-lato">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-anton text-elementz-cream mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-anton text-elementz-brown">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-lato"
                    >
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tienda">
              <Button size="lg" className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80 font-lato">
                Ver Toda la Tienda
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-elementz-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-6">Tradición y Excelencia</h2>
              <p className="text-lg text-elementz-gray font-lato mb-6">
                Con más de 20 años de experiencia, somos la barbería de confianza para hombres que buscan calidad y
                estilo. Combinamos técnicas tradicionales con las últimas tendencias.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-anton text-elementz-brown mb-2">500+</div>
                  <div className="text-elementz-gray font-lato">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-anton text-elementz-brown mb-2">20+</div>
                  <div className="text-elementz-gray font-lato">Años de Experiencia</div>
                </div>
              </div>
              <Link href="/nosotros">
                <Button
                  size="lg"
                  className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-lato"
                >
                  Conocer Más
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Barbería interior"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl border border-elementz-slate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-elementz-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-6">¿Listo para tu Nuevo Look?</h2>
          <p className="text-xl text-elementz-cream font-lato mb-8 max-w-2xl mx-auto">
            Reserva tu cita hoy y experimenta el mejor servicio de barbería en la ciudad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-elementz-cream text-elementz-brown hover:bg-elementz-cream/80 px-8 py-4 text-lg font-lato"
            >
              Reservar Cita
            </Button>
            <Button
              size="lg"
              className="bg-elementz-dark text-elementz-cream hover:bg-elementz-slate px-8 py-4 text-lg font-lato"
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
