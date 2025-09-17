import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import projectResume from "@/assets/project-resume.png";
import taskEaseProject from "@/assets/project-task.png";
import franchiseProject from "@/assets/project-franchise.png";
import dashboardImg from "@/assets/project-dashboard.jpg";
import socialImg from "@/assets/project-social.jpg";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      description:
        "A responsive web application that streamlines resume creation with real-time editing and integrated PDF export functionality. Designed with a mobile-first UI, adopted by peers with positive usability feedback.",
      image: projectResume,
      technologies: ["React.js", "Bootstrap", "ChakraUI"],
      liveUrl: "#",
      githubUrl: "https://github.com/CHINMAY02CS/Resume-Builder",
      featured: true,
    },
    {
      id: 2,
      title: "TaskEase",
      description:
        "A cross-platform mobile app for efficient task management, enabling users to create, mark as completed, and delete tasks with an intuitive interface. Reduced user effort by an estimated 20%.",
      image: taskEaseProject,
      technologies: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://todolistbychinmays.netlify.app/",
      githubUrl: "https://github.com/CHINMAY02CS/ToDoApp",
      featured: false,
    },
  ];

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

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const FeaturedProject = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
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
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-background"
            >
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
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
      </div>
    </section>
  );
};

export default ProjectsSection;
