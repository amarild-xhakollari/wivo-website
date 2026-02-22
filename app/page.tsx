import { Navbar } from "@/components/navbar/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { ServicesSection } from "@/components/services/services-section"
import { ProcessSection } from "@/components/process/process-section"
import { ProjectsSection } from "@/components/projects/projects-section"
import { BlogSection } from "@/components/blog/blog-section"
import { TestimonialsSection } from "@/components/testimonials/testimonials-section"
import { ContactSection } from "@/components/contact/contact-section"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
