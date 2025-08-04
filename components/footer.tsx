"use client"

import { Scissors } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

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
                <button onClick={() => handleNavigation("/")} className="transition-colors text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/tienda")} className="transition-colors text-left">
                  Tienda
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/servicios")} className="transition-colors text-left">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/nosotros")} className="transition-colors text-left">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/contacto")} className="transition-colors text-left">
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-anton mb-4 text-elementz-cream">Políticas</h3>
            <ul className="space-y-2 text-elementz-gray">
              <li>
                <button onClick={() => handleNavigation("/terminos")} className="transition-colors text-left">
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/privacidad")} className="transition-colors text-left">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/envios")} className="transition-colors text-left">
                  Envíos y Entregas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/devoluciones")} className="transition-colors text-left">
                  Cambios y Devoluciones
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/atencion-cliente")} className="transition-colors text-left">
                  Atención al Cliente
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/preguntas-frecuentes")}
                  className="transition-colors text-left"
                >
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/metodos-pago")} className="transition-colors text-left">
                  Métodos de Pago
                </button>
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
          <p>&copy; 2024 ELEMENTZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
