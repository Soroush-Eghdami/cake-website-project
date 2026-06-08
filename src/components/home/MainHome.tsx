import { MdOutlineCookie } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { PiCoffee, PiHandWithdrawLight, PiHandWithdrawThin, PiWineDuotone } from "react-icons/pi";
import strawberry from "../../assets/HomeIcon/Strawberry-cake.jpg";
import macaron from "../../assets/HomeIcon/macaron.jpg";
import blueCake from "../../assets/HomeIcon/blueCake.jpg";
import chocolateCake from "../../assets/HomeIcon/chocolate-cake.jpg";
import pancake from "../../assets/HomeIcon/pancake.jpg";
import orangeCake from "../../assets/HomeIcon/orange-cake.jpg";
import fruitCake from "../../assets/HomeIcon/fruit-cake.jpg";
import chicken from "../../assets/HomeIcon/chicken.jpg";
import berger from "../../assets/HomeIcon/berger.jpg";
import shrimp from "../../assets/HomeIcon/shrimp.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import meat from "../../assets/HomeIcon/meat.jpg";
import meat2 from "../../assets/HomeIcon/meat2.jpg";
import corns from "../../assets/HomeIcon/corns.jpg";
import { useState } from "react";
import { HiOutlineTruck } from "react-icons/hi";
import { BsTicketPerforated, BsTruck } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";

