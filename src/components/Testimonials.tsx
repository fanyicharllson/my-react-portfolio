import { TESTIMONIALS_DATA } from "@/constants";
import { motion } from "framer-motion";


export default function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
          },
        },
      };
    
      const cardVariants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      };
    
  return (
    <section className="section dark:bg-gray-900 bg-gray-200">
      <div>
        <div className="mx-auto text-center max-w-2xl">
          <p className="section-title">What My Client's Say</p>
          <h2 className="section-subtitle">
            Hear directly from satisfied clients about their experiences working
            with me and the impact of our collaborations.
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-12 rounded-xl transition-all duration-300 hover:-translate-y-2
                        bg-gradient-to-br from-purple-500/10 to-purple-700/20 
                        backdrop-blur-sm border border-purple-500/10
                        hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-purple-500/30"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

