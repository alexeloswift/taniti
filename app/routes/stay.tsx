import { Link } from "react-router"; // Import Link
import { useState, useEffect } from "react";

export default function Stay() {

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
            if (location.hash) {
                const element = document.querySelector(location.hash);
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
    }, [images.length, location]);


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
                    <h1 className="text-7xl font-serif">Planning to book a trip?</h1>
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
            <section id="main" className="p-8 bg-green-950 opacity-90">
                <h2 className="text-5xl font-serif py-5 text-amber-50">
                    Stay in Comfort on Taniti
                </h2>
                <p className="text-amber-50 text-2xl px-30 font-light py-5">
                    Whether you're looking for high-end luxury resorts, cozy boutique hotels, or a taste of authentic local cuisine, Taniti has it all.
                    Travel seamlessly with our variety of transportation options and indulge in a stay that suits your style.
                </p>
                <div className="grid grid-cols-3 gap-8 mt-8">
                    {/* Box 1 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/bus1.jpg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Transportation</h3>
                        <p className="text-gray-600 mt-2">
                            Travel around Taniti with ease, from car rentals to guided tours.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "transportation" ? null : "transportation")}
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/resort1.jpg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Luxury Stays</h3>
                        <p className="text-gray-600 mt-2">
                            Enjoy world-class resorts and cozy beachfront villas with stunning views.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "lodging" ? null : "lodging")}
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105">
                        <img
                            src="/assets/taniti/food2.jpg"
                            alt="Beautiful view of Taniti"
                            className="w-250 h-80 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Local Cuisine</h3>
                        <p className="text-gray-600 mt-2">
                            Taste the authentic flavors of Taniti, from fresh seafood to tropical fruits.
                        </p>
                        <button
                            className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
                            onClick={() => setExpandedSection(expandedSection === "food" ? null : "food")}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Expanded Transportation Section */}
            {expandedSection === "transportation" && (
                <section className="p-8">
                    <div>
                        <section >
                            <div className="max-w-3xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg text-gray-900">
                                <h2 className="text-2xl font-bold text-center mb-4">Transportation to Taniti</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">By Air</h3>
                                    <p className="text-gray-700 mt-2">
                                        Taniti is primarily accessible by air. The island’s airport accommodates small jets and
                                        propeller planes, with an expansion underway to support larger aircraft in the near future.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">By Sea</h3>
                                    <p className="text-gray-700 mt-2">
                                        A small cruise ship docks at <strong>Yellow Leaf Bay</strong> once per week, allowing passengers
                                        to explore Taniti for an overnight stay.
                                    </p>
                                </div>
                                <h2 className="text-2xl font-bold text-center mt-6 mb-4">Getting Around Taniti</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">Public Transportation</h3>
                                    <ul className="list-disc list-inside text-gray-700 mt-2">
                                        <li><strong>Public Buses:</strong> Operate within <strong>Taniti City</strong> daily from <strong>5 a.m. to 11 p.m.</strong></li>
                                        <li><strong>Private Buses:</strong> Serve destinations beyond Taniti City.</li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">Other Transportation Options</h3>
                                    <ul className="list-disc list-inside text-gray-700 mt-2">
                                        <li><strong>Taxis:</strong> Readily available in Taniti City.</li>
                                        <li><strong>Car Rentals:</strong> Offered by a <strong>local agency</strong> near the airport.</li>
                                        <li><strong>Bike Rentals:</strong> Available from multiple vendors (<strong>helmets are required by law</strong>).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Walking Accessibility</h3>
                                    <p className="text-gray-700 mt-2">
                                        Taniti City is <strong>flat, pedestrian-friendly, and easy to navigate</strong>.
                                        The <strong>Merriton Landing</strong> area is especially walkable, making it a convenient choice for visitors looking to explore local attractions on foot.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            )}
            {expandedSection === "lodging" && (
                <section className="p-8">
                    <div>
                        <section className="p-8 opacity-90 text-white">
                            <div className="max-w-3xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg text-gray-900">
                                <h2 className="text-2xl font-bold text-center mb-4">Lodging in Taniti</h2>

                                <div>
                                    <h3 className="text-xl font-semibold">Accommodation Options</h3>
                                    <p className="text-gray-700 mt-2">
                                        Taniti offers a diverse range of lodging options, catering to different budgets and preferences:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2">
                                        <li>An <strong>affordable hostel</strong> for budget-conscious travelers.</li>
                                        <li>A <strong>luxurious four-star resort</strong> for those seeking a high-end experience.</li>
                                        <li>Numerous <strong>small, family-owned hotels</strong> with personalized service.</li>
                                        <li>A growing number of <strong>bed and breakfasts</strong> for a cozy, local experience.</li>
                                    </ul>
                                    <p className="text-gray-700 mt-4">
                                        All lodging establishments in Taniti are <strong>strictly regulated and regularly inspected</strong> by the Tanitian government to ensure high standards of quality and safety.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section >
            )}
            {expandedSection === "food" && (
                    <section className="p-8">
                        <div>
                            <section className="p-8 opacity-90 text-white">
                                <div className="max-w-3xl mx-auto bg-neutral-200 p-6 rounded-lg shadow-lg text-gray-900">
                                    <h2 className="text-2xl font-bold text-center mb-4">Dining & Shopping in Taniti</h2>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold">Restaurants</h3>
                                        <p className="text-gray-700 mt-2">
                                            Taniti offers a variety of dining options, with <strong>10 restaurants</strong> catering to different tastes:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>5 restaurants</strong> specialize in fresh local fish and rice dishes.</li>
                                            <li><strong>3 restaurants</strong> serve American-style meals.</li>
                                            <li><strong>2 restaurants</strong> offer Pan-Asian cuisine.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">Grocery Stores</h3>
                                        <p className="text-gray-700 mt-2">
                                            For those who prefer to cook or need everyday essentials, Taniti has several grocery options:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2">
                                            <li><strong>2 supermarkets</strong> with a wide selection of goods.</li>
                                            <li><strong>2 smaller grocery stores</strong> for quick shopping needs.</li>
                                            <li><strong>1 convenience store</strong> open <strong>24/7</strong>.</li>
                                        </ul>
                                    </div>
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
        </div >
    );
}