const MainHome = () => {
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
    price: "₹509",
    oldPrice: "₹640",
    rating: "★★★★★",
    reviews: 300,
    image: pancake,
  },
  {
    id: 3,
    name: "Tropical Fruit N Almond Cake",
    price: "₹509",
    oldPrice: "₹650",
    rating: "★★★★☆",
    reviews: 700,
    image: orangeCake,
  },
  {
    id: 4,
    name: "Rich Butterscotch Crunch Cake",
    price: "₹399",
    oldPrice: "₹520",
    rating: "★★★★★",
    reviews: 500,
    image: fruitCake,
    },
];

  const images = [chicken, berger, shrimp, meat, meat2, corns];
  const [liked, setLiked] = useState({});
  const toggleLike = (id) => {
  setLiked((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};




  return (
    <>
      <section className="bg-[#B83232] overflow-hidden relative">
        {/* Blobs */}
        <div
          className="absolute top-6 right-16 w-48 h-48 bg-white/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
        />
        <div
          className="absolute bottom-4 left-1/3 w-32 h-32 bg-white/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
        />
        <div
          className="absolute top-5 left-9 w-87 h-87 bg-white/5 rounded-[40%_90%_30%_70%/60%_90%_70%_80%]"
        />
        <div
          className="absolute bottom-8 right-89 w-77 h-88 bg-white/5 rounded-[90%_40%_30%_70%/60%_30%_70%_40%]"
        />
        <div
          className="absolute bottom-8 right-22 w-22 h-22 bg-white/5 rounded-[60%_40%_30%_50%/60%_30%_70%_90%]"
        />


        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex items-center gap-8 relative z-10">
          <div className="shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-full bg-white/10 border-4 border-white/20 overflow-hidden shadow-2xl">
            <img
              src={strawberry}
              alt="Strawberry Cake"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-white text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200 mb-2 ">
              Limited Time Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Decadent
              <br />
              <span className="italic text-red-100">Strawberry</span>
              <br />
              Bliss!
            </h1>
            <p className="mt-3 text-red-200 text-base md:text-lg">
              Satisfy Your Sweetest Cravings
            </p>

            <div className="mt-5 inline-flex items-center gap-3">
              <span className="bg-white text-[#E53935] font-black text-xl px-5 py-2.5 rounded-full">
                SAVE 20%
              </span>
              <span className="text-xs text-red-200 font-medium">Special Offer!</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="bg-white text-[#E53935] font-bold px-7 py-3 rounded-full hover:bg-[#FFF8F0] transition-colors shadow-lg text-sm"
              >
                Order Now
              </a>
              <a
                href="#"
                className="border-2 border-white/40 text-white font-medium px-7 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Explore Menu
              </a>
            </div>
          </div>


          <div className="hidden md:flex flex-col gap-4 shrink-0">
            <div className="w-28 h-28 rounded-2xl bg-white/10 overflow-hidden border-3 border-white/20 shadow-xl">
              <img
                src={macaron}
                alt="Macaron"
              />
            </div>
            <div className="w-28 h-28 rounded-2xl bg-white/10 overflow-hidden border-3 border-white/20 shadow-xl animate-[fade-in_0.6s_ease_both] [animation-delay:500ms]">
              <img
                src={blueCake}
                alt="Blueberry Cake"
              />
            </div>
          </div>
        </div>
      </section>
        {/* menu */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                Menu
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                What will you wish for?
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <button className="flex flex-col items-center gap-2 px-5 py-3 bg-[#B83232] text-white rounded-2xl shadow-md shadow-red-300/30 hover:bg-red-900 transition-colors">
                <MdAddCircleOutline />
                <span className="text-xs font-semibold">
                  CLASSIC
                </span>
              </button>

              <button className="flex flex-col items-center gap-2 px-5 py-3 bg-[#f4eed4] text-red-600 rounded-2xl hover:bg-red-100 transition-colors">
                <PiWineDuotone />
                <span className="text-xs font-semibold">
                  GOURMET
                </span>
              </button>

              <button className="flex flex-col items-center gap-2 px-5 py-3 bg-[#f4eed4] text-red-600 rounded-2xl hover:bg-red-100 transition-colors">
                <IoLocationOutline />
                <span className="text-xs font-semibold">
                  DESSERTS
                </span>
              </button>

              <button className="flex flex-col items-center gap-2 px-5 py-3 bg-[#f4eed4] text-red-600 rounded-2xl hover:bg-red-100 transition-colors">
                <MdOutlineCookie />
                <span className="text-xs font-semibold tracking-wide">
                  COOKIES
                </span>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Bestsellers from Across the Country
          </h2>

          <a
            className="bg-[#B83232] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-900 transition-colors">
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md cursor-pointer hover:scale-105 hover:shadow-xl transition-transform">
              <div className="relative bg-[#d2d4a044] h-44 flex rounded-t-2xl items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img h-36 w-36 object-contain drop-shadow-lg"
                />

              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#86333333] flex items-center justify-center hover:bg-red-300 transition-colors"
              >
                {liked[product.id] ? (
                  <FaHeart className="text-red-700" />
                ) : (
                  <FaRegHeart className="text-white" />
                )}
              </button>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-red-800 font-bold text-sm">
                    {product.price}
                  </span>
                  <span className="text-gray-400 text-xs line-through ml-1">
                    {product.oldPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-600 text-xs">
                    {product.rating}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {product.reviews}
                  </span>
                </div>

                <button className="mt-2 w-full bg-[#B83232] text-white text-xs font-semibold py-1.5 rounded-lg hover:bg-red-900 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* our promise */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Our Promise
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            There's no secret spell — only honest hard work!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-sm text-gray-400 italic mb-5">
                A glimpse of our world — no secrets, only heart!
              </p>

              <div className="grid grid-cols-4 gap-3">
                <div className="flex flex-col items-center gap-2 bg-[#B83232] text-white rounded-xl p-3 hover:bg-red-900 transition-colors">
                  <BsTruck 
                  className="w-7 h-7"/>

                  <span className="text-[10px] font-bold text-center leading-tight">
                    ON-TIME DELIVERY
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                  <PiHandWithdrawLight
                  className="w-7 h-7" />

                  <span className="text-[10px] font-bold text-center leading-tight">
                    500+ DESIGNS
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                  <LuUsers
                  className="w-7 h-7" />

                  <span className="text-[10px] font-bold text-center leading-tight">
                    2 CR+ ORDERS
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                  <PiCoffee
                  className="w-7 h-7" />

                  <span className="text-[10px] font-bold text-center leading-tight">
                    BAKED FRESH
                  </span>
                </div>
              </div>
            </div>

            {/* Magical Ticket */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#ffa70e]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 bg-[#ffa70e] rounded-xl flex items-center justify-center shadow-lg shadow-yellow-900">
                  <BsTicketPerforated
                  className="w-9 h-9 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="font-serif font-bold text-gray-800">
                    THE MAGICAL TICKET
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Add 3 reminders in your account. Win offers worth Rs. 750
                  </p>

                  <button className="mt-3 text-white text-xs font-bold px-5 py-2 bg-red-800 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform">
                    UNLOCK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden shadow-md">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`food-${index}`}
                className="w-full h-48 object-cover hover:scale-105 hover:shadow-xl transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default MainHome;
