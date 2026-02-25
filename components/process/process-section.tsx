"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Takimi Fillestar",
    description:
      "Fillojmë me një thirrje falas për të kuptuar biznesin, qëllimet dhe afatin tuaj. Pa humbje kohe — vetëm një bisedë e drejtpërdrejtë për atë që ju nevojitet dhe si mund t'ju ndihmojmë.",
    color: "teal" as const,
    detail: "Falas · 30 minuta · Pa angazhim",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Dizajn & Ndërtim",
    description:
      "Dizajnojmë, ndërtojmë dhe ju mbajmë të informuar gjatë gjithë procesit. Do të shihni progres herët dhe shpesh — pa u zhdukur për javë dhe kthyer me diçka të gabuar.",
    color: "coral" as const,
    detail: "Përditësime javore · Rishikime të përfshira · Ekzekutim i shpejtë",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lansim & Mbështetje",
    description:
      "Menaxhojmë vendosjen, testimin dhe lansimin. Pas lansimit, qëndrojmë pranë jush për mbështetje — kurrë nuk do të mbeteni vetëm me ndonjë problem.",
    color: "gold" as const,
    detail: "Lansim i qetë · Mbështetje pas lansimit · Mirëmbajtje e vazhdueshme",
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
