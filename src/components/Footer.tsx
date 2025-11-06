import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://github.com/Arkintea/chariszionsmile/blob/main/white.png?raw=true"
                alt="Chariszion Smile Foundation"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">Chariszion Smile Foundation</span>
            </div>
            <p className="text-gray-300">
              Spreading hope, sharing joy, and changing lives across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/donate")}
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: +234 703 924 8284</li>
              <li>Email: contact@chariszionsmile.org</li>
              <li>Location: Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8 text-center text-gray-300">
          <p className="mb-2">Registration Number: 7460348</p>
          <p>Registered as a Non-Governmental Organization in Nigeria</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Chariszion Smile Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
