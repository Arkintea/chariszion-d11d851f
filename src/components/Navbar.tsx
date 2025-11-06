import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-primary-600 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src="https://github.com/Arkintea/chariszionsmile/blob/main/white.png?raw=true"
              alt="Chariszion Smile Foundation"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold">Chariszion Smile Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-secondary-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary-400 transition-colors font-medium">
              About
            </Link>
            <button
              onClick={() => scrollToSection("programs")}
              className="hover:text-secondary-400 transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-secondary-400 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-secondary-400 transition-colors font-medium"
            >
              Contact
            </button>
            <Link to="/donate">
              <Button className="bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold shadow-lg">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              to="/"
              className="block hover:text-secondary-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-secondary-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left hover:text-secondary-400 transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left hover:text-secondary-400 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-secondary-400 transition-colors font-medium"
            >
              Contact
            </button>
            <Link to="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold">
                Donate Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
