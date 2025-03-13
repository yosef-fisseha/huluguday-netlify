"use client"
import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { companies } from "@/data/companies"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/components/theme-provider"
import Header from "@/components/header"

export default function CompanyPage() {
  const router = useRouter()
  const params = useParams()
  const { theme } = useTheme()
  const { language, t } = useLanguage()
  const isDarkMode = theme === "dark"
  const [searchQuery, setSearchQuery] = useState("")

  const companyId = params?.id as string
  const company = companies.find((c) => c.id === companyId)

  if (!company) {
    return (
      <div className="min-h-screen">
        <Header setSearchQuery={setSearchQuery} />
        <div className={`min-h-screen pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
          <div className="container mx-auto px-4">
            <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h1 className="text-3xl font-bold">Company not found</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header setSearchQuery={setSearchQuery} />
      <div className={`min-h-screen pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push("/home")}
            className={`mb-6 flex items-center space-x-2 ${
              isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
            } transition-colors duration-200`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t("back_to_companies")}</span>
          </button>
          <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center justify-center mb-8 flex-col md:flex-row">
              <div
                className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} w-full max-w-xs flex items-center justify-center`}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name[language]}
                  className="w-full h-auto object-contain max-h-48"
                />
              </div>
              <h1 className="text-4xl font-bold mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                {company.name[language]}
              </h1>
            </div>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-6">{t("services")}</h2>
                {/* Change the grid columns and gap here to adjust the size and spacing of service boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {company.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => router.push(`/company/${company.id}/service/${service.id}`)}
                      // Adjust the padding (p-6) and other classes to change the size of the service boxes
                      className={`rounded-xl cursor-pointer overflow-hidden shadow-md ${
                        isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"
                      } hover:transform hover:scale-105 transition-all duration-200 flex flex-col p-6`}
                    >
                      {/* This is where you add the service logo/image */}
                      {service.image && (
                        // Adjust the width and height here to change the size of the service logo
                        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.name[language]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{service.name[language]}</span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

