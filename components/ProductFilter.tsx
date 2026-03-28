"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentProduct = searchParams.get("product") || "all";

  const handleFilterChange = (product: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (product === "all") {
      params.delete("product");
    } else {
      params.set("product", product);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-500">Filtrer par produit:</span>
      <select
        value={currentProduct}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-forest/20"
      >
        <option value="all">Tous les produits</option>
        <option value="Light Room">Light Room</option>
        <option value="Pack Coffee">Pack Coffee</option>
        <option value="Hermes">Hermes</option>
      </select>
    </div>
  );
}
