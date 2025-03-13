"use client"
import { useState } from "react"
import type React from "react"

import Header from "@/components/header"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/context/language-context"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme } = useTheme()
  const { language } = useLanguage()
  const isDarkMode = theme === "dark"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Header setSearchQuery={setSearchQuery} />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            {language === "en" ? "Contact Us" : "አግኙን"}
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mb-8">
                <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  {language === "en" ? "Get in Touch" : "ያግኙን"}
                </h2>
                <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {language === "en"
                    ? "Have questions about government services or need assistance with the website? Our team is here to help."
                    : "ስለ መንግስት አገልግሎቶች ጥያቄዎች አሉዎት ወይም ከድህረ ገጹ ጋር እገዛ ይፈልጋሉ? ቡድናችን እዚህ ለመርዳት ነው።"}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className={`h-5 w-5 mt-1 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    <div>
                      <h3 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        {language === "en" ? "Email" : "ኢሜይል"}
                      </h3>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>info@huluguday.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className={`h-5 w-5 mt-1 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    <div>
                      <h3 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        {language === "en" ? "Phone" : "ስልክ"}
                      </h3>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>+251 11 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className={`h-5 w-5 mt-1 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    <div>
                      <h3 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        {language === "en" ? "Address" : "አድራሻ"}
                      </h3>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {language === "en" ? "Bole Road, Addis Ababa, Ethiopia" : "ቦሌ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  {language === "en" ? "Office Hours" : "የቢሮ ሰዓታት"}
                </h2>
                <table className={`w-full ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <tbody>
                    <tr>
                      <td className="py-2">{language === "en" ? "Monday - Friday" : "ሰኞ - አርብ"}</td>
                      <td className="py-2">8:30 AM - 5:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">{language === "en" ? "Saturday" : "ቅዳሜ"}</td>
                      <td className="py-2">9:00 AM - 1:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">{language === "en" ? "Sunday" : "እሁድ"}</td>
                      <td className="py-2">{language === "en" ? "Closed" : "ዝግ"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {language === "en" ? "Send us a Message" : "መልዕክት ይላኩልን"}
              </h2>

              {isSubmitted ? (
                <div
                  className={`p-4 rounded-lg ${isDarkMode ? "bg-green-800 text-green-100" : "bg-green-100 text-green-800"}`}
                >
                  {language === "en"
                    ? "Thank you for your message! We'll get back to you soon."
                    : "ለመልዕክትዎ እናመሰግናለን! በቅርቡ እንመልስልዎታለን።"}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block mb-1 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {language === "en" ? "Your Name" : "ስምዎ"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-1 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {language === "en" ? "Email Address" : "የኢሜይል አድራሻ"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block mb-1 font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {language === "en" ? "Your Message" : "መልዕክትዎ"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {language === "en" ? "Send Message" : "መልዕክት ላክ"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

