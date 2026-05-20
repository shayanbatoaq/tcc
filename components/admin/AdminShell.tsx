"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FileText,
  Home,
  ImageIcon,
  LogOut,
  PenLine,
  Settings,
  UserRound,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  ["Overview", "/admin", BarChart3],
  ["Create", "/admin/create", PenLine],
  ["Posts", "/admin/posts", FileText],
  ["Submissions", "/admin/submissions", Users],
  ["Media", "/admin/media", ImageIcon],
  ["Authors", "/admin/authors", UserRound],
  ["Homepage", "/admin/homepage", Home],
  ["Settings", "/admin/settings", Settings],
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#eef0f3] text-[#111827]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-[#d8dde5] bg-[#07111f] p-5 text-white lg:block">
        <Link href="/" className="mb-8 flex items-center gap-3">
          <span className="grid size-10 place-items-center border border-[#c9a96a]/70 text-[#eadfc8]">TCC</span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">Admin Studio</span>
        </Link>
        <nav className="grid gap-1">
          {nav.map(([label, href, Icon]) => (
            <Link
              key={href as string}
              href={href as string}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm text-white/70 transition hover:bg-white/8 hover:text-white",
                pathname === href && "bg-white/10 text-[#eadfc8]",
              )}
            >
              <Icon size={18} />
              {label as string}
            </Link>
          ))}
        </nav>
        <Link href="/admin/login" className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 text-sm text-white/58">
          <LogOut size={18} />
          Sign out
        </Link>
      </aside>
      <main className="lg:pl-72">
        <div className="sticky top-0 z-30 border-b border-[#d8dde5] bg-white/90 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#8a6a34]">Publishing command center</p>
              <h1 className="text-xl font-semibold">The Corporate Corner</h1>
            </div>
            <Link href="/" className="border border-[#d8dde5] px-4 py-2 text-sm">
              View Site
            </Link>
          </div>
        </div>
        <div className="p-5 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
