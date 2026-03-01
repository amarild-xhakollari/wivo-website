"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultë Fillestare",
    description:
      "Nisim me një konsultë falas për të kuptuar biznesin, objektivat dhe afatet tuaja. Bisedë e qartë, pa angazhim.",
    detail: "Falas · 30 min · Pa angazhim",
    accent: "#3DD9B3",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Dizajn & Zhvillim",
    description:
      "Dizajnojmë dhe ndërtojmë zgjidhjen tuaj me fokus te performanca dhe përvoja e përdoruesit. Përditësime të rregullta.",
    detail: "Rishikime · Ekzekutim i shpejtë",
    accent: "#F28B9B",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lansim & Mbështetje",
    description:
      "Kujdesemi për testimin, optimizimin dhe lansimin final. Mbetemi pranë jush edhe pas publikimit.",
    detail: "Lansim i sigurt · Mbështetje teknike",
    accent: "#FACC5A",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="process" className="py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
            Si punojmë<span style={{ color: "#3DD9B3" }}>.</span>
          </h2>
          <p className="text-sm text-background/50 max-w-xs leading-relaxed sm:text-right">
            Tre hapa të thjeshtë — nga ideja deri te lansimi.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className={`relative flex flex-col pt-8 pb-10 md:pt-10 md:pb-12 ${
                  !isLast ? "border-b md:border-b-0 md:border-r border-background/10 mb-2 md:mb-0" : ""
                } md:px-10 first:md:pl-0 last:md:pr-0`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 md:left-10 first:md:left-0 h-[3px] w-12 rounded-full"
                  style={{ background: step.accent }}
                />

                {/* Big outlined number */}
                <span
                  className="text-[5rem] sm:text-[6rem] lg:text-[8rem] font-black leading-none mb-4 select-none"
                  style={{
                    WebkitTextStroke: `2px ${step.accent}`,
                    color: "transparent",
                  }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${step.accent}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: step.accent }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-background mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-background/60 leading-relaxed mb-5 flex-1">
                  {step.description}
                </p>

                {/* Detail pill */}
                <span
                  className="self-start text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: step.accent, borderColor: `${step.accent}40` }}
                >
                  {step.detail}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
