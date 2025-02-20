import { Link } from "react-router"; // Import Link
import { useState, useEffect } from "react";

export default function Taniti() {
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


    interface Image {
        src: string;
        alt: string;
    }

    interface SectionProps {
        section: string;
    }

    const openModal = (image: string): void => {
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
                    <h1 className="text-7xl font-serif">Discover Taniti</h1>
                    <p className="text-3xl font-bold">Discover all we have to offer</p>

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
            <section id="taniti" className="p-8 bg-green-900 opacity-90">
                <h2 className="text-5xl font-serif py-5 text-amber-50">
                    Explore the Wonders of Taniti
                </h2>
                <p className="text-amber-50 text-2xl px-30 font-light py-5">
                    Discover Taniti's breathtaking landscapes, vibrant entertainment, and must-see landmarks.
                    Whether you're exploring scenic trails, enjoying lively cultural performances, or navigating the island with our interactive map,
                    Taniti offers unforgettable experiences for every traveler.
                </p>

                <div className="grid grid-cols-3 gap-8 mt-8">
                    {/* Box 1 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/map.jpeg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">A Map of Taniti</h3>
                        <p className="text-gray-600 mt-2">
                            Pick and choose what activities you want to do in Taniti.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "map" ? null : "map")}
                        >
                            View
                        </button>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/volcano1.jpg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Sightseeing</h3>
                        <p className="text-gray-600 mt-2">
                            Enjoy world-class resorts and cozy beachfront villas with stunning views.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "sightseeing" ? null : "sightseeing")}
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/club.jpg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Entertainment</h3>
                        <p className="text-gray-600 mt-2">
                            Taste the authentic flavors of Taniti, from fresh seafood to tropical fruits.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "entertainment" ? null : "entertainment")}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Expanded Transportation Section */}
            {expandedSection === "map" && (
                <section className="p-8">
                    <div>

                        <section className="p-8 opacity-90">
                            <div className="max-w-4xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-900 text-center">Taniti Map</h2>
                                <p className="text-gray-700 mt-2 text-center">
                                    Explore Taniti’s breathtaking landscapes, from its white sandy beaches to its lush rainforests and volcanic wonders.
                                </p>

                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-gray-900 text-center">An aerial view of what we have to offer</h3>
                                    <img
                                        src="/assets/taniti/map.jpeg"
                                        alt="Taniti City and Yellow Leaf Bay"
                                        className="w-full h-full object-cover rounded-lg shadow-md mt-2"
                                    />
                                </div>

                                <p className="text-gray-700 mt-4 text-center">
                                    Whether by land or sea, Taniti offers a variety of unforgettable sightseeing experiences.
                                </p>
                                <p className="text-gray-700 mt-4 text-center">(Baxter, 2010)</p>
                            </div>
                        </section>
                    </div>
                </section>
            )}

            {expandedSection === "sightseeing" && (
                <section className="p-8">
                    <div>

                        <section className="p-8 opacity-90">
                            <div className="max-w-4xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-900 text-center">Sightseeing in Taniti</h2>
                                <p className="text-gray-700 mt-2 text-center">
                                    Taniti offers breathtaking scenery, from its pristine beaches to its lush rainforests and volcanic landscapes.
                                </p>

                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-gray-900">Taniti City & Yellow Leaf Bay</h3>
                                    <p className="text-gray-700 mt-2">
                                        Most visitors spend their time in <strong>Taniti City</strong>, known for its distinctive native architecture and vibrant local culture. The city is situated along <strong>Yellow Leaf Bay</strong>, where white sandy beaches provide the perfect setting for relaxation and waterfront activities.
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-gray-900">Island Tours & Excursions</h3>
                                    <ul className="list-disc list-inside text-gray-700 mt-2">
                                        <li><strong>Boat Tours</strong> – Experience the beauty of Taniti’s coastline from the water.</li>
                                        <li><strong>Guided Bus Tours</strong> – Discover key landmarks and cultural highlights.</li>
                                        <li><strong>Rainforest Hikes</strong> – Trek through lush greenery and spot exotic wildlife.</li>
                                        <li><strong>Volcano Exploration</strong> – Visit Taniti’s active volcano for a one-of-a-kind adventure.</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700 mt-4 text-center">
                                    Whether by land or sea, Taniti offers a variety of ways to take in its stunning natural beauty.
                                </p>
                            </div>
                        </section>

                    </div>
                </section >
            )
            }
            {
                expandedSection === "entertainment" && (
                    <section className="p-8">
                        <div>

                            <section className="p-8 opacity-90">
                                <div className="max-w-4xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold text-gray-900 text-center">Entertainment in Taniti</h2>
                                    <p className="text-gray-700 mt-2 text-center">
                                        Whether seeking adventure, cultural enrichment, or vibrant nightlife, visitors will find an array of experiences to enjoy.
                                    </p>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-gray-900">Outdoor Adventures</h3>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>Volcano Exploration</strong> – Guided hikes and tours to Taniti’s active volcano.</li>
                                            <li><strong>Rainforest Zip-Lining</strong> – Glide through the jungle canopy.</li>
                                            <li><strong>Chartered Fishing Excursions</strong> – Deep-sea fishing with experienced guides.</li>
                                            <li><strong>Snorkeling & Diving</strong> – Explore vibrant marine life and coral reefs.</li>
                                            <li><strong>Helicopter Tours</strong> – Take in breathtaking aerial views.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-gray-900">Cultural & Recreational Activities</h3>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>Taniti History Museum</strong> – Learn about the island’s rich heritage.</li>
                                            <li><strong>Art Galleries</strong> – Exhibitions featuring local and international artists.</li>
                                            <li><strong>Bowling & Arcades</strong> – Enjoy family-friendly entertainment.</li>
                                            <li><strong>Cinema</strong> – Watch the latest films in a modern theater.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-gray-900">Nightlife & Social Experiences</h3>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>Microbrewery & Pubs</strong> – Sample locally crafted beers.</li>
                                            <li><strong>Dance Club</strong> – Experience Taniti’s lively nightlife.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-gray-900">Coming Soon</h3>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>Golf Course</strong> – A new nine-hole course set to open next year.</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 mt-4 text-center">
                                        Many of these attractions are located in <strong>Merriton Landing</strong>, a rapidly developing district on the north side of Yellow Leaf Bay.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                )
            }
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
        </div >
    );
}


