import { Metadata } from "next";
import dynamic from 'next/dynamic';

// Import the client component
const SEOPageClient = dynamic(() => import('./SEOPageClient'), { ssr: false });

export const metadata: Metadata = {
  title: "SEO Services | BrandBoosters",
  description: "Comprehensive SEO services to improve your website's visibility and drive organic traffic.",
};

export default function SEOServicesPage() {
  return <SEOPageClient />;
}
