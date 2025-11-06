import { UtensilsCrossed, GraduationCap, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: UtensilsCrossed,
      value: "10,000+",
      label: "Meals Served",
      color: "text-rose-500",
    },
    {
      icon: GraduationCap,
      value: "100+",
      label: "Students Supported",
      color: "text-accent-500",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Families Impacted",
      color: "text-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <stat.icon className={`${stat.color} w-16 h-16 mx-auto mb-4`} />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
