"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X, LogIn, Trash2, Plus, Minus, User } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

const Sheet = lazy(() => import("@/components/ui/sheet").then(mod => ({ default: mod.Sheet })))
const SheetContent = lazy(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetContent })))
const SheetHeader = lazy(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetHeader })))
const SheetTitle = lazy(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetTitle })))
const SheetTrigger = lazy(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetTrigger })))
const Dialog = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.Dialog })))
const DialogContent = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogContent })))
const DialogHeader = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogHeader })))
const DialogTitle = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogTitle })))

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

interface ClientNavbarProps {
  cart?: CartItem[]
  onUpdateCart?: (cart: CartItem[]) => void
}

export default function ClientNavbar({ cart = [], onUpdateCart }: ClientNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showCartSheet, setShowCartSheet] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error("Error parsing user data:", error)
        localStorage.removeItem("user")
      }
    }
  }, [])

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  const handleNavigation = (href: string) => {
    if (pathname === href || pathname.startsWith(href + "/")) {
      setIsMenuOpen(false)
      return;
    }
    router.push(href)
    setIsMenuOpen(false)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (!onUpdateCart) return

    if (newQuantity <= 0) {
      onUpdateCart(cart.filter((item) => item.id !== id))
    } else {
      onUpdateCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    if (!onUpdateCart) return
    onUpdateCart(cart.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    if (cart.length === 0) return

    const orderDetails = cart
      .map((item) => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    const total = getTotalPrice().toFixed(2)

    const message = `*ELEMENTZ - Nueva Orden*

  *Productos:*
  ${orderDetails}
  
  *Total: $${total}*
  
  _Orden generada desde la tienda online_`

    const whatsappUrl = `https://wa.me/573113514498?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Clear cart after checkout
    if (onUpdateCart) {
      onUpdateCart([])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  const handleCartClick = () => {
    if (!user) {
      setShowLoginDialog(true)
      return false
    }
    setShowCartSheet(true)
    return true
  }

  return (
    <>
      <div className="hidden md:flex items-center space-x-4 min-w-[200px] justify-end">
        <div className="flex items-center space-x-2 min-w-[120px] justify-end">
          {user ? (
            <>
              <button
                onClick={() => handleNavigation("/dashboard")}
                className="text-elementz-gray transition-colors font-lato flex items-center hover:text-elementz-brown text-sm whitespace-nowrap"
              >
                <User className="h-4 w-4 mr-1 text-elementz-cream" />
                <span className="text-elementz-cream">{user.name}</span>
              </button>
              <Button
                onClick={handleLogout}
                className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80 text-xs px-2 py-1"
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <button
              onClick={() => handleNavigation("/login")}
              className="text-elementz-gray transition-colors font-lato flex items-center hover:text-elementz-brown text-sm whitespace-nowrap"
            >
              <LogIn className="h-4 w-4 mr-1 text-elementz-cream" />
              <span className="text-elementz-cream">Iniciar Sesión</span>
            </button>
          )}
        </div>

        {/* Shopping Cart - Simplified */}
        <Button
          className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80 relative"
          onClick={handleCartClick}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Carrito
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-elementz-cream text-elementz-brown text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-elementz-cream" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-elementz-dark/98 backdrop-blur-md border-t border-elementz-slate">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("/")}
              className={`block font-lato transition-colors hover:text-elementz-brown ${
                isActive("/") ? "text-elementz-brown font-semibold" : "text-elementz-cream"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavigation("/tienda")}
              className={`block font-lato transition-colors hover:text-elementz-brown ${
                isActive("/tienda") ? "text-elementz-brown font-semibold" : "text-elementz-cream"
              }`}
            >
              Tienda
            </button>
            <button
              onClick={() => handleNavigation("/servicios")}
              className={`block font-lato transition-colors hover:text-elementz-brown ${
                isActive("/servicios") ? "text-elementz-brown font-semibold" : "text-elementz-cream"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavigation("/nosotros")}
              className={`block font-lato transition-colors hover:text-elementz-brown ${
                isActive("/nosotros") ? "text-elementz-brown font-semibold" : "text-elementz-cream"
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavigation("/contacto")}
              className={`block font-lato transition-colors hover:text-elementz-brown ${
                isActive("/contacto") ? "text-elementz-brown font-semibold" : "text-elementz-cream"
              }`}
            >
              Contacto
            </button>
            {user ? (
              <>
                <button onClick={() => handleNavigation("/dashboard")} className="block text-elementz-gray font-lato transition-colors hover:text-elementz-brown">
                  Mi Dashboard
                </button>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block text-elementz-gray font-lato transition-colors hover:text-elementz-brown"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button onClick={() => handleNavigation("/login")} className="block text-elementz-gray font-lato transition-colors hover:text-elementz-brown">
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      )}

      {/* Login Required Dialog */}
      {showLoginDialog && (
        <Suspense fallback={<div>Cargando...</div>}>
          <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
            <DialogContent className="bg-elementz-slate border-elementz-brown text-elementz-cream">
              <DialogHeader>
                <DialogTitle className="font-anton text-center">Iniciar Sesión Requerido</DialogTitle>
              </DialogHeader>
              <div className="text-center py-6">
                <ShoppingCart className="h-16 w-16 text-elementz-brown mx-auto mb-4" />
                <p className="text-elementz-gray mb-6">Debes iniciar sesión para agregar productos al carrito</p>
                <div className="space-y-3">
                  <Link href="/login">
                    <Button className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">
                      <LogIn className="h-4 w-4 mr-2" />
                      Iniciar Sesión
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-elementz-brown text-elementz-brown hover:bg-elementz-brown hover:text-elementz-cream bg-transparent"
                    onClick={() => setShowLoginDialog(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Suspense>
      )}

      {/* Cart Sheet */}
      {showCartSheet && (
        <Suspense fallback={<div>Cargando carrito...</div>}>
          <Sheet open={showCartSheet} onOpenChange={setShowCartSheet}>
            <SheetContent className="bg-elementz-dark border-elementz-brown text-elementz-cream w-96">
              <SheetHeader>
                <SheetTitle className="text-elementz-cream font-anton">Carrito de Compras</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col h-[calc(100vh-120px)]">
                {cart.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingCart className="h-16 w-16 text-elementz-gray mx-auto mb-4" />
                      <p className="text-elementz-gray">Tu carrito está vacío</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 bg-elementz-slate p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-elementz-cream truncate">{item.name}</h4>
                            <p className="text-xs text-elementz-gray">{item.category}</p>
                            <p className="text-sm text-elementz-brown font-bold">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 border-elementz-brown text-elementz-brown hover:bg-elementz-brown hover:text-elementz-cream bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 border-elementz-brown text-elementz-brown hover:bg-elementz-brown hover:text-elementz-cream bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 w-6 p-0 border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent flex-shrink-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="flex-shrink-0 border-t border-elementz-brown pt-4 mt-4 bg-elementz-dark">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                          <span className="text-lg font-anton text-elementz-cream">Total:</span>
                          <span className="text-xl font-anton text-elementz-brown">
                            ${getTotalPrice().toFixed(2)}
                          </span>
                        </div>
                        <Button
                          onClick={handleCheckout}
                          className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-semibold py-4 text-base rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Comprar por WhatsApp
                        </Button>
                        <button
                          onClick={() => setShowCartSheet(false)}
                          className="w-full text-elementz-gray text-sm hover:text-elementz-cream transition-colors"
                        >
                          Cerrar
                        </button>
                        <div className="pb-2"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </Suspense>
      )}
    </>
  )
}
