"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Palette, Code2, Smartphone, Bot, MessageSquare, ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Beautiful, high-converting websites built from scratch. We handle everything from wireframes to launch — design, code, and deployment.",
    tags: ["UI/UX Design", "Next.js", "Responsive", "SEO-Ready"],
    icon: Palette,
    color: "teal" as const,
  },
  {
    number: "02",
    title: "Web Apps",
    description:
      "Custom web applications that solve real business problems. Dashboards, portals, SaaS tools — whatever your business needs, we build it.",
    tags: ["React", "Node.js", "APIs", "Databases"],
    icon: Code2,
    color: "coral" as const,
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps for iOS and Android. Native-feeling experiences built with modern tooling and shipped to both app stores.",
    tags: ["React Native", "iOS", "Android", "App Store"],
    icon: Smartphone,
    color: "gold" as const,
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Automate repetitive tasks and workflows using AI. Save hours every week, reduce errors, and let your team focus on what actually matters.",
    tags: ["OpenAI", "Workflows", "n8n", "Integrations"],
    icon: Bot,
    color: "teal" as const,
  },
  {
    number: "05",
    title: "Chatbots",
    description:
      "AI-powered chatbots that handle customer enquiries around the clock. Reduce support load, improve response times, and never miss a lead.",
    tags: ["AI Chat", "24/7 Support", "Custom Training", "CRM Integration"],
    icon: MessageSquare,
    color: "coral" as const,
  },
]

const colorMap = {
  teal: {
    number: "text-teal",
    icon: "text-teal bg-teal/10",
    tag: "bg-teal/10 text-teal",
    line: "bg-teal",
    row: "hover:bg-teal/[0.04]",
    border: "border-teal/20",
  },
  coral: {
    number: "text-coral",
    icon: "text-coral bg-coral/10",
    tag: "bg-coral/10 text-coral",
    line: "bg-coral",
    row: "hover:bg-coral/[0.04]",
    border: "border-coral/20",
  },
  gold: {
    number: "text-gold",
    icon: "text-gold bg-gold/10",
    tag: "bg-gold/10 text-gold",
    line: "bg-gold",
    row: "hover:bg-gold/[0.04]",
    border: "border-gold/20",
  },
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const colors = colorMap[service.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        className={`group relative flex items-start gap-6 lg:gap-10 py-8 px-6 lg:px-8 rounded-2xl cursor-pointer transition-colors duration-300 ${colors.row}`}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Accent line */}
        <motion.div
          className={`absolute left-0 top-6 bottom-6 w-0.5 rounded-full ${colors.line}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={hovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ originY: 0 }}
        />

        {/* Number */}
        <div
          className={`hidden sm:block text-5xl lg:text-6xl font-black tabular-nums shrink-0 leading-none transition-colors duration-300 ${
            hovered ? colors.number : "text-border"
          }`}
        >
          {service.number}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight">
                {service.title}
              </h3>
              <motion.p
                className="text-muted-foreground leading-relaxed mb-4 max-w-2xl"
                animate={{ opacity: hovered ? 1 : 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {service.description}
              </motion.p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
                      hovered ? colors.tag : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Icon + Arrow */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                  hovered ? colors.icon : "bg-muted text-muted-foreground"
                }`}
              >
                <service.icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <motion.div
                animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
                transition={{ duration: 0.2 }}
                className={`${hovered ? colors.number : "text-muted-foreground"}`}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {index < services.length - 1 && (
        <div className="mx-6 lg:mx-8 h-px bg-border" />
      )}
    </motion.div>
  )
}

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              What we{" "}
              <span className="text-teal">build for you</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed lg:text-right">
            From simple websites to complex AI-powered tools — we have the skills to bring your vision to life.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="border border-border rounded-3xl overflow-hidden bg-card">
          {services.map((service, index) => (
            <ServiceRow key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
