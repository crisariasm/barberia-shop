import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RotateCcw, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DevolucionesPage() {
  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <RotateCcw className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Cambios y Devoluciones</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Política completa de cambios, devoluciones y garantías
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream" style={{ fontWeight: 400 }}>
                Política de Cambios y Devoluciones
              </CardTitle>
              <p className="text-elementz-gray">Tu satisfacción es nuestra prioridad</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Tiempo Límite */}
                <section>
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Tiempo Límite para Devoluciones</h3>
                  </div>
                  <div className="bg-elementz-slate p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        5
                      </div>
                      <h4 className="text-xl font-anton text-elementz-cream mb-2">Días Hábiles</h4>
                      <p className="text-elementz-gray">
                        Tienes 5 días hábiles desde la fecha de recepción del producto para solicitar cambio o
                        devolución.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Productos Elegibles */}
                <section>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Productos Elegibles para Devolución</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3" style={{ fontWeight: 400 }}>✅ SÍ se pueden devolver:</h4>
                      <ul className="text-elementz-gray space-y-2 text-sm">
                        <li>• Productos sin abrir en empaque original</li>
                        <li>• Herramientas de cuidado personal sin usar</li>
                        <li>• Productos con defecto de fabricación</li>
                        <li>• Artículos dañados durante el envío</li>
                        <li>• Productos incorrectos enviados por error</li>
                      </ul>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3" style={{ fontWeight: 400 }}>❌ NO se pueden devolver:</h4>
                      <ul className="text-elementz-gray space-y-2 text-sm">
                        <li>• Productos de higiene personal abiertos</li>
                        <li>• Champús, aceites o cremas usados</li>
                        <li>• Productos personalizados</li>
                        <li>• Artículos en oferta especial (salvo defecto)</li>
                        <li>• Productos sin etiquetas originales</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Condiciones */}
                <section>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Condiciones para Devolución</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Estado del Producto</h4>
                      <p className="text-elementz-gray text-sm">
                        El producto debe estar en las mismas condiciones en que lo recibiste, con todas las etiquetas,
                        empaques originales y accesorios incluidos.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Comprobante de Compra</h4>
                      <p className="text-elementz-gray text-sm">
                        Debes presentar el comprobante de compra (factura, recibo o conversación de WhatsApp donde se
                        confirmó el pedido).
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Motivo de Devolución</h4>
                      <p className="text-elementz-gray text-sm">
                        Debes especificar el motivo de la devolución: defecto, producto incorrecto, daño en envío, o
                        insatisfacción.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Proceso de Devolución */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">Proceso de Devolución</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream" style={{ fontWeight: 400 }}>Contacto Inicial</h4>
                        <p className="text-elementz-gray text-sm">
                          Contáctanos por WhatsApp (+57 311 351 4498) o email (info@elementz.com) indicando tu intención
                          de devolver el producto.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream" style={{ fontWeight: 400 }}>Evaluación</h4>
                        <p className="text-elementz-gray text-sm">
                          Nuestro equipo evaluará tu solicitud y te confirmará si el producto es elegible para
                          devolución.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream" style={{ fontWeight: 400 }}>Autorización</h4>
                        <p className="text-elementz-gray text-sm">
                          Si la devolución es aprobada, te proporcionaremos un número de autorización y las
                          instrucciones de envío.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream" style={{ fontWeight: 400 }}>Envío del Producto</h4>
                        <p className="text-elementz-gray text-sm">
                          Envía el producto a nuestra dirección. Los costos de envío de devolución corren por cuenta del
                          cliente, excepto en casos de defecto o error nuestro.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-elementz-slate p-4 rounded-lg">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream" style={{ fontWeight: 400 }}>Inspección y Reembolso</h4>
                        <p className="text-elementz-gray text-sm">
                          Una vez recibido, inspeccionaremos el producto y procesaremos el reembolso en 3-5 días
                          hábiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Tipos de Reembolso */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">Opciones de Reembolso</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        💰
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Reembolso Completo</h4>
                      <p className="text-elementz-gray text-sm">
                        Devolución del 100% del valor pagado por el producto.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        🔄
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Cambio por Otro</h4>
                      <p className="text-elementz-gray text-sm">Cambio por otro producto de igual o mayor valor.</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        🎫
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Crédito en Tienda</h4>
                      <p className="text-elementz-gray text-sm">
                        Crédito para futuras compras con 10% adicional de bonificación.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Garantías */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">Garantías Especiales</h3>
                  <div className="space-y-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Garantía de Calidad (30 días)</h4>
                      <p className="text-elementz-gray text-sm">
                        Todos nuestros productos tienen garantía contra defectos de fabricación por 30 días. Si
                        encuentras algún defecto, lo cambiamos sin costo adicional.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2" style={{ fontWeight: 400 }}>Garantía de Satisfacción</h4>
                      <p className="text-elementz-gray text-sm">
                        Si no estás completamente satisfecho con tu compra, trabajaremos contigo para encontrar una
                        solución que te deje contento, incluso fuera del período normal de devolución.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Excepciones */}
                <section>
                  <div className="flex items-center mb-4">
                    <XCircle className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Excepciones Importantes</h3>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                    <ul className="text-elementz-gray space-y-2 text-sm">
                      <li>
                        • Los productos de higiene personal abiertos no se pueden devolver por razones de salud pública
                      </li>
                      <li>
                        • Los productos en liquidación o con descuentos superiores al 50% tienen política de cambio
                        limitada
                      </li>
                      <li>• Los productos personalizados o hechos a medida no son elegibles para devolución</li>
                      <li>• Los costos de envío original no son reembolsables (excepto en casos de error nuestro)</li>
                    </ul>
                  </div>
                </section>

                {/* Contacto */}
                <section className="bg-elementz-brown/20 p-6 rounded-lg">
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">¿Necesitas Hacer una Devolución?</h3>
                  <p className="text-elementz-gray mb-4">
                    Nuestro equipo de atención al cliente está listo para ayudarte con tu devolución o cambio.
                  </p>
                  <div className="space-y-2 text-elementz-gray">
                    <p>
                      <strong>WhatsApp:</strong> +57 311 351 4498
                    </p>
                    <p>
                      <strong>Email:</strong> info@elementz.com
                    </p>
                    <p>
                      <strong>Dirección:</strong> Carrera 21#23-26 La Pradera, Dosquebradas, Pereira
                    </p>
                    <p>
                      <strong>Horario:</strong> Lunes a Sábado, 9:00 AM - 7:00 PM
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
