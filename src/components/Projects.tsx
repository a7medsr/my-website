import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my work and skills.",
    tags: ["React", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AUTO GRAD",
    description: "An automated grading system for educational institutions.",
    tags: ["TypeScript", "Node.js"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "UI/UX",
    description: "A collection of UI/UX design projects and prototypes.",
    tags: ["Figma", "Design"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "E-Commerce",
    description: "A full-stack e-commerce platform with payment integration.",
    tags: ["React", "Node.js"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Chat App",
    description: "Real-time messaging application with modern features.",
    tags: ["Socket.io", "React"],
    demoLink: "#",
    githubLink: "#",
  },
];

// Duplicate projects for seamless infinite scroll
const duplicatedProjects = [...projects, ...projects];

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += 0.5;
        
        // Reset position when we've scrolled through the first set
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPositionRef.current >= halfWidth) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = (index: number) => {
    setIsPaused(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoveredIndex(null);
  };

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          My <span className="text-primary">Project</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Some of my recent work
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6 py-8"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`
              flex-shrink-0 w-80 bg-card rounded-2xl border border-border/50 overflow-hidden
              transition-all duration-300 ease-out cursor-pointer
              ${hoveredIndex === index 
                ? 'transform -translate-y-4 scale-105 border-primary/50 shadow-lg shadow-primary/20' 
                : 'hover:border-primary/30'
              }
            `}
          >
            {/* Project Image Placeholder */}
            <div className="h-44 bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`
                  text-5xl font-bold transition-all duration-300
                  ${hoveredIndex === index ? 'text-primary/40 scale-110' : 'text-primary/20'}
                `}>
                  {project.title.charAt(0)}
                </span>
              </div>
              
              {/* Hover Overlay with Links */}
              <div className={`
                absolute inset-0 bg-background/90 flex items-center justify-center gap-4
                transition-opacity duration-300
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `}>
                <a
                  href={project.demoLink}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-300"
                  aria-label="View demo"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubLink}
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform duration-300"
                  aria-label="View code"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className={`
                text-xl font-semibold mb-2 transition-colors duration-300
                ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}
              `}>
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      px-3 py-1 text-xs rounded-full transition-colors duration-300
                      ${hoveredIndex === index 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary text-muted-foreground'
                      }
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        <div className={`
          h-1 rounded-full transition-all duration-300
          ${isPaused ? 'w-8 bg-primary' : 'w-16 bg-primary/50 animate-pulse'}
        `} />
      </div>
    </section>
  );
};

export default Projects;
