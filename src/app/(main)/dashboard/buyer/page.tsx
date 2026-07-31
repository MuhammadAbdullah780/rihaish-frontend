import Link from "next/link";
import Image from "next/image";
import { PropertyCard } from "@/components/buyer/PropertyCard";
import { properties, trendingSocieties } from "@/lib/buyer/mockData";

const categories = ["All", "Houses", "Plots", "Apartments", "Commercial", "Farmhouses"];

export default function BuyerHomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-10 pb-20">
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {categories.map((category, i) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full text-caption font-medium border whitespace-nowrap transition-colors ${
              i === 0
                ? "bg-brand-tint text-brand-primary border-transparent"
                : "bg-surface text-ink-600 border-border-hairline hover:border-brand-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-h2 text-ink-900">Featured properties</h2>
          <Link href="/dashboard/buyer/favourites" className="text-brand-primary text-small hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold text-h2 text-ink-900 mb-5">Trending societies</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
          {trendingSocieties.map((society) => (
            <Link
              key={society.id}
              href={`/dashboard/buyer/societies/${society.id}`}
              className="relative min-w-[320px] h-[200px] rounded-card overflow-hidden group shrink-0"
            >
              <Image
                src={society.imageUrl}
                alt={society.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold text-body leading-tight">{society.name}</div>
                <div className="text-caption opacity-90">{society.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
