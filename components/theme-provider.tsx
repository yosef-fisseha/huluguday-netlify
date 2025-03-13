"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  defaultTheme?: Theme
  storageKey?: string
  children: ReactNode
}

export const ThemeProvider = ({
  defaultTheme = "system",
  storageKey = "hulu-guday-theme",
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return defaultTheme as Theme
    }
    try {
      const storedTheme = window.localStorage.getItem(storageKey) as Theme | null
      return storedTheme || (defaultTheme as Theme)
    } catch (e) {
      return defaultTheme as Theme
    }
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, theme)
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme, storageKey])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

