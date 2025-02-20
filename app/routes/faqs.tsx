import { Link } from "react-router";

export default function FAQ() {
  return (
    <div>
      <div className="bg-amber-50 text-gray-900 font-sans min-h-screen p-8">
        <header className="relative w-full h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/taniti/trail3.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="relative text-6xl font-serif text-white">Frequently Asked Questions</h1>
        </header>

        <section className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">What type of power outlets are used in Taniti?</h2>
            <p className="text-gray-600 mt-2">Power outlets are 120 volts, the same as in the United States.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Are there restrictions on alcohol sales?</h2>
            <p className="text-gray-600 mt-2">Alcohol is not allowed to be served or sold between midnight and 9:00 a.m.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">What is the drinking age on Taniti?</h2>
            <p className="text-gray-600 mt-2">The drinking age is 18, but it is not strictly enforced.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Is English widely spoken?</h2>
            <p className="text-gray-600 mt-2">Many younger Tanitians speak fluent English, but in rural areas, especially among older residents, English is rarely spoken.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">What medical facilities are available?</h2>
            <p className="text-gray-600 mt-2">Taniti has one hospital with multilingual staff and several clinics.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Is crime a concern in Taniti?</h2>
            <p className="text-gray-600 mt-2">Violent crime is very rare, but petty crimes like pickpocketing have increased with tourism.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Are businesses open on holidays?</h2>
            <p className="text-gray-600 mt-2">Taniti has many national holidays, and some tourist attractions and restaurants may be closed on these days.</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold">What currency is used in Taniti?</h2>
            <p className="text-gray-600 mt-2">Taniti uses the U.S. dollar, but euros and yen are also widely accepted. Major credit cards are accepted at many businesses, and banks offer currency exchange services.</p>
          </div>
        </section>
      </div>
      {/* Footer */}
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
    </div>
  );
}
