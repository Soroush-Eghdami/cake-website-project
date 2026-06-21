import type { ProductTypes } from "../../types/ProductTypes";

interface ProductGalleryProps {
  product: ProductTypes;
}

interface GalleryItem {
  label: string;
  imageClass: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: "Full Cake",
    alt: "Full cake view",
    imageClass: "w-full h-full object-cover scale-[1.4] transition-transform duration-500 group-hover:scale-[2.4]",
  },
  {
    label: "Topping Detail",
    alt: "Topping detail",
    imageClass: "w-full h-full object-cover scale-[2.2] transition-transform duration-500 group-hover:scale-[2.4]",
  },
  {
    label: "Inner Texture",
    alt: "Inner texture",
    imageClass: "w-full h-full object-cover scale-[3.5] transition-transform duration-500 group-hover:scale-[2.4]",
  },
];

const ProductGallery = ({ product }: ProductGalleryProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="font-serif font-bold text-[#B83232] text-4xl md:text-5xl uppercase text-center mb-14">
          A Closer<br/> Look
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map(({ label, alt, imageClass }) => (
            <div key={label} className="group relative">
              <div className="relative aspect-square overflow-hidden p-6">
                <img src={product.image} alt={alt} className={imageClass} />
              </div>
              <p className="relative text-center font-serif font-bold text-[#B83232] mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
