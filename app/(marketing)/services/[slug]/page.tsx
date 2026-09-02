import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  serviceSlugs,
} from "@/components/services/content";
import { ServiceDetailView } from "@/components/services/service-detail-view";

type ServiceSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceSlugPage({ params }: ServiceSlugPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
