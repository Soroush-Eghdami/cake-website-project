import searchIcon from "../../assets/NavbarIcon/searchIcon.png";
import boxIcon from "../../assets/NavbarIcon/boxIcon.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-red-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          <a
            href="#"
            className="text-2xl font-black tracking-tight text-red-700"
          >
            Dakingo
          </a>

          <div className="hidden md:flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 w-72 border border-red-100 focus-within:border-red-700 transition-colors">
            <img src={searchIcon} alt="search"
                className="w-4 h-4 text-[#B83232] shrink-0"
                />

            <input
              type="text"
              placeholder="Search cakes, desserts..."
              className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">

            <button className="hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-red-700 transition-colors">

              Login / Signup
            </button>

            <button className="relative p-2 rounded-full hover:bg-red-50 transition-colors group">
                <img src={boxIcon} alt="box" 
                className="w-5 h-5 text-gray-700 group-hover:text-red-700 transition-colors"/>

              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#B83232] text-white text-[10px] font-bold">
                4
              </span>
            </button>

            <a
              href="#"
              className="bg-[#B83232] hover:bg-red-900 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-md"
            >
              ORDER NOW
            </a>

          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 pb-2 text-sm font-medium text-gray-600">
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
              href="#"
              className="
                relative
                hover:text-[#B83232]
                transition-colors
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-[#B83232]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}

        </nav>
      </div>
    </header>
  );
}