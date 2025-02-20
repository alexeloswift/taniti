import { Link } from "react-router"; // Import Link
import { useState, useEffect } from "react";

export default function Home() {
    const images = [
        "/assets/taniti/resort4.jpg",
        "/assets/taniti/beachshop.jpg",
        "/assets/taniti/resort1.jpg",
        "/assets/taniti/volcano1.jpg",
        "/assets/taniti/food3.jpg",
        "/assets/taniti/city1.jpg",
        "/assets/taniti/beach1.jpg",
        "/assets/taniti/food2.jpg",
        "/assets/taniti/pub.jpg",
        "/assets/taniti/zipline.jpg",
        "/assets/taniti/trail2.jpg",
        "/assets/taniti/beach8.jpg",
    ];

    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    useEffect(() => {
        // Carousel logic
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 2 >= images.length ? 0 : prevIndex + 2
            );
        }, 3000); // Each image pair stays for 3 seconds

        // Smooth scrolling logic
        const scrollToHash = () => {
            if (typeof window !== "undefined" && window.location.hash) {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                }
            }
        };

        scrollToHash(); // Call on mount

        window.addEventListener("hashchange", scrollToHash);

        return () => {
            clearInterval(interval);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, [images.length]); // Remove `location` from dependencies


  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  interface ToggleSection {
    (section: string): void;
  }

  const toggleSection: ToggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (

    <div className="bg-amber-50 text-gray-900 font-sans min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-125">
        {/* Background Image */}
        <img
          src="/assets/taniti/island1.jpg"
          alt="Beautiful view of Taniti"
          className="absolute top-0 left-0 w-full h-125 object-cover opacity-80"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-stone-100 text-center">
          <h1 className="text-7xl font-serif">The Island of Taniti</h1>
          <p className="text-3xl font-bold">Discover the beauty of Taniti through memorable experiences</p>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-stone-100 text-center pb-20">
          <Link to="/taniti">
            <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
              Explore Taniti
            </button>
          </Link>
        </div>
      </header>

      {/* Carousel */}
      <section className="relative flex justify-center space-x-4 p-8">
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Beautiful view of Taniti"
            className="w-250 h-80 object-cover rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(image)}
          />
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-11"
          onClick={closeModal}
        >
          <img
            src={modalImage || ""}
            alt="Enlarged view"
            className="w-auto h-auto max-w-4xl max-h-[90vh] rounded-2xl"
          />
        </div>
      )}


      {/* Content Sections */}
      <section id="exploreTaniti" className="p-8 bg-green-950 opacity-90">
        <h2 className="text-5xl font-serif py-5 text-amber-50">
          Welcome to the Island of Taniti
        </h2>
        <p className="text-amber-50 text-2xl px-30 font-light py-5">
          The Island of Taniti is a small, tropical paradise offering a wide array of experiences for every type of traveler. From delectable local cuisine to luxurious accommodations, and from pristine beaches to the vibrant Merriton Landing, Taniti has something for everyone. Explore the island's rich culture and immerse yourself in the warm hospitality of the locals. Let Taniti be your next unforgettable adventure.
        </p>
        {/* Content Sections */}
        <section className="p-8 bg-green-950 opacity-90">
          <div className="grid grid-cols-3 gap-8 mt-8">
            {/* Box 1 */}
            <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src="/assets/taniti/island2.jpg"
                alt="Beautiful view of Taniti"
                className="w-250 h-80 object-cover rounded-2xl"
              />

              <h3 className="text-xl font-semibold text-gray-900">Explore Taniti</h3>
              <p className="text-gray-600 mt-2">
                Discover breathtaking waterfalls, lush rainforests, and scenic hiking trails.
              </p>
              <Link to="/taniti">
                <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
                  Learn More
                </button>
              </Link>

            </div>

            {/* Box 2 */}
            <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src="/assets/taniti/resort1.jpg"
                alt="Beautiful view of Taniti"
                className="w-250 h-80 object-cover rounded-2xl"
              />
              <h3 className="text-xl font-semibold text-gray-900">Beautiful Stays</h3>
              <p className="text-gray-600 mt-2">
                Enjoy world-class resorts and cozy beachfront villas with stunning views.
              </p>
              <Link to="/stay">
                <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src="/assets/taniti/trail1.jpg"
                alt="Beautiful view of Taniti"
                className="w-250 h-80 object-cover rounded-2xl"
              />
              <h3 className="text-xl font-semibold text-gray-900">FAQs</h3>
              <p className="text-gray-600 mt-2">
                View our frequently asked questions to help plan your trip to Taniti.
              </p>
              <Link to="/faqs">
                <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold">Taniti Adventures Await</h2>
        <p className="text-gray-600">Explore what Taniti has to offer</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { title: "Explore Beaches", desc: "Relax on Taniti’s pristine shores.", img: "/assets/taniti/beach6.jpg", link: "/underConstruction" },
            { title: "Adventure Trails", desc: "Hike through lush tropical forests.", img: "/assets/taniti/trail1.jpg", link: "/underConstruction" },
            { title: "Merriton Landing", desc: "A Growing Destination for Entertainment and Adventure", img: "/assets/taniti/city1.jpg", link: "/underConstruction" },
            { title: "Local Cuisine", desc: "Taste fresh seafood and tropical dishes.", img: "/assets/taniti/food1.jpg", link: "/underConstruction" },
            { title: "Diving, Snorkeling and more", desc: "Explore the vibrant underwater world.", img: "/assets/taniti/snorkeling.jpg", link: "/underConstruction" },
            { title: "Cultural Sites", desc: "Discover Taniti’s rich history.", img: "/assets/taniti/volcano1.jpg", link: "/underConstruction" }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="relative border rounded bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden block"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-70 object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
