import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".experience-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "ShipGlobal",
      location: "New Delhi",
      period: "June 2024 – Present",
      type: "Full-time",
      description:
        "Building and optimizing customer-facing enterprise applications for customers. Spearheaded migration of legacy portals to modern React-based systems, improving performance, scalability, and user experience.",
      achievements: [
        "Migrated multiple enterprise portals to React, significantly improving UX and efficiency.",
        "Developed complex modules (KYC workflows, Pickup) end-to-end, reducing front-end bugs by 45%",
        "Architected a reusable component library and micro-frontend architecture, boosting scalability by 30%",
        "Optimized performance with lazy loading and route-level code splitting, improving load times by 30%",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "Zustand",
        "Tailwind CSS",
        "Microfrontends",
      ],
    },
    {
      title: "Information Technology Intern",
      company: "NTPC",
      location: "Dadri",
      period: "June 2023 – July 2023",
      type: "Internship",
      description:
        "Engineered a real-time vehicle speed monitoring system and built interactive dashboards, improving traffic data efficiency and safety insights.",
      achievements: [
        "Built real-time Vehicle Speed Monitoring System using MongoDB, improving traffic data handling by 40%",
        "Developed dashboards with advanced filtering (camera-based, violation types), boosting insights efficiency by 60%",
        "Collaborated on system design best practices, aligning with requirements for safety, performance, and usability",
      ],
      technologies: ["MongoDB", "Express.js", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through the world of web development and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-blue to-cyan transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`experience-item opacity-0 relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple to-blue rounded-full transform md:-translate-x-1/2 mt-6 glow-purple"></div>

                  {/* Content */}
                  <div className="flex-1 md:w-1/2 ml-12 md:ml-0">
                    <Card className="glass-card hover:glow-purple transition-all duration-500 group">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold gradient-text mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              {exp.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar size={16} />
                              {exp.period}
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-purple/20 text-purple border-purple/20"
                            >
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-purple rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gradient-to-r from-purple/10 to-blue/10 rounded text-xs font-medium text-foreground border border-purple/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block flex-1 w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div
            className="experience-item opacity-0"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-lg text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple to-blue hover:from-purple-light hover:to-blue-light text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 glow-purple"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
