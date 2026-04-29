import { Briefcase, Code, User } from "lucide-react";
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-7 will-change-transform"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold"
            >
              Full Stack Developer building scalable, real-world applications
              with MERN, AI, and real-time systems
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="w-full h-0.5 bg-primary rounded-full -mt-2"
            ></motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I’m a MERN Stack Developer currently working as a Frontend
              Developer Intern, building responsive, real-world applications. I
              work across the full stack — from intuitive React frontends to
              scalable backend systems with Node.js, Express, and MongoDB. I
              focus on writing clean, maintainable code and building interfaces
              that balance usability with performance.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I build systems with real-time features (chat, notifications),
              secure Stripe payments, and event-driven workflows. My focus is on
              performance, efficient data flow, and designing production-ready
              architectures that scale reliably and handle real-world complexity
              beyond basic CRUD.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <a
                href="#contact"
                className="cosmic-button"
                onClick={() => {
                  window.gtag("event", "contact_click", {
                    event_category: "engagement",
                    event_label: "contact_section",
                  });
                }}
              >
                Get In Touch
              </a>

              <a
                href="resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("resume_click", "resume")}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-bold"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side  */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 gap-6 will-change-transform"
          >
            {/* CARD 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="group relative bg-card p-6 rounded-lg border border-border 
                          transition-all duration-300 
                          hover:shadow-lg hover:shadow-primary/10 
                          hover:border-primary/40 overflow-hidden"
            >
              {/* subtle hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="p-3 rounded-full bg-primary/10 
                              transition duration-300 
                              group-hover:bg-primary/20"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Systems (MERN)
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Building end-to-end applications with scalable architecture,
                    clean APIs, and efficient backend systems designed for
                    real-world use.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="group relative bg-card p-6 rounded-lg border border-border 
                          transition-all duration-300 
                          hover:shadow-lg hover:shadow-primary/10 
                          hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="p-3 rounded-full bg-primary/10 
                              transition duration-300 
                              group-hover:bg-primary/20"
                >
                  <User className="h-6 w-6 text-primary" />
                </motion.div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    State Management & UI Systems
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Designing responsive, high-performance interfaces with
                    optimized state management and scalable component
                    architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="group relative bg-card p-6 rounded-lg border border-border 
                          transition-all duration-300 
                          hover:shadow-lg hover:shadow-primary/10 
                          hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="p-3 rounded-full bg-primary/10 
                              transition duration-300 
                              group-hover:bg-primary/20"
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Real-Time & System Integration
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Building systems with real-time communication, event-driven
                    workflows, and seamless third-party integrations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
