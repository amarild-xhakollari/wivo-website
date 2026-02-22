"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Card08, { type Card08Props } from "./card-08"

const projects: Card08Props[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-featured online store with real-time inventory and Stripe payments",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    badge: { text: "Web App", variant: "teal" },
    href: "#",
  },
  {
    title: "SaaS Dashboard",
    subtitle: "Analytics dashboard with live charts and role-based access control",
    image: "https://picsum.photos/seed/saas/600/400",
    badge: { text: "Web App", variant: "teal" },
    href: "#",
  },
  {
    title: "Restaurant Website",
    subtitle: "Branded site with online reservations and menu management",
    image: "https://picsum.photos/seed/restaurant/600/400",
    badge: { text: "Website", variant: "orange" },
    href: "#",
  },
  {
    title: "Real Estate Portal",
    subtitle: "Property listings with map search and mortgage calculator",
    image: "https://picsum.photos/seed/realestate/600/400",
    badge: { text: "Website", variant: "orange" },
    href: "#",
  },
  {
    title: "Fitness App",
    subtitle: "Mobile-first PWA for workout tracking and nutrition logging",
    image: "https://picsum.photos/seed/fitness/600/400",
    badge: { text: "Web App", variant: "teal" },
    href: "#",
  },
  {
    title: "Portfolio Studio",
    subtitle: "Creative agency portfolio with scroll-driven animations",
    image: "https://picsum.photos/seed/portfolio/600/400",
    badge: { text: "Website", variant: "orange" },
    href: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="work" className="relative py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Projects we&apos;ve{" "}
            <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
              brought to life
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From startups to established brands — websites and web apps we&apos;ve
            designed and built.
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
