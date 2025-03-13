"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { Search, Moon, Sun, Menu, X, Globe, Home } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/components/theme-provider"

interface HeaderProps {
  setSearchQuery: (query: string) => void
}

export default function Header({ setSearchQuery }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(searchValue)
    if (pathname !== "/home") {
      router.push("/home")
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => router.push("/home")}
              className="flex items-center text-xl md:text-2xl font-bold text-gray-800 dark:text-white"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/671/837/original/hg-letter-logo-design-initial-letters-hg-logo-icon-abstract-letter-hg-minimal-logo-design-template-hg-letter-design-with-black-colors-hg-logo-vector.jpg"
                alt="Company Logo"
                className="h-8 w-8 mr-2 rounded-full"
              />

              {language === "en" ? "Hulu Guday" : "ሁሉ ጉዳይ"}
            </button>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder={t("search")}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => router.push("/home")}
              className={`px-3 py-2 flex items-center ${
                pathname === "/home"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              {t("home")}
            </button>
            <button
              onClick={() => router.push("/about")}
              className={`px-3 py-2 ${
                pathname === "/about"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t("about")}
            </button>
            <button
              onClick={() => router.push("/contact")}
              className={`px-3 py-2 ${
                pathname === "/contact"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t("contact")}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span>{language === "en" ? "EN" : "አማ"}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700 dark:text-gray-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder={t("search")}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  router.push("/home")
                  setIsMenuOpen(false)
                }}
                className={`px-3 py-2 flex items-center ${
                  pathname === "/home"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Home className="h-5 w-5 mr-2" />
                {t("home")}
              </button>
              <button
                onClick={() => {
                  router.push("/about")
                  setIsMenuOpen(false)
                }}
                className={`px-3 py-2 ${
                  pathname === "/about"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {t("about")}
              </button>
              <button
                onClick={() => {
                  router.push("/contact")
                  setIsMenuOpen(false)
                }}
                className={`px-3 py-2 ${
                  pathname === "/contact"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {t("contact")}
              </button>
              <div className="flex justify-between items-center px-3 py-2">
                <span className="text-gray-700 dark:text-gray-200">{t("language")}</span>
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                >
                  {language === "en" ? t("amharic") : t("english")}
                </button>
              </div>
              <div className="flex justify-between items-center px-3 py-2">
                <span className="text-gray-700 dark:text-gray-200">
                  {theme === "dark" ? t("light_mode") : t("dark_mode")}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

