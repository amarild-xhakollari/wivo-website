"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Card08, { type Card08Props } from "@/components/projects/card-08"

const posts: Card08Props[] = [
  {
    title: "Si Ndërtojmë Faqe që Konvertojnë",
    subtitle: "Parimet UX dhe zgjedhjet e dizajnit pas çdo projekti që dërgojmë.",
    image: "https://picsum.photos/seed/blog1/600/400",
    badge: { text: "Dizajn", variant: "teal" },
    href: "/blog/si-ndertojme-faqe-qe-konvertojne",
  },
  {
    title: "Pse Biznesi Juaj Ka Nevojë për Faqe Personale në 2026",
    subtitle: "Faqet me template ju kushtojnë klientë. Ja të dhënat.",
    image: "https://picsum.photos/seed/blog2/600/400",
    badge: { text: "Biznes", variant: "orange" },
    href: "/blog/pse-biznesi-juaj-ka-nevoje-per-faqe-personale-2026",
  },
  {
    title: "Next.js vs WordPress: Çfarë Është e Duhura për Ju?",
    subtitle: "Një analizë e drejtpërdrejtë se kur të përdorni secilën platformë.",
    image: "https://picsum.photos/seed/blog3/600/400",
    badge: { text: "Teknologji", variant: "teal" },
    href: "/blog/nextjs-vs-wordpress",
  },
  {
    title: "5 Gabimet që Vrasin Performancën e Faqes",
    subtitle: "Shpejtësia është SEO. Ja çfarë rregullojmë në çdo projekt.",
    image: "https://picsum.photos/seed/blog4/600/400",
    badge: { text: "Performancë", variant: "orange" },
    href: "/blog/5-gabimet-qe-vrasin-performancen-e-faqes",
  },
  {
    title: "Dizajn Mobile-First: Çfarë Nënkupton Realisht",
    subtitle: "Mbi 70% e trafikut është celular. A dizajnoni për të?",
    image: "https://picsum.photos/seed/blog5/600/400",
    badge: { text: "Dizajn", variant: "teal" },
    href: "/blog/dizajn-mobile-first",
  },
  {
    title: "Si t'i Jepni Udhëzime një Agjencie Web (Pa Humbur Kohë)",
    subtitle: "Kurseni javë dyfishimesh me këtë qasje të thjeshtë.",
    image: "https://picsum.photos/seed/blog6/600/400",
    badge: { text: "Procesi", variant: "orange" },
    href: "/blog/si-ti-jepni-udhezimet-nje-agjencie-web",
  },
]

const CARD_WIDTH = 340
const GAP = 24

export function BlogSection() {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction === "right" ? CARD_WIDTH + GAP : -(CARD_WIDTH + GAP), behavior: "smooth" })
  }

  return (
    <section id="blog" className="py-10 lg:py-14 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Nga blogu{" "}
              <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
                ynë
              </span>
            </h2>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Këshilla, njohuri dhe pamje nga kulisat nga ekipi ynë.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              aria-label="Lëviz majtas"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              aria-label="Lëviz djathtas"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrollable row — bleeds to edges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-muted/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-muted/30 to-transparent" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-6 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              style={{ minWidth: "min(340px, 80vw)", maxWidth: "min(340px, 80vw)" }}
            >
              <Card08 {...post} target="_self" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
