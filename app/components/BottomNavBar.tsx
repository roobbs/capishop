"use client";

import { Circle, Grid3X3, Heart, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-400/90 px-4 py-3">
      <div className="flex items-center justify-around">
        <Link
          href="/"
          className={`flex gap-1 flex-col items-center ${
            pathname === "/" ? "text-blue-600 font-bold" : "text-slate-400"
          }`}
        >
          <Circle className="" />
          <span className="text-xs ">Inicio</span>
        </Link>
        <Link
          href="/categories"
          className={`flex gap-1 flex-col items-center ${
            pathname === "/categories"
              ? "text-blue-600 font-bold"
              : "text-slate-400"
          }`}
        >
          <Grid3X3 className="" />
          <span className="text-xs">Categorías</span>
        </Link>
        <Link
          href="/favorites"
          className={`flex gap-1 flex-col items-center ${
            pathname === "/favorites"
              ? "text-blue-600 font-bold"
              : "text-slate-400"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center mb-1 relative">
            <Heart className="" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <span className="text-xs">Favoritos</span>
        </Link>
        <Link
          href="/menu"
          className={`flex gap-1 flex-col items-center ${
            pathname === "/menu" ? "text-blue-600 font-bold" : "text-slate-400"
          }`}
        >
          <Menu className="" />
          <span className="text-xs">Más</span>
        </Link>
      </div>
    </nav>
  );
}
