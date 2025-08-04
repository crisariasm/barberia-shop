import type React from "react"
import type { Metadata } from "next"
import { Anton, Lato } from "next/font/google"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "ELEMENTZ - Barbería Premium de Estilo y Confianza",
  description:
    "ELEMENTZ es la barbería premium donde descubres tu mejor versión. Experiencias memorables, estilo único y confianza en cada servicio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${lato.variable} font-lato`}>{children}</body>
    </html>
  )
}
