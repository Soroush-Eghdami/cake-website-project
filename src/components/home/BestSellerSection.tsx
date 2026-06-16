import { useState } from "react";
import ProductCard from "./ProductCard";

import chocolateCake from "../../assets/HomeIcon/chocolate-cake.jpg";
import pancake from "../../assets/HomeIcon/pancake.jpg";
import orangeCake from "../../assets/HomeIcon/orange-cake.jpg";
import fruitCake from "../../assets/HomeIcon/fruit-cake.jpg";

const products = [
  {
    id: 1,
    name: "Rich Chocolate Truffle Cake",
    price: "$500",
    oldPrice: "$620",
    rating: "★★★★★",
    reviews: 500,
    image: chocolateCake,
  },
  {
    id: 2,
    name: "Choco Chip Truffle Cake",
    price: "$509",
    oldPrice: "$640",
    rating: "★★★★★",
    reviews: 300,
    image: pancake,
  },
  {
    id: 3,
    name: "Tropical Fruit N Almond Cake",
    price: "$59",
    oldPrice: "$6590",
    rating: "★★★★☆",
    reviews: 700,
    image: orangeCake,
  },
  {
    id: 4,
    name: "Rich Butterscotch Crunch Cake",
    price: "$399",
    oldPrice: "$520",
    rating: "★★★★★",
    reviews: 500,
    image: fruitCake,
  },
];

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
        <h2 className="font-serif font-bold text-base md:text-2xl text-gray-900">
          Bestsellers from Across the Country
        </h2>

        <a className="bg-[#B83232] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full hover:bg-red-900 active:bg-red-900 transition-colors flex items-center justify-center whitespace-nowrap">
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