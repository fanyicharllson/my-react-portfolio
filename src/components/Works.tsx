import ScrollAnimation from "./animations/scrollAnimation";
import { WORKS_DATA } from "../constants";

export default function Works() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="pt-16 screen-max-width">
        <div className="mx-auto text-center max-w-2xl pb-16">
          <ScrollAnimation>
            <p className="section-title">My Recent Works</p>
            <h2 className="section-subtitle">
              Showcasing innovative web solutions through carefully crafted
              projects that combine creativity with technical excellence.
            </h2>
          </ScrollAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORKS_DATA.map((work, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300 group relative flex flex-col bg-gray-200 dark:bg-gray-800"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-64 lg:h-[300px] overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-500">
                  {work.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {work.disc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {work.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-purple-400 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-center text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-300 text-center text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-center pt-10 pb-10">
            <button className="btn-backgroud-hover group">
              <span>Load More</span>
              <svg 
                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
      </div>
    </section>
  );
}
