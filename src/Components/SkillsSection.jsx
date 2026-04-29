import { useRef, useState } from "react";
import { cn } from "../lib/utils";
import { skills, categories } from "../data/skillsData";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6); // show 6 initially

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-card px-4 py-4 rounded-lg border border-border 
                          hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10
                          transition-all duration-300 
                          hover:-translate-y-1 cursor-default"
            >
              {/* ICON */}
              {skill.icon && (
                <div
                  className="absolute top-3 right-3 text-primary/60 text-xl 
                transition group-hover:text-primary group-hover:scale-110"
                >
                  <skill.icon />
                </div>
              )}

              {/* NAME */}
              <div className="mb-3 w-full" title={skill.name}>
                <h3 className="font-semibold text-lg truncate">{skill.name}</h3>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* PERCENT */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                if (showAll) {
                  sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setShowAll(!showAll);
              }}
              className="px-6 py-2 rounded-full border border-primary text-primary 
                          hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
