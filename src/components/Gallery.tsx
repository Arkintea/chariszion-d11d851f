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
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Impact in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we're making a difference in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
