"use client"

import { Button } from "@/components/ui/button"
import { Code, Globe } from "lucide-react"
import type { HeaderProps } from "@/types"

export function Header({ language, setLanguage, t, availableLanguages }: HeaderProps) {
  // Get available languages or fallback to default
  const languages = availableLanguages || {
    es: { name: "Español", nativeName: "Español", flag: "🇪🇸", direction: "ltr" },
    en: { name: "English", nativeName: "English", flag: "🇺🇸", direction: "ltr" }
  }

  // Get current language config
  const currentLang = languages[language] || languages.es

  // Get next language for toggle
  const getNextLanguage = () => {
    const langKeys = Object.keys(languages)
    const currentIndex = langKeys.indexOf(language)
    const nextIndex = (currentIndex + 1) % langKeys.length
    return langKeys[nextIndex]
  }

  const handleLanguageToggle = () => {
    const nextLang = getNextLanguage()
    setLanguage(nextLang)
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-serif font-bold text-xl text-foreground">Dev Services</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.services}
          </a>
          <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.industries}
          </a>
          <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.about}
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.portfolio}
          </a>
          <Button variant="outline" size="sm">
            {t.contact}
          </Button>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLanguageToggle}
            className="flex items-center space-x-2 px-3"
            title={`Switch to ${getNextLanguage() === "es" ? "Spanish" : "English"}`}
          >
            <span className="text-lg">{currentLang.flag}</span>
            <span className="text-sm font-medium">{currentLang.nativeName}</span>
            <Globe className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
} 