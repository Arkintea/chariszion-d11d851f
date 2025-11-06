import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import logoImage from "@/assets/logo-official.png";

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
    <footer className="bg-gradient-to-br from-foreground to-secondary/90 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary blob-1 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent blob-2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Chariszion Smile Foundation"
                className="h-16 w-auto object-contain"
              />
              <div>
                <h2 className="text-xl font-bold text-white">Chariszion Smile Foundation</h2>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Spreading Hope, Sharing Joy, Changing Lives
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", action: () => navigate("/") },
                { label: "About", action: () => navigate("/about") },
                { label: "Programs", action: () => scrollToSection("programs") },
                { label: "Donate", action: () => navigate("/donate") },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80">
              <li>📞 +234 703 924 8284</li>
              <li>✉️ contact@chariszionsmile.org</li>
              <li>📍 Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 space-y-2">
          <p className="font-semibold">Registration Number: 7460348</p>
          <p className="text-sm">Registered as a Non-Governmental Organization in Nigeria</p>
          <p className="flex items-center justify-center gap-2 mt-4">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for children in need
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Chariszion Smile Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
