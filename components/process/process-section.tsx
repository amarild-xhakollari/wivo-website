"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description:
      "We start with a free call to understand your business, goals, and timeline. No fluff — just a straight conversation about what you need and how we can help.",
    color: "teal" as const,
    detail: "Free • 30 minutes • No commitment",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Build",
    description:
      "We design, build, and keep you in the loop throughout. You'll see progress early and often — no disappearing for weeks and coming back with something wrong.",
    color: "coral" as const,
    detail: "Weekly updates • Revisions included • Fast turnaround",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We handle deployment, testing, and go-live. After launch, we stick around for support so you're never left on your own with a problem.",
    color: "gold" as const,
    detail: "Smooth launch • Post-launch support • Ongoing maintenance available",
  },
]

const colorMap = {
  teal: {
    icon: "bg-teal/10 text-teal",
    number: "text-teal",
    border: "border-teal/20",
    connector: "bg-teal/20",
  },
  coral: {
    icon: "bg-coral/10 text-coral",
    number: "text-coral",
    border: "border-coral/20",
    connector: "bg-coral/20",
  },
  gold: {
    icon: "bg-gold/10 text-gold",
    number: "text-gold",
    border: "border-gold/20",
    connector: "bg-gold/20",
  },
}

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Simple process,{" "}
            <span className="text-teal">great results</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-border z-0" />

          {steps.map((step, index) => {
            const colors = colorMap[step.color]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-card border border-border rounded-2xl p-7 flex flex-col gap-4"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between">
                  <span className={`text-4xl font-black tabular-nums ${colors.number}`}>
                    {step.number}
                  </span>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon}`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>

                <div className={`mt-auto pt-4 border-t ${colors.border}`}>
                  <p className={`text-xs font-medium ${colors.number}`}>{step.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
