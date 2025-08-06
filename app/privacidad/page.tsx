import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-elementz-cream mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Política de Privacidad</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">Tu privacidad es importante para nosotros</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-elementz-dark border-elementz-brown">
            <CardHeader>
              <CardTitle className="text-2xl font-anton text-elementz-cream">
                Política de Privacidad - ELEMENTZ
              </CardTitle>
              <p className="text-elementz-gray">Última actualización: Enero 2024</p>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6 text-elementz-gray">
                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">1. Información que Recopilamos</h3>
                  <p className="mb-4">
                    En ELEMENTZ recopilamos información personal que nos proporcionas voluntariamente cuando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reservas una cita a través de nuestro sitio web o WhatsApp</li>
                    <li>Realizas una compra en nuestra tienda online</li>
                    <li>Te registras en nuestro sistema de clientes</li>
                    <li>Te suscribes a nuestras comunicaciones</li>
                    <li>Nos contactas para consultas o soporte</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">2. Tipos de Datos Personales</h3>
                  <p className="mb-4">Los datos personales que podemos recopilar incluyen:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Información de contacto:</strong> nombre, apellido, número de teléfono, dirección de email
                    </li>
                    <li>
                      <strong>Información de entrega:</strong> dirección física para envíos
                    </li>
                    <li>
                      <strong>Información de servicios:</strong> preferencias de corte, historial de servicios
                    </li>
                    <li>
                      <strong>Información de pago:</strong> datos necesarios para procesar transacciones (no almacenamos
                      datos de tarjetas)
                    </li>
                    <li>
                      <strong>Información técnica:</strong> dirección IP, tipo de navegador, páginas visitadas
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">3. Cómo Utilizamos tu Información</h3>
                  <p className="mb-4">Utilizamos la información recopilada para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Procesar y confirmar tus citas de servicios</li>
                    <li>Gestionar pedidos y entregas de productos</li>
                    <li>Proporcionar atención al cliente y soporte técnico</li>
                    <li>Enviar confirmaciones, recordatorios y actualizaciones de servicios</li>
                    <li>Mejorar nuestros servicios y experiencia del cliente</li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Prevenir fraudes y garantizar la seguridad</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">4. Compartir Información</h3>
                  <p className="mb-4">
                    No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las
                    siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar nuestro negocio
                      (procesamiento de pagos, entrega)
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> cuando sea requerido por ley o autoridades competentes
                    </li>
                    <li>
                      <strong>Protección de derechos:</strong> para proteger nuestros derechos, propiedad o seguridad
                    </li>
                    <li>
                      <strong>Consentimiento:</strong> cuando hayas dado tu consentimiento explícito
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">5. Seguridad de los Datos</h3>
                  <p className="mb-4">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                    personal contra:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Acceso no autorizado o ilegal</li>
                    <li>Pérdida, destrucción o daño accidental</li>
                    <li>Alteración, divulgación o uso indebido</li>
                  </ul>
                  <p className="mt-4">
                    Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">6. Tus Derechos</h3>
                  <p className="mb-4">Tienes derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre ti
                    </li>
                    <li>
                      <strong>Rectificación:</strong> corregir datos inexactos o incompletos
                    </li>
                    <li>
                      <strong>Eliminación:</strong> solicitar la eliminación de tus datos personales
                    </li>
                    <li>
                      <strong>Portabilidad:</strong> recibir tus datos en un formato estructurado
                    </li>
                    <li>
                      <strong>Oposición:</strong> oponerte al procesamiento de tus datos para ciertos fines
                    </li>
                    <li>
                      <strong>Limitación:</strong> solicitar la limitación del procesamiento
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">7. Retención de Datos</h3>
                  <p>
                    Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para
                    los que fue recopilada, incluyendo requisitos legales, contables o de informes. Los datos de
                    clientes activos se conservan mientras mantengas una relación comercial con nosotros.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">8. Cookies y Tecnologías Similares</h3>
                  <p className="mb-4">Nuestro sitio web utiliza cookies y tecnologías similares para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mejorar la funcionalidad del sitio web</li>
                    <li>Recordar tus preferencias</li>
                    <li>Analizar el tráfico del sitio web</li>
                    <li>Personalizar tu experiencia</li>
                  </ul>
                  <p className="mt-4">Puedes controlar las cookies a través de la configuración de tu navegador.</p>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">9. Menores de Edad</h3>
                  <p>
                    Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente
                    información personal de menores de 18 años sin el consentimiento parental apropiado.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">10. Cambios a esta Política</h3>
                  <p>
                    Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                    significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última
                    actualización".
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-anton text-elementz-cream mb-3">11. Contacto</h3>
                  <p className="mb-4">
                    Si tienes preguntas sobre esta Política de Privacidad o quieres ejercer tus derechos, contáctanos:
                  </p>
                  <div className="bg-elementz-slate p-4 rounded-lg">
                    <p>
                      <strong>ELEMENTZ Barbería</strong>
                    </p>
                    <p>Carrera 21#23-26 La Pradera, Dosquebradas, Pereira, Risaralda</p>
                    <p>WhatsApp: +57 311 351 4498</p>
                    <p>Email: info@elementz.com</p>
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
