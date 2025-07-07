// import { Search, Filter, Grid3X3, List } from "lucide-react";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Capishop Home</div>
      {/* <div className="bg-red-400">
          <div className="relative border border-red-600">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              placeholder="Buscar piezas únicas..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 bg-slate-100 border-0 rounded-xl text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div> */}

      {/* Filter Bar */}
      {/* <div className="flex border items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="border-slate-200 text-slate-600 rounded-lg">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1">
            10 piezas disponibles
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div
            // onClick={() => setViewMode("grid")}
            className={"bg-blue-600 text-white"}
          >
            <Grid3X3 className="w-4 h-4" />
          </div>
          <div
          //  onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
