"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hospital, Home, Store } from "lucide-react"

interface PortfolioProps {
  t: {
    portfolioTitle: string
    portfolioDescription: string
    clinicManagement: string
    clinicManagementDesc: string
    realEstatePortal: string
    realEstatePortalDesc: string
    localShopWebsite: string
    localShopWebsiteDesc: string
  }
}

export function Portfolio({ t }: PortfolioProps) {
  const projects = [
    {
      icon: Hospital,
      title: t.clinicManagement,
      description: t.clinicManagementDesc,
      technologies: ["Java", "Spring Boot", "React"],
    },
    {
      icon: Home,
      title: t.realEstatePortal,
      description: t.realEstatePortalDesc,
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      icon: Store,
      title: t.localShopWebsite,
      description: t.localShopWebsiteDesc,
      technologies: ["React", "Tailwind", "WhatsApp API"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-lg text-muted-foreground">{t.portfolioDescription}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <project.icon className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 