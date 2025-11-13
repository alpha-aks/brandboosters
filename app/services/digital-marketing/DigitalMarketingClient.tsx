"use client";

import { Target, BarChart2, Users, Zap, MessageSquare, TrendingUp } from "lucide-react";
import ServiceTemplate from "../service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function DigitalMarketingClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="Digital Marketing"
      description="Drive growth and maximize your online presence with our comprehensive digital marketing strategies tailored to your business goals."
      services={[
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Marketing Automation",
        "Analytics & Reporting"
      ]}
      benefits={[
        "Targeted audience reach",
        "Data-driven strategies",
        "Increased brand visibility",
        "Higher conversion rates",
        "ROI-focused campaigns",
        "Performance tracking"
      ]}
      icon={<TrendingUp className="w-6 h-6 text-primary" />}
      color="bg-orange-400"
    />
  );
}
