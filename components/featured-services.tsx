"use client"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/components/theme-provider"
import { ArrowRight } from "lucide-react"

export default function FeaturedServices() {
  const router = useRouter()
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const featuredServices = [
    {
      id: "new-passport",
      companyId: "techcorp",
      name: {
        en: "New Passport",
        am: "አዲስ ፓስፖርት",
      },
      description: {
        en: "Apply for a new passport with streamlined process and clear requirements.",
        am: "ቀልጣፋ ሂደት እና ግልጽ መስፈርቶች ያሉት አዲስ ፓስፖርት ያመልክቱ።",
      },
      image: "https://th.bing.com/th/id/OIP.Yd_Yw9Ow-5Qj-qqZ6z8howHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: "birth-certificate",
      companyId: "wesag-kunet",
      name: {
        en: "Birth Certificate",
        am: "የልደት ምስክር ወረቀት",
      },
      description: {
        en: "Obtain official birth certificates for legal identification and documentation.",
        am: "ለህጋዊ መታወቂያ እና ሰነድ ይጠቅማል የልደት ምስክር ወረቀት ያግኙ።",
      },
      image: "https://th.bing.com/th/id/OIP.Yd_Yw9Ow-5Qj-qqZ6z8howHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: "trade-license",
      companyId: "trade-ministry",
      name: {
        en: "Trade License",
        am: "ንግድ ፍቃድ",
      },
      description: {
        en: "Register your business and obtain the necessary trade licenses to operate legally.",
        am: "ንግድዎን ይመዝግቡ እና በህጋዊ መንገድ ለመስራት አስፈላጊ የሆኑ የንግድ ፍቃዶችን ያግኙ።",
      },
      image: "https://th.bing.com/th/id/OIP.Yd_Yw9Ow-5Qj-qqZ6z8howHaE8?rs=1&pid=ImgDetMain",
    },
  ]

  const navigateToService = (companyId: string, serviceId: string) => {
    router.push(`/company/${companyId}/service/${serviceId}`)
  }

  return (
    <section className={`py-12 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            {language === "en" ? "Popular Services" : "ታዋቂ አገልግሎቶች"}
          </h2>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            {language === "en"
              ? "Quick access to the most frequently used government services"
              : "በብዛት ለሚጠቀሙ የመንግስት አገልግሎቶች ፈጣን ተደራሽነት"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  {service.name[language]}
                </h3>
                <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {service.description[language]}
                </p>
                <button
                  onClick={() => navigateToService(service.companyId, service.id)}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {language === "en" ? "Learn more" : "ተጨማሪ ይወቁ"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

