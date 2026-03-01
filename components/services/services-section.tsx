"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code2, Smartphone, Bot, MessageSquare, MapPin } from "lucide-react"

const services = [
  {
    emoji: "🎨",
    icon: Palette,
    title: "Dizajn & Zhvillim Web",
    tagline: "Faqe të bukura që konvertojnë vizitorët.",
    from: "#3DD9B3",
    to:   "#1A9E7E",
    span: "lg:col-span-2",
  },
  {
    emoji: "💻",
    icon: Code2,
    title: "Aplikacione Web",
    tagline: "Softuer i personalizuar që zgjidh probleme reale.",
    from: "#F28B9B",
    to:   "#C94F65",
    span: "",
  },
  {
    emoji: "📱",
    icon: Smartphone,
    title: "Aplikacione Mobile",
    tagline: "Aplikacione iOS dhe Android që përdoruesit do t'i duan.",
    from: "#FACC5A",
    to:   "#D49A10",
    span: "",
  },
  {
    emoji: "🤖",
    icon: Bot,
    title: "Automatizim me AI",
    tagline: "Ndaloni të bëni me dorë atë që një makinë mund ta bëjë.",
    from: "#F28B9B",
    to:   "#C94F65",
    span: "",
  },
  {
    emoji: "💬",
    icon: MessageSquare,
    title: "Chatbot",
    tagline: "Përgjigjuni pyetjeve dhe kualifikoni lide — 24/7.",
    from: "#3DD9B3",
    to:   "#1A9E7E",
    span: "lg:col-span-2",
  },
  {
    emoji: "📍",
    icon: MapPin,
    title: "SEO & Google Maps",
    tagline: "Shfaquni ku kërkojnë klientët tuaj.",
    from: "#FACC5A",
    to:   "#D49A10",
    span: "",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Çfarë{" "}
            <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
              ndërtojmë
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
            Nga faqet e para web deri te automatizimi me AI — çdo shërbim i projektuar për rezultate reale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.emoji}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`${service.span} relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-7 min-h-[160px] sm:min-h-[200px] flex flex-col justify-between group cursor-default`}
                style={{ background: `linear-gradient(135deg, ${service.from}, ${service.to})` }}
              >
                {/* Large faded emoji watermark */}
                <span
                  className="absolute -bottom-6 -right-3 text-[10rem] leading-none select-none pointer-events-none opacity-20"
                >
                  {service.emoji}
                </span>

                {/* Icon circle */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.25)" }}>
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Text */}
                <div className="mt-4 sm:mt-8 relative z-10">
                  <h3 className="text-sm sm:text-xl font-bold text-white leading-snug mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {service.tagline}
                  </p>
                </div>

                {/* Shine on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
