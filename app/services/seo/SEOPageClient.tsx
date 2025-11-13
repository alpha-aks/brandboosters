"use client";

import Hero from "@/container/seo-page/Hero";
import About from "@/container/seo-page/About";

export default function SEOPageClient() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <About />
    </main>
  );
}
