export type PropertyType = "House" | "Plot" | "Apartment" | "Commercial" | "Farmhouse";

export type Property = {
  id: string;
  title: string;
  price: string;
  pricePerUnit?: string;
  location: string;
  area: string;
  beds?: number;
  baths?: number;
  type: PropertyType;
  verified: boolean;
  imageUrl: string;
  investmentScore?: number;
  predictedPrice?: string;
  predictedChangePct?: number;
  ownership?: string;
  possession?: string;
  yearBuilt?: number;
  description?: string[];
};

export type Society = {
  id: string;
  name: string;
  location: string;
  tagline: string;
  imageUrl: string;
  governmentApproved: boolean;
  totalPlots: number;
  available: number;
  occupancyPct: number;
  amenitiesCount: number;
  facilities: { icon: string; label: string }[];
  nearbyLandmarks: { icon: string; label: string; distanceKm: number }[];
  timeline: { year: number; label: string; status: "done" | "current" | "upcoming" }[];
};

export type NotificationItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  timeAgo: string;
  read: boolean;
  group: "Today" | "Yesterday" | "Earlier";
};

export type BuyerUser = {
  name: string;
  role: string;
  avatarUrl: string;
  phone: string;
  email: string;
};
