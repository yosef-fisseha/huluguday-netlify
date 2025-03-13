"use client"
import { useState } from "react"
import HomePage from "@/components/home-page"
import Header from "@/components/header"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Header setSearchQuery={setSearchQuery} />
      <HomePage searchQuery={searchQuery} />
    </div>
  )
}

