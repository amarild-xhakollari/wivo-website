"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  CalendarCheck,
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

// ── Launch date ──────────────────────────────────────────────────────────────
const LAUNCH_DATE = new Date("2026-06-01T00:00:00")

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

// ── Features data ─────────────────────────────────────────────────────────────
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

// ── Countdown box ─────────────────────────────────────────────────────────────
function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white/10 border border-orange-400/30 backdrop-blur-sm">
        <span className="text-3xl sm:text-4xl font-black text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-orange-200/70">
        {label}
      </span>
    </div>
  )
}

// ── Waitlist form (unified with type selector) ────────────────────────────────
function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [form, setForm] = useState({ type: "", name: "", email: "", city: "" })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.email || !form.name || !form.type) return
    setStatus("loading")
    setTimeout(() => setStatus("success"), 1500)
  }

  const inputCls = dark
    ? "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 outline-none focus:border-orange-400 transition-colors text-sm"
    : "w-full bg-orange-50 border border-orange-200 text-foreground placeholder-orange-300 px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm"

  const selectCls = dark
    ? "w-full bg-white/10 border border-white/20 text-white px-4 py-3 outline-none focus:border-orange-400 transition-colors text-sm appearance-none cursor-pointer"
    : "w-full bg-orange-50 border border-orange-200 text-foreground px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm appearance-none cursor-pointer"

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 py-8"
      >
        <div className="w-14 h-14 rounded-full bg-orange-400/20 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-orange-400" />
        </div>
        <p className={`font-bold text-center text-lg ${dark ? "text-white" : "text-foreground"}`}>
          {form.type === "business" ? "Biznesi juaj u regjistrua!" : "U regjistruat me sukses!"}
        </p>
        <p className={`text-sm text-center ${dark ? "text-white/60" : "text-orange-700/70"}`}>
          Do t&apos;ju njoftojmë sapo platforma të jetë gati.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Type dropdown */}
      <div className="relative">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className={selectCls}
        >
          <option value="" disabled style={{ color: "#888" }}>
            Zgjidhni llojin — Përdorues apo Biznes
          </option>
          <option value="user">Përdorues</option>
          <option value="business">Biznes</option>
        </select>
        <div
          className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${dark ? "border-t-white/50" : "border-t-orange-400"}`}
        />
      </div>

      {/* Name */}
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Emri juaj i plotë"
        className={inputCls}
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email-i për t'u kontaktuar"
        className={inputCls}
      />

      {/* City / Address */}
      <input
        name="city"
        type="text"
        value={form.city}
        onChange={handleChange}
        placeholder="Qyteti ose adresa"
        className={inputCls}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-6 py-3.5 hover:bg-orange-600 active:bg-orange-700 transition-colors disabled:opacity-70 text-sm mt-1"
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Regjistrohu në Listën e Pritjes
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export function RezervoPage() {
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" })
  const countdown = useCountdown(LAUNCH_DATE)

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO + COMING SOON ── */}
        <section className="relative min-h-screen bg-foreground flex items-center overflow-hidden pt-24 pb-16">
          {/* Orange glow */}
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-orange-500/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-8"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Duke ardhur së shpejti
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-background leading-[1.0] tracking-tight mb-2">
                    Rezervo
                    <span className="text-orange-400">.al</span>
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

                {/* Countdown */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-xs font-semibold text-background/40 uppercase tracking-widest mb-4">
                    Lansimi në
                  </p>
                  <div className="flex items-start gap-4 mb-10">
                    <CountdownBox value={countdown.days} label="Ditë" />
                    <span className="text-3xl font-black text-orange-400/60 mt-4">:</span>
                    <CountdownBox value={countdown.hours} label="Orë" />
                    <span className="text-3xl font-black text-orange-400/60 mt-4">:</span>
                    <CountdownBox value={countdown.minutes} label="Min" />
                    <span className="text-3xl font-black text-orange-400/60 mt-4">:</span>
                    <CountdownBox value={countdown.seconds} label="Sek" />
                  </div>
                </motion.div>

                <motion.a
                  href="#waitlist"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 hover:bg-orange-600 transition-colors text-sm"
                >
                  Regjistrohu Tani — Falas
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
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
                ].map((stat) => (
                  <div key={stat.label} className="bg-background p-8">
                    <div className="text-3xl font-black text-orange-500 mb-1">{stat.value}</div>
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
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 block mb-3">
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
                  <f.icon className="w-5 h-5 text-orange-400" />
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
                  <f.icon className="w-5 h-5 text-orange-400" />
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
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 block mb-3">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 block mb-3">
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
                    <div className="w-3 h-3 rounded-full bg-orange-500 mt-1.5" />
                    {i < 2 && <div className="w-px flex-1 mt-2 bg-orange-400/30" style={{ minHeight: 56 }} />}
                  </div>
                  <div className={i < 2 ? "pb-10" : "pb-0"}>
                    <span className="text-xs font-black text-orange-500">{step.n}</span>
                    <h3 className="text-base font-bold text-foreground mt-1 mb-1.5">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <section id="waitlist" className="py-16 lg:py-24 bg-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
                <Zap className="w-3.5 h-3.5" />
                Lista e Pritjes e Hapur
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                Bëhuni të parët
              </h2>
              <p className="text-white/70 text-lg max-w-md mx-auto">
                Regjistrohu tani — falas gjatë fazës beta. Ne do t&apos;ju njoftojmë para lansimit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg mx-auto"
            >
              {/* Info list */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  "Akses i hershëm falas",
                  "Onboarding i personalizuar",
                  "Rezervime me një klikim",
                  "Mbështetje prioritare",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <WaitlistForm dark />

              <p className="text-center text-xs text-white/40 mt-5">
                Falas gjatë beta · Pa kartë krediti · Rezervo.al është produkt i{" "}
                <Link href="/" className="text-white/60 hover:text-white transition-colors font-medium">
                  Wivo
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
