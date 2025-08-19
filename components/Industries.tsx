"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Hospital,
  Home,
  Scale,
  Store,
  Car,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Palette,
  Wrench,
  Truck,
  Calculator
} from "lucide-react"
import type { IndustriesProps } from "@/types"

export function Industries({ t }: IndustriesProps) {
  const industryCards = [
    {
      icon: Hospital,
      title: t.healthcare,
      description: t.healthcareDesc,
    },
    {
      icon: Home,
      title: t.realEstate,
      description: t.realEstateDesc,
    },
    {
      icon: Scale,
      title: t.lawFirms,
      description: t.lawFirmsDesc,
    },
    {
      icon: Store,
      title: t.localShops,
      description: t.localShopsDesc,
    },
    {
      icon: Car,
      title: t.automotive,
      description: t.automotiveDesc,
    },
    {
      icon: Building2,
      title: t.manufacturing,
      description: t.manufacturingDesc,
    },
    {
      icon: GraduationCap,
      title: t.education,
      description: t.educationDesc,
    },
    {
      icon: UtensilsCrossed,
      title: t.restaurants,
      description: t.restaurantsDesc,
    },
    {
      icon: Palette,
      title: t.creative,
      description: t.creativeDesc,
    },
    {
      icon: Wrench,
      title: t.construction,
      description: t.constructionDesc,
    },
    {
      icon: Truck,
      title: t.logistics,
      description: t.logisticsDesc,
    },
    {
      icon: Calculator,
      title: t.financial,
      description: t.financialDesc,
    },
  ]

  return (
    <section id="industries" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t.industriesTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.industriesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryCards.map((industry, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 