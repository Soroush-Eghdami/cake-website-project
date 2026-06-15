import { LuMessageSquareMore } from "react-icons/lu";


function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-red-200">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-black text-red-700 mb-3">
                CAKE SHOP
              </h2>

              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Locate Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Media
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Know Us
              </h4>

              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Need Help
              </h4>

              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Cancellation & Refund
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                More Info
              </h4>

              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Terms And Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Custom Emblems
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                More Info
              </h4>

              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Coupons & Offers
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-700 transition-colors">
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-red-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="border border-red-300 rounded-full px-5 py-2.5 text-sm outline-none focus:border-red-800 transition-colors flex-1 md:w-64"
              />

              <button className="bg-red-800 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-red-900 transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-xs text-gray-400">
              © 2024 CAKE SHOP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-red-800 text-white shadow-xl shadow-red-300/40 transition-all hover:bg-red-800 hover:scale-110 active:scale-95">
        <LuMessageSquareMore 
            className="w-6 h-6 "/>
      </button>
    </>
  );
};

export default Footer;