"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Image,
  Briefcase,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    name: "Enquiries",
    icon: MessageSquare,
    href: "/admin/enquiries",
  },
  {
    name: "Courses",
    icon: BookOpen,
    href: "/admin/courses",
  },
  {
    name: "Gallery",
    icon: Image,
    href: "/admin/gallery",
  },
  {
    name: "Placements",
    icon: Briefcase,
    href: "/admin/placements",
  },
  {
    name: "Testimonials",
    icon: Star,
    href: "/admin/testimonials",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.replace("/admin/login");
        // router.refresh();
      }
    } catch (err) {
      console.error("Logout Failed:", err);
    }
  }

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen relative">
      <div className="p-6 text-2xl font-bold border-b">
        NexGen Admin
      </div>

      <nav className="mt-6">
        {menus.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-4 px-6 py-4 hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="absolute bottom-8 left-6 flex gap-3"
      >
        <LogOut  />
        Logout
      </button>
    </aside>
  );
}