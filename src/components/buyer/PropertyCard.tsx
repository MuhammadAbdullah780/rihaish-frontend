import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { Chip } from "./Chip";
import type { Property } from "@/lib/buyer/types";

type PropertyCardProps = {
  property: Property;
  favourite?: boolean;
  onToggleFavourite?: (id: string) => void;
  selectable?: boolean;
  selected?: boolean;
  onToggleSelect?: (id: string) => void;
  className?: string;
};

export function PropertyCard({
  property,
  favourite = false,
  onToggleFavourite,
  selectable = false,
  selected = false,
  onToggleSelect,
  className = "",
}: PropertyCardProps) {
  return (
    <Link
      href={`/dashboard/buyer/properties/${property.id}`}
      className={`block bg-surface rounded-card border border-border-hairline overflow-hidden shadow-resting hover:shadow-elevated transition-shadow group ${className}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {selectable && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onToggleSelect?.(property.id);
            }}
            className={`absolute top-3 left-3 z-10 w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-colors ${
              selected ? "bg-brand-primary border-brand-primary" : "bg-surface border-border-hairline"
            }`}
            aria-label="Select for comparison"
          >
            {selected && <Icon name="check" size={14} className="text-white" />}
          </button>
        )}
        {property.verified && (
          <Chip tone="success" icon="check_circle" className={selectable ? "absolute top-3 left-10" : "absolute top-3 left-3"}>
            Verified
          </Chip>
        )}
        {onToggleFavourite && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavourite(property.id);
            }}
            className="absolute top-3 right-3 w-8 h-8 bg-surface/90 rounded-full flex items-center justify-center shadow-resting text-ink-600 hover:text-danger transition-colors"
            aria-label={favourite ? "Remove from favourites" : "Save to favourites"}
          >
            <Icon name="favorite" size={18} filled={favourite} className={favourite ? "text-brand-primary" : ""} />
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="font-semibold text-h3 text-ink-900 tabular-nums">{property.price}</div>
        <div className="flex items-center gap-1 text-ink-400 text-caption mt-1">
          <Icon name="location_on" size={16} />
          <span className="truncate">{property.location}</span>
        </div>
        <div className="flex items-center gap-2 mt-3 text-ink-600 text-caption">
          {property.beds !== undefined && (
            <span className="flex items-center gap-1">
              <Icon name="bed" size={14} />
              {property.beds} Beds
            </span>
          )}
          {property.baths !== undefined && (
            <>
              <span className="text-border-hairline">•</span>
              <span className="flex items-center gap-1">
                <Icon name="bathtub" size={14} />
                {property.baths} Baths
              </span>
            </>
          )}
          <span className="text-border-hairline">•</span>
          <span className="flex items-center gap-1">
            <Icon name={property.type === "Apartment" ? "apartment" : "square_foot"} size={14} />
            {property.area}
          </span>
        </div>
      </div>
    </Link>
  );
}
