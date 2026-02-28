"use client"

import { motion } from "framer-motion"
import { WebDevAnimation } from "./web-dev-animation"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Ultra-thin dotted grid with radial mask */}
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

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-8 items-center min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20">
          {/* Left content - 2 columns */}
          <div className="lg:col-span-2 space-y-8 relative z-10">
            {/* Headline with tighter letter-spacing */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance"
              style={{ letterSpacing: "-0.05em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Ndërtojmë faqe interneti{" "}
              <span
                className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent"
              >
                që rrisin
              </span>{" "}
              biznesin tuaj
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            Nga ideja deri te produkti final — Wivo dizajnon dhe zhvillon faqe e aplikacione web që duken bukur, punojnë shpejt dhe e rrisin biznesin tuaj.            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 group px-8 shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15"
              >
                Fillo Projektin Tënd
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted group bg-transparent transition-all hover:border-teal/30"
              >
                <Play className="mr-2 h-4 w-4" />
                Shiko Punën Tonë
              </Button>
            </motion.div>

          </div>

          {/* Right content - Isometric Scene - 3 columns */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[520px]">
              <WebDevAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
