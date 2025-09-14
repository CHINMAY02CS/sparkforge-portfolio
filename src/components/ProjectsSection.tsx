import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import socialImg from '@/assets/project-social.jpg';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence dashboard with real-time data visualization, custom reporting, and team collaboration features. Integrated with multiple data sources.",
      image: dashboardImg,
      technologies: ["Next.js", "TypeScript", "D3.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Modern social platform with real-time messaging, content sharing, and advanced privacy controls. Features include story sharing, voice messages, and video calls.",
      image: socialImg,
      technologies: ["React Native", "Socket.io", "Firebase", "WebRTC", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

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

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const FeaturedProject = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <Card className="project-card opacity-0 group overflow-hidden glass-card hover:glow-purple transition-all duration-500">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <Button size="sm" className="bg-purple hover:bg-purple-light">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </Button>
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-background">
              <Github size={16} className="mr-2" />
              Code
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold gradient-text mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple/20 to-blue/20 rounded-full text-xs font-medium text-foreground border border-purple/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Slider/Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20" />
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple/20 to-blue/20 rounded-full text-sm font-medium text-foreground border border-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-purple to-blue hover:from-purple-light hover:to-blue-light">
                    <ExternalLink size={16} className="mr-2" />
                    View Live
                  </Button>
                  <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-purple scale-110' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;