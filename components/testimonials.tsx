"use client"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: {
      en: "This service saved me so much time. I got my passport renewed without standing in long queues.",
      am: "ይህ አገልግሎት ብዙ ጊዜዬን አድኖልኛል። በረጅም ወረፋዎች ሳልቆም ፓስፖርቴን አድሻለሁ።",
    },
    author: {
      en: "Abebe Kebede",
      am: "አበበ ከበደ",
    },
    role: {
      en: "Business Owner",
      am: "የንግድ ባለቤት",
    },
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote: {
      en: "The clear instructions helped me understand exactly what documents I needed for my business license.",
      am: "ግልጽ መመሪያዎቹ ለንግድ ፈቃዴ ምን ሰነዶች እንደሚያስፈልጉኝ በትክክል እንድረዳ ረድተውኛል።",
    },
    author: {
      en: "Sara Hailu",
      am: "ሳራ ሃይሉ",
    },
    role: {
      en: "Restaurant Owner",
      am: "የምግብ ቤት ባለቤት",
    },
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    quote: {
      en: "I appreciate how the website is available in both English and Amharic. Very accessible!",
      am: "ድህረ ገጹ በእንግሊዝኛም በአማርኛም መገኘቱን አደንቃለሁ። በጣም ተደራሽ ነው!",
    },
    author: {
      en: "Dawit Mengistu",
      am: "ዳዊት መንግስቱ",
    },
    role: {
      en: "University Student",
      am: "የዩኒቨርሲቲ ተማሪ",
    },
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
]

export default function Testimonials() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={activeTestimonial.image || "/placeholder.svg"}
                  alt={activeTestimonial.author[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <Quote className="h-10 w-10 text-blue-500 opacity-20 mb-4" />
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white mb-6">
                  {activeTestimonial.quote[language]}
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{activeTestimonial.author[language]}</p>
                    <p className="text-gray-600 dark:text-gray-300">{activeTestimonial.role[language]}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === activeIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

