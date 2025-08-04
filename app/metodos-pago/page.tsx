"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Building, Shield, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MetodosPagoPage() {
  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <CreditCard className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Métodos de Pago</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Múltiples opciones seguras para tu comodidad
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream">Métodos de Pago Aceptados</CardTitle>
              <p className="text-elementz-gray">Elige la forma de pago que más te convenga</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Tarjetas de Crédito y Débito */}
                <section>
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Tarjetas de Crédito y Débito</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3">Tarjetas Aceptadas</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Visa (Crédito y Débito)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Mastercard (Crédito y Débito)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">American Express</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Diners Club</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3">Características</h4>
                      <ul className="text-elementz-gray space-y-1 text-sm">
                        <li>• Procesamiento inmediato</li>
                        <li>• Conexión segura SSL</li>
                        <li>• Disponible 24/7</li>
                        <li>• Cuotas disponibles (según banco)</li>
                        <li>• Comprobante electrónico</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Transferencias Bancarias */}
                <section>
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Transferencias Bancarias</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3">Bancos Principales</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Bancolombia</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Banco de Bogotá</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Davivienda</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">BBVA</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-elementz-gray">Otros bancos nacionales</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-3">Proceso</h4>
                      <ol className="text-elementz-gray space-y-1 text-sm list-decimal list-inside">
                        <li>Realiza tu pedido por WhatsApp</li>
                        <li>Te enviamos datos bancarios</li>
                        <li>Haces la transferencia</li>
                        <li>Envías comprobante</li>
                        <li>Confirmamos y procesamos</li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* Billeteras Digitales */}
                <section>
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Billeteras Digitales</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                        N
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2">Nequi</h4>
                      <p className="text-elementz-gray text-sm">Transferencias instantáneas desde tu celular</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                        D
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2">Daviplata</h4>
                      <p className="text-elementz-gray text-sm">Pagos rápidos y seguros desde la app</p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg text-center">
                      <div className="bg-elementz-brown text-elementz-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                        P
                      </div>
                      <h4 className="font-semibold text-elementz-cream mb-2">PSE</h4>
                      <p className="text-elementz-gray text-sm">Débito directo desde tu cuenta bancaria</p>
                    </div>
                  </div>
                </section>

                {/* Efectivo */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">💵 Efectivo</h3>
                  <div className="bg-elementz-slate p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-elementz-cream mb-3">En el Establecimiento</h4>
                        <ul className="text-elementz-gray space-y-1 text-sm">
                          <li>• Pago directo en caja</li>
                          <li>• Disponible para servicios y productos</li>
                          <li>• Factura inmediata</li>
                          <li>• Sin comisiones adicionales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream mb-3">Contra Entrega</h4>
                        <ul className="text-elementz-gray space-y-1 text-sm">
                          <li>• Disponible en zona local</li>
                          <li>• Costo adicional: $5.000</li>
                          <li>• Monto exacto requerido</li>
                          <li>• Confirmación previa necesaria</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Seguridad */}
                <section>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-elementz-brown mr-2" />
                    <h3 className="text-xl font-anton text-elementz-cream">Seguridad en los Pagos</h3>
                  </div>
                  <div className="bg-elementz-slate p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-elementz-cream mb-3">Protección de Datos</h4>
                        <ul className="text-elementz-gray space-y-1 text-sm">
                          <li>• Certificado SSL 256 bits</li>
                          <li>• Cumplimiento PCI DSS</li>
                          <li>• Encriptación de extremo a extremo</li>
                          <li>• No almacenamos datos de tarjetas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-elementz-cream mb-3">Verificaciones</h4>
                        <ul className="text-elementz-gray space-y-1 text-sm">
                          <li>• Verificación 3D Secure</li>
                          <li>• Validación en tiempo real</li>
                          <li>• Detección de fraude automática</li>
                          <li>• Confirmación por SMS/Email</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Políticas de Pago */}
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">Políticas de Pago</h3>
                  <div className="space-y-4">
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Servicios de Barbería</h4>
                      <p className="text-elementz-gray text-sm">
                        Los servicios se pagan al momento de recibirlos. Aceptamos todos los métodos de pago
                        mencionados. Para citas grupales o servicios premium, se puede solicitar un anticipo del 50%.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Compras Online</h4>
                      <p className="text-elementz-gray text-sm">
                        Los productos se pagan antes del envío. Una vez confirmado el pago, procesamos y enviamos tu
                        pedido según los tiempos establecidos en nuestra política de envíos.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Reembolsos</h4>
                      <p className="text-elementz-gray text-sm">
                        Los reembolsos se procesan al mismo método de pago original en un plazo de 5-10 días hábiles,
                        dependiendo de tu entidad bancaria. Para pagos en efectivo, el reembolso se hace en efectivo o
                        transferencia.
                      </p>
                    </div>
                    <div className="bg-elementz-slate p-4 rounded-lg">
                      <h4 className="font-semibold text-elementz-cream mb-2">Promociones y Descuentos</h4>
                      <p className="text-elementz-gray text-sm">
                        Los descuentos y promociones se aplican automáticamente al momento del pago. No son acumulables
                        con otras ofertas salvo indicación contraria. Válidos según términos y condiciones específicos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Ayuda con Pagos */}
                <section className="bg-elementz-brown/20 p-6 rounded-lg">
                  <h3 className="text-xl font-anton text-elementz-cream mb-4">¿Problemas con tu Pago?</h3>
                  <p className="text-elementz-gray mb-4">
                    Si tienes dificultades con algún método de pago o necesitas ayuda, nuestro equipo está listo para
                    asistirte.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-elementz-cream mb-2">Contacto Inmediato</h4>
                      <div className="space-y-1 text-elementz-gray text-sm">
                        <p>
                          <strong>WhatsApp:</strong> +57 311 351 4498
                        </p>
                        <p>
                          <strong>Email:</strong> info@elementz.com
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-elementz-cream mb-2">Horario de Soporte</h4>
                      <div className="space-y-1 text-elementz-gray text-sm">
                        <p>Lunes - Viernes: 9:00 AM - 8:00 PM</p>
                        <p>Sábado: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
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
