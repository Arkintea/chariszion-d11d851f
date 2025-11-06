const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Our Story
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                  alt="Olamide Opatunde - Founder & Visionary"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-800">Olamide Opatunde</h3>
                  <p className="text-primary-600 font-semibold">Founder & Visionary</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "The vision for Chariszion Smile Foundation was born from a deep-seated desire to 
                    make a lasting impact in our community. Having witnessed firsthand the challenges 
                    faced by widows, orphans, and vulnerable children in Nigeria, I knew we had to take action."
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "Our mission goes beyond providing immediate relief - we aim to create sustainable 
                    change through education and continuous support. Every smile we bring to a child's face, 
                    every widow we empower, and every life we touch drives us forward."
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "We believe that by working together, we can create a brighter future for those in need. 
                    Join us in this journey of spreading hope and changing lives, one person at a time."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-xl leading-relaxed text-center">
                To create a Nigeria where every child has access to education, every family has food on their 
                table, and every person has hope for a brighter tomorrow. Through compassion, dedication, and 
                community support, we're building a foundation of lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
