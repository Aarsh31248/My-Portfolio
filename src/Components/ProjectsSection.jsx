import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const trackEvent = (name, label) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      event_category: "engagement",
      event_label: label,
    });
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs 
             transition-all duration-300 ease-out 
             hover:shadow-xl hover:shadow-primary/20 
             flex flex-col h-full will-change-transform"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 z-10 pointer-events-none bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                    View Project
                  </span>
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.gtag("event", "project_click", {
                      event_category: "engagement",
                      event_label: project.title,
                    });
                  }}
                  className="block h-48 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 -mt-1 cursor-default hover:text-primary transition-colors duration-300">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 cursor-default">
                  {project.description}
                </p>

                <div
                  className="flex space-x-3 mt-auto
                              opacity-100 translate-y-0
                              md:opacity-0 md:translate-y-4
                              md:group-hover:opacity-100 md:group-hover:translate-y-0
                              transition-all duration-300"
                >
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        window.gtag("event", "project_click", {
                          event_category: "engagement",
                          event_label: project.title,
                        });
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={21} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={21} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/Aarsh31248"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("github_click", "github_profile")}
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
