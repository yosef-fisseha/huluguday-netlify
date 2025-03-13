"use client"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/components/theme-provider"
import { Heart } from "lucide-react"

export default function Footer() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {currentYear} {language === "en" ? "Hulu Guday" : "ሁሉ ጉዳይ"} |{" "}
              {language === "en" ? "All Rights Reserved" : "መብቱ በህግ የተጠበቀ ነው"}
            </p>
          </div>

          <div className="flex items-center">
            <p className="flex items-center">
              {language === "en" ? "Developed with" : "የተዘጋጀው በ"}
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              {language === "en" ? "by" : ""} Yosef Fisseha
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

