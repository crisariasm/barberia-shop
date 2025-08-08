"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*ELEMENTZ - Solicitud de Cita*

    *Cliente:* ${formData.name}
    *Email:* ${formData.email}
    *Teléfono:* ${formData.phone}

    *Servicio:* ${formData.service}
    *Fecha:* ${formData.date}
    *Hora:* ${formData.time}

    *Mensaje:*
    ${formData.message || "Sin mensaje adicional"}

    _Solicitud enviada desde la página web_`

    const whatsappUrl = `https://wa.me/573113514498?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const services = [
    "Corte Clásico",
    "Afeitado Premium",
    "Tratamiento Facial",
    "Styling Completo",
    "Paquete Básico",
    "Paquete Premium",
    "Paquete VIP",
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ]

  const sendWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/573113514498?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Contacto</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Estamos aquí para atenderte. Reserva tu cita o contáctanos para cualquier consulta
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-elementz-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
              <Card className="bg-elementz-dark border-elementz-brown h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-anton text-elementz-cream" style={{ fontWeight: 400 }}>Reservar Cita</CardTitle>
                  <p className="text-elementz-gray">Reserva tu espacio para una asesoría personalizada o comercial.</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-elementz-cream">
                        Nombre Completo *
                      </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          maxLength={50}
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                          placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-elementz-cream">
                        Teléfono *
                      </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          maxLength={15}
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                          placeholder="311 123 4567"
                        />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-elementz-cream">
                      Email *
                    </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-elementz-slate border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                        placeholder="tu@email.com"
                      />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-elementz-cream">
                      Servicio Deseado *
                    </Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="bg-elementz-slate border-elementz-brown text-elementz-cream">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent className="bg-elementz-dark border-elementz-brown">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="text-elementz-cream">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-elementz-cream">
                        Fecha Preferida *
                      </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream"
                        />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-elementz-cream">
                        Hora Preferida *
                      </Label>
                        <Select onValueChange={(value) => handleChange("time", value)}>
                          <SelectTrigger className="bg-elementz-slate border-elementz-brown text-elementz-cream">
                            <SelectValue placeholder="Selecciona una hora" />
                          </SelectTrigger>
                          <SelectContent className="bg-elementz-dark border-elementz-brown">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time} className="text-elementz-cream">
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-elementz-cream">
                      Mensaje Adicional
                    </Label>
                      <Textarea
                        id="message"
                        maxLength={200}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full bg-elementz-slate border-elementz-brown text-elementz-cream placeholder:text-elementz-gray min-h-[200px] h-40 resize-none"
                        placeholder="Cuéntanos cualquier detalle especial o preferencia..."
                        rows={6}
                      />
                  </div>

                    <Button
                      type="submit"
                      className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-semibold py-3 mt-auto"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enviar Solicitud por WhatsApp
                    </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info + Help */}
              <Card className="bg-elementz-dark border-elementz-brown h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-anton text-elementz-cream" style={{ fontWeight: 400 }}>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-elementz-cream mb-1" style={{ fontWeight: 400 }}>Dirección</h3>
                    <p className="text-elementz-gray">
                      Carrera 21#23-26 La Pradera
                      <br />
                      Dosquebradas, Pereira
                      <br />
                      Risaralda, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-elementz-cream mb-1" style={{ fontWeight: 400 }}>WhatsApp</h3>
                    <p className="text-elementz-gray">311 351 4498</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-elementz-cream mb-1" style={{ fontWeight: 400 }}>Email</h3>
                    <p className="text-elementz-gray">info@elementz.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-elementz-cream mb-1" style={{ fontWeight: 400 }}>Horarios</h3>
                    <div className="text-elementz-gray space-y-1">
                      <p>Lunes - Viernes: 9:00 AM - 8:00 PM</p>
                      <p>Sábado: 9:00 AM - 6:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* Necesitas Ayuda Section - al final */}
                <div className="border-t border-elementz-brown pt-6 mt-auto">
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">¿Necesitas Ayuda?</h3>
                  <p className="text-elementz-gray mb-4">
                    Si tienes alguna pregunta sobre nuestros servicios o productos, no dudes en contactarnos por
                    WhatsApp.
                  </p>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
                      onClick={() => sendWhatsApp("Hola! Me gustaría hacer una consulta sobre sus servicios.")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consultar Servicios
                    </Button>
                    <Button
                      className="w-full bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                      onClick={() => sendWhatsApp("Hola! Quisiera información sobre los productos disponibles.")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consultar Productos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-elementz-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton text-elementz-cream mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-elementz-gray">Visítanos en La Pradera, Dosquebradas</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-elementz-slate rounded-lg overflow-hidden border border-elementz-brown">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Barbería+ELEMENTZ"
                alt="Barbería ELEMENTZ - Exterior"
                width={800}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-anton text-elementz-cream mb-2">ELEMENTZ Barbería</h3>
                <p className="text-elementz-gray mb-4">Carrera 21#23-26 La Pradera, Dosquebradas, Pereira, Risaralda</p>
                <Button
                  className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream px-8 py-3"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/muhB1rFBUGMdnTSX7"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-elementz-cream" />
                    <span className="text-elementz-cream">Cómo llegar</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
