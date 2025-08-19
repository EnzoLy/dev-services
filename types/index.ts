// Language and Translation Types
export interface LanguageConfig {
  name: string
  nativeName: string
  flag: string
  direction: string
}

export interface LanguageConfigs {
  [key: string]: LanguageConfig
}

export interface AppConfig {
  languages: LanguageConfigs
  defaultLanguage: string
  fallbackLanguage: string
}

// Translation Interfaces - Based on actual JSON structure
export interface HeaderTranslations {
  services: string
  industries: string
  about: string
  portfolio: string
  contact: string
}

export interface HeroTranslations {
  location: string
  heroTitle: string
  heroTitleHighlight: string
  heroDescription: string
  whatsappConsultation: string
  viewPortfolio: string
}

export interface ServiceTranslations {
  myServices: string
  servicesDescription: string
  digitalModernization: string
  digitalModernizationDesc: string
  customWebsites: string
  webApplications: string
  internalSystems: string
  automation: string
  automationDesc: string
  schedulingSystems: string
  notifications: string
  invoicing: string
  security: string
  securityDesc: string
  dataBackups: string
  accessControl: string
  dataProtection: string
  maintenance: string
  maintenanceDesc: string
  systemUpdates: string
  monitoring: string
  technicalSupport: string
}

export interface IndustryTranslations {
  industriesTitle: string
  industriesDescription: string
  healthcare: string
  healthcareDesc: string
  realEstate: string
  realEstateDesc: string
  lawFirms: string
  lawFirmsDesc: string
  localShops: string
  localShopsDesc: string
  automotive: string
  automotiveDesc: string
  manufacturing: string
  manufacturingDesc: string
  education: string
  educationDesc: string
  restaurants: string
  restaurantsDesc: string
  creative: string
  creativeDesc: string
  construction: string
  constructionDesc: string
  logistics: string
  logisticsDesc: string
  financial: string
  financialDesc: string
}

export interface TeamTranslations {
  teamTitle: string
  teamDescription: string
  ceoExpertise: string
  ceoExpertiseDesc: string
  teamExperience: string
  teamExperienceDesc: string
  completeSolutions: string
  completeSolutionsDesc: string
}

export interface PortfolioTranslations {
  portfolioTitle: string
  portfolioDescription: string
  clinicManagement: string
  clinicManagementDesc: string
  realEstatePortal: string
  realEstatePortalDesc: string
  localShopWebsite: string
  localShopWebsiteDesc: string
}

export interface CTATranslations {
  ctaTitle: string
  ctaDescription: string
  whatsappConsultation: string
  sendEmail: string
}

export interface FooterTranslations {
  footerDescription: string
  footerCopyright: string
  services: string
  industries: string
  contact: string
  digitalModernization: string
  automation: string
  security: string
  maintenance: string
  healthcare: string
  realEstate: string
  lawFirms: string
  localShops: string
}

export interface Translations {
  header: HeaderTranslations
  hero: HeroTranslations
  services: ServiceTranslations
  industries: IndustryTranslations
  team: TeamTranslations
  portfolio: PortfolioTranslations
  cta: CTATranslations
  footer: FooterTranslations
}

export interface TranslationsData {
  [language: string]: Translations
}

// Component Props Types
export interface HeaderProps {
  language: string
  setLanguage: (language: string) => void
  t: HeaderTranslations
  availableLanguages?: LanguageConfigs
}

export interface HeroProps {
  t: HeroTranslations
}

export interface ServicesProps {
  t: ServiceTranslations
}

export interface IndustriesProps {
  t: IndustryTranslations
}

export interface TeamProps {
  t: TeamTranslations
}

export interface PortfolioProps {
  t: PortfolioTranslations
}

export interface CTAProps {
  t: CTATranslations
}

export interface FooterProps {
  t: FooterTranslations
} 