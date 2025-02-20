import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stay", path: "/stay" },
    { name: "Taniti", path: "/taniti" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav
      className={`bg-amber-50 shadow p-8 flex items-center sticky top-0 z-50 rounded-b-2xl transition-opacity duration-300 ${
        scrolled ? "opacity-95" : "opacity-100"
      }`}
    >
      <ul className="flex space-x-32 ml-auto px-15">
        {navItems.map(({ name, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`text-sm/6 font-semibold ${
                location.pathname === path ? "text-orange-500" : "text-gray-900"
              } hover:text-orange-400 transition`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
