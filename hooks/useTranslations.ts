"use client"

import { useState, useEffect } from "react"
import type { 
  TranslationsData, 
  AppConfig 
} from "@/types"

export function useTranslations() {
  const [translations, setTranslations] = useState<TranslationsData | null>(null)
  const [config, setConfig] = useState<AppConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Load configuration first
        const configResponse = await fetch("/translations/config.json")
        if (!configResponse.ok) {
          throw new Error("Failed to load language configuration")
        }
        const appConfig: AppConfig = await configResponse.json()
        setConfig(appConfig)

        // Load all language files
        const languagePromises = Object.keys(appConfig.languages).map(async (lang) => {
          const response = await fetch(`/translations/${lang}.json`)
          if (!response.ok) {
            throw new Error(`Failed to load ${lang} translations`)
          }
          const data = await response.json()
          return { language: lang, translations: data }
        })

        const languageResults = await Promise.all(languagePromises)
        const translationsData: TranslationsData = {}

        languageResults.forEach(({ language, translations: data }) => {
          translationsData[language] = data
        })

        setTranslations(translationsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [])

  return {
    translations,
    config,
    loading,
    error,
  }
} 