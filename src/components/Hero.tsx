import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/a7medsr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-samir-ba795a25a/", label: "LinkedIn" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hello It's Me
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ahmed <span className="text-primary">Samir</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              And I'm a{" "}
              <span className="text-primary font-semibold">Back-End Developer</span>
            </p>
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              I’m a backend developer who specializes in building efficient, scalable systems and clean API architectures.
            </p>
            
            <p className="text-sm text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Let's connect!
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 rounded-full font-medium transition-all duration-300 hover:glow-sm"
              >
                <a href="/Ahmed_Samir.pdf" download="Ahmed_Samir.pdf">
                  <Download size={18} className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-glow" />
              
              {/* Secondary decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/30" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-secondary">
                <img 
                  src="/mylogo.png" 
                  alt="Ahmed Samir" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
