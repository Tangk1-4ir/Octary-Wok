"use client";

import Home from "@/components/Hero";
import { FloatingDockDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CommunityS2 from "@/components/CommunityS2";
import FeaturesS3 from "@/components/S3";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Features from "@/components/S4";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ✅ Navbar Floating Dock */}
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50">
        <FloatingDockDemo />
      </div>

      {/* ✅ Hero Section */}
      <Home />

      <CommunityS2 />

      <FeaturesS3 />

      <div className="relative z-10 bg-slate-950">
        <Features />
      </div>

      {/* ✅ Footer Section */}
      <div>
        <Footer />
      </div>
    </main>
  );
}
