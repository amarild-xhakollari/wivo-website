import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Wivo Blog`,
    description: post.subtitle,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const badgeColor =
    post.badge.variant === "teal"
      ? "bg-teal/10 text-teal border border-teal/20"
      : "bg-orange-500/10 text-orange-500 border border-orange-500/20"

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">

          {/* Back link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Kthehu te Blogu
          </Link>

          {/* Badge */}
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${badgeColor}`}>
            {post.badge.text}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-5 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <article className="prose-custom space-y-10">

            {/* Intro */}
            <p className="text-lg text-foreground/80 leading-relaxed font-medium border-l-4 border-teal pl-5">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  {section.heading}
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 mt-10">
              <p className="text-foreground/80 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Keni pyetje ose doni të filloni një projekt?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Na Kontaktoni
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
