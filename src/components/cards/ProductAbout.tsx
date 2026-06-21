import type { ProductTypes } from "../../types/ProductTypes";

interface ProductAboutProps {
  product: ProductTypes;
}

const HIGHLIGHTS = [
  {
    title: "100% Natural",
    subtitle: "Real ingredients, no shortcuts",
    rotate: "-rotate-1",
  },
  {
    title: "Handmade Daily",
    subtitle: "Fresh from our kitchen",
    rotate: "rotate-1",
  },
] as const;

const ProductAbout = ({ product }: ProductAboutProps) => {
  const highlights = [
    ...HIGHLIGHTS,
    {
      title: "Loved by Many",
      subtitle: `${product.reviews}+ happy customers`,
      rotate: "-rotate-1" as const,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
        
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80 C200,10 500,140 800,60 L800,500 L0,500 Z" fill="#B83232" />
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 pt-16">
        <h2 className="font-serif font-bold text-white text-4xl md:text-5xl uppercase leading-tight mb-3 text-center md:text-left">
          Baked with<br/> Love
        </h2>
        <p className="text-white/90 text-lg leading-loose max-w-xl mx-auto md:mx-0 text-center md:text-left mb-10">
          {product.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ title, subtitle, rotate }) => (
            <div
              key={title}
              className={`bg-[#FFF0E8] rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform duration-300 ${rotate}`}
            >
              <p className="font-serif font-bold text-[#B83232] text-lg">{title}</p>
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;
