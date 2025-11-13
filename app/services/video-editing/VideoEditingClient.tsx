"use client";

import { Video, Film, Camera, Edit3, PlayCircle, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';

export default function VideoEditingClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ServiceTemplate
      title="Video Editing"
      description="Transform your raw footage into compelling visual stories with our professional video editing services. We bring your vision to life with creative storytelling and technical expertise."
      services={[
        "Professional Video Editing",
        "Color Grading & Correction",
        "Motion Graphics & Animation",
        "Audio Enhancement & Mixing",
        "Special Effects (VFX)",
        "Social Media Optimization"
      ]}
      benefits={[
        "High-quality production value",
        "Faster turnaround times",
        "Engaging storytelling",
        "Platform-optimized content",
        "Professional polish",
        "Brand consistency"
      ]}
      icon={<Film className="w-6 h-6 text-primary" />}
      color="bg-purple-400"
    />
  );
}
