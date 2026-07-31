import { notFound } from "next/navigation";
import { SocietyDetails } from "@/components/buyer/SocietyDetails";
import { getSocietyById } from "@/lib/buyer/mockData";

type SocietyDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SocietyDetailsPage({ params }: SocietyDetailsPageProps) {
  const { id } = await params;
  const society = getSocietyById(id);

  if (!society) {
    notFound();
  }

  return <SocietyDetails society={society} />;
}
