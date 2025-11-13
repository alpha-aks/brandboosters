"use client";

import { BarChart3, Users, Share2, Target, Zap, TrendingUp } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function ChannelMarketingClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="Channel Marketing"
      description="Maximize your market reach and sales potential through strategic channel marketing. We help you build and optimize distribution channels to expand your brand's presence."
      services={[
        "Channel Partner Strategy",
        "Reseller & Distributor Programs",
        "Co-Marketing Campaigns",
        "Partner Portal Development",
        "Incentive Programs",
        "Performance Analytics"
      ]}
      benefits={[
        "Expanded market reach",
        "Increased sales through partners",
        "Stronger partner relationships",
        "Brand consistency across channels",
        "Data-driven decision making",
        "Improved ROI on marketing spend"
      ]}
      icon={<Share2 className="w-6 h-6 text-primary" />}
      color="bg-indigo-400"
    />
  );
}
