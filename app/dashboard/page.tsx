"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, ShoppingBag, Calendar, Edit, Scissors, Package, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface UserData {
  id: number
  name: string
  email: string
  phone: string
  joinDate: string
  isLoggedIn: boolean
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  // Datos simulados de historial
  const [purchases] = useState([
    {
      id: 1,
      date: "2024-01-15",
      items: ["Pomada Clásica", "Aceite para Barba"],
      total: 44.98,
      status: "Entregado",
    },
    {
      id: 2,
      date: "2024-01-10",
      items: ["Champú Premium"],
      total: 22.99,
      status: "Entregado",
    },
    {
      id: 3,
      date: "2024-01-05",
      items: ["Cera Modeladora", "Bálsamo After Shave"],
      total: 45.98,
      status: "En proceso",
    },
  ])

  const [appointments] = useState([
    {
      id: 1,
      date: "2024-01-20",
      time: "10:00 AM",
      service: "Corte Clásico + Afeitado",
      status: "Confirmada",
    },
    {
      id: 2,
      date: "2024-01-18",
      time: "3:00 PM",
      service: "Tratamiento Facial",
      status: "Completada",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "11:30 AM",
      service: "Paquete Premium",
      status: "Completada",
    },
  ])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setEditData({
        name: parsedUser.name,
        email: parsedUser.email,
        phone: parsedUser.phone,
      })
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleSaveProfile = () => {
    if (user) {
      const updatedUser = {
        ...user,
        name: editData.name,
        email: editData.email,
        phone: editData.phone,
      }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
      setIsEditing(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-elementz-dark flex items-center justify-center">
        <div className="text-elementz-cream">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-elementz-dark font-lato">
      <Navbar />

      {/* Header */}
      <section className="bg-elementz-brown py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-anton text-elementz-cream mb-2">Mi Dashboard</h1>
            <p className="text-xl text-elementz-cream/90">Bienvenido de vuelta, {user.name}</p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 bg-elementz-slate">
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-elementz-dark border-elementz-brown">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-elementz-gray">Compras Totales</p>
                    <p className="text-2xl font-anton text-elementz-cream">{purchases.length}</p>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-elementz-brown" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-elementz-dark border-elementz-brown">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-elementz-gray">Citas</p>
                    <p className="text-2xl font-anton text-elementz-cream">{appointments.length}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-elementz-brown" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-elementz-dark border-elementz-brown">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-elementz-gray">Gastado Total</p>
                    <p className="text-2xl font-anton text-elementz-cream">
                      ${purchases.reduce((sum, p) => sum + p.total, 0).toFixed(2)}
                    </p>
                  </div>
                  <Package className="h-8 w-8 text-elementz-brown" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-elementz-dark border-elementz-brown">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-elementz-gray">Miembro desde</p>
                    <p className="text-lg font-anton text-elementz-cream">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-elementz-brown" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-elementz-dark border border-elementz-brown">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
              >
                <User className="h-4 w-4 mr-2" />
                Mi Perfil
              </TabsTrigger>
              <TabsTrigger
                value="purchases"
                className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Mis Compras
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Mis Citas
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="bg-elementz-dark border-elementz-brown">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-elementz-cream font-anton">Información Personal</CardTitle>
                    <Button
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancelar" : "Editar"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div>
                        <Label className="text-elementz-cream">Nombre Completo</Label>
                        <Input
                          value={editData.name}
                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream"
                          maxLength={50}
                        />
                      </div>
                      <div>
                        <Label className="text-elementz-cream">Email</Label>
                        <Input
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream"
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <Label className="text-elementz-cream">Teléfono</Label>
                        <Input
                          value={editData.phone}
                          onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                          className="bg-elementz-slate border-elementz-brown text-elementz-cream"
                          maxLength={15}
                        />
                      </div>
                      <Button
                        onClick={handleSaveProfile}
                        className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream"
                      >
                        Guardar Cambios
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-elementz-gray">Nombre</Label>
                        <p className="text-elementz-cream text-lg">{user.name}</p>
                      </div>
                      <div>
                        <Label className="text-elementz-gray">Email</Label>
                        <p className="text-elementz-cream text-lg">{user.email}</p>
                      </div>
                      <div>
                        <Label className="text-elementz-gray">Teléfono</Label>
                        <p className="text-elementz-cream text-lg">{user.phone || "No especificado"}</p>
                      </div>
                      <div>
                        <Label className="text-elementz-gray">Miembro desde</Label>
                        <p className="text-elementz-cream text-lg">{new Date(user.joinDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Purchases Tab */}
            <TabsContent value="purchases">
              <Card className="bg-elementz-dark border-elementz-brown">
                <CardHeader>
                  <CardTitle className="text-elementz-cream font-anton">Historial de Compras</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-elementz-brown hover:bg-transparent">
                        <TableHead className="text-elementz-gray">Fecha</TableHead>
                        <TableHead className="text-elementz-gray">Productos</TableHead>
                        <TableHead className="text-elementz-gray">Total</TableHead>
                        <TableHead className="text-elementz-gray">Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {purchases.map((purchase) => (
                        <TableRow key={purchase.id} className="border-elementz-brown hover:bg-elementz-slate/50">
                          <TableCell className="text-elementz-cream">
                            {new Date(purchase.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-elementz-cream">{purchase.items.join(", ")}</TableCell>
                          <TableCell className="text-elementz-brown font-semibold">
                            ${purchase.total.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                purchase.status === "Entregado"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }
                            >
                              {purchase.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <Card className="bg-elementz-dark border-elementz-brown">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-elementz-cream font-anton">Mis Citas</CardTitle>
                    <Link href="/contacto">
                      <Button className="bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">
                        <Scissors className="h-4 w-4 mr-2" />
                        Nueva Cita
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-elementz-brown hover:bg-transparent">
                        <TableHead className="text-elementz-gray">Fecha</TableHead>
                        <TableHead className="text-elementz-gray">Hora</TableHead>
                        <TableHead className="text-elementz-gray">Servicio</TableHead>
                        <TableHead className="text-elementz-gray">Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.map((appointment) => (
                        <TableRow key={appointment.id} className="border-elementz-brown hover:bg-elementz-slate/50">
                          <TableCell className="text-elementz-cream">
                            {new Date(appointment.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-elementz-cream">{appointment.time}</TableCell>
                          <TableCell className="text-elementz-cream">{appointment.service}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                appointment.status === "Confirmada"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-green-500/20 text-green-400"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
