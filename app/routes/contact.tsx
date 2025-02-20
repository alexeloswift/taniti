import { Link } from "react-router";

export default function ContactForm() {
  return (
    <div>
      <div className="flex flex-col items-center justify-items-start min-h-screen mt-10">
        <h1 className="text-4xl font-bold py-10">Contact Us</h1>
        <p className="text-lg text-gray-500 text-center">We typically respond within four hours.<br /> Please don’t hesitate to reach out with any questions or concerns.</p>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-96">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Optional" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-lg h-32" placeholder="Let us know how we can help..."></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg">Submit</button>
          </form>
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
