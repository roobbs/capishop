import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-100/80 via-slate-100/80 to-blue-100/80 backdrop-blur-md border-b border-blue-200/30 p-4 py-3 flex flex-col gap-1 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-1">
            <div className="p-1 bg-blue-800 rounded-full h-8 text-white w-8 flex items-center justify-center">
              c
            </div>
            <h1 className="text-xl font-bold text-slate-900">CapiShop</h1>
          </Link>
          <Link href={"/cart"} className="flex gap-4">
            <div className="relative text-slate-600">
              <ShoppingCart size={30} />
              <div className="absolute -top-1 text-xs text-white font-medium -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                0
              </div>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
