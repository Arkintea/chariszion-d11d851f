import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mediaItems = [
  {
    type: "image",
    src: "https://i.imgur.com/Ox0XI5U.jpeg",
    caption: "Empowering Communities Through Food Distribution",
  },
  {
    type: "video",
    src: "https://i.imgur.com/7CNsBWI.mp4",
    caption: "Our Recent Outreach Activities",
  },
  {
    type: "image",
    src: "https://i.imgur.com/0weezWF.jpeg",
    caption: "Supporting Education and Growth",
  },
  {
    type: "video",
    src: "https://i.imgur.com/WaFOqsJ.mp4",
    caption: "Bringing Smiles to Families",
  },
  {
    type: "image",
    src: "https://i.imgur.com/hudn8UQ.jpeg",
    caption: "Making a Difference Together",
  },
];

const MediaSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentItem = mediaItems[currentIndex];
    
    // Auto-advance timer for images (5 seconds)
    if (currentItem.type === "image") {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Play current video if it's a video
    const currentItem = mediaItems[currentIndex];
    if (currentItem.type === "video" && videoRefs.current[currentIndex]) {
      const video = videoRefs.current[currentIndex];
      if (video) {
        video.play().catch(err => console.log("Video play failed:", err));
      }
    }
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section id="impact-media" className="py-20 bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Impact in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Witness the lives we've touched through our outreach programs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
            {/* Main Media Container */}
            <div className="relative aspect-[16/10] w-full bg-black">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      loading={index <= 1 ? "eager" : "lazy"}
                    />
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.src}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              ))}
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 z-20">
                <p className="text-white text-xl font-semibold animate-fade-in">
                  {mediaItems[currentIndex].caption}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dot Indicators */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-white w-8 h-3"
                      : "bg-white/50 hover:bg-white/75 w-3 h-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSlideshow;
