import { ComparePropertiesTable } from "@/components/buyer/ComparePropertiesTable";
import { getPropertyById, properties } from "@/lib/buyer/mockData";

type ComparePageProps = {
  searchParams: Promise<{ ids?: string }>;
};

export default async function ComparePropertiesPage({ searchParams }: ComparePageProps) {
  const { ids } = await searchParams;
  const requestedIds = ids?.split(",").filter(Boolean) ?? [];
  const compareProperties = requestedIds.length
    ? requestedIds.map(getPropertyById).filter((p): p is NonNullable<typeof p> => Boolean(p))
    : properties.slice(0, 3);

  return <ComparePropertiesTable properties={compareProperties} />;
}
