import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';
import workspaceImg from '@/assets/workspace.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.about-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern standards."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Transforming ideas into beautiful, intuitive user interfaces that users love."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver projects on time and beyond expectations."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="about-card opacity-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                With over 5+ years of experience in frontend development and full-stack engineering, 
                I specialize in creating responsive, accessible, and performant web applications. 
                My journey started with a curiosity about how things work on the web, and it has 
                evolved into a passion for crafting exceptional digital experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I believe in the power of technology to solve real-world problems and improve 
                people's lives. Whether it's building a complex dashboard, optimizing performance, 
                or creating intuitive user interfaces, I approach every project with enthusiasm 
                and attention to detail.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="about-card opacity-0">
            <div className="relative">
              <img 
                src={workspaceImg} 
                alt="Developer workspace with modern setup and ambient lighting"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-blue/20 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="about-card opacity-0 glass-card hover:glow-purple transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple to-blue group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="about-card opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;