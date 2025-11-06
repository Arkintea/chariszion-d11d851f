import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    type: "image",
    src: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
    caption: "Monthly Food Distribution Program",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    caption: "Educational Support Initiative",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg",
    caption: "Community Outreach Events",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    caption: "Family Support Program",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg",
    caption: "Widow Empowerment Initiative",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/8613170/pexels-photo-8613170.jpeg",
    caption: "Youth Development Programs",
  },
];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Witness the lives we've touched through our outreach programs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
            {/* Main Image */}
            <div className="relative aspect-[16/10] w-full">
              <img
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  {galleryItems[currentIndex].caption}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dot Indicators */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-6 gap-2 mt-4">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
