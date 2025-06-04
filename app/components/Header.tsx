export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">CapiShop</div>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/products" className="hover:underline">
          Products
        </a>
        <a href="/about" className="hover:underline">
          About Us
        </a>
      </nav>
    </header>
  );
}