import { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: "React/Next.js", level: 95, color: "from-blue to-cyan" },
    { name: "TypeScript", level: 90, color: "from-purple to-blue" },
    { name: "JavaScript (ES6+)", level: 95, color: "from-cyan to-purple" },
    { name: "HTML5 & CSS3", level: 98, color: "from-blue to-purple" },
    { name: "Tailwind CSS", level: 92, color: "from-purple to-cyan" },
    { name: "Vue.js", level: 80, color: "from-cyan to-blue" }
  ];

  const backendSkills = [
    { name: "Node.js", level: 88, color: "from-purple to-blue" },
    { name: "Express.js", level: 85, color: "from-blue to-cyan" },
    { name: "Python/Django", level: 75, color: "from-cyan to-purple" },
    { name: "PostgreSQL", level: 82, color: "from-purple to-blue" },
    { name: "MongoDB", level: 80, color: "from-blue to-cyan" },
    { name: "REST APIs", level: 90, color: "from-cyan to-purple" }
  ];

  const tools = [
    { name: "Git & GitHub", level: 95, color: "from-purple to-blue" },
    { name: "Docker", level: 75, color: "from-blue to-cyan" },
    { name: "AWS/Vercel", level: 80, color: "from-cyan to-purple" },
    { name: "Figma", level: 85, color: "from-purple to-cyan" },
    { name: "Jest/Testing", level: 85, color: "from-blue to-purple" },
    { name: "Webpack/Vite", level: 88, color: "from-cyan to-blue" }
  ];

  const SkillCard = ({ title, skills, delay = 0 }: { title: string; skills: typeof frontendSkills; delay?: number }) => (
    <Card className="glass-card hover:glow-purple transition-all duration-500 animate-fadeInUp" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold gradient-text mb-6 text-center">
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="relative">
                <Progress 
                  value={isVisible ? skill.level : 0} 
                  className="h-2 bg-muted"
                />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${delay + index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} delay={0} />
          <SkillCard title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillCard title="Tools & Technologies" skills={tools} delay={0.4} />
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold gradient-text mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL", "Redux", "Zustand", "Socket.io", "Prisma", "Supabase", 
              "Firebase", "Stripe", "Three.js", "Framer Motion", "Cypress", "Playwright",
              "Microservices", "CI/CD", "Agile/Scrum", "WebRTC"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-purple/20 to-blue/20 backdrop-blur-sm border border-purple/20 rounded-full text-sm font-medium text-foreground hover:from-purple/30 hover:to-blue/30 transition-all duration-300 cursor-default animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;