"use client"

import { useState, useEffect } from "react"

const LANGUAGE_STORAGE_KEY = "dev-services-language"

export function useLanguagePreference(defaultLanguage: string) {
  const [language, setLanguage] = useState<string>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)

  // Get saved language from localStorage
  const getSavedLanguage = (): string => {
    if (typeof window === "undefined") return defaultLanguage
    
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
      return saved || defaultLanguage
    } catch {
      return defaultLanguage
    }
  }

  // Save language to localStorage
  const saveLanguage = (newLanguage: string): void => {
    if (typeof window === "undefined") return
    
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage)
    } catch (error) {
      console.warn("Failed to save language preference:", error)
    }
  }

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = getSavedLanguage()
    setLanguage(savedLanguage)
    setIsInitialized(true)
  }, [])

  // Save language when it changes
  useEffect(() => {
    if (isInitialized && language !== defaultLanguage) {
      saveLanguage(language)
    }
  }, [language, isInitialized, defaultLanguage])

  // Change language and save to localStorage
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  return {
    language,
    changeLanguage,
    isInitialized,
    getSavedLanguage,
    saveLanguage
  }
} 