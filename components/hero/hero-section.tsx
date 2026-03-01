"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "50+", label: "Projekte" },
  { value: "3×", label: "Rritje mesatare" },
  { value: "100%", label: "Mobile-ready" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(210 20% 98%) 70%),
            radial-gradient(circle, hsl(226 23% 88% / 0.08) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "100% 100%, 40px 40px",
        }}
      />

      {/* Teal glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(174 62% 56% / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-teal text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Agjensia juaj dixhitale
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] text-balance mb-6"
            style={{ letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ndërtojmë faqe interneti{" "}
            <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
              që rrisin
            </span>{" "}
            biznesin tuaj
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nga ideja deri te produkti final — Wivo dizajnon dhe zhvillon faqe e aplikacione web që duken bukur, punojnë shpejt dhe e rrisin biznesin tuaj.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 group px-8 shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 w-full sm:w-auto"
            >
              <Link href="#contact">
                Fillo Projektin Tënd
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted bg-transparent transition-all hover:border-teal/30 w-full sm:w-auto"
            >
              <Link href="#work">
                Shiko Punën Tonë
              </Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span
                  className="text-2xl sm:text-3xl font-black text-foreground"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
