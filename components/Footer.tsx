"use client"

import { Code, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  t: {
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
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl text-foreground">Enzo Loyola</span>
            </div>
            <p className="text-muted-foreground">{t.footerDescription}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.services}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  {t.digitalModernization}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  {t.automation}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  {t.security}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  {t.maintenance}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.industries}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#industries" className="hover:text-foreground transition-colors">
                  {t.healthcare}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-foreground transition-colors">
                  {t.realEstate}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-foreground transition-colors">
                  {t.lawFirms}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-foreground transition-colors">
                  {t.localShops}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                loyolaenzo90@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Available
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Santa Rosa, La Pampa
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Argentina
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
} 