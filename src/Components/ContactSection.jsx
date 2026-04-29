import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textareaInput, setTextareaInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setNameInput("");
    setEmailInput("");
    setTextareaInput("");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 md:mr-32">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:aarshsinghas123@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aarshsinghas123@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium ml-12"> Phone</h4>
                  <a
                    href="tel:9599480695"
                    className="text-muted-foreground hover:text-primary transition-colors ml-10"
                  >
                    +91 9599480695
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mr-4"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    New Ashok Nagar, Delhi-110096
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 md:mr-28">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <motion.a
                  href="https://linkedin.com/in/aarshsingh"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-primary"
                >
                  <Linkedin />
                </motion.a>

                <motion.a
                  href="https://github.com/Aarsh31248"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-primary"
                >
                  <Github />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-primary"
                >
                  <Twitter />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
            className="relative group bg-card p-8 rounded-lg border border-border 
                        transition-all duration-300 
                        hover:shadow-xl hover:shadow-primary/10 
                        hover:border-primary/40 
                        will-change-transform"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-linear-to-br from-primary/10 via-transparent to-transparent rounded-lg" />
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Your@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  value={textareaInput}
                  onChange={(e) => setTextareaInput(e.target.value)}
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                  placeholder="Hello I'd like to talk about..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? "Message Sent " : "Send Message "}
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
