"use client"

import { Button } from "@/components/ui/button"

interface CTAProps {
  t: {
    ctaTitle: string
    ctaDescription: string
    whatsappConsultation: string
    sendEmail: string
  }
}

export function CTA({ t }: CTAProps) {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
          {t.ctaTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            {t.whatsappConsultation}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            {t.sendEmail}
          </Button>
        </div>
      </div>
    </section>
  )
} 