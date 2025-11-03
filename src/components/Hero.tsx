"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LampDemo, LampContainer } from "@/components/ui/lamp";

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ✅ Section 1 — LAMP */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <LampDemo />
        </div>
      </section>
    </div>
  );
}
