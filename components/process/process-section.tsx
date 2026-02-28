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
      "Nisim me një konsultë falas për të kuptuar biznesin, objektivat dhe afatet tuaja. Një bisedë e qartë dhe konkrete për të parë si mund t’ju ndihmojmë në mënyrën më të mirë.",
    color: "teal" as const,
    detail: "Falas · 30 minuta · Pa angazhim",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Dizajn & Zhvillim",
    description:
      "Dizajnojmë dhe ndërtojmë zgjidhjen tuaj me fokus te performanca dhe përvoja e përdoruesit. Do të merrni përditësime të rregullta dhe mundësi rishikimi gjatë gjithë procesit.",
    color: "coral" as const,
    detail: "Përditësime të rregullta · Rishikime të përfshira · Ekzekutim i shpejtë",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lansim & Mbështetje",
    description:
      "Kujdesemi për testimin, optimizimin dhe lansimin final. Edhe pas publikimit, mbetemi pranë jush për mbështetje dhe mirëmbajtje të vazhdueshme.",
    color: "gold" as const,
    detail: "Lansim i sigurt · Mbështetje teknike · Mirëmbajtje e vazhdueshme",
  },
]

const colorMap = {
  teal:  { dot: "bg-teal",  number: "text-teal",  line: "bg-teal/30",  detail: "text-teal",  icon: "text-teal"  },
  coral: { dot: "bg-coral", number: "text-coral", line: "bg-coral/30", detail: "text-coral", icon: "text-coral" },
  gold:  { dot: "bg-gold",  number: "text-gold",  line: "bg-gold/30",  detail: "text-gold",  icon: "text-gold"  },
}

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="process" className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-2xl">
          {steps.map((step, index) => {
            const c = colorMap[step.color]
            const isLast = index === steps.length - 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.18 }}
                className="relative flex gap-6"
              >
                {/* Left column: dot + vertical line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ${c.dot}`} />
                  {!isLast && (
                    <div className={`w-px flex-1 mt-2 ${c.line}`} style={{ minHeight: 56 }} />
                  )}
                </div>

                {/* Right column: content */}
                <div className={`${isLast ? "pb-0" : "pb-10"}`}>
                  {/* Step number + icon */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black tabular-nums ${c.number}`}>
                      {step.number}
                    </span>
                    <step.icon className={`w-3.5 h-3.5 ${c.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Detail */}
                  <p className={`text-xs font-medium ${c.detail}`}>{step.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
