import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-children.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Children smiling" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            Spreading Hope,
            <br />
            <span className="gradient-text">Sharing Joy,</span>
            <br />
            Changing Lives
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            We provide hot meals, educational support, and hope to those in need across Nigeria. 
            Join us in making a difference in the lives of widows, orphans, and vulnerable children.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate("/donate")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              onClick={() => navigate("/about")}
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
