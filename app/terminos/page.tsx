"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Términos y Condiciones</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Condiciones de uso de nuestros servicios y tienda online
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream">
                Términos y Condiciones de Uso - ELEMENTZ
              </CardTitle>
              <p className="text-elementz-gray">Última actualización: Enero 2024</p>
            </CardHeader>
            <CardContent className="space-y-6 text-elementz-cream">
              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">1. Aceptación de Términos</h3>
                <p className="text-elementz-gray leading-relaxed">
                  Al acceder y utilizar el sitio web de ELEMENTZ Barbería, usted acepta estar sujeto a estos términos y
                  condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro
                  sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">2. Quién Puede Usar Nuestros Servicios</h3>
                <ul className="text-elementz-gray space-y-2 list-disc list-inside">
                  <li>Personas mayores de 18 años con capacidad legal para contratar</li>
                  <li>Menores de edad con autorización de sus padres o tutores legales</li>
                  <li>Usuarios que proporcionen información veraz y actualizada</li>
                  <li>Clientes ubicados en Colombia para servicios de entrega</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">3. Servicios Ofrecidos</h3>
                <p className="text-elementz-gray leading-relaxed mb-3">
                  ELEMENTZ ofrece servicios de barbería profesional y venta de productos de cuidado personal masculino:
                </p>
                <ul className="text-elementz-gray space-y-2 list-disc list-inside">
                  <li>Servicios de barbería en nuestro establecimiento físico</li>
                  <li>Venta de productos de cuidado personal a través de nuestra tienda online</li>
                  <li>Reserva de citas online</li>
                  <li>Asesoría personalizada en cuidado masculino</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">4. Proceso de Órdenes</h3>
                <p className="text-elementz-gray leading-relaxed mb-3">
                  Las compras se procesan de la siguiente manera:
                </p>
                <ul className="text-elementz-gray space-y-2 list-disc list-inside">
                  <li>Selección de productos y agregado al carrito de compras</li>
                  <li>Confirmación de orden vía WhatsApp</li>
                  <li>Verificación de disponibilidad y precio</li>
                  <li>Confirmación de método de pago y dirección de entrega</li>
                  <li>Procesamiento y envío del pedido</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">5. Responsabilidades del Cliente</h3>
                <ul className="text-elementz-gray space-y-2 list-disc list-inside">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Realizar el pago en los términos acordados</li>
                  <li>Estar disponible para recibir el producto en la dirección indicada</li>
                  <li>Revisar el producto al momento de la entrega</li>
                  <li>Usar los productos de acuerdo a las instrucciones</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">6. Responsabilidades de ELEMENTZ</h3>
                <ul className="text-elementz-gray space-y-2 list-disc list-inside">
                  <li>Entregar productos en las condiciones acordadas</li>
                  <li>Mantener la calidad de nuestros servicios</li>
                  <li>Proteger la información personal de nuestros clientes</li>
                  <li>Cumplir con los tiempos de entrega estimados</li>
                  <li>Brindar atención al cliente oportuna</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">7. Limitaciones de Responsabilidad</h3>
                <p className="text-elementz-gray leading-relaxed">
                  ELEMENTZ no se hace responsable por daños indirectos, incidentales o consecuenciales que puedan
                  resultar del uso de nuestros productos o servicios. Nuestra responsabilidad se limita al valor del
                  producto o servicio adquirido.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">8. Modificaciones</h3>
                <p className="text-elementz-gray leading-relaxed">
                  ELEMENTZ se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las
                  modificaciones serán efectivas inmediatamente después de su publicación en nuestro sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-anton text-elementz-brown mb-3">9. Ley Aplicable</h3>
                <p className="text-elementz-gray leading-relaxed">
                  Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en
                  los tribunales competentes de Pereira, Risaralda.
                </p>
              </div>

              <div className="bg-elementz-slate p-4 rounded-lg">
                <h3 className="text-xl font-anton text-elementz-brown mb-3">Contacto</h3>
                <p className="text-elementz-gray">
                  Para cualquier consulta sobre estos términos, contáctanos:
                  <br />📧 info@elementz.com
                  <br />📱 +57 311 351 4498
                  <br />📍 Carrera 21#23-26 La Pradera, Dosquebradas, Pereira
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
