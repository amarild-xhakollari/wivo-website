"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react"

const services = [
  "Dizajn & Zhvillim Web",
  "Aplikacion Web",
  "Aplikacion Mobil",
  "Automatizim me AI",
  "Chatbot",
  "SEO & Google Maps",
  "Nuk jam i sigurt ende",
]

const budgets = [
  "< £1,000",
  "£1,000 – £5,000",
  "£5,000 – £15,000",
  "£15,000+",
  "Le të flasim",
]

const perks = [
  "Propozim falas — pa angazhim",
  "Përgjigje brenda 24 orësh",
  "Çmime fikse, pa befasi",
]

function UnderlineInput({
  label,
  type = "text",
  name,
  required,
}: {
  label: string
  type?: string
  name: string
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        className={`peer w-full bg-transparent border-b pt-6 pb-2 text-background outline-none transition-all duration-200 text-sm placeholder-transparent ${
          focused ? "border-teal" : "border-background/25 hover:border-background/40"
        }`}
        placeholder={label}
      />
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none text-background/50 ${
          focused || hasValue
            ? "top-0 text-[10px] font-semibold tracking-wide uppercase text-teal"
            : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  )
}

function UnderlineSelect({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <select
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        defaultValue=""
        className={`peer w-full bg-transparent border-b pt-6 pb-2 text-background outline-none transition-all duration-200 text-sm appearance-none cursor-pointer ${
          focused ? "border-teal" : "border-background/25 hover:border-background/40"
        }`}
      >
        <option value="" disabled className="bg-foreground" />
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-foreground">
            {opt}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none text-background/50 ${
          focused || hasValue
            ? "top-0 text-[10px] font-semibold tracking-wide uppercase text-teal"
            : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-background/40">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

function UnderlineTextarea({
  label,
  name,
  required,
}: {
  label: string
  name: string
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <textarea
        name={name}
        required={required}
        rows={4}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        className={`peer w-full bg-transparent border-b pt-6 pb-2 text-background outline-none transition-all duration-200 text-sm resize-none placeholder-transparent ${
          focused ? "border-teal" : "border-background/25 hover:border-background/40"
        }`}
        placeholder={label}
      />
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none text-background/50 ${
          focused || hasValue
            ? "top-0 text-[10px] font-semibold tracking-wide uppercase text-teal"
            : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => setStatus("success"), 1800)
  }

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-20 relative overflow-hidden bg-foreground">
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance leading-tight">
              Le të ndërtojmë diçka{" "}
              <span className="text-teal">të madhe bashkë</span>
            </h2>
            <p className="text-lg text-background/60 leading-relaxed mb-10">
              Na tregoni për projektin tuaj dhe ne do të përgatisim një propozim falas,
              pa asnjë angazhim — zakonisht brenda 24 orësh.
            </p>

            {/* Perks */}
            <ul className="space-y-4 mb-10">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-background"
                >
                  <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-teal" />
                  </div>
                  <span className="text-sm font-medium">{perk}</span>
                </motion.li>
              ))}
            </ul>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <a
                href="mailto:hello@wivo.co"
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center text-teal group-hover:bg-teal/25 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-background group-hover:text-teal transition-colors">
                  hello@wivo.co
                </span>
              </a>
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/50">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm text-background/50">
                  Hën–Pre, 9:00–18:00 GMT
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column — flat form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-background mb-3">Mesazhi u dërgua!</h3>
                <p className="text-background/60 text-sm leading-relaxed">
                  Faleminderit që na kontaktuat. Do t'ju kthejmë përgjigje brenda 24 orësh.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <UnderlineInput label="Emri juaj" name="name" required />
                  <UnderlineInput label="Adresa e emailit" type="email" name="email" required />
                </div>

                <UnderlineSelect label="Çfarë ju nevojitet?" name="service" options={services} />

                <UnderlineSelect label="Buxheti" name="budget" options={budgets} />

                <UnderlineTextarea
                  label="Na tregoni për projektin tuaj…"
                  name="message"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full flex items-center justify-center gap-3 bg-teal text-foreground font-semibold py-4 px-6 hover:bg-teal/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Duke dërguar…
                    </>
                  ) : (
                    <>
                      Dërgo mesazhin
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-background/30 pt-1">
                  Pa spam. E përdorim vetëm për t'ju kthyer përgjigje pyetjes tuaj.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
