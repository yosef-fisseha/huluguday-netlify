"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function SplashScreen() {
  const router = useRouter()
  const [redirect, setRedirect] = useState(false)
  const { language } = useLanguage()

  // Service-related images for the background
  const serviceImages = [
    "https://th.bing.com/th/id/OIP.Yd_Yw9Ow-5Qj-qqZ6z8howHaE8?rs=1&pid=ImgDetMain", // Passport
    "https://th.bing.com/th/id/OIP.OcPneEHiwlbi83ss_TGSvQHaE8?rs=1&pid=ImgDetMain", // Telecom
    "https://ics.gov.et/wp-content/uploads/2024/04/logo-2.png", // Immigration
    "https://ethiopianbusinessreview.net/wp-content/uploads/2021/06/22-gebiwoch.jpg", // Tax
    "https://th.bing.com/th/id/OIP.QrV1RU2RMDdlCCpH61o3DwHaHa?rs=1&pid=ImgDetMain", // Electric
    "https://th.bing.com/th/id/OIP.TuGiq2Egy1_iRfFM8pfEqAAAAA?rs=1&pid=ImgDetMain", // Court
  ]

  useEffect(() => {
    // Redirect to home page after 3.5 seconds
    const timer = setTimeout(() => {
      setRedirect(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (redirect) {
      router.push("/home")
    }
  }, [redirect, router])

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Service images background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-3 grid-rows-2 h-full w-full">
            {serviceImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

        {/* Main content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img
              src="https://th.bing.com/th/id/OIP.yrbIo0xTcxcees5MAJdoLAHaHa?rs=1&pid=ImgDetMain"
              alt="Hulu Guday Logo"
              className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full shadow-2xl"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-2">Hulu Guday</h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider">ሁሉ ጉዳይ</h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-gray-200 max-w-md mb-2">Ethiopian Government Services Directory</p>
              <p className="text-xl md:text-2xl text-gray-200 max-w-md">የኢትዮጵያ መንግስት አገልግሎቶች ማውጫ</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <div className="w-16 h-1 bg-white opacity-80 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

