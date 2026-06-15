import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../types/ProductTypes";

const BestSellerSection = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-gray-900">
          Bestsellers from Across the Country
        </h2>

        <a className="bg-[#B83232] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-900 transition-colors">
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={liked[product.id] || false}
            onToggleLike={() => toggleLike(product.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;