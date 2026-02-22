"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Wivo delivered our new website in two weeks and it looks incredible. We saw a 40% increase in enquiries within the first month.",
    author: "Sarah Mitchell",
    role: "Owner, Mitchell & Co.",
    avatar: "SM",
    color: "bg-teal",
  },
  {
    quote: "We'd been putting off rebuilding our site for years. Wivo made the whole process painless and the result exceeded every expectation.",
    author: "James Okafor",
    role: "Founder, Okafor Creative",
    avatar: "JO",
    color: "bg-coral",
  },
  {
    quote: "Professional, fast, and genuinely great to work with. Our e-commerce revenue doubled in three months after launch.",
    author: "Priya Sharma",
    role: "CEO, Bloom Boutique",
    avatar: "PS",
    color: "bg-gold",
  },
  {
    quote: "The attention to detail was outstanding. Our new site feels premium and clients notice it immediately.",
    author: "Tom Reeves",
    role: "Director, Apex Realty",
    avatar: "TR",
    color: "bg-teal",
  },
  {
    quote: "Fast turnaround, clean code, and they actually listened to what we wanted. Highly recommend Wivo.",
    author: "Lena Fischer",
    role: "Founder, FitLife",
    avatar: "LF",
    color: "bg-coral",
  },
  {
    quote: "We went from an outdated WordPress site to a slick, fast web app. Best investment we made this year.",
    author: "Nico Andersen",
    role: "Creative Director, Studio Nord",
    avatar: "NA",
    color: "bg-gold",
  },
]

const logos = [
  "Mitchell & Co.", "Okafor Creative", "Bloom Boutique", "Apex Realty", "FitLife", "Studio Nord"
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="w-80 flex-none bg-card border border-border rounded-2xl p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-5 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${testimonial.color} flex items-center justify-center text-foreground text-xs font-semibold shrink-0`}>
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-coral/5" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What our{" "}
            <span className="text-teal">clients say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real results from real businesses. Here&apos;s what people say after working with Wivo.
          </p>
        </motion.div>
      </div>

      {/* Marquee — bleeds edge to edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-4"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Second row — scrolls in reverse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative mb-16"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="overflow-hidden">
          <div className="marquee-track-reverse flex gap-6 w-max">
            {[...[...testimonials].reverse(), ...[...testimonials].reverse()].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Logo cloud */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by businesses we&apos;ve built for
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
