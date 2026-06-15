import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import pancake from "../../src/assets/HomeIcon/pancake.jpg";
function ProductDetail() {
  return (
    <>
      <section className="relative pt-8 pb-24 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 pt-6 flex flex-wrap gap-6 text-[#B83232] font-bold text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            123 Dessert St, Sweetville
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              0121 3456 7890 | @cakehouse
            </div>
          </div>
          <div className="relative mt-8">
            <img src={pancake} alt="pancake" className="absolute inset-0 w-full h-full"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
