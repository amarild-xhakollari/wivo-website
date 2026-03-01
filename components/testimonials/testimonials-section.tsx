"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Wivo na dorezoi faqen e re brenda dy javesh dhe rezultati ishte mbi pritshmerite tona. Brenda muajit te pare pame rritje te ndjeshme te kerkesave nga klientet.",
    author: "Ardit Kelmendi",
    role: "Pronari, Kelmendi Construction",
    avatar: "AK",
    color: "bg-teal",
  },
  {
    quote:
      "E kishim shtyre prej kohesh rindertimin e faqes. Wivo e beri gjithe procesin te thjeshte dhe pa stres. Sot kemi nje prezence online qe na perfaqeson denjesisht.",
    author: "Elira Hoxha",
    role: "Themeluese, EH Studio",
    avatar: "EH",
    color: "bg-coral",
  },
  {
    quote:
      "Pas lansimit te platformes se re, shitjet online u rriten ndjeshem brenda tre muajve. Profesionalizem dhe komunikim i shkelqyer.",
    author: "Bleron Krasniqi",
    role: "CEO, Urban Wear",
    avatar: "BK",
    color: "bg-gold",
  },
  {
    quote:
      "Vemendja ndaj detajeve ishte mbreselenese. Faqja e re duket premium dhe klientet tane e komentojne vazhdimisht pozitivisht.",
    author: "Gentian Meta",
    role: "Drejtor, Meta Realty",
    avatar: "GM",
    color: "bg-teal",
  },
  {
    quote:
      "Zbatim i shpejte, kod i paster dhe bashkepunim shume i lehte. E rekomandoj Wivo per cdo biznes qe do seriozitet.",
    author: "Sara Dervishi",
    role: "Themeluese, FitZone Albania",
    avatar: "SD",
    color: "bg-coral",
  },
  {
    quote:
      "Nga nje faqe e vjeteruar kaluam ne nje aplikacion web modern dhe shume te shpejte. Ishte investimi me i mire qe beme kete vit.",
    author: "Leonard Shala",
    role: "Drejtor Krijues, Nova Creative",
    avatar: "LS",
    color: "bg-gold",
  },
]


const logos = [
  "Kelmendi Construction",
  "Kumara Impiant",
  "Spanjolli Group",
  "Dedej Construction",
  "Leskova Garten"
 
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
    <section ref={ref} className="py-10 lg:py-14 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-coral/5" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Çfarë thonë{" "}
            <span className="text-teal">klientët tanë</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rezultate reale nga biznese reale. Ja çfarë thonë njerëzit pas punës me Wivo.
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
            Besuar nga bizneset që kemi ndërtuar
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
