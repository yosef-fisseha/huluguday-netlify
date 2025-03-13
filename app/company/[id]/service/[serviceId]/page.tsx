"use client"
import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Wrench } from "lucide-react"
import { companies } from "@/data/companies"
import { useLanguage } from "@/context/language-context"
import { serviceContent } from "@/data/service-content"
import { useTheme } from "@/components/theme-provider"
import Header from "@/components/header"

export default function ServiceDetailsPage() {
  const router = useRouter()
  const params = useParams()
  const { theme } = useTheme()
  const { language, t } = useLanguage()
  const isDarkMode = theme === "dark"
  const [searchQuery, setSearchQuery] = useState("")

  const companyId = params?.id as string
  const serviceId = params?.serviceId as string

  const company = companies.find((c) => c.id === companyId)
  const service = company?.services.find((s) => s.id === serviceId)

  if (!company || !service) {
    return (
      <div className="min-h-screen">
        <Header setSearchQuery={setSearchQuery} />
        <div className={`min-h-screen pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
          <div className="container mx-auto px-4">
            <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h1 className="text-3xl font-bold">Service not found</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const content = serviceContent[serviceId]?.[language] || ""

  return (
    <div className="min-h-screen">
      <Header setSearchQuery={setSearchQuery} />
      <div className={`min-h-screen pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push(`/company/${company.id}`)}
            className={`mb-6 flex items-center space-x-2 ${
              isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
            } transition-colors duration-200`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>
              {t("back_to")} {company.name[language]}
            </span>
          </button>
          <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center mb-8">
              <Wrench className={`w-10 h-10 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <h1 className="text-3xl font-bold ml-4">{service.name[language]}</h1>
            </div>
            <div className="space-y-8">
              <div
                className={`prose ${isDarkMode ? "prose-invert" : ""} max-w-none`}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

