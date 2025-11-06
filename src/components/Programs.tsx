import { UtensilsCrossed, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      icon: UtensilsCrossed,
      title: "Monthly Food Outreach",
      description:
        "Providing hot, nutritious meals to those in need through our regular community outreach programs.",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: GraduationCap,
      title: "Educational Support",
      description:
        "Sponsoring school fees and educational materials for students to ensure continuous learning.",
      color: "bg-accent-100 text-accent-600",
    },
    {
      icon: Heart,
      title: "Community Care",
      description:
        "Supporting widows, orphans, and vulnerable members of our community with essential resources.",
      color: "bg-rose-100 text-rose-600",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making a lasting impact through targeted initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-500"
            >
              <CardHeader>
                <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <program.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
