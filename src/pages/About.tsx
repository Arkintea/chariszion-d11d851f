import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 blob-2 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground">Where compassion meets action</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Founder Image */}
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blob-1 blur-2xl" />
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                    alt="Olamide Opatunde - Founder & Visionary"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="font-bold text-foreground">Founder</p>
                    </div>
                    <p className="text-2xl font-bold gradient-text">Olamide Opatunde</p>
                  </div>
                </div>
              </div>

              {/* Founder's Story */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "The vision for Chariszion Smile Foundation was born from a deep-seated desire to 
                    make a lasting impact in our community. Having witnessed firsthand the challenges 
                    faced by widows, orphans, and vulnerable children in Nigeria, I knew we had to take action."
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "Our mission goes beyond providing immediate relief - we aim to create sustainable 
                    change through education and continuous support. Every smile we bring to a child's face, 
                    every widow we empower, and every life we touch drives us forward."
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "We believe that by working together, we can create a brighter future for those in need. 
                    Join us in this journey of spreading hope and changing lives, one person at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 rounded-3xl blob-3" />
              <div className="relative bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-12 text-white shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="font-semibold">Our Vision</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Building a Brighter Tomorrow
                  </h2>
                  
                  <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
                    To create a Nigeria where every child has access to education, every family has food on their 
                    table, and every person has hope for a brighter tomorrow. Through compassion, dedication, and 
                    community support, we're building a foundation of lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
