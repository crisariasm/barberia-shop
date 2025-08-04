"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PreguntasFrecuentesPage() {
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
          <HelpCircle className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream">Preguntas Frecuentes - ELEMENTZ</CardTitle>
              <p className="text-elementz-gray">Respuestas a las consultas más comunes de nuestros clientes</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {/* Servicios de Barbería */}
                <AccordionItem value="servicios-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Qué servicios de barbería ofrecen?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Ofrecemos una amplia gama de servicios: Corte clásico, afeitado premium con navaja, tratamientos
                    faciales, styling completo, arreglo de barba y bigote, y paquetes especiales que combinan varios
                    servicios. Todos nuestros servicios incluyen consulta personalizada para encontrar el estilo
                    perfecto para ti.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="servicios-2" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Necesito reservar cita previa?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Recomendamos reservar cita previa para garantizar tu espacio, especialmente los fines de semana.
                    Puedes reservar a través de nuestro sitio web, WhatsApp (+57 311 351 4498) o llamando directamente.
                    También atendemos clientes sin cita, pero podrías tener que esperar.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="servicios-3" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Cuánto tiempo dura cada servicio?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Los tiempos varían según el servicio: Corte clásico (45 min), Afeitado premium (60 min), Tratamiento
                    facial (75 min), Styling completo (90 min). Los paquetes pueden tomar entre 90-120 minutos. Siempre
                    confirmamos el tiempo estimado al reservar tu cita.
                  </AccordionContent>
                </AccordionItem>

                {/* Productos */}
                <AccordionItem value="productos-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Qué productos venden en la tienda online?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Vendemos productos premium para el cuidado masculino: pomadas y ceras para el cabello, aceites y
                    bálsamos para barba, champús y acondicionadores especializados, productos para afeitado, y
                    herramientas de cuidado personal. Todos son productos de alta calidad que usamos en nuestros
                    servicios.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="productos-2" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Los productos tienen garantía?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Sí, todos nuestros productos tienen garantía de calidad por 30 días contra defectos de fabricación.
                    Si encuentras algún problema con un producto, lo cambiamos sin costo adicional. También ofrecemos
                    asesoría sobre el uso correcto de cada producto.
                  </AccordionContent>
                </AccordionItem>

                {/* Compras Online */}
                <AccordionItem value="compras-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Cómo funciona el proceso de compra online?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Es muy sencillo: 1) Navega por nuestra tienda y agrega productos al carrito, 2) Haz clic en "Comprar
                    por WhatsApp", 3) Se abrirá WhatsApp con tu pedido, 4) Confirmamos disponibilidad y precio, 5)
                    Acordamos método de pago y dirección de entrega, 6) Procesamos y enviamos tu pedido.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="compras-2" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Qué métodos de pago aceptan?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Aceptamos efectivo, transferencias bancarias (Bancolombia, Nequi, Daviplata), tarjetas de crédito y
                    débito (Visa, Mastercard), y PSE. Para compras online, el pago se coordina vía WhatsApp antes del
                    envío. En el establecimiento físico aceptamos todos los métodos mencionados.
                  </AccordionContent>
                </AccordionItem>

                {/* Envíos */}
                <AccordionItem value="envios-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Hacen envíos a domicilio?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Sí, hacemos envíos en Pereira, Dosquebradas y municipios cercanos. El envío es GRATIS en
                    Dosquebradas y Pereira centro para compras superiores a $80.000. Para otras zonas y compras menores,
                    el costo varía entre $8.000 y $25.000 según la distancia.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="envios-2" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Cuánto tiempo tarda la entrega?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    En zona local (Dosquebradas/Pereira): 1-2 días hábiles. Área metropolitana: 2-3 días hábiles.
                    Municipios cercanos: 3-5 días hábiles. Te notificamos cuando el pedido sale de nuestras
                    instalaciones y nuestro repartidor se contacta contigo 30 minutos antes de la entrega.
                  </AccordionContent>
                </AccordionItem>

                {/* Devoluciones */}
                <AccordionItem value="devoluciones-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Puedo devolver un producto si no me gusta?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Sí, tienes 5 días hábiles para devolver productos que no hayas abierto, siempre que estén en su
                    empaque original con todas las etiquetas. Los productos de higiene personal abiertos no se pueden
                    devolver por razones de salud. Productos con defecto de fábrica se cambian sin restricciones.
                  </AccordionContent>
                </AccordionItem>

                {/* Citas */}
                <AccordionItem value="citas-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Puedo cambiar o cancelar mi cita?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Sí, puedes cambiar o cancelar tu cita con al menos 2 horas de anticipación sin costo. Contáctanos
                    por WhatsApp (+57 311 351 4498) o llama directamente. Cancelaciones con menos de 2 horas de
                    anticipación pueden tener una penalidad del 50% del valor del servicio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="citas-2" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Atienden menores de edad?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Sí, atendemos menores de edad acompañados por un adulto responsable. Para menores de 14 años es
                    obligatorio que un padre o tutor esté presente durante todo el servicio. Ofrecemos servicios
                    especiales para niños con técnicas adaptadas a su edad.
                  </AccordionContent>
                </AccordionItem>

                {/* Precios */}
                <AccordionItem value="precios-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Los precios incluyen propina?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    No, los precios publicados no incluyen propina. La propina es voluntaria y queda a tu criterio según
                    tu satisfacción con el servicio. Nuestros barberos aprecian mucho las propinas, pero nunca es
                    obligatoria. Aceptamos propinas en efectivo o se puede incluir en el pago con tarjeta.
                  </AccordionContent>
                </AccordionItem>

                {/* Ubicación */}
                <AccordionItem value="ubicacion-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Dónde están ubicados?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Estamos ubicados en Carrera 21#23-26 La Pradera, Dosquebradas, Pereira, Risaralda. Tenemos
                    parqueadero disponible y fácil acceso en transporte público. Puedes encontrar nuestra ubicación
                    exacta en Google Maps o contactarnos para indicaciones específicas.
                  </AccordionContent>
                </AccordionItem>

                {/* COVID */}
                <AccordionItem value="covid-1" className="border-elementz-brown">
                  <AccordionTrigger className="text-elementz-cream hover:text-elementz-brown/80">
                    ¿Qué medidas de bioseguridad manejan?
                  </AccordionTrigger>
                  <AccordionContent className="text-elementz-gray">
                    Mantenemos estrictos protocolos de bioseguridad: desinfección de herramientas después de cada
                    cliente, uso de implementos desechables cuando es posible, limpieza constante de superficies,
                    ventilación adecuada del local, y disponibilidad de gel antibacterial. La salud de nuestros clientes
                    y equipo es nuestra prioridad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 bg-elementz-slate p-6 rounded-lg text-center">
                <h3 className="text-xl font-anton text-elementz-cream mb-4">¿No encontraste tu respuesta?</h3>
                <p className="text-elementz-gray mb-4">
                  Nuestro equipo está listo para ayudarte con cualquier consulta adicional
                </p>
                <Button
                  className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
                  onClick={() => sendWhatsApp("Hola! Tengo una pregunta que no encontré en las FAQ.")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
