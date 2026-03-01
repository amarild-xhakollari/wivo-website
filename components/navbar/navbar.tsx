"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, CalendarCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // Prefix anchor links with "/" when not on home page
  const href = (anchor: string) => (isHome ? anchor : `/${anchor}`)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 const otherLinks = [
  { label: "Projekte", anchor: "#work" },   // Punëtori → Projekte (më i kuptueshëm për vizitorin)
  { label: "Blog", anchor: "#blog" },       // Ruhet si është
  { label: "Na Kontaktoni", anchor: "#contact" }, // Kontakt → Na Kontaktoni (më personal)
]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-16 lg:h-28">

            {/* Logo — always goes home */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Wivo"
                width={400}
                height={160}
                className="h-10 lg:h-20 w-auto"
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">

              {/* Services link */}
              <Link
                href={href("#services")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Shërbime
              </Link>

              {/* Other links */}
              {otherLinks.map((link) => (
                <Link
                  key={link.label}
                  href={href(link.anchor)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Rezervo link */}
              <Link
                href="/rezervo"
                className="flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal/80 transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                Rezervo.al
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <Link href={href("#contact")}>Merr Ofertë</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Hap menunë"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-16 lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col">

                {/* Services link */}
                <Link
                  href={href("#services")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-3 border-b border-border"
                >
                  Shërbime
                </Link>

                {otherLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={href(link.anchor)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground py-3 border-b border-border"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Rezervo mobile link */}
                <Link
                  href="/rezervo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium text-teal py-3 border-b border-border"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Rezervo.al
                </Link>
              </nav>

              <div className="flex flex-col gap-4 mt-8">
                <Button
                  asChild
                  className="w-full justify-center bg-foreground text-background"
                >
                  <Link href={href("#contact")} onClick={() => setIsMobileMenuOpen(false)}>
                    Merr Ofertë
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
