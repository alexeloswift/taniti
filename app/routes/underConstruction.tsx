
import { Link } from "react-router";

export default function UnderConstruction() {
  return (
    <div>
      <div className="bg-amber-50 text-gray-900 font-sans min-h-screen flex flex-col justify-center items-center text-center p-6">
        {/* Background */}
        <div className="relative w-full h-screen flex justify-center items-center">
          {/* Background Image */}
          <img
            src="/assets/taniti/trail1.jpg"
            alt="Under Construction"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          />

          {/* Overlay Content */}
          <div className="relative z-10 bg-black/60 text-white p-10 rounded-2xl shadow-xl max-w-2xl">
            <h1 className="text-5xl font-serif">Coming Soon</h1>
            <p className="text-xl font-light mt-4">
              We're working on something amazing. Stay tuned for updates!
            </p>

            <div className="flex justify-center space-x-4 mt-6">
              <Link to="/">
                <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 border-2 border-amber-50">
                  Home
                </button>
              </Link>

              <Link to="/contact">
                <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 border-2 border-gray-500">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
 {/* Footer */}
 <div>
      <footer className="bg-gray-200 p-8 text-sm grid grid-cols-5 gap-4">
        <ul>
          <li className="font-semibold">Home</li>
          <li>
            <Link to="/#exploreTaniti" className="text-blue-600 hover:underline">Explore Taniti</Link>
          </li>
          <li>
            <Link to="/#exploreTaniti" className="text-blue-600 hover:underline">Beautiful Stays</Link>
          </li>
          <li>
            <Link to="/#exploreTaniti" className="text-blue-600 hover:underline">FAQs</Link>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">Stay</li>
          <li>
            <Link to="/stay#main" className="text-blue-600 hover:underline">Transportation</Link>
          </li>
          <li>
            <Link to="/stay#main" className="text-blue-600 hover:underline">Luxury Stays</Link>
          </li>
          <li>
            <Link to="/stay#main" className="text-blue-600 hover:underline">Local Cuisine</Link>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">Taniti</li>
          <li>
            <Link to="/taniti#taniti" className="text-blue-600 hover:underline">A Map of Taniti</Link>
          </li>
          <li>
            <Link to="/taniti#taniti" className="text-blue-600 hover:underline">Sightseeing</Link>
          </li>
          <li>
            <Link to="/taniti#taniti" className="text-blue-600 hover:underline">Entertainment</Link>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">
            <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">
            <Link to="/faqs" className="text-blue-600 hover:underline">FAQs</Link>
          </li>
        </ul>
      </footer>
      <p className="font-light text-sm text-center"> Unsplash. (n.d.). Home [Photographs]. Unsplash. https://unsplash.com </p>
      </div>
    </div>
  );
}
