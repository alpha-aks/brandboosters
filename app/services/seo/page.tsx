import { Metadata } from "next";
import Hero from "@/container/seo-page/Hero";
import About from "@/container/seo-page/About";

export const metadata: Metadata = {
  title: "SEO Services | BrandBoosters",
  description: "Comprehensive SEO services to improve your website's visibility and drive organic traffic.",
};

export default function SEOServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <About />
    </main>
  );
}
