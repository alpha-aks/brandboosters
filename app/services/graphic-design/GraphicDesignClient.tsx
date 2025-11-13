"use client";

import { Palette, Layers, PenTool, Type, Image as ImageIcon, Zap } from "lucide-react";
import ServiceTemplate from "../service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function GraphicDesignClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="Graphic Design"
      description="Elevate your brand with stunning visual designs that capture attention and communicate your message effectively. Our creative team delivers custom designs that make an impact."
      services={[
        "Logo & Brand Identity",
        "Print Design (Brochures, Flyers, Business Cards)",
        "Digital Graphics (Social Media, Banners, Ads)",
        "UI/UX Design",
        "Packaging Design",
        "Illustrations & Icons"
      ]}
      benefits={[
        "Professional and polished visuals",
        "Consistent brand identity",
        "High-quality, scalable designs",
        "Quick turnaround times",
        "Custom illustrations",
        "Print and digital ready"
      ]}
      icon={<Palette className="w-6 h-6 text-primary" />}
      color="bg-pink-400"
    />
  );
}
