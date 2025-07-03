import { Grid3X3, Heart, Menu } from "lucide-react";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-400/90 px-4 py-3">
      <div className="flex items-center justify-around">
        <Link href="/" className="flex flex-col items-center text-blue-600">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xs font-medium">Inicio</span>
        </Link>
        <Link
          href="/categories"
          className="flex flex-col items-center text-slate-400"
        >
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <Grid3X3 className="" />
          </div>
          <span className="text-xs">Categorías</span>
        </Link>
        <Link
          href="/favorites"
          className="flex flex-col items-center text-slate-400"
        >
          <div className="w-6 h-6 flex items-center justify-center mb-1 relative">
            <Heart className="" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <span className="text-xs">Favoritos</span>
        </Link>
        <Link
          href="/menu"
          className="flex flex-col items-center text-slate-400"
        >
          <div className="w-6 h-6 flex items-center justify-center mb-1 relative">
            <Menu className="" />
          </div>
          <span className="text-xs">Más</span>
        </Link>
      </div>
    </nav>
  );
}
