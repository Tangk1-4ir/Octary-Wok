"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FloatingDockDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface CardProps {
  title: string;
  description: string;
}

const items: CardProps[] = [
  { title: "Feature One", description: "Short explanation goes here." },
  { title: "Feature Two", description: "Short explanation goes here." },
  { title: "Feature Three", description: "Short explanation goes here." },
  { title: "Feature Four", description: "Short explanation goes here." },
  { title: "Feature Five", description: "Short explanation goes here." },
  { title: "Feature Six", description: "Short explanation goes here." },
];

export function ThreeDCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
      {items.map((item, i) => (
        <TiltCard key={i} {...item} />
      ))}
    </div>
  );
}

function TiltCard({ title, description }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / 20) * -1;
    const rotateY = (x - rect.width / 2) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function reset() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "rounded-2xl bg-[#0D0F16] border border-white/10 p-6 transition-all duration-300 cursor-pointer",
        "hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-white/60 text-sm mt-2">{description}</p>
    </motion.div>
  );
}

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar Floating Dock */}
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50">
        <FloatingDockDemo />
      </div>

      {/* Courses Content */}
      <div className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
          <ThreeDCardGrid />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

