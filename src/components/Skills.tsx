import { SKILLS_DATA } from "@/constants";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section dark:bg-gradient-to-tl dark:from-black dark:from-60% dark:to-purple-500 bg-gradient-to-tl from-white from-60% to-purple-400">
      <div>
        <div className="mx-auto text-center max-w-2xl">
          <p className="section-title">My Skills</p>
          <h2 className="section-subtitle">
            Crafting robust web solutions with modern technologies. Focused on
            delivering scalable, performant applications that drive business
            success.
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center"
              variants={cardVariants}
            >
              <div className="bg-purple-100 hover:bg-purple-200 rounded-xl py-10 w-full flex items-center justify-center transition-all duration-300 flex-col dark:bg-gray-800 shadow-lg">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-16 h-16 object-contain"
                />
                <p className="text-center text-gray-600 dark:text-purple-500 text-2xl mt-10 font-bold">
                  {skill.percentage}
                </p>
              </div>
              <div>
                <p className="text-center text-gray-600 dark:text-slate-400 text-xl mt-6">
                  {skill.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
