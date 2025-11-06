const Gallery = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
      caption: "Monthly Food Distribution Program",
    },
    {
      url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      caption: "Educational Support Initiative",
    },
    {
      url: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg",
      caption: "Community Outreach Events",
    },
    {
      url: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
      caption: "Family Support Program",
    },
    {
      url: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg",
      caption: "Widow Empowerment Initiative",
    },
    {
      url: "https://images.pexels.com/photos/8613170/pexels-photo-8613170.jpeg",
      caption: "Youth Development Programs",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Impact</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Witness the joy and transformation in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg drop-shadow-lg">
                  {image.caption}
                </p>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
