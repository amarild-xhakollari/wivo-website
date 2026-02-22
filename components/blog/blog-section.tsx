"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Card08, { type Card08Props } from "@/components/projects/card-08"

const posts: Card08Props[] = [
  {
    title: "How We Build Websites That Actually Convert",
    subtitle: "The UX principles and design choices behind every project we ship.",
    image: "https://picsum.photos/seed/blog1/600/400",
    badge: { text: "Design", variant: "teal" },
    href: "#",
  },
  {
    title: "Why Your Business Needs a Custom Website in 2026",
    subtitle: "Template sites cost you customers. Here's the data.",
    image: "https://picsum.photos/seed/blog2/600/400",
    badge: { text: "Business", variant: "orange" },
    href: "#",
  },
  {
    title: "Next.js vs WordPress: What's Right for You?",
    subtitle: "A straight-talking breakdown of when to use each platform.",
    image: "https://picsum.photos/seed/blog3/600/400",
    badge: { text: "Tech", variant: "teal" },
    href: "#",
  },
  {
    title: "The 5 Mistakes That Kill Website Performance",
    subtitle: "Speed is SEO. Here's what we fix on every project.",
    image: "https://picsum.photos/seed/blog4/600/400",
    badge: { text: "Performance", variant: "orange" },
    href: "#",
  },
  {
    title: "Mobile-First Design: What It Really Means",
    subtitle: "Over 70% of traffic is mobile. Are you designing for it?",
    image: "https://picsum.photos/seed/blog5/600/400",
    badge: { text: "Design", variant: "teal" },
    href: "#",
  },
  {
    title: "How to Brief a Web Agency (Without Wasting Time)",
    subtitle: "Save weeks of back-and-forth with this simple approach.",
    image: "https://picsum.photos/seed/blog6/600/400",
    badge: { text: "Process", variant: "orange" },
    href: "#",
  },
]

export function BlogSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-background text-muted-foreground text-sm font-medium mb-4">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              From our{" "}
              <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
                journal
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Tips, insights, and behind-the-scenes from our team.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card08 {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
