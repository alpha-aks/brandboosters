"use client";

import { PenSquare, Camera, Video, Mic, Layout, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function ContentCreationClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="Content Creation"
      description="Engage your audience with high-quality, relevant content that tells your brand's story and drives meaningful interactions. Our content creation services are designed to captivate and convert."
      services={[
        "Blog Writing & Articles",
        "Social Media Content",
        "Video Content Production",
        "Podcast Production",
        "Email Marketing Content",
        "Whitepapers & E-books"
      ]}
      benefits={[
        "Consistent brand voice",
        "SEO-optimized content",
        "Engaging multimedia content",
        "Strategic content planning",
        "Audience-focused approach",
        "Measurable results"
      ]}
      icon={<PenSquare className="w-6 h-6 text-primary" />}
      color="bg-yellow-400"
    />
  );
}
