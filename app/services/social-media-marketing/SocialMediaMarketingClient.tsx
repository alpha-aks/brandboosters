"use client";

import { Share2 } from "lucide-react";
import ServiceTemplate from "../service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function SocialMediaMarketingClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return a loading state
  }

  return (
    <ServiceTemplate
      title="Social Media Marketing"
      description="Grow your brand's online presence and engage with your audience through strategic social media marketing campaigns across all major platforms."
      services={[
        "Social Media Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Partnerships",
        "Analytics & Performance Tracking"
      ]}
      benefits={[
        "Increased brand awareness",
        "Higher engagement rates",
        "Targeted audience reach",
        "Improved customer loyalty",
        "Competitive analysis",
        "Measurable ROI"
      ]}
      icon={<Share2 className="w-6 h-6 text-primary" />}
      color="bg-blue-400"
    />
  );
}
