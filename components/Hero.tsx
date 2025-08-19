"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroProps {
  t: {
    location: string
    heroTitle: string
    heroTitleHighlight: string
    heroDescription: string
    whatsappConsultation: string
    viewPortfolio: string
  }
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="secondary" className="mb-6">
          {t.location}
        </Badge>
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
          {t.heroTitle}
          <span className="text-primary">{t.heroTitleHighlight}</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            {t.whatsappConsultation}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            {t.viewPortfolio}
          </Button>
        </div>
      </div>
    </section>
  )
} 