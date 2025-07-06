"use client";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  return (
    <div className="p-4">
      <button
        onClick={() => router.back()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Volver
      </button>

      <h1 className="text-xl font-bold mt-4">Tu carrito</h1>
    </div>
  );
}
