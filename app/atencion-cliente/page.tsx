"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, MessageCircle, Phone, Mail, Clock, Users, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AtencionClientePage() {
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
          <Headphones className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Atención al Cliente</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Estamos aquí para ayudarte en todo lo que necesites
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Canales de Contacto */}
            <Card className="bg-elementz-dark border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-2xl font-anton text-elementz-cream">Canales de Contacto</CardTitle>
                <p className="text-elementz-gray">Múltiples formas de comunicarte con nosotros</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-elementz-cream mb-1">WhatsApp (Recomendado)</h4>
                      <p className="text-elementz-gray text-sm mb-3">
                        Respuesta inmediata para consultas, pedidos y soporte técnico.
                      </p>
                      <Button
                        className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                        onClick={() => sendWhatsApp("Hola! Necesito ayuda con...")}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        +57 311 351 4498
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                    <Phone className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-elementz-cream mb-1">Teléfono</h4>
                      <p className="text-elementz-gray text-sm mb-2">Para consultas urgentes y reservas de citas.</p>
                      <p className="text-elementz-brown font-semibold">+57 311 351 4498</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                    <Mail className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-elementz-cream mb-1">Email</h4>
                      <p className="text-elementz-gray text-sm mb-2">Para consultas detalladas y soporte técnico.</p>
                      <p className="text-elementz-brown font-semibold">info@elementz.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                    <Users className="h-6 w-6 text-elementz-brown mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-elementz-cream mb-1">Presencial</h4>
                      <p className="text-elementz-gray text-sm mb-2">Visítanos en nuestro establecimiento.</p>
                      <p className="text-elementz-brown font-semibold">Carrera 21#23-26 La Pradera, Dosquebradas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horarios de Atención */}
            <Card className="bg-elementz-dark border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-2xl font-anton text-elementz-cream">Horarios de Atención</CardTitle>
                <p className="text-elementz-gray">Estamos disponibles cuando nos necesites</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-elementz-brown mr-2" />
                      <h4 className="font-semibold text-elementz-cream">Atención General</h4>
                    </div>
                    <div className="space-y-2 text-elementz-gray text-sm">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span className="text-elementz-cream">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="text-elementz-cream">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="text-red-400">Cerrado</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MessageCircle className="h-5 w-5 text-elementz-brown mr-2" />
                      <h4 className="font-semibold text-elementz-cream">WhatsApp 24/7</h4>
                    </div>
                    <p className="text-elementz-gray text-sm">
                      Puedes escribirnos en cualquier momento. Respondemos inmediatamente en horario laboral y dentro de
                      las primeras horas del siguiente día hábil fuera del horario.
                    </p>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-elementz-brown mr-2" />
                      <h4 className="font-semibold text-elementz-cream">Soporte Prioritario</h4>
                    </div>
                    <p className="text-elementz-gray text-sm">
                      Clientes VIP y casos urgentes reciben atención prioritaria con respuesta garantizada en menos de
                      30 minutos durante horario laboral.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Servicios de Atención */}
          <div className="mt-8">
            <Card className="bg-elementz-dark border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-2xl font-anton text-elementz-cream">¿En qué te podemos ayudar?</CardTitle>
                <p className="text-elementz-gray">Nuestro equipo está capacitado para resolver todas tus consultas</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">📅 Reservas y Citas</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Agendar nuevas citas</li>
                      <li>• Modificar citas existentes</li>
                      <li>• Cancelaciones</li>
                      <li>• Consultar disponibilidad</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Necesito ayuda con una reserva de cita.")}
                    >
                      Ayuda con Citas
                    </Button>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">🛒 Compras Online</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Estado de pedidos</li>
                      <li>• Información de productos</li>
                      <li>• Problemas con pagos</li>
                      <li>• Seguimiento de envíos</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Tengo una consulta sobre mi pedido online.")}
                    >
                      Ayuda con Pedidos
                    </Button>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">🔄 Cambios y Devoluciones</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Solicitar devoluciones</li>
                      <li>• Cambios de productos</li>
                      <li>• Productos defectuosos</li>
                      <li>• Reembolsos</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Necesito hacer una devolución o cambio.")}
                    >
                      Ayuda con Devoluciones
                    </Button>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">💡 Asesoría Personalizada</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Recomendaciones de productos</li>
                      <li>• Consejos de cuidado</li>
                      <li>• Selección de servicios</li>
                      <li>• Rutinas personalizadas</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Me gustaría recibir asesoría personalizada.")}
                    >
                      Solicitar Asesoría
                    </Button>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">🔧 Soporte Técnico</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Problemas con la web</li>
                      <li>• Errores en el carrito</li>
                      <li>• Problemas de acceso</li>
                      <li>• Reportar bugs</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Tengo un problema técnico con la página web.")}
                    >
                      Soporte Técnico
                    </Button>
                  </div>

                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <h4 className="font-semibold text-elementz-cream mb-2">📋 Información General</h4>
                    <ul className="text-elementz-gray text-sm space-y-1">
                      <li>• Precios y promociones</li>
                      <li>• Ubicación y horarios</li>
                      <li>• Políticas de la empresa</li>
                      <li>• Sugerencias y quejas</li>
                    </ul>
                    <Button
                      className="w-full mt-3 bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream text-sm"
                      onClick={() => sendWhatsApp("Hola! Tengo una consulta general sobre ELEMENTZ.")}
                    >
                      Información General
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compromiso de Servicio */}
          <div className="mt-8">
            <Card className="bg-elementz-dark border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-2xl font-anton text-elementz-cream">Nuestro Compromiso Contigo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ⚡
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Respuesta Rápida</h4>
                        <p className="text-elementz-gray text-sm">
                          Respondemos WhatsApp en menos de 15 minutos durante horario laboral.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        🎯
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Soluciones Efectivas</h4>
                        <p className="text-elementz-gray text-sm">
                          Resolvemos el 95% de las consultas en el primer contacto.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        🤝
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Trato Personalizado</h4>
                        <p className="text-elementz-gray text-sm">
                          Cada cliente recibe atención personalizada y adaptada a sus necesidades.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        📞
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Seguimiento Completo</h4>
                        <p className="text-elementz-gray text-sm">
                          Hacemos seguimiento hasta asegurar que tu problema esté completamente resuelto.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        💯
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Satisfacción Garantizada</h4>
                        <p className="text-elementz-gray text-sm">
                          Si no quedas satisfecho con nuestro servicio, trabajamos hasta lograrlo.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        🔒
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Privacidad Protegida</h4>
                        <p className="text-elementz-gray text-sm">
                          Tu información personal está segura y nunca será compartida con terceros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
