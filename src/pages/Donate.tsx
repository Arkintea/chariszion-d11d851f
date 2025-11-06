import { CreditCard, Mail, Heart, Sparkles } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 blob-1 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 blob-2 blur-3xl animate-float-delayed" />
      
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
                <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Make a Difference</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your <span className="gradient-text">Generosity</span> Matters
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every contribution helps us continue our mission of spreading hope and changing lives. 
                Together, we can make a real impact in our community! 🌟
              </p>
            </div>

            {/* Bank Transfer Card */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blob-1 blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                        <CreditCard className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">Bank Transfer</h2>
                    </div>
                    <p className="text-white/90 text-lg">Direct support through bank transfer</p>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Account Name</p>
                      <p className="text-2xl font-bold text-foreground">Chariszion Smile Foundation</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-2xl">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Account Number</p>
                      <p className="text-2xl font-bold text-foreground">1234567890</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-2xl">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Bank Name</p>
                      <p className="text-2xl font-bold text-foreground">Your Bank Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* International Donations Card */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blob-2 blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-accent to-cyan-600 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">International Donors</h2>
                    </div>
                    <p className="text-white/90 text-lg">Supporting us from around the world</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-accent/5 to-cyan-500/5 p-6 rounded-2xl">
                      <p className="text-sm text-muted-foreground mb-3 font-medium">Contact us via email</p>
                      <a
                        href="mailto:contact@chariszionsmile.org"
                        className="text-2xl font-bold bg-gradient-to-r from-accent to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      >
                        contact@chariszionsmile.org
                      </a>
                    </div>
                    <p className="text-muted-foreground mt-6 leading-relaxed">
                      Please email us for alternative donation methods and we'll be happy to assist you in 
                      supporting our cause. We appreciate your international support! 🌍
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thank You Card */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 rounded-3xl blob-3" />
              <div className="relative bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-12 text-white shadow-2xl text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Thank You for Your Support!</h3>
                <p className="text-xl leading-relaxed max-w-2xl mx-auto text-white/90">
                  Your donation helps us provide meals, education, and hope to those who need it most. 
                  Together, we're creating lasting change and bringing smiles to children's faces across Nigeria. 
                  Every contribution, big or small, makes a real difference! 💝
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
