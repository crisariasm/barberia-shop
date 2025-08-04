"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, MapPin, Package, CreditCard } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EnviosPage() {
  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Envíos y Entregas</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Información completa sobre nuestros servicios de entrega
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream">Política de Envíos - ELEMENTZ</CardTitle>
              <p className="text-elementz-gray">Información actualizada sobre entregas y tiempos</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Zonas de Cobertura */}
                <section>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Zonas de Cobertura</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Zona Local (GRATIS)</h4>
                      <ul className="text-elementz-gray space-y-1 text-sm">
                        <li>• Dosquebradas centro</li>
                        <li>• La Pradera</li>
                        <li>• Pereira centro</li>
                        <li>• Cuba</li>
                      </ul>
                      <p className="text-elementz-brown font-semibold mt-2">Envío gratis en compras +$80.000</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Área Metropolitana</h4>
                      <ul className="text-elementz-gray space-y-1 text-sm">
                        <li>• Pereira (otras zonas)</li>
                        <li>• Santa Rosa de Cabal</li>
                        <li>• La Virginia</li>
                        <li>• Marsella</li>
                      </ul>
                      <p className="text-elementz-brown font-semibold mt-2">Costo: $8.000 - $15.000</p>
                    </div>
                  </div>
                </section>

                {/* Tiempos de Entrega */}
                <section>
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Tiempos de Entrega</h3>
                  </div>
                  <div className="bg-elementz-slate p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">
                          1-2
                        </div>
                        <h4 className="font-semibold text-elementz-cream">Zona Local</h4>
                        <p className="text-elementz-gray text-sm">días hábiles</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">
                          2-3
                        </div>
                        <h4 className="font-semibold text-elementz-cream">Área Metro</h4>
                        <p className="text-elementz-gray text-sm">días hábiles</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">
                          3-5
                        </div>
                        <h4 className="font-semibold text-elementz-cream">Otras Zonas</h4>
                        <p className="text-elementz-gray text-sm">días hábiles</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Proceso de Envío */}
                <section>
                  <div className="flex items-center mb-4">
                    <Package className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Proceso de Envío</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Confirmación del Pedido</h4>
                        <p className="text-elementz-gray text-sm">
                          Recibes confirmación por WhatsApp con detalles del pedido y tiempo estimado de entrega.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Preparación</h4>
                        <p className="text-elementz-gray text-sm">
                          Preparamos cuidadosamente tu pedido y lo empacamos de forma segura.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Envío</h4>
                        <p className="text-elementz-gray text-sm">
                          Te notificamos cuando el pedido sale de nuestras instalaciones.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream">Entrega</h4>
                        <p className="text-elementz-gray text-sm">
                          Nuestro repartidor se contacta contigo 30 minutos antes de la entrega.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Costos de Envío */}
                <section>
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Costos de Envío</h3>
                  </div>
                  <div className="bg-elementz-slate p-6 rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-elementz-brown">
                            <th className="text-left py-2 text-elementz-cream">Zona</th>
                            <th className="text-left py-2 text-elementz-cream">Costo</th>
                            <th className="text-left py-2 text-elementz-cream">Envío Gratis</th>
                            <th className="text-left py-2 text-elementz-cream">Tiempo</th>
                          </tr>
                        </thead>
                        <tbody className="text-elementz-gray">
                          <tr className="border-b border-elementz-brown/30">
                            <td className="py-2">Dosquebradas/Pereira centro</td>
                            <td className="py-2 text-elementz-brown font-semibold">GRATIS</td>
                            <td className="py-2">Compras +$80.000</td>
                            <td className="py-2">1-2 días</td>
                          </tr>
                          <tr className="border-b border-elementz-brown/30">
                            <td className="py-2">Área metropolitana</td>
                            <td className="py-2">$8.000 - $15.000</td>
                            <td className="py-2">Compras +$120.000</td>
                            <td className="py-2">2-3 días</td>
                          </tr>
                          <tr>
                            <td className="py-2">Municipios cercanos</td>
                            <td className="py-2">$15.000 - $25.000</td>
                            <td className="py-2">Compras +$150.000</td>
                            <td className="py-2">3-5 días</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Condiciones Especiales */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">Condiciones Especiales</h3>
                  <div className="space-y-4 text-elementz-gray">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Horarios de Entrega</h4>
                      <p>Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 4:00 PM</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Productos Frágiles</h4>
                      <p>Los productos frágiles tienen un costo adicional de $5.000 por empaque especial.</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Pedidos Grandes</h4>
                      <p>Pedidos superiores a $300.000 pueden requerir tiempo adicional de preparación.</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Días Festivos</h4>
                      <p>Los envíos pueden tener retrasos durante días festivos y temporadas altas.</p>
                    </div>
                  </div>
                </section>

                {/* Contacto */}
                <section className="bg-elementz-brown/20 p-6 rounded-lg">
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">¿Preguntas sobre tu Envío?</h3>
                  <p className="text-elementz-gray mb-4">
                    Si tienes dudas sobre el estado de tu pedido o necesitas información adicional sobre envíos,
                    contáctanos:
                  </p>
                  <div className="space-y-2 text-elementz-gray">
                    <p>
                      <strong>WhatsApp:</strong> +57 311 351 4498
                    </p>
                    <p>
                      <strong>Email:</strong> info@elementz.com
                    </p>
                    <p>
                      <strong>Horario de atención:</strong> Lunes a Sábado, 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
