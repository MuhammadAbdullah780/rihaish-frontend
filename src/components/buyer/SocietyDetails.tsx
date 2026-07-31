"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { Chip } from "./Chip";
import { StatTile } from "./StatTile";
import type { Society } from "@/lib/buyer/types";

const TABS = ["Facilities", "Utilities", "Plots", "Lease status"] as const;

type SocietyDetailsProps = {
  society: Society;
};

export function SocietyDetails({ society }: SocietyDetailsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Facilities");
  const completedSteps = society.timeline.filter((step) => step.status !== "upcoming").length;
  const timelineProgressPct = (completedSteps / society.timeline.length) * 100;

  return (
    <main>
      <section className="relative w-full h-[320px] overflow-hidden">
        <Image src={society.imageUrl} alt={society.name} fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent flex flex-col justify-end p-6 sm:p-12 pb-10">
          <div className="max-w-[1280px] mx-auto w-full relative">
            {society.governmentApproved && (
              <Chip tone="success" icon="check_circle" className="absolute -top-16 right-0">
                Government Approved
              </Chip>
            )}
            <h2 className="font-display text-h1 leading-tight text-white mb-1">{society.name}</h2>
            <p className="text-small text-white opacity-85">{society.location}</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
          <StatTile label="Total Plots" value={society.totalPlots.toLocaleString()} />
          <StatTile label="Available" value={society.available.toLocaleString()} />
          <StatTile label="Occupancy" value={`${society.occupancyPct}%`} />
          <StatTile label="Amenities" value={society.amenitiesCount} />
        </div>

        <div className="border-b border-border-hairline flex gap-8 mb-8 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-small font-medium whitespace-nowrap transition-colors ${
                activeTab === tab ? "text-brand-primary border-b-2 border-brand-primary" : "text-ink-600 hover:text-brand-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {activeTab === "Facilities" && (
              <div>
                <h3 className="text-h3 font-semibold text-ink-900 mb-6">Community Facilities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {society.facilities.map((facility) => (
                    <div
                      key={facility.label}
                      className="bg-surface p-6 border border-border-hairline rounded-card flex flex-col items-center gap-3 transition-colors hover:border-brand-primary"
                    >
                      <Icon name={facility.icon} size={24} className="text-brand-primary" />
                      <span className="text-small font-medium text-ink-900">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Utilities" && (
              <p className="text-small text-ink-600 leading-relaxed">
                Utility connection status for this society has not been published yet.
              </p>
            )}

            {activeTab === "Plots" && (
              <p className="text-small text-ink-600 leading-relaxed">
                Individual plot listings for this society will appear here.
              </p>
            )}

            {activeTab === "Lease status" && (
              <p className="text-small text-ink-600 leading-relaxed">
                Lease status records for this society have not been published yet.
              </p>
            )}

            <div className="bg-surface p-8 border border-border-hairline rounded-card">
              <h3 className="text-h3 font-semibold text-ink-900 mb-10">Development Timeline</h3>
              <div className="relative pt-12 pb-8">
                <div className="absolute top-12 left-0 w-full h-[2px] bg-border-hairline" />
                <div
                  className="absolute top-12 left-0 h-[2px] bg-brand-primary"
                  style={{ width: `${timelineProgressPct}%` }}
                />
                <div className="relative flex justify-between">
                  {society.timeline.map((step) => (
                    <div key={step.year} className="flex flex-col items-center w-1/4">
                      <span
                        className={`absolute -top-9 text-small font-bold tabular-nums ${
                          step.status === "upcoming" ? "text-ink-600" : "text-brand-primary"
                        }`}
                      >
                        {step.year}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full border-4 border-surface z-10 ${
                          step.status === "upcoming" ? "bg-border-hairline" : "bg-brand-primary"
                        }`}
                      />
                      <p
                        className={`mt-6 text-center text-caption max-w-[120px] ${
                          step.status === "current"
                            ? "font-semibold text-brand-primary"
                            : step.status === "upcoming"
                              ? "text-ink-600"
                              : "text-ink-900"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface border border-border-hairline rounded-card overflow-hidden">
              <div className="px-6 py-5 border-b border-border-hairline bg-bg-page">
                <h3 className="text-caption font-bold uppercase tracking-label text-brand-primary">Nearby Landmarks</h3>
              </div>
              <div className="divide-y divide-border-hairline">
                {society.nearbyLandmarks.map((landmark) => (
                  <div key={landmark.label} className="flex items-center justify-between px-6 h-14 hover:bg-bg-page transition-colors">
                    <div className="flex items-center gap-4">
                      <Icon name={landmark.icon} size={20} className="text-brand-primary" />
                      <span className="text-body font-medium text-ink-900">{landmark.label}</span>
                    </div>
                    <span className="text-body tabular-nums text-ink-600">{landmark.distanceKm} km</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 bg-brand-primary rounded-card text-white">
              <h4 className="text-h3 font-semibold mb-2 text-white">Verify Your Plot</h4>
              <p className="text-small opacity-80 mb-6">
                Ensure your property records are synchronized with our official ledger.
              </p>
              <button className="w-full py-3 bg-white text-brand-primary font-bold uppercase tracking-label text-caption rounded-button hover:bg-brand-tint transition-colors">
                Get Verified Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
