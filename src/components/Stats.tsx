import { UtensilsCrossed, GraduationCap, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: UtensilsCrossed,
      value: "10,000+",
      label: "Meals Served",
      gradient: "from-rose-400 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
    },
    {
      icon: GraduationCap,
      value: "100+",
      label: "Students Supported",
      gradient: "from-accent to-cyan-600",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Families Impacted",
      gradient: "from-primary to-secondary",
      bgGradient: "from-orange-50 to-purple-50",
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
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`} />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-border">
                <div className={`bg-gradient-to-br ${stat.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
