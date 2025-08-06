import { Scissors } from "lucide-react"
import Link from "next/link"

// Server component optimizado para mejor rendimiento
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-elementz-dark text-elementz-cream py-12 border-t border-elementz-brown">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-elementz-brown" />
              <span className="text-2xl font-anton">ELEMENTZ</span>
            </div>
            <p className="text-elementz-gray">
              Experiencias memorables únicas que inspiran confianza y estilo en cada cliente.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-anton mb-4 text-elementz-cream">Enlaces</h3>
            <ul className="space-y-2 text-elementz-gray">
              <li>
                <Link href="/" className="hover:text-elementz-brown transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="hover:text-elementz-brown transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-elementz-brown transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-elementz-brown transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-elementz-brown transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-anton mb-4 text-elementz-cream">Políticas</h3>
            <ul className="space-y-2 text-elementz-gray">
              <li>
                <Link href="/terminos" className="hover:text-elementz-brown transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-elementz-brown transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-elementz-brown transition-colors">
                  Envíos y Entregas
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="hover:text-elementz-brown transition-colors">
                  Cambios y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/atencion-cliente" className="hover:text-elementz-brown transition-colors">
                  Atención al Cliente
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-elementz-brown transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/metodos-pago" className="hover:text-elementz-brown transition-colors">
                  Métodos de Pago
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-anton mb-4 text-elementz-cream">Información</h3>
            <ul className="space-y-2 text-elementz-gray">
              <li>📍 Carrera 21#23-26 La Pradera</li>
              <li>Dosquebradas, Pereira, Risaralda</li>
              <li>📞 +57 311 351 4498</li>
              <li>✉️ info@elementz.com</li>
              <li>🕒 Lun-Sáb: 9AM-8PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-elementz-brown mt-8 pt-8 text-center text-elementz-gray">
          <p>&copy; {currentYear} ELEMENTZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
