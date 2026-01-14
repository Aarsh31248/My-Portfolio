import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NetflixGPT",
    description:
      "Netflix-inspired app with authentication and OpenAI-powered movie recommendations, built using React, Redux, and Tailwind.",
    image: "/projects/netflixGPT.png",
    tags: ["OpenAI", "TMDB API", "React", "Redux", "Tailwind", "Firebase"],
    demoUrl: "https://netflixgpt-31248.web.app",
    githubUrl: "https://github.com/Aarsh31248/Netflix-GPT",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      "YouTube clone using YouTube API for videos & suggestions, with debounced search and a real-time optimized live chat experience.",
    image: "/projects/youtube.png",
    tags: ["React", "Tailwind", "Youtube API", "Redux"],
    demoUrl: "https://aarshyoutube.netlify.app/",
    githubUrl: "https://github.com/Aarsh31248/my-youtube",
  },
  {
    id: 3,
    title: "Blog App",
    description:
      "Blog app with full CRUD functionality, users can explore posts with a clean UI, built using React, Redux, and Tailwind with responsive UI.",
    image: "/projects/blogApp.png",
    tags: ["React", "Tailwind", "Redux", "Appwrite"],
    demoUrl: "https://aarshblogapp.netlify.app/",
    githubUrl: "https://github.com/Aarsh31248/Blog-App",
  },
  {
    id: 4,
    title: "AI Photo Enhancer",
    description:
      "Built an AI-powered Image Enhancer using React + Tailwind CSS with upload, enhancement API integration, polling, and enhanced image preview/download.",
    image: "/projects/photoEnhancer.png",
    tags: ["React", "Tailwind", "Axios", "AI Enhancement API"],
    demoUrl: "https://aarshaiimageenhancer.netlify.app/",
    githubUrl: "https://github.com/Aarsh31248/AI-Image-Enhancer",
  },
  {
    id: 5,
    title: "Crypto Place",
    description:
      "CryptoPlace is a React-based crypto tracker that fetches real-time data using the CoinGecko API.It also displays interactive price trend charts for better market analysis.",
    image: "/projects/cryptoPlace.png",
    tags: ["React", "React Google Charts", "CoinGecko API"],
    demoUrl: "https://aarshcryptoplace.netlify.app/",
    githubUrl: "https://github.com/Aarsh31248/Crypto-Place",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 -mt-1">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={21} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={21} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Aarsh31248"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
