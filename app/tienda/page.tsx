"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Filter, ShoppingCart, Heart, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [user, setUser] = useState<any>(null)
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const products = [
    {
      id: 1,
      name: "Pomada Clásica Premium",
      category: "Styling",
      subcategory: "Pomadas",
      price: 25.99,
      originalPrice: 32.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Pomada de fijación fuerte con acabado brillante",
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: "Aceite para Barba Orgánico",
      category: "Cuidado",
      subcategory: "Aceites",
      price: 18.99,
      originalPrice: 22.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Aceite 100% natural para suavizar y nutrir la barba",
      inStock: true,
      featured: true,
    },
    {
      id: 3,
      name: "Champú Revitalizante",
      category: "Limpieza",
      subcategory: "Champús",
      price: 22.99,
      originalPrice: 28.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Champú fortificante con ingredientes naturales",
      inStock: true,
      featured: false,
    },
    {
      id: 4,
      name: "Cera Modeladora Mate",
      category: "Styling",
      subcategory: "Ceras",
      price: 28.99,
      originalPrice: 35.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Cera de fijación media con acabado mate natural",
      inStock: true,
      featured: false,
    },
    {
      id: 5,
      name: "Bálsamo After Shave",
      category: "Cuidado",
      subcategory: "Bálsamos",
      price: 16.99,
      originalPrice: 21.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Bálsamo calmante y hidratante post-afeitado",
      inStock: false,
      featured: false,
    },
    {
      id: 6,
      name: "Gel Fijador Extra Fuerte",
      category: "Styling",
      subcategory: "Geles",
      price: 19.99,
      originalPrice: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Gel de fijación extra fuerte para peinados duraderos",
      inStock: true,
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "Todos los Productos" },
    { value: "Styling", label: "Styling" },
    { value: "Cuidado", label: "Cuidado" },
    { value: "Limpieza", label: "Limpieza" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product: any) => {
    if (!user) {
      setShowLoginDialog(true)
      return
    }

    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
          category: product.category,
        },
      ])
    }
  }

  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar cart={cart} onUpdateCart={setCart} />

      {/* Hero Section */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-anton text-elementz-cream mb-4">Nuestra Tienda</h1>
          <p className="text-xl text-elementz-cream/90 max-w-2xl mx-auto">
            Descubre los mejores productos para el cuidado masculino, seleccionados por nuestros expertos
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-elementz-slate border-b border-elementz-brown">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-elementz-gray" />
                <Input
                  placeholder="Buscar productos..."
                  maxLength={100}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 bg-elementz-dark border-elementz-brown text-elementz-cream">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-elementz-dark border-elementz-brown">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-elementz-cream">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-elementz-gray">{filteredProducts.length} productos encontrados</div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-elementz-slate border-elementz-brown hover:border-elementz-brown/80 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-elementz-brown text-elementz-cream">Destacado</Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-elementz-dark text-elementz-cream">Agotado</Badge>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-elementz-cream hover:bg-elementz-gray text-elementz-dark"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="border-elementz-brown text-elementz-brown text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-anton text-elementz-cream mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-elementz-gray text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-anton text-elementz-brown">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-elementz-gray line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream font-lato font-semibold"
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Agregar al Carrito
                      </>
                    ) : (
                      "Agotado"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-elementz-gray text-lg mb-4">
                No se encontraron productos que coincidan con tu búsqueda
              </div>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-elementz-slate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-anton text-elementz-cream mb-4">Mantente al Día</h2>
          <p className="text-elementz-gray mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, nuevos productos y consejos de cuidado personal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Tu email"
              maxLength={100}
              className="flex-1 bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
            />
            <Button className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">Suscribirse</Button>
          </div>
        </div>
      </section>

      {/* Login Required Dialog */}
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

      <Footer />
    </div>
  )
}
