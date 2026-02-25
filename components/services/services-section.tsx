"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  { number: "01", title: "Dizajn & Zhvillim Web",  color: "teal"  as const, href: "/services/web-design"     },
  { number: "02", title: "Aplikacione Web",         color: "coral" as const, href: "/services/web-apps"        },
  { number: "03", title: "Aplikacione Mobile",      color: "gold"  as const, href: "/services/mobile-apps"     },
  { number: "04", title: "Automatizim me AI",       color: "teal"  as const, href: "/services/ai-automation"   },
  { number: "05", title: "Chatbot",                 color: "coral" as const, href: "/services/chatbots"        },
  { number: "06", title: "SEO & Google Maps",       color: "gold"  as const, href: "/services/seo-google-maps" },
]

const colorMap = {
  teal:  { number: "text-teal",  hover: "group-hover:text-teal",  border: "group-hover:border-teal/30"  },
  coral: { number: "text-coral", hover: "group-hover:text-coral", border: "group-hover:border-coral/30" },
  gold:  { number: "text-gold",  hover: "group-hover:text-gold",  border: "group-hover:border-gold/30"  },
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="services" className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="divide-y divide-border">
          {services.map((service, index) => {
            const c = colorMap[service.color]
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <Link
                  href={service.href}
                  className={`group flex items-center justify-between py-5 border-l-2 border-transparent pl-5 transition-all duration-200 ${c.border}`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className={`text-xs font-black tabular-nums transition-colors duration-200 ${c.number}`}>
                      {service.number}
                    </span>
                    <span className={`text-xl sm:text-2xl lg:text-3xl font-bold text-foreground transition-colors duration-200 ${c.hover}`}>
                      {service.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${c.hover}`}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
