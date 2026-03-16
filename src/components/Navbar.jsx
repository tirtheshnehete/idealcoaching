import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  /* Scroll effect */
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-black/90 shadow-xl backdrop-blur-lg py-3"
        : "bg-black/60 backdrop-blur-md py-5"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-2 sm:gap-3">

          <img
            src="/logo.png"
            alt="Ideal Coaching Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
          />

          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Ideal Coaching Classes
          </span>

        </a>


        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#courses" className="hover:text-yellow-400 transition">
            Courses
          </a>

          <a href="#results" className="hover:text-yellow-400 transition">
            Results
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

          <a
            href="#contact"
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Enroll
          </a>

        </div>


        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black/95 backdrop-blur-lg flex flex-col text-center py-8 space-y-6 text-gray-300 font-medium">

          <a onClick={closeMenu} href="#home" className="hover:text-yellow-400">
            Home
          </a>

          <a onClick={closeMenu} href="#courses" className="hover:text-yellow-400">
            Courses
          </a>

          <a onClick={closeMenu} href="#results" className="hover:text-yellow-400">
            Results
          </a>

          <a onClick={closeMenu} href="#about" className="hover:text-yellow-400">
            About
          </a>

          <a onClick={closeMenu} href="#contact" className="hover:text-yellow-400">
            Contact
          </a>

          <a
            onClick={closeMenu}
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-semibold w-fit mx-auto"
          >
            Enroll Now
          </a>

        </div>

      )}

    </nav>

  );
}

export default Navbar;