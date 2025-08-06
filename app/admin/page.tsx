"use client"

import type React from "react"
import { useState } from "react"
import {
  Plus,
  Edit,
  Trash2,
  Package,
  Users,
  ShoppingCart,
  DollarSign,
  Eye,
  Search,
  Scissors,
  EyeOff,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pomada Clásica",
      category: "Styling",
      subcategory: "Pomadas",
      price: 25.99,
      stock: 50,
      image: "/placeholder.svg?height=100&width=100",
      status: "active",
    },
    {
      id: 2,
      name: "Aceite para Barba",
      category: "Cuidado",
      subcategory: "Aceites",
      price: 18.99,
      stock: 30,
      image: "/placeholder.svg?height=100&width=100",
      status: "active",
    },
  ])

  const [categories] = useState([
    { id: 1, name: "Styling", subcategories: ["Pomadas", "Ceras", "Geles"] },
    { id: 2, name: "Cuidado", subcategories: ["Aceites", "Bálsamos", "Cremas"] },
    { id: 3, name: "Limpieza", subcategories: ["Champús", "Acondicionadores", "Jabones"] },
  ])

  const [orders] = useState([
    { id: 1, customer: "Juan Pérez", total: 45.98, status: "pending", date: "2024-01-15" },
    { id: 2, customer: "Carlos López", total: 32.5, status: "completed", date: "2024-01-14" },
    { id: 3, customer: "Miguel Torres", total: 67.25, status: "shipped", date: "2024-01-13" },
  ])

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    subcategory: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Credenciales incorrectas")
    }
  }

  const handleAddProduct = () => {
    const product = {
      id: products.length + 1,
      ...newProduct,
      price: Number.parseFloat(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      status: "active",
      image: "/placeholder.svg?height=100&width=100",
    }
    setProducts([...products, product])
    setNewProduct({
      name: "",
      category: "",
      subcategory: "",
      price: "",
      stock: "",
      description: "",
      image: "",
    })
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-elementz-dark flex items-center justify-center font-lato">
        <Card className="w-full max-w-md bg-elementz-slate border-elementz-brown">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-elementz-brown" />
              <span className="text-2xl font-anton text-elementz-cream">ADMIN PANEL</span>
            </div>
            <CardTitle className="text-2xl text-elementz-cream font-anton">Acceso Administrativo</CardTitle>
            <p className="text-elementz-gray text-sm">Solo personal autorizado</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-elementz-cream">
                  Usuario Administrador
                </Label>
                <Input
                  id="username"
                  type="text"
                  maxLength={50}
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                  placeholder="admin"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-elementz-cream">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    maxLength={50}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray pr-10"
                    placeholder="admin123"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-elementz-gray hover:text-elementz-brown"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">
                <Shield className="h-4 w-4 mr-2" />
                Acceder al Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-elementz-dark font-lato">
      <div className="border-b border-elementz-brown bg-elementz-slate">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-elementz-brown" />
              <h1 className="text-2xl font-anton text-elementz-cream">ELEMENTZ - Panel Administrativo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsAuthenticated(false)}
                className="bg-elementz-brown text-elementz-cream hover:bg-elementz-slate hover:text-elementz-cream px-4 py-2 rounded-md font-semibold"
              >
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-elementz-slate border-elementz-brown">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-elementz-gray">Total Productos</p>
                  <p className="text-2xl font-anton text-elementz-cream">{products.length}</p>
                </div>
                <Package className="h-8 w-8 text-elementz-brown" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-elementz-slate border-elementz-brown">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-elementz-gray">Órdenes</p>
                  <p className="text-2xl font-anton text-elementz-cream">{orders.length}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-elementz-brown" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-elementz-slate border-elementz-brown">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-elementz-gray">Clientes</p>
                  <p className="text-2xl font-anton text-elementz-cream">156</p>
                </div>
                <Users className="h-8 w-8 text-elementz-brown" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-elementz-slate border-elementz-brown">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-elementz-gray">Ventas</p>
                  <p className="text-2xl font-anton text-elementz-cream">$2,450</p>
                </div>
                <DollarSign className="h-8 w-8 text-elementz-brown" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-elementz-slate border-elementz-brown">
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
            >
              Productos
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
            >
              Órdenes
            </TabsTrigger>
            <TabsTrigger
              value="categories"
              className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
            >
              Categorías
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="bg-elementz-slate border-elementz-brown">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-elementz-cream font-anton">Gestión de Productos</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar Producto
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-elementz-slate border-elementz-brown text-elementz-cream">
                      <DialogHeader>
                        <DialogTitle className="font-anton">Nuevo Producto</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Nombre</Label>
                          <Input
                            maxLength={100}
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Categoría</Label>
                            <Select onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}>
                              <SelectTrigger className="bg-elementz-dark border-elementz-brown">
                                <SelectValue placeholder="Seleccionar" />
                              </SelectTrigger>
                              <SelectContent className="bg-elementz-dark border-elementz-brown">
                                {categories.map((cat) => (
                                  <SelectItem key={cat.id} value={cat.name} className="text-elementz-cream">
                                    {cat.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Subcategoría</Label>
                            <Select onValueChange={(value) => setNewProduct({ ...newProduct, subcategory: value })}>
                              <SelectTrigger className="bg-elementz-dark border-elementz-brown">
                                <SelectValue placeholder="Seleccionar" />
                              </SelectTrigger>
                              <SelectContent className="bg-elementz-dark border-elementz-brown">
                                {categories
                                  .find((c) => c.name === newProduct.category)
                                  ?.subcategories.map((sub) => (
                                    <SelectItem key={sub} value={sub} className="text-elementz-cream">
                                      {sub}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Precio</Label>
                            <Input
                              type="number"
                              step="0.01"
                              max="999999"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                              className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                            />
                          </div>
                          <div>
                            <Label>Stock</Label>
                            <Input
                              type="number"
                              max="9999"
                              value={newProduct.stock}
                              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                              className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Descripción</Label>
                          <Textarea
                            maxLength={500}
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                          />
                        </div>
                        <Button
                          onClick={handleAddProduct}
                          className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
                        >
                          Agregar Producto
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-elementz-gray" />
                    <Input
                      placeholder="Buscar productos..."
                      maxLength={100}
                      className="pl-10 bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray"
                    />
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="border-elementz-brown hover:bg-transparent">
                      <TableHead className="text-elementz-gray">Imagen</TableHead>
                      <TableHead className="text-elementz-gray">Nombre</TableHead>
                      <TableHead className="text-elementz-gray">Categoría</TableHead>
                      <TableHead className="text-elementz-gray">Precio</TableHead>
                      <TableHead className="text-elementz-gray">Stock</TableHead>
                      <TableHead className="text-elementz-gray">Estado</TableHead>
                      <TableHead className="text-elementz-gray">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id} className="border-elementz-brown hover:bg-elementz-slate/50">
                        <TableCell>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                        </TableCell>
                        <TableCell className="text-elementz-cream font-medium">{product.name}</TableCell>
                        <TableCell className="text-elementz-gray">{product.category}</TableCell>
                        <TableCell className="text-elementz-brown font-semibold">${product.price}</TableCell>
                        <TableCell className="text-elementz-gray">{product.stock}</TableCell>
                        <TableCell>
                          <Badge className="bg-elementz-brown/20 text-elementz-brown">{product.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="bg-elementz-slate border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-elementz-cream font-anton">Gestión de Órdenes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-elementz-brown hover:bg-transparent">
                      <TableHead className="text-elementz-gray">ID</TableHead>
                      <TableHead className="text-elementz-gray">Cliente</TableHead>
                      <TableHead className="text-elementz-gray">Total</TableHead>
                      <TableHead className="text-elementz-gray">Estado</TableHead>
                      <TableHead className="text-elementz-gray">Fecha</TableHead>
                      <TableHead className="text-elementz-gray">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-elementz-brown hover:bg-elementz-slate/50">
                        <TableCell className="text-elementz-cream">#{order.id}</TableCell>
                        <TableCell className="text-elementz-cream">{order.customer}</TableCell>
                        <TableCell className="text-elementz-brown font-semibold">${order.total}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              order.status === "completed"
                                ? "bg-elementz-brown/20 text-elementz-brown"
                                : order.status === "pending"
                                  ? "bg-elementz-gray/20 text-elementz-gray"
                                  : "bg-elementz-slate/20 text-elementz-cream"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-elementz-gray">{order.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-elementz-brown text-elementz-cream hover:bg-elementz-brown/80"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories">
            <Card className="bg-elementz-slate border-elementz-brown">
              <CardHeader>
                <CardTitle className="text-elementz-cream font-anton">Gestión de Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <Card key={category.id} className="bg-elementz-dark border-elementz-brown">
                      <CardHeader>
                        <CardTitle className="text-elementz-cream text-lg font-anton">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {category.subcategories.map((sub) => (
                            <Badge key={sub} variant="outline" className="border-elementz-brown text-elementz-brown">
                              {sub}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-elementz-slate border-t border-elementz-brown py-6 text-center text-elementz-gray font-lato mt-auto">
        © {new Date().getFullYear()} ELEMENTZ. Todos los derechos reservados. Contacto:{" "}
        <a href="mailto:info@elementz.com" className="text-elementz-brown">
          info@elementz.com
        </a>
      </footer>
    </div>
  )
}
