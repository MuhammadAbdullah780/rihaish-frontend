"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/auth/Icon";
import { PageHeader } from "@/components/buyer/PageHeader";
import { PropertyCard } from "@/components/buyer/PropertyCard";
import { properties as allProperties, favouritePropertyIds } from "@/lib/buyer/mockData";

export default function FavouritesPage() {
  const router = useRouter();
  const [favouriteIds, setFavouriteIds] = useState<string[]>(favouritePropertyIds);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const favourites = useMemo(
    () => allProperties.filter((p) => favouriteIds.includes(p.id)),
    [favouriteIds]
  );

  function toggleFavourite(id: string) {
    setFavouriteIds((prev) => prev.filter((favId) => favId !== id));
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((selId) => selId !== id) : [...prev, id]
    );
  }

  function handleCompare() {
    if (selectedIds.length < 2) return;
    router.push(`/dashboard/buyer/compare?ids=${selectedIds.join(",")}`);
  }

  return (
    <main className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-8 pb-16">
      <PageHeader
        title="Favourites"
        meta={`${favourites.length} saved`}
        action={
          <button
            type="button"
            onClick={handleCompare}
            disabled={selectedIds.length < 2}
            className={`px-6 py-2 rounded-button font-semibold text-small border transition-colors ${
              selectedIds.length >= 2
                ? "bg-brand-primary text-white border-brand-primary hover:bg-brand-primary-hover"
                : "border-border-hairline text-ink-400 opacity-60 cursor-not-allowed"
            }`}
          >
            Compare selected
          </button>
        }
      />

      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
          <Icon name="favorite" size={40} className="text-ink-400" />
          <p className="text-ink-600">No saved properties yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              favourite
              onToggleFavourite={toggleFavourite}
              selectable
              selected={selectedIds.includes(property.id)}
              onToggleSelect={toggleSelect}
            />
          ))}
        </div>
      )}
    </main>
  );
}
