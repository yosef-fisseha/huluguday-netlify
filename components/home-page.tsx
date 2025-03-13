"use client"
import { useRouter } from "next/navigation"
import { companies } from "@/data/companies"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/components/theme-provider"

interface HomePageProps {
  searchQuery: string
}

export default function HomePage({ searchQuery }: HomePageProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const { language } = useLanguage()
  const isDarkMode = theme === "dark"

  const filteredCompanies = companies.filter(
    (company) =>
      company.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.services.some((service) => service.name[language].toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <main className="container mx-auto px-4 pt-24 pb-12">
      {/* Change the grid columns and gap here to adjust the size and spacing of company boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCompanies.map((company) => (
          <button
            key={company.id}
            onClick={() => router.push(`/company/${company.id}`)}
            // Adjust the padding (p-6) and other classes to change the size of the company boxes
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Adjust the width and height here to change the size of the company logo */}
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-center">{company.name[language]}</span>
              <span className="text-sm text-center text-gray-500">
                {company.services.length} {language === "en" ? "services" : "አገልግሎቶች"}
              </span>
            </div>
          </button>
        ))}
      </div>
    </main>
  )
}

