import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/Arkintea/chariszionsmile/refs/heads/main/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Spreading Hope, Sharing Joy, Changing Lives
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          We provide hot meals, educational support, and hope to those in need across Nigeria. 
          Join us in making a difference in the lives of widows, orphans, and vulnerable children.
        </p>
        <Button
          onClick={() => navigate("/donate")}
          size="lg"
          className="bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-secondary-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Donate Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
