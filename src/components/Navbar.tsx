"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBook,
  IconLayersLinked,
  IconMail,
  IconBrandYoutube,
  IconBrandGithub
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-300" />,
      href: "/",
    },
    {
      title: "Courses",
      icon: <IconBook className="h-full w-full text-gray-300" />,
      href: "/courses",
    },
    {
      title: "Showcase",
      icon: <IconLayersLinked className="h-full w-full text-gray-300" />,
      href: "/showcase",
    },
    {
      title: "Profile Ocatry",
      icon: (
        <img
          src="octary-removebg-preview.png"
          className="w-20 h-10 object-contain"
          alt="Ocatry Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Youtube Channel",
      icon: <IconBrandYoutube className="h-full w-full text-gray-300" />,
      href: "#",
    },
    {
      title: "Contact Us!",
      icon: <IconMail className="h-full w-full text-gray-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-gray-300" />,
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-25">
      <FloatingDock items={links} />
    </div>
  );
}
