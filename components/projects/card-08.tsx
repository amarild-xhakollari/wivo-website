import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Card08Props {
  title?: string
  subtitle?: string
  image?: string
  badge?: {
    text: string
    variant: "pink" | "indigo" | "orange" | "teal"
  }
  href?: string
  target?: string
}

export default function Card08({
  title = "Project",
  subtitle = "A website we built",
  image = "https://picsum.photos/seed/project1/600/400",
  badge = { text: "Live", variant: "teal" },
  href = "#",
  target = "_blank",
}: Card08Props) {
  return (
    <Link href={href} target={target} className="block w-full group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-white/80 dark:bg-zinc-900/80",
          "backdrop-blur-xl",
          "border border-zinc-200/50 dark:border-zinc-800/50",
          "shadow-sm",
          "transition-all duration-300",
          "hover:shadow-xl",
          "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
          "hover:-translate-y-1",
        )}
      >
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className={cn("absolute inset-0", "bg-gradient-to-t from-black/80 via-black/20 to-transparent")} />

        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium",
              "bg-white/90 text-zinc-800",
              "backdrop-blur-md",
              "shadow-sm",
              "border border-white/20",
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-zinc-300 line-clamp-2 tracking-tight">{subtitle}</p>
            </div>
            <div
              className={cn(
                "p-2 rounded-full shrink-0",
                "bg-white/10",
                "backdrop-blur-md",
                "group-hover:bg-white/20",
                "transition-colors duration-300",
              )}
            >
              <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
