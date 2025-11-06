import { UtensilsCrossed, GraduationCap, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: UtensilsCrossed,
      value: "10,000+",
      label: "Meals Served",
      gradient: "from-rose-400 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      image: "https://images.pexels.com/photos/6646966/pexels-photo-6646966.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: GraduationCap,
      value: "100+",
      label: "Students Supported",
      gradient: "from-accent to-cyan-600",
      bgGradient: "from-cyan-50 to-blue-50",
      image: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Families Impacted",
      gradient: "from-primary to-secondary",
      bgGradient: "from-orange-50 to-purple-50",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">Making a real difference in our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative animate-fade-in overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                <div className={`bg-gradient-to-br ${stat.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </h3>
                <p className="text-lg text-white/90 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
