import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 py-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-125 h-125 bg-primary/10 blur-3xl rounded-full"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 mb-5 will-change-transform"
        >
          {/* PROFILE */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.img
              src="/profile.png"
              alt="profile"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover 
               border-2 border-primary/30 shadow-md"
              animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            <span className="block">Hi, I'm</span>

            <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Aarsh Singh
            </span>

            <div className="text-lg md:text-2xl font-medium text-muted-foreground mt-2">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "MERN Stack Developer",
                  1500,
                  "Building Real-Time Apps",
                  1500,
                  "AI Integrated Systems",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full Stack Developer building scalable, real-world applications with
            MERN, AI, and real-time systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="cosmic-button"
            >
              View Projects
            </motion.a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary 
               hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.8,
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 
             flex flex-col items-center opacity-80"
      >
        <span className="text-xs tracking-widest text-muted-foreground mb-2 uppercase">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
