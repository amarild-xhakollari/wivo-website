"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  CalendarCheck,
  Clock,
  Bell,
  Users,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Globe,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { useRef } from "react"

const features = [
  {
    icon: CalendarCheck,
    title: "Rezervime Online 24/7",
    description: "Klientët rezervojnë çdo orë të ditës — pa telefonate, pa pritje.",
  },
  {
    icon: Bell,
    title: "Kujtues Automatikë",
    description: "SMS dhe email automatikë që reduktojnë mungesat me deri në 80%.",
  },
  {
    icon: Users,
    title: "Menaxhim Ekipi",
    description: "Oraret e stafit, disponueshmëria dhe caktimi i takimeve — gjithçka në një vend.",
  },
  {
    icon: BarChart3,
    title: "Analitikë & Raporte",
    description: "Shihni cilët shërbime janë më popullore, orët e pikut dhe të ardhurat.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Punon perfekt në çdo pajisje — klientët rezervojnë nga telefoni pa fërkim.",
  },
  {
    icon: Globe,
    title: "Faqe Personale Biznesi",
    description: "URL-ja juaj e rezervimeve e gatshme për t'u ndarë.",
  },
]

const businessTypes = [
  { emoji: "💇", label: "Salone & Spa" },
  { emoji: "🏋️", label: "Palestrë & Fitness" },
  { emoji: "🏥", label: "Klinika & Mjekë" },
  { emoji: "⚖️", label: "Avokatë & Konsulentë" },
  { emoji: "🍽️", label: "Restorante" },
  { emoji: "🔧", label: "Shërbime Shtëpie" },
  { emoji: "📸", label: "Fotografë & Studio" },
  { emoji: "🎓", label: "Trajnerë & Tutorë" },
]

function WaitlistForm({ type }: { type: "business" | "user" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    setTimeout(() => setStatus("success"), 1500)
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 py-4"
      >
        <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-teal" />
        </div>
        <p className="font-semibold text-background text-center">
          {type === "business" ? "Biznesi juaj u regjistrua!" : "U regjistruat me sukses!"}
        </p>
        <p className="text-sm text-background/60 text-center">
          Do t&apos;ju njoftojmë kur {type === "business" ? "platforma të jetë gati." : "të keni mundësi të përdorni Rezervo."}
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder={type === "business" ? "Email-i i biznesit tuaj" : "Email-i juaj"}
        className="flex-1 bg-background/10 border border-background/20 text-background placeholder-background/40 px-4 py-3 outline-none focus:border-teal transition-colors text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-teal text-foreground font-semibold px-6 py-3 hover:bg-teal/90 transition-colors disabled:opacity-70 text-sm shrink-0"
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Regjistrohu
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}

export function RezervoPage() {
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" })

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-foreground flex items-center overflow-hidden pt-24 pb-16">
          {/* Coral glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                {/* Beta badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral mb-8"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Lista e Pritjes e Hapur
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-background leading-[1.0] tracking-tight mb-2">
                    Rezervo
                    <span className="text-coral">.al</span>
                  </h1>
                  <h2 className="text-2xl sm:text-3xl font-bold text-background/60 mb-6 leading-snug">
                    Rezervimet online për bizneset shqiptare.
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base text-background/60 leading-relaxed mb-10 max-w-md"
                >
                  Platforma shqiptare që lejon bizneset të menaxhojnë takimet dhe u jep
                  klientëve mundësinë të rezervojnë online çdo orë të ditës — pa telefonate,
                  pa konfuzion.
                </motion.p>

                {/* Waitlist */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-sm"
                >
                  <p className="text-xs font-semibold text-background/40 uppercase tracking-widest mb-3">
                    Regjistro Biznesin Tënd
                  </p>
                  <WaitlistForm type="business" />
                  <p className="text-xs text-background/50 mt-3">Falas gjatë beta · Pa kartë krediti</p>
                </motion.div>
              </div>

              {/* Right: stat grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-px bg-border"
              >
                {[
                  { value: "0 €", label: "Falas gjatë beta" },
                  { value: "< 5 min", label: "Ngritje e llogarisë" },
                  { value: "24/7", label: "Rezervime automatike" },
                  { value: "🇦🇱", label: "Bërë për Shqipërinë" },
                ].map((stat, i) => (
                  <div key={stat.label} className="bg-background p-8">
                    <div className="text-3xl font-black text-coral mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="container mx-auto px-6 lg:px-12" ref={featuresRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-coral block mb-3">
                Funksione kryesore
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-background">
                Gjithçka që nevojitet për biznesin tuaj
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-background/10">
              {features.slice(0, 3).map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3 py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0"
                >
                  <f.icon className="w-5 h-5 text-coral" />
                  <h3 className="font-bold text-background">{f.title}</h3>
                  <p className="text-sm text-background/50 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-px border-t border-background/10 pt-10 mt-10 grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-background/10">
              {features.slice(3).map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
                  className="flex flex-col gap-3 py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0"
                >
                  <f.icon className="w-5 h-5 text-coral" />
                  <h3 className="font-bold text-background">{f.title}</h3>
                  <p className="text-sm text-background/50 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOR WHOM ── */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-coral block mb-3">
                I përshtatshëm për
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Çdo biznes me takime
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-border">
              {businessTypes.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-5"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-coral block mb-3">
                Si funksionon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Gati në 3 hapa
              </h2>
            </motion.div>

            <div className="max-w-xl">
              {[
                { n: "01", title: "Regjistro Biznesin", desc: "Krijoni llogarinë tuaj, shtoni shërbimet dhe oraret. Konfigurimi merr më pak se 5 minuta." },
                { n: "02", title: "Ndani Lidhjen", desc: "Merrni URL-n tuaj personale (p.sh. rezervo.al/biznesi) dhe ndajeni me klientët." },
                { n: "03", title: "Merrni Rezervime", desc: "Klientët rezervojnë vetë, ju merrni njoftime dhe sistemi menaxhon orarin automatikisht." },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative flex gap-6"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-coral mt-1.5" />
                    {i < 2 && <div className="w-px flex-1 mt-2 bg-coral/30" style={{ minHeight: 56 }} />}
                  </div>
                  <div className={i < 2 ? "pb-10" : "pb-0"}>
                    <span className="text-xs font-black text-coral">{step.n}</span>
                    <h3 className="text-base font-bold text-foreground mt-1 mb-1.5">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DUAL WAITLIST ── */}
        <section className="py-16 lg:py-24 bg-coral relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.06),transparent_60%)]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                Bëhuni të parët
              </h2>
              <p className="text-white/70 text-lg">
                Regjistrohu tani — falas gjatë fazës beta.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-3xl mx-auto">

              {/* Business */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <CalendarCheck className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white text-lg">Për Bizneset</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Akses i hershëm falas", "Onboarding i personalizuar", "Mbështetje prioritare"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WaitlistForm type="business" />
              </motion.div>

              {/* User */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Users className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white text-lg">Për Përdoruesit</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Rezervime me një klikim", "Kujtuese automatikë", "Historia e rezervimeve tuaja"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WaitlistForm type="user" />
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-sm text-white/40 mt-12"
            >
              Rezervo.al është produkt i{" "}
              <Link href="/" className="text-white/60 hover:text-white transition-colors font-medium">
                Wivo
              </Link>
            </motion.p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
