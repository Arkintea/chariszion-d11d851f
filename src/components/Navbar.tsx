import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-official.png";

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
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28 py-3">
          <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity group">
            <img
              src={logoImage}
              alt="Chariszion Smile Foundation"
              className="h-20 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <h1 className="text-xl font-bold gradient-text leading-tight tracking-wide">
                Chariszion Smile Foundation
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider">
                Spreading Hope, Sharing Joy, Changing Lives
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Link to="/donate">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all duration-300 font-semibold rounded-full px-6">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Link to="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary font-semibold rounded-full">
                <Heart className="w-4 h-4 mr-2" />
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
