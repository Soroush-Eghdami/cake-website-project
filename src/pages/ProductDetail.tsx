import { useParams, Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { products } from "../types/ProductTypes";
import ProductHero from "../components/cards/ProductHero";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
  return <div>Product not found !</div>;
}

  return (
    <div className="min-h-screen bg-[#FFF8F0] overflow-x-hidden relative">

      <Link
        to="/"
        className="fixed top-16 right-6 md:top-24 z-50 flex items-center gap-2 bg-[#B83232] text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-[#922727] hover:scale-105 transition-all duration-300">
        <FaArrowLeft />
      </Link>

      <ProductHero product={product} />
    </div>
  );
};

export default ProductDetail;
