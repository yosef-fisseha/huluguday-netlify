"use client"
import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "am"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  search: {
    en: "Search",
    am: "ፈልግ",
  },
  home: {
    en: "Home",
    am: "መነሻ",
  },
  back_to_companies: {
    en: "Back to Companies",
    am: "ወደ ኩባንያዎች ተመለስ",
  },
  services: {
    en: "Services",
    am: "አገልግሎቶች",
  },
  back_to: {
    en: "Back to",
    am: "ተመለስ ወደ",
  },
  about: {
    en: "About",
    am: "ስለ እኛ",
  },
  contact: {
    en: "Contact",
    am: "አግኙን",
  },
  language: {
    en: "Language",
    am: "ቋንቋ",
  },
  english: {
    en: "English",
    am: "እንግሊዘኛ",
  },
  amharic: {
    en: "Amharic",
    am: "አማርኛ",
  },
  dark_mode: {
    en: "Dark Mode",
    am: "ጨለማ ሁነታ",
  },
  light_mode: {
    en: "Light Mode",
    am: "ብርሃን ሁነታ",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

