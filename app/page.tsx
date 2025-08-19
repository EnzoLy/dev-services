"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Industries } from "@/components/Industries"
import { Team } from "@/components/Team"
import { Portfolio } from "@/components/Portfolio"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { useTranslations, useLanguagePreference } from "@/hooks"

export default function HomePage() {
  const { translations, config, loading, error } = useTranslations()
  const [defaultLanguage, setDefaultLanguage] = useState<string>("es")
  const { language, changeLanguage, isInitialized } = useLanguagePreference(defaultLanguage)

  // Set default language when config loads
  useEffect(() => {
    if (config) {
      setDefaultLanguage(config.defaultLanguage)
    }
  }, [config])

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    if (config && Object.keys(config.languages).includes(newLanguage)) {
      changeLanguage(newLanguage)
    }
  }

  if (loading || !isInitialized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !translations || !config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading translations</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={language}
        setLanguage={handleLanguageChange}
        t={t.header}
        availableLanguages={config.languages}
      />
      <Hero t={t.hero} />
      <Services t={t.services} />
      <Industries t={t.industries} />
      <Team t={t.team} />
      <Portfolio t={t.portfolio} />
      <CTA t={t.cta} />
      <Footer t={t.footer} />
    </div>
  )
}
