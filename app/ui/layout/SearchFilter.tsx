import { Funnel, Search } from "lucide-react";

export default function SearchFilter() {
  return (
    <div className="grid grid-cols-4 gap-3 p-3 px-6 shadow-sm">
      <div className="flex items-center col-span-3 p-2 px-3 gap-3 border-2 border-slate-300 rounded-lg bg-slate-200/60 focus-within:border-blue-900 group">
        <Search className="text-slate-600 group-focus-within:hidden" />
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent text-blue-950 outline-none flex-1"
        />
      </div>
      <div className="flex gap-1 p-2 bg-white border rounded-lg border-slate-400 text-slate-600">
        <Funnel /> Filtrar
      </div>
    </div>
  );
}
