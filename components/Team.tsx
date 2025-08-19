"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Users, Cog } from "lucide-react"

interface TeamProps {
  t: {
    teamTitle: string
    teamDescription: string
    ceoExpertise: string
    ceoExpertiseDesc: string
    teamExperience: string
    teamExperienceDesc: string
    completeSolutions: string
    completeSolutionsDesc: string
  }
}

export function Team({ t }: TeamProps) {
  const teamMembers = [
    {
      icon: Code,
      name: "Enzo Loyola",
      role: t.ceoExpertise,
      description: t.ceoExpertiseDesc,
      skills: ["Java", "Spring Boot", "JavaScript"],
    }
  ]

  const teamStrengths = [
    {
      icon: CheckCircle,
      title: t.ceoExpertise,
      description: t.ceoExpertiseDesc,
    },
    {
      icon: Users,
      title: t.teamExperience,
      description: t.teamExperienceDesc,
    },
    {
      icon: Cog,
      title: t.completeSolutions,
      description: t.completeSolutionsDesc,
    },
  ]

  return (
    <section id="team" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t.teamTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.teamDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Strengths */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {teamStrengths.map((strength, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <strength.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{strength.title}</h4>
              <p className="text-muted-foreground text-sm">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 