"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const footerLinks = {
  Shërbime: [
    "Dizajn & Zhvillim Web",
    "Aplikacione Web",
    "Aplikacione Mobile",
    "Automatizim me AI",
    "Chatbot",
    "SEO & Google Maps",
  ],
  Kompania: ["Punëtori", "Blog", "Kontakt"],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <Image src="/logo.png" alt="Wivo" width={400} height={160} className="h-28 w-auto brightness-0 invert" unoptimized />
              </div>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
               Nga ideja e parë deri te faqja e plotë online, ne krijojmë zgjidhje web që i japin biznesit tuaj një hap përpara konkurrencës
              </p>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-sm mb-4 text-background">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/60 hover:text-teal transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Wivo. Të gjitha të drejtat e rezervuara.
            </p>
            <a
              href="mailto:hello@wivo.co"
              className="text-sm text-background/50 hover:text-teal transition-colors"
            >
              hello@wivo.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
