"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { Chip } from "./Chip";
import { PropertyCard } from "./PropertyCard";
import type { Property } from "@/lib/buyer/types";

const TABS = ["Overview", "Facilities", "Location"] as const;

type PropertyDetailsProps = {
  property: Property;
  similarListings: Property[];
};

export function PropertyDetails({ property, similarListings }: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Overview");

  const specs = [
    { icon: "square_foot", value: property.area, label: "Area" },
    property.beds !== undefined && { icon: "bed", value: property.beds, label: "Bedrooms" },
    property.baths !== undefined && { icon: "bathtub", value: property.baths, label: "Bathrooms" },
    property.yearBuilt && { icon: "calendar_today", value: property.yearBuilt, label: "Year Built" },
    property.ownership && { icon: "description", value: property.ownership, label: "Ownership" },
    property.possession && { icon: "key", value: property.possession, label: "Possession" },
  ].filter(Boolean) as { icon: string; value: string | number; label: string }[];

  return (
    <main className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-8 pb-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="w-full lg:w-[760px] space-y-8">
          <div className="relative w-full h-[420px] rounded-card overflow-hidden border border-border-hairline">
            <Image src={property.imageUrl} alt={property.title} fill unoptimized className="object-cover" />
            {property.verified && (
              <Chip tone="success" icon="verified" className="absolute top-4 left-4">
                Verified
              </Chip>
            )}
          </div>

          <div className="border-b border-border-hairline">
            <nav className="flex gap-8">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-small font-medium transition-colors ${
                    activeTab === tab
                      ? "text-ink-900 border-b-2 border-brand-primary"
                      : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === "Overview" && (
            <article className="space-y-4">
              {(property.description ?? [
                "Detailed information about this property will be available soon.",
              ]).map((paragraph, i) => (
                <p key={i} className="text-small text-ink-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          )}

          {activeTab === "Facilities" && (
            <p className="text-small text-ink-600 leading-relaxed">
              Facility information for this property has not been published yet.
            </p>
          )}

          {activeTab === "Location" && (
            <p className="text-small text-ink-600 leading-relaxed">{property.location}</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-surface p-4 rounded-card border border-border-hairline flex flex-col gap-1">
                <Icon name={spec.icon} size={20} className="text-ink-400 mb-1" />
                <span className="text-body font-semibold text-ink-900">{spec.value}</span>
                <span className="text-caption text-ink-400 uppercase tracking-label">{spec.label}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="flex-1">
          <div className="bg-surface rounded-card border border-border-hairline p-6 sticky top-28 space-y-6">
            <div className="space-y-1">
              <h2 className="text-h1 font-semibold text-ink-900 tabular-nums leading-none">{property.price}</h2>
              <div className="flex items-center gap-1 text-ink-400">
                <Icon name="location_on" size={18} />
                <span className="text-small">{property.location}</span>
              </div>
            </div>
            <hr className="border-border-hairline" />

            {property.investmentScore !== undefined && (
              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle className="stroke-border-hairline" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                    <circle
                      className="stroke-accent-data"
                      cx="18"
                      cy="18"
                      fill="none"
                      r="16"
                      strokeDasharray={`${property.investmentScore}, 100`}
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-small font-semibold text-ink-900 tabular-nums">{property.investmentScore}</span>
                  </div>
                </div>
                <div>
                  <p className="text-small font-semibold text-ink-900">AI Investment Score</p>
                  <p className="text-caption text-ink-600">Good long-term appreciation potential</p>
                </div>
              </div>
            )}

            {property.predictedPrice && (
              <div className="bg-bg-page p-4 rounded-card border border-border-hairline">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="trending_up" size={20} className="text-accent-data" />
                    <span className="text-caption font-medium text-ink-900">Predicted price</span>
                  </div>
                  {property.predictedChangePct !== undefined && (
                    <span className="text-caption font-semibold text-accent-data tabular-nums">
                      +{property.predictedChangePct}%
                    </span>
                  )}
                </div>
                <p className="text-caption text-ink-900">
                  {property.predictedPrice} <span className="text-ink-600">in 12 months</span>
                </p>
              </div>
            )}

            <div className="space-y-3">
              <button className="w-full h-12 bg-brand-primary text-white font-semibold text-small rounded-button hover:bg-brand-primary-hover transition-colors active:scale-[0.98]">
                Contact seller
              </button>
              <button className="w-full h-12 bg-surface text-ink-900 border border-border-hairline font-semibold text-small rounded-button flex items-center justify-center gap-2 hover:bg-bg-page transition-colors active:scale-[0.98]">
                <Icon name="favorite" size={18} />
                Save to favourites
              </button>
            </div>

            <div className="space-y-2">
              <div className="w-full h-40 rounded-card border border-border-hairline relative overflow-hidden bg-bg-page flex items-center justify-center">
                <Icon name="location_on" size={32} filled className="text-brand-primary" />
              </div>
              <a className="inline-flex items-center gap-1 text-small font-semibold text-brand-primary hover:underline" href="#">
                View on map
                <Icon name="open_in_new" size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>

      {similarListings.length > 0 && (
        <section className="mt-16 space-y-6">
          <h3 className="text-h3 font-semibold text-ink-900">Similar listings</h3>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
            {similarListings.map((listing) => (
              <PropertyCard key={listing.id} property={listing} className="min-w-[280px] w-[280px] shrink-0" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
