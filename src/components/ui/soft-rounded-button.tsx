"use client";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export function SoftRoundedButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}        // hanya fade-in
      whileInView={{ opacity: 1 }}    // muncul tanpa pergeseran
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ amount: 0.2 }}
    >
      <button
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white/90 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white",
          className
        )}
        {...props}
      >
        {children}
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </motion.div>
  );
}
