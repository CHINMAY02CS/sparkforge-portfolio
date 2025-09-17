import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-bg opacity-80" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple rounded-full opacity-30 floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--purple)) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main content */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block animate-fadeInUp">Hello, I'm</span>
            <span
              className="block animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Chinmay Singh
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Frontend Developer & Full Stack Engineer
          </p>

          <p
            className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            Crafting exceptional digital experiences with modern technologies
            and creative design.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple to-blue hover:from-purple-light hover:to-blue-light text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 glow-purple"
              onClick={scrollToAbout}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple text-purple hover:bg-purple hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com/CHINMAY02CS"
              target="_blank"
              className="text-muted-foreground hover:text-purple transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmaycs/"
              target="_blank"
              className="text-muted-foreground hover:text-blue transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="dpsvn.chin06162@gmail.com"
              target="_blank"
              className="text-muted-foreground hover:text-cyan transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown
          size={32}
          className="text-muted-foreground hover:text-purple transition-colors duration-300"
        />
      </button>
    </section>
  );
};

export default HeroSection;
