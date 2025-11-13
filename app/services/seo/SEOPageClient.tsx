"use client";

import { Search } from "lucide-react";
import ServiceTemplate from "../service-template/ServiceTemplate";

export default function SEOPageClient() {
  return (
    <ServiceTemplate
      title="SEO Services"
      description="Improve your website's visibility and drive organic traffic with our comprehensive SEO services designed to boost your search engine rankings."
      services={[
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audit",
        "Content Optimization",
        "Link Building Strategy",
        "Local SEO & Google My Business"
      ]}
      benefits={[
        "Higher search engine rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term results",
        "Data-driven strategies",
        "Monthly performance reports"
      ]}
      icon={<Search className="w-6 h-6 text-primary" />}
      color="bg-purple-400"
    />
  );
}
