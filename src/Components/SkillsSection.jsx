import { useRef, useState } from "react";
import { cn } from "../lib/utils";
import { skills, categories } from "../data/skillsData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categoryRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6); // show 6 initially

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div
          ref={categoryRef}
          className="flex flex-wrap justify-center gap-4 mb-12 scroll-mt-24"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory + showAll}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform"
        >
          {visibleSkills.map((skill) => (
            <motion.div
              key={skill.name + activeCategory}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
              className="group relative bg-card px-4 py-4 rounded-lg border border-border 
             hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10
             transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-purple-500/10 to-primary/10 blur-xl" />
              </div>
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
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level + "%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* PERCENT */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredSkills.length > 6 && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowAll((prev) => {
                  const next = !prev;

                  // scroll AFTER state change
                  setTimeout(() => {
                    categoryRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);

                  return next;
                });
              }}
              className="px-6 py-2 rounded-full border border-primary text-primary 
             hover:bg-primary/10 transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
