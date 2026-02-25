"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Card08, { type Card08Props } from "./card-08"

const projects: Card08Props[] = [
  {
    title: "Platformë E-Commerce",
    subtitle: "Dyqan online me inventar në kohë reale dhe pagesa Stripe",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    badge: { text: "Aplikacion Web", variant: "teal" },
    href: "#",
  },
  {
    title: "Dashboard SaaS",
    subtitle: "Panel analitik me grafikë live dhe kontroll bazuar në role",
    image: "https://picsum.photos/seed/saas/600/400",
    badge: { text: "Aplikacion Web", variant: "teal" },
    href: "#",
  },
  {
    title: "Faqe Restoranti",
    subtitle: "Faqe e brendshme me rezervime online dhe menaxhim menuje",
    image: "https://picsum.photos/seed/restaurant/600/400",
    badge: { text: "Faqe Web", variant: "orange" },
    href: "#",
  },
  {
    title: "Portal Imobiliare",
    subtitle: "Listim pronash me kërkim hartë dhe kalkulator hipoteke",
    image: "https://picsum.photos/seed/realestate/600/400",
    badge: { text: "Faqe Web", variant: "orange" },
    href: "#",
  },
  {
    title: "Aplikacion Fitness",
    subtitle: "PWA mobile-first për gjurmim stërvitjesh dhe regjistrim ushqimi",
    image: "https://picsum.photos/seed/fitness/600/400",
    badge: { text: "Aplikacion Web", variant: "teal" },
    href: "#",
  },
  {
    title: "Portfolio Studio",
    subtitle: "Portfolio agjensie krijuese me animacione scroll-driven",
    image: "https://picsum.photos/seed/portfolio/600/400",
    badge: { text: "Faqe Web", variant: "orange" },
    href: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="work" className="relative py-10 lg:py-14 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Projektet që i kemi{" "}
            <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
              realizuar
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nga startup-et deri te markat e vendosura — faqe interneti dhe aplikacione
            web që kemi dizajnuar dhe ndërtuar.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card08 {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
