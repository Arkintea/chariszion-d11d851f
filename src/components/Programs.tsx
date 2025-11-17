import { UtensilsCrossed, GraduationCap, Heart, Sparkles, Home, HandHeart } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: UtensilsCrossed,
      title: "Monthly Food Outreach",
      description:
        "Providing hot, nutritious meals to those in need through our regular community outreach programs.",
      gradient: "from-primary to-orange-600",
      bgBlob: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      title: "Educational Support",
      description:
        "Sponsoring school fees and educational materials for students to ensure continuous learning.",
      gradient: "from-accent to-blue-600",
      bgBlob: "bg-accent/10",
    },
    {
      icon: Heart,
      title: "Community Care",
      description:
        "Supporting widows, orphans, and vulnerable members of our community with essential resources.",
      gradient: "from-secondary to-purple-700",
      bgBlob: "bg-secondary/10",
    },
    {
      icon: Sparkles,
      title: "Youth Development Programs",
      description:
        "Empowering young people with skills training, mentorship, and opportunities to become future leaders in their communities.",
      gradient: "from-accent to-teal-600",
      bgBlob: "bg-accent/10",
    },
    {
      icon: Home,
      title: "Family Support Program",
      description:
        "Providing comprehensive support to families in crisis, including food assistance, shelter support, and essential household resources.",
      gradient: "from-secondary to-amber-600",
      bgBlob: "bg-secondary/10",
    },
    {
      icon: HandHeart,
      title: "Widow Empowerment Initiative",
      description:
        "Supporting widows through financial assistance, vocational training, and business startup grants to help them become self-sufficient.",
      gradient: "from-purple-500 to-pink-600",
      bgBlob: "bg-purple-50",
    },
  ];

  return (
    <section id="programs" className="py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 blob-2 blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 blob-1 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Help</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six pillars of support creating lasting change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Blob background */}
              <div className={`absolute inset-0 ${program.bgBlob} blob-${(index % 3) + 1} transform group-hover:scale-110 transition-transform duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-primary/20">
                <div className={`bg-gradient-to-br ${program.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
