import CardGrid from "@/components/kokonutui/card-grid"

export default function Home() {
  // Sample collection data
  const collections = [
    {
      title: "Summer Dress Collection",
      subtitle: "Fit with the latest trends",
      image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
      badge: {
        text: "New",
        variant: "orange",
      },
    },
    {
      image: "https://assets.lummi.ai/assets/QmXFtkNH6GJy581VwChHZeQF6qfQM9bkLhF2kDh1px5qKB?auto=format&w=1500",
      title: "Autumn Essentials",
      subtitle: "Warm and cozy for the colder months",
      badge: {
        text: "New",
        variant: "orange",
      },
    },
    {
      image:
        "https://www.lummi.ai/api/pro/image/a06ede0d-63fb-4d99-be4c-9ba0840cf779?asset=original&cb=1nK52A&auto=format&w=1500",
      title: "Winter Collection",
      subtitle: "Colorful for the festive season",
      badge: {
        text: "New",
        variant: "orange",
      },
    },
    {
      image: "https://assets.lummi.ai/assets/QmPdy3qFqQF8gDQ6KuuUrRaqez3cbdeaYw3GMrxBynLfGd?auto=format&w=1500",
      title: "Spring Accessories",
      subtitle: "Hidden treasures for the spring season",
      badge: {
        text: "New",
        variant: "orange",
      },
    },
    {
      image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
      title: "Holiday Special",
      subtitle: "Simple.",
      badge: {
        text: "New",
        variant: "orange",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <CardGrid items={collections} gridTitle="Collections 2025 - Summer" />
    </main>
  )
}
