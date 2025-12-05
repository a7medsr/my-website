const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-primary text-center mb-8">Software Engineer</p>

          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I’m a backend developer focused on building robust APIs, managing databases, and designing scalable server-side architectures.
              I enjoy turning complex logic into clean, efficient backend systems that are easy to maintain and extend.
              I work confidently with Linux environments, automation tools, and modern containerization workflows like Docker.
              I’m also comfortable orchestrating and deploying services using container-based solutions to ensure consistent and reliable environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I have strong problem-solving experience and a powerful understanding of advanced data structures and algorithms, gained from solving 1000+ problems
               across multiple competitive programming platforms such as LeetCode and Codeforces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’m skilled in software engineering fundamentals, from clean code practices and version control to testing and documentation.
              I adapt quickly to new tools and technologies and enjoy continuously improving my technical stack.
              I work well both independently and as part of a team, always aiming for high-quality, stable results.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["REST APIs", "SQL & Databases", ".NET Backend", "Docker", "Git & GitHub", "Linux","Problem Solving (DSA)"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
