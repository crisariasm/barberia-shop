"use client"

import type React from "react"
import { useState } from "react"
import { Scissors, Eye, EyeOff, User, UserPlus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (loginData.email && loginData.password) {
      // Save user data to localStorage
      const userData = {
        id: 1,
        name: "Usuario Demo",
        email: loginData.email,
        phone: "311 123 4567",
        joinDate: new Date().toISOString(),
        isLoggedIn: true,
      }

      localStorage.setItem("user", JSON.stringify(userData))
      router.push("/dashboard")
    } else {
      alert("Por favor completa todos los campos")
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (registerData.password !== registerData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    if (registerData.name && registerData.email && registerData.password) {
      const userData = {
        id: Date.now(),
        name: registerData.name,
        email: registerData.email,
        phone: registerData.phone,
        joinDate: new Date().toISOString(),
        isLoggedIn: true,
      }

      localStorage.setItem("user", JSON.stringify(userData))
      router.push("/dashboard")
    } else {
      alert("Por favor completa todos los campos obligatorios")
    }
  }

  return (
    <div className="min-h-screen bg-elementz-dark flex items-center justify-center font-lato p-4">
      <Card className="w-full max-w-md bg-elementz-slate border-elementz-brown">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scissors className="h-8 w-8 text-elementz-brown" />
            <span className="text-2xl font-anton text-elementz-cream">ELEMENTZ</span>
          </div>
          <CardTitle className="text-2xl text-elementz-cream font-anton">Bienvenido</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-elementz-slate">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray hover:text-elementz-cream transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-elementz-brown data-[state=active]:text-elementz-cream text-elementz-gray hover:text-elementz-cream transition-colors"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Registrarse
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-email" className="text-elementz-cream">
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    required
                    maxLength={100}
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="login-password" className="text-elementz-cream">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      required
                      maxLength={50}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown pr-10"
                      placeholder="Tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-elementz-gray hover:text-elementz-brown transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream transition-colors"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register" className="mt-6">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Label htmlFor="register-name" className="text-elementz-cream">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="register-name"
                    type="text"
                    required
                    maxLength={50}
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="register-email" className="text-elementz-cream">
                    Email *
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    required
                    maxLength={100}
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="register-phone" className="text-elementz-cream">
                    Teléfono
                  </Label>
                  <Input
                    id="register-phone"
                    type="tel"
                    maxLength={15}
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                    className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown"
                    placeholder="311 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="register-password" className="text-elementz-cream">
                    Contraseña *
                  </Label>
                  <div className="relative">
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      required
                      maxLength={50}
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown pr-10"
                      placeholder="Mínimo 6 caracteres"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-elementz-gray hover:text-elementz-brown transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-confirm-password" className="text-elementz-cream">
                    Confirmar Contraseña *
                  </Label>
                  <div className="relative">
                    <Input
                      id="register-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      maxLength={50}
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      className="bg-elementz-dark border-elementz-brown text-elementz-cream placeholder:text-elementz-gray focus:border-elementz-brown focus:ring-elementz-brown pr-10"
                      placeholder="Confirma tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-elementz-gray hover:text-elementz-brown transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream transition-colors"
                >
                  Crear Cuenta
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Link href="/" className="text-elementz-gray hover:text-elementz-brown text-sm transition-colors">
              ← Volver al sitio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
