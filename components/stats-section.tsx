"use client"
import { useLanguage } from "@/context/language-context"
import { Users, Building, FileText, Clock } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function StatsSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const stats = [
    {
      id: 1,
      icon: <Users className="h-8 w-8 text-blue-500" />,
      value: "500,000+",
      label: {
        en: "Users Served",
        am: "የተገለገሉ ተጠቃሚዎች",
      },
    },
    {
      id: 2,
      icon: <Building className="h-8 w-8 text-green-500" />,
      value: "15+",
      label: {
        en: "Government Agencies",
        am: "የመንግስት ኤጀንሲዎች",
      },
    },
    {
      id: 3,
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      value: "100+",
      label: {
        en: "Services Available",
        am: "የሚገኙ አገልግሎቶች",
      },
    },
    {
      id: 4,
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      value: "24/7",
      label: {
        en: "Online Access",
        am: "የመስመር ላይ ተደራሽነት",
      },
    },
  ]

  return (
    <section className={`py-12 ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } shadow-md text-center transform transition-transform hover:scale-105`}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {stat.value}
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{stat.label[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

