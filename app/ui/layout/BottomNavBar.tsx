"use client";

import { Circle, Grid3X3, Heart, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed grid grid-cols-4 bottom-0 left-0 right-0 bg-white">
      <Link
        href="/"
        className={`flex gap-1 flex-col border-t py-3 items-center ${
          pathname === "/"
            ? "text-blue-600 font-bold border-t-2 border-blue-600"
            : "text-slate-400 border-slate-400/90"
        }`}
      >
        <Circle className="size-7" />
        <span className="text-xs ">Inicio</span>
      </Link>

      <Link
        href="/categories"
        className={`flex gap-1 flex-col border-t py-3 items-center ${
          pathname === "/categories"
            ? "text-blue-600 font-bold border-t-2 border-blue-600"
            : "text-slate-400 border-slate-400/90"
        }`}
      >
        <Grid3X3 className="size-7" />
        <span className="text-xs">Categorías</span>
      </Link>

      <Link
        href="/favorites"
        className={`flex gap-1 flex-col border-t py-3 items-center ${
          pathname === "/favorites"
            ? "text-blue-600 font-bold border-t-2 border-blue-600"
            : "text-slate-400 border-slate-400/90"
        }`}
      >
        <div className="w-6 h-6 flex items-center justify-center mb-1 relative">
          <Heart className="size-7" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
        <span className="text-xs">Favoritos</span>
      </Link>

      <Link
        href="/menu"
        className={`flex gap-1 flex-col border-t py-3 items-center ${
          pathname === "/menu"
            ? "text-blue-600 font-bold border-t-2 border-blue-600"
            : "text-slate-400 border-slate-400/90"
        }`}
      >
        <Menu className="size-7" />
        <span className="text-xs">Más</span>
      </Link>
    </nav>
  );
}
