"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { PageHeader } from "./PageHeader";
import type { Property } from "@/lib/buyer/types";

type ComparePropertiesTableProps = {
  properties: Property[];
};

type CompareRow = {
  label: string;
  render: (property: Property) => React.ReactNode;
};

const rows: CompareRow[] = [
  { label: "Type", render: (p) => p.type },
  { label: "Area", render: (p) => p.area },
  { label: "Bedrooms", render: (p) => p.beds ?? "—" },
  { label: "Bathrooms", render: (p) => p.baths ?? "—" },
  { label: "Price per unit", render: (p) => p.pricePerUnit ?? "—" },
  { label: "Investment score", render: (p) => p.investmentScore ?? "—" },
  { label: "Possession", render: (p) => p.possession ?? "—" },
  {
    label: "Verified",
    render: (p) =>
      p.verified ? <Icon name="check_circle" size={20} className="text-brand-primary" /> : "—",
  },
];

export function ComparePropertiesTable({ properties: initialProperties }: ComparePropertiesTableProps) {
  const [properties, setProperties] = useState(initialProperties);

  function removeProperty(id: string) {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <main className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-8 pb-16">
      <PageHeader title="Compare properties" backHref="/dashboard/buyer/favourites" />

      {properties.length === 0 ? (
        <p className="text-ink-600 text-center py-24">No properties selected for comparison.</p>
      ) : (
        <>
          <div className="bg-surface border border-border-hairline rounded-card overflow-hidden overflow-x-auto">
            <table className="w-full border-collapse table-fixed min-w-[640px]">
              <thead>
                <tr>
                  <th className="w-[180px] bg-surface" />
                  {properties.map((property) => (
                    <th key={property.id} className="p-4 align-top text-left font-normal border-l border-border-hairline min-w-[200px]">
                      <div className="relative h-[130px] mb-4 overflow-hidden rounded-t-card">
                        <Image src={property.imageUrl} alt={property.title} fill unoptimized className="object-cover" />
                        <button
                          type="button"
                          onClick={() => removeProperty(property.id)}
                          className="absolute top-2 right-2 bg-surface/90 w-6 h-6 flex items-center justify-center rounded-sm hover:bg-surface transition-colors"
                          aria-label="Remove from comparison"
                        >
                          <Icon name="close" size={16} className="text-ink-900" />
                        </button>
                      </div>
                      <div className="tabular-nums font-semibold text-body text-ink-900">{property.price}</div>
                      <div className="text-caption text-ink-400 mt-0.5">{property.location}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-ink-900">
                {rows.map((row) => (
                  <tr key={row.label} className="h-14 border-t border-border-hairline">
                    <td className="px-4 text-caption font-medium text-ink-600">{row.label}</td>
                    {properties.map((property) => (
                      <td key={property.id} className="px-4 text-center text-small border-l border-border-hairline tabular-nums">
                        {row.render(property)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="h-[72px] border-t border-border-hairline">
                  <td className="px-4" />
                  {properties.map((property) => (
                    <td key={property.id} className="px-4 text-center border-l border-border-hairline">
                      <button className="h-9 w-full max-w-[140px] border border-brand-primary text-brand-primary font-medium text-caption rounded-button hover:bg-brand-primary hover:text-white transition-colors">
                        Contact seller
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-caption text-ink-400">Comparisons are saved for 24 hours</p>
        </>
      )}
    </main>
  );
}
