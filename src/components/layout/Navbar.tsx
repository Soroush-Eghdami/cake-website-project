import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-red-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <a
            className="text-2xl font-black tracking-tight text-red-700"
            style={{ fontFamily: "Playfair Display" }}
          >
            CAKE SHOP
          </a>

          <div className="group md:flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 w-72 border border-red-100 focus-within:border-red-700 transition-colors">
            <IoSearch 
              className="w-5 h-5 text-black group-focus-within:text-red-800 transition-colors"/>
            <input
              type="text"
              placeholder="Search cakes, desserts..."
              className="text-sm  outline-none w-full placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              className="group relative hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-red-700 transition-colors
                            after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#B83232] after:transition-all after:duration-300 hover:after:w-full"
            >
              <FiUser 
                className="w-5 h-5"/>
              <span>Login / Signup</span>
            </button>

            <button className="relative p-2 rounded-full hover:bg-red-50 transition-colors group cursor-pointer">
              <IoBagHandleOutline 
                  className="w-7 h-7"/>
              <span className="absolute top-1 right-0 flex items-center justify-center w-4 h-4 rounded-full bg-[#B83232] text-white text-[10px] font-bold">
                4
              </span>
            </button>

            <a className="bg-[#B83232] hover:bg-red-900 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-md cursor-pointer">
              ORDER NOW
            </a>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 pb-2 text-sm font-medium text-gray-600 cursor-pointer">
          {[
            "Cakes",
            "Theme Cakes",
            "Desserts",
            "Birthday",
            "Hampers",
            "Anniversary",
            "Occasions",
          ].map((item) => (
            <a
              key={item}
              className="footer-link"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
