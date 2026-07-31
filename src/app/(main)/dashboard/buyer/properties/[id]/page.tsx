import { notFound } from "next/navigation";
import { PropertyDetails } from "@/components/buyer/PropertyDetails";
import { getPropertyById, similarListings } from "@/lib/buyer/mockData";

type PropertyDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} similarListings={similarListings} />;
}
