import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Animated blob backgrounds */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blob-1 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 blob-2 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 blob-3 blur-3xl animate-float" />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Making Dreams Come True</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Spreading Hope,</span>
              <br />
              <span className="text-foreground">Sharing Joy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We provide hot meals, educational support, and hope to those in need across Nigeria. 
              Join us in making a difference in the lives of widows, orphans, and vulnerable children.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => navigate("/donate")}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white font-bold text-lg px-8 py-7 rounded-full"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button
                onClick={() => navigate("/about")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-7 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blob-1 blur-2xl" />
            <img
              src="https://raw.githubusercontent.com/Arkintea/chariszionsmile/refs/heads/main/hero.png"
              alt="Children smiling"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-4xl font-bold gradient-text">10,000+</p>
              <p className="text-sm text-muted-foreground font-medium">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
