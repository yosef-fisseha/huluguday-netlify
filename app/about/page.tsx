"use client"
import { useState } from "react"
import Header from "@/components/header"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/context/language-context"

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme } = useTheme()
  const { language } = useLanguage()
  const isDarkMode = theme === "dark"

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Header setSearchQuery={setSearchQuery} />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            {language === "en" ? "About Hulu Guday" : "ስለ ሁሉ ጉዳይ"}
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Hulu Guday Team"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {language === "en" ? "Our Mission" : "ተልዕኮአችን"}
              </h2>
              <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {language === "en"
                  ? "Hulu Guday aims to simplify access to Ethiopian government services by providing a comprehensive directory with clear instructions and requirements for each service. We bridge the gap between citizens and government agencies, making bureaucratic processes more transparent and accessible."
                  : "ሁሉ ጉዳይ ለእያንዳንዱ አገልግሎት ግልጽ መመሪያዎችን እና መስፈርቶችን በማቅረብ የኢትዮጵያ መንግስት አገልግሎቶችን ተደራሽነት ለማቅለል ያለመ ነው። በዜጎች እና በመንግስት ኤጀንሲዎች መካከል ያለውን ክፍተት እናሳጥራለን፣ የቢሮክራሲ ሂደቶችን ግልጽ እና ተደራሽ እናደርጋለን።"}
              </p>

              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {language === "en" ? "Our Vision" : "ራዕያችን"}
              </h2>
              <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {language === "en"
                  ? "We envision a future where every Ethiopian citizen can easily access government services without confusion or unnecessary delays. Through technology and clear information, we aim to empower citizens and improve the efficiency of public service delivery."
                  : "ያለ ግራ መጋባት ወይም ያላስፈላጊ መዘግየቶች ሁሉም የኢትዮጵያ ዜጎች በቀላሉ የመንግስት አገልግሎቶችን ሊያገኙ የሚችሉበትን ወደፊት እንመኛለን። በቴክኖሎጂ እና በግልጽ መረጃ አማካኝነት ዜጎችን ለማብቃት እና የህዝብ አገልግሎት አሰጣጥን ውጤታማነት ለማሻሻል እንሻለን።"}
              </p>

              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {language === "en" ? "Our Team" : "ቡድናችን"}
              </h2>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {language === "en"
                  ? "Hulu Guday was founded by a team of dedicated professionals who are passionate about improving public service accessibility in Ethiopia. Our team includes experts in government processes, technology specialists, and user experience designers working together to create the most user-friendly platform possible."
                  : "ሁሉ ጉዳይ በኢትዮጵያ የህዝብ አገልግሎት ተደራሽነትን ለማሻሻል ጉጉት ባላቸው ታማኝ ባለሙያዎች ቡድን የተመሰረተ ነው። ቡድናችን በመንግስት ሂደቶች ባለሙያዎችን፣ የቴክኖሎጂ ባለሙያዎችን እና በተቻለ መጠን ለተጠቃሚ ምቹ የሆነ መድረክ ለመፍጠር አብረው የሚሰሩ የተጠቃሚ ተሞክሮ ዲዛይነሮችን ያካትታል።"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

