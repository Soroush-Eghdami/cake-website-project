import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../types/ProductTypes";
// import chocolateCake from "../../assets/HomeIcon/chocolate-cake.jpg";
// import pancake from "../../assets/HomeIcon/pancake.jpg";
// import orangeCake from "../../assets/HomeIcon/orange-cake.jpg";
// import fruitCake from "../../assets/HomeIcon/fruit-cake.jpg";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

// const products = [
//   {
//     id: 1,
//     name: "Rich Chocolate Truffle Cake",
//     price: "$500",
//     oldPrice: "$620",
//     rating: "★★★★★",
//     reviews: 500,
//     image: chocolateCake,
//   },
//   {
//     id: 2,
//     name: "Choco Chip Truffle Cake",
//     price: "$509",
//     oldPrice: "$640",
//     rating: "★★★★★",
//     reviews: 300,
//     image: pancake,
//   },
//   {
//     id: 3,
//     name: "Tropical Fruit N Almond Cake",
//     price: "$59",
//     oldPrice: "$6590",
//     rating: "★★★★☆",
//     reviews: 700,
//     image: orangeCake,
//   },
//   {
//     id: 4,
//     name: "Rich Butterscotch Crunch Cake",
//     price: "$399",
//     oldPrice: "$520",
//     rating: "★★★★★",
//     reviews: 500,
//     image: fruitCake,
//   },
// ];

const GAP = 16;

const BestSellerSection = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + GAP);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const visibleCount = window.innerWidth >= 768 ? 4 : 2;
  const maxOffset = (products.length - visibleCount) * cardWidth;

  const handlePrev = () => setOffset((o) => Math.max(0, o - cardWidth));
  const handleNext = () => setOffset((o) => Math.min(maxOffset, o + cardWidth));

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12 overflow-x-hidden">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-serif text-base md:text-2xl font-bold text-gray-900">
          Bestsellers from Across the Country
        </h2>

        <a className="ml-auto bg-[#B83232] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full hover:bg-red-900 transition-colors flex items-center justify-center whitespace-nowrap">
          VIEW ALL
        </a>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={offset === 0}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 disabled:opacity-30 transition-opacity"
        >
          <IoIosArrowDropleft className="w-8 h-8 text-[#B83232]" />
        </button>

        <div className="py-4 -my-4 px-2 -mx-2 overflow-visible" style={{ clipPath: "none" }}>
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={index === 0 ? cardRef : undefined}
                className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] shrink-0"
              >
                <ProductCard
                  product={product}
                  liked={liked[product.id] || false}
                  onToggleLike={() => toggleLike(product.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={offset >= maxOffset}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 disabled:opacity-30 transition-opacity"
        >
          <IoIosArrowDropright className="w-8 h-8 text-[#B83232]" />
        </button>
      </div>

      {/* mobile only */}
      <div className="flex md:hidden justify-center gap-2 mt-5">
        {Array.from({ length: products.length - visibleCount + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setOffset(i * cardWidth)}
            className={`w-2 h-2 rounded-full transition-colors ${
              offset === i * cardWidth ? "bg-[#B83232]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;