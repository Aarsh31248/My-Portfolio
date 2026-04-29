import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-muted-foreground"
      >
        &copy; {new Date().getFullYear()} Aarsh Singh All rights reserved.
      </motion.p>

      <motion.a
        href="#hero"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-primary/10 text-primary 
             transition-all duration-300 
             hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20"
      >
        <div className="h-5 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp size={20} />
          </motion.div>
        </div>
      </motion.a>
    </motion.footer>
  );
};

export default Footer;
