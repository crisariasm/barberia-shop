import { Scissors } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ClientNavbar = dynamic(() => import("./client-navbar"), {
  loading: () => <div className="text-elementz-cream text-sm">Cargando...</div>
})

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

interface NavbarProps {
  cart?: CartItem[]
  onUpdateCart?: (cart: CartItem[]) => void
}

export default function Navbar(props: NavbarProps = {}) {
  const { cart = [], onUpdateCart } = props
  
  return (
    <nav className="fixed top-0 w-full bg-elementz-dark z-50 border-b border-elementz-brown">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-48">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer select-none">
              <Scissors className="h-8 w-8 text-elementz-brown" />
              <span className="text-2xl font-anton text-elementz-cream">ELEMENTZ</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-auto">
            <div className="flex items-center space-x-8">
              <Link href="/" className="font-lato transition-colors text-elementz-cream hover:text-elementz-brown whitespace-nowrap">
                Inicio
              </Link>
              <Link href="/tienda" className="font-lato transition-colors text-elementz-cream hover:text-elementz-brown whitespace-nowrap">
                Tienda
              </Link>
              <Link href="/servicios" className="font-lato transition-colors text-elementz-cream hover:text-elementz-brown whitespace-nowrap">
                Servicios
              </Link>
              <Link href="/nosotros" className="font-lato transition-colors text-elementz-cream hover:text-elementz-brown whitespace-nowrap">
                Nosotros
              </Link>
              <Link href="/contacto" className="font-lato transition-colors text-elementz-cream hover:text-elementz-brown whitespace-nowrap">
                Contacto
              </Link>
            </div>
          </div>

          <div className="w-48 flex justify-end">
            <ClientNavbar cart={cart} onUpdateCart={onUpdateCart} />
          </div>
        </div>
      </div>
    </nav>
  )
}