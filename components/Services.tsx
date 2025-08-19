"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2, Cog, Shield, Users } from "lucide-react"

interface ServicesProps {
  t: {
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
}

export function Services({ t }: ServicesProps) {
  const serviceCards = [
    {
      icon: Building2,
      title: t.digitalModernization,
      description: t.digitalModernizationDesc,
      features: [t.customWebsites, t.webApplications, t.internalSystems],
    },
    {
      icon: Cog,
      title: t.automation,
      description: t.automationDesc,
      features: [t.schedulingSystems, t.notifications, t.invoicing],
    },
    {
      icon: Shield,
      title: t.security,
      description: t.securityDesc,
      features: [t.dataBackups, t.accessControl, t.dataProtection],
    },
    {
      icon: Users,
      title: t.maintenance,
      description: t.maintenanceDesc,
      features: [t.systemUpdates, t.monitoring, t.technicalSupport],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t.myServices}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 