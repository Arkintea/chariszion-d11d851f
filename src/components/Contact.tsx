import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+234 703 924 8284",
      gradient: "from-primary to-orange-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@chariszionsmile.org",
      gradient: "from-accent to-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nigeria",
      gradient: "from-secondary to-purple-700",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 blob-1 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${info.gradient} w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mt-8 border border-primary/20">
              <h3 className="font-bold text-xl mb-4 gradient-text">Join Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every message, every conversation, and every connection brings us closer to changing more lives. 
                Reach out today and be part of something beautiful! 🌟
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="rounded-xl border-2 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="rounded-xl border-2 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how you'd like to help..."
                    rows={5}
                    required
                    className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all duration-300 font-bold text-lg py-6 rounded-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
