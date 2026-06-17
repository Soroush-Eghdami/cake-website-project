import { PiCoffee, PiHandWithdrawLight } from "react-icons/pi";
import { BsTicketPerforated, BsTruck } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import Gallery from "./Gallery";

const PromiseSection = () => {
  return (
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
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-sm text-gray-400 italic mb-5">
              A glimpse of our world — no secrets, only heart!
            </p>

            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center gap-2 bg-[#B83232] text-white rounded-xl p-3 hover:bg-red-900 transition-colors">
                <BsTruck className="w-7 h-7" />

                <span className="text-[10px] font-bold text-center leading-tight">
                  ON-TIME DELIVERY
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                <PiHandWithdrawLight className="w-7 h-7" />

                <span className="text-[10px] font-bold text-center leading-tight">
                  500+ DESIGNS
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                <LuUsers className="w-7 h-7" />

                <span className="text-[10px] font-bold text-center leading-tight">
                  2 CR+ ORDERS
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 bg-[#f4eed4] rounded-xl p-3 text-red-700 hover:bg-red-100 transition-colors">
                <PiCoffee className="w-7 h-7" />

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
                <BsTicketPerforated className="w-9 h-9 text-white" />
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

          {/* Social */}
          <div className="bg-white rounded-2xl px-5 py-3 shadow-md flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700 mr-auto">
              Follow us on social!
            </p>

            <div className="flex gap-2">
              <a className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-800 hover:text-white transition-colors">
                <FaInstagram />
              </a>

              <a className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-800 hover:text-white transition-colors">
                <FaFacebook />
              </a>

              <a className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-800 hover:text-white transition-colors">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden shadow-md">
          <Gallery />
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-[#B83232] rounded-2xl py-5 px-8 text-center shadow-xl shadow-red-200">
          <p className="text-white font-serif text-lg md:text-xl font-bold">
            Cake Shop – Exceptional Cakes, Unforgettable Memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
