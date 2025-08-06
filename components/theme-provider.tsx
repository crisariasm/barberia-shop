'use client'

import { memo } from 'react'
import dynamic from 'next/dynamic'

const NextThemesProvider = dynamic(
  () => import('next-themes').then(mod => ({ default: mod.ThemeProvider })),
  { ssr: false }
)

export interface ThemeProviderProps {
  children: React.ReactNode
  [key: string]: any
}

export const ThemeProvider = memo(function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
})
