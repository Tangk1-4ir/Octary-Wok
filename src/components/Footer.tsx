"use client";

import React from "react";
import { Github, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import {
  motion,
  cubicBezier,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import { BoxesCore } from "./ui/background-boxes";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* Animations */
  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
      },
    },
  };

  const linkHoverEffect: TargetAndTransition = {
    scale: 1.07,
    y: -2,
    transition: { type: "spring", stiffness: 260 },
  };

  return (
    <motion.footer
      className="
        relative w-full              
        text-slate-400 
        bg-gradient-to-b from-slate-900 to-slate-900
        border-slate-700
        py-14 pb-32
        px-6 sm:px-8 lg:px-10
        overflow-hidden
        text-sm sm:text-base
      "
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ✅ BoxesCore background */}
      <div className="absolute inset-0 overflow-hidden">
        <BoxesCore />
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-bold text-slate-200 mb-4">
            Octary Community
          </h3>
          <p className="text-sm leading-relaxed">
            Platform belajar coding yang asik banget buat developer masa depan.
            <br />Belajar web development, UI/UX design, dan computer science
            <br />dengan cara yang seru!
          </p>
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-base font-semibold text-slate-300 mb-4">
            Jelajahi
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/courses", label: "Courses" },
              { href: "/showcase", label: "Showcase" },
              { href: "/profile", label: "Profile" },
              { href: "/kontak", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <motion.div whileHover={linkHoverEffect}>
                  <Link
                    href={href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants}>
          <h4 className="text-base font-semibold text-slate-300 mb-4">
            Ikuti Kami
          </h4>
          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Instagram, href: "https://www.instagram.com/_octary_/" },
              { Icon: Youtube, href: "https://www.youtube.com/@octarycommunity" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                whileHover={linkHoverEffect}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT — bottom */}
      <motion.div
        className="
          relative z-10 
          mt-10 pt-6 
          text-center text-xs sm:text-sm
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>&copy; {currentYear} Octary Community — All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
export { Footer };
