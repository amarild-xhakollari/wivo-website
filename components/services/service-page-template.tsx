"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronDown, Star, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { servicesData } from "@/lib/services-data"

const colorMap = {
  teal: {
    badge: "bg-teal/20 text-teal border-teal/30",
    accent: "text-teal",
    bg: "bg-teal/8",
    btnPrimary: "bg-teal text-foreground hover:bg-teal/90",
    btnOutline: "border-teal/40 text-teal hover:bg-teal/10",
    number: "text-teal",
    stepBg: "bg-teal text-foreground",
    cardBorder: "border-t-teal",
    check: "bg-teal/15 text-teal",
    statBg: "bg-teal/10 border-teal/20",
    faqOpen: "border-l-teal bg-teal/5",
    heroBadge: "bg-teal/20 border-teal/40 text-teal",
  },
  coral: {
    badge: "bg-coral/20 text-coral border-coral/30",
    accent: "text-coral",
    bg: "bg-coral/8",
    btnPrimary: "bg-coral text-foreground hover:bg-coral/90",
    btnOutline: "border-coral/40 text-coral hover:bg-coral/10",
    number: "text-coral",
    stepBg: "bg-coral text-foreground",
    cardBorder: "border-t-coral",
    check: "bg-coral/15 text-coral",
    statBg: "bg-coral/10 border-coral/20",
    faqOpen: "border-l-coral bg-coral/5",
    heroBadge: "bg-coral/20 border-coral/40 text-coral",
  },
  gold: {
    badge: "bg-gold/20 text-gold border-gold/30",
    accent: "text-gold",
    bg: "bg-gold/8",
    btnPrimary: "bg-gold text-foreground hover:bg-gold/90",
    btnOutline: "border-gold/40 text-gold hover:bg-gold/10",
    number: "text-gold",
    stepBg: "bg-gold text-foreground",
    cardBorder: "border-t-gold",
    check: "bg-gold/15 text-gold",
    statBg: "bg-gold/10 border-gold/20",
    faqOpen: "border-l-gold bg-gold/5",
    heroBadge: "bg-gold/20 border-gold/40 text-gold",
  },
}

function FaqItem({
  question,
  answer,
  colorClass,
}: {
  question: string
  answer: string
  colorClass: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`rounded-xl border border-border transition-all duration-200 overflow-hidden ${
        open ? `${colorClass} border-l-4` : "bg-card"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
      >
        <span className="font-semibold text-foreground text-sm lg:text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 pb-5"
        >
          <p className="text-muted-foreground leading-relaxed text-sm">{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return null
  const colors = colorMap[service.color]

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] bg-foreground flex items-center overflow-hidden pt-24 lg:pt-28 pb-16">
          {/* Background glow */}
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none ${
            service.color === "teal" ? "bg-teal" : service.color === "coral" ? "bg-coral" : "bg-gold"
          }`} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-white pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back button — sits above the grid */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/10 border border-background/15 text-background/70 hover:bg-background/20 hover:text-background transition-all text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Kthehu tek Shërbime
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-5 ${colors.heroBadge}`}>
                  <service.icon className="w-3.5 h-3.5" />
                  {service.number}
                </span>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-background leading-[1.0] mb-4 tracking-tight">
                  {service.title}
                </h1>

                <p className={`text-xl md:text-2xl font-semibold mb-6 leading-snug ${colors.accent}`}>
                  {service.tagline}
                </p>

                <p className="text-background/60 text-lg leading-relaxed mb-10 max-w-lg">
                  {service.description}
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className={`px-4 py-3 rounded-xl border ${colors.statBg}`}>
                      <div className={`text-xl font-black ${colors.accent}`}>{stat.value}</div>
                      <div className="text-background/50 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-95 ${colors.btnPrimary}`}
                  >
                    Merr ofertë falas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-background/20 text-background/70 hover:bg-background/10 transition-colors"
                  >
                    Shiko punën tonë
                  </Link>
                </div>
              </motion.div>

              {/* Right — hero image */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-background/10 shadow-2xl">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    unoptimized
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-background rounded-xl px-4 py-3 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors.check}`}>
                      <service.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{service.title}</p>
                      <p className="text-xs text-muted-foreground">{service.stats[0].value} {service.stats[0].label}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating rating */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="absolute -top-4 -right-4 bg-background rounded-xl px-4 py-3 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-foreground">Vlerësim 5.0</p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-3 block`}>
                Çfarë merrni
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Gjithçka e përfshirë
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.includes.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-border/60 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${colors.check}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-3 block`}>
                Procesi ynë
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Si punojmë
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line desktop */}
              <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border z-0" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {service.process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-5 shadow-lg ${colors.stepBg}`}>
                      {step.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-3 block`}>
                I përshtatshëm për
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Për kë ndërtojmë
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {service.whoFor.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-background font-bold text-lg">{item.title}</h3>
                  </div>
                  {/* Text */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-3 block`}>
                Rezultate klientësh
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Çfarë thonë klientët
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-background border border-border rounded-2xl p-7 flex flex-col gap-5"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-foreground leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-border">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className={`text-sm font-semibold uppercase tracking-widest ${colors.accent} mb-3 block`}>
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Pyetje të shpeshta
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nuk gjeni çfarë kërkoni? Kontaktoni — jemi të lumtur t&apos;ju ndihmojmë.
                </p>
                <Link
                  href="/#contact"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-colors ${colors.btnOutline}`}
                >
                  Na pyesni çdo gjë
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-3"
              >
                {service.faq.map((item) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    colorClass={colors.faqOpen}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
          <div className={`absolute inset-0 opacity-10 ${
            service.color === "teal" ? "bg-gradient-to-br from-teal to-transparent" :
            service.color === "coral" ? "bg-gradient-to-br from-coral to-transparent" :
            "bg-gradient-to-br from-gold to-transparent"
          }`} />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background mb-4 leading-tight">
                 Gati ta çoni idenë tuaj në nivelin tjetër?
                </h2>
                <p className="text-background/60 text-lg leading-relaxed">
               Na shkruani për idenë tuaj dhe brenda 24 orësh do të merrni një ofertë falas, pa asnjë detyrim.                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-4 shrink-0"
              >
                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 ${colors.btnPrimary}`}
                >
                  Merr ofertë falas
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-background/20 text-background/70 hover:bg-background/10 transition-colors"
                >
                  Shiko të gjitha shërbime
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
