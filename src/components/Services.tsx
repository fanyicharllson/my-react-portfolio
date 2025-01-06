import ScrollAnimation from "@/components/animations/scrollAnimation";
import { SERVICES_DATA } from "@/constants";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="">
        <div className="mx-auto text-center max-w-2xl pb-16">
          <ScrollAnimation>
            <p className="section-title">My Quality Services</p>
            <h2 className="section-subtitle">
              Transforming ideas into digital reality with expertise in web
              development, responsive design, and innovative solutions.
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((item, index) => (
            <ScrollAnimation key={index}>
              <div
                className="group relative p-8 rounded-2xl 
                bg-white dark:bg-gray-800/50 backdrop-blur-sm
                border border-purple-100 dark:border-purple-900/20
                hover:shadow-2xl hover:shadow-purple-500/10 
                transition-all duration-300 ease-out"
              >
                {/* Background Gradient Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 
                  group-hover:opacity-10 transition-opacity
                  bg-gradient-to-br from-purple-600 to-purple-400"
                />

                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="flex items-center justify-center w-12 h-12
                    rounded-xl bg-gradient-to-r from-purple-600 to-purple-400
                    text-white font-bold text-lg"
                  >
                    {item.number}
                  </span>
                  <h3
                    className="text-xl font-bold bg-gradient-to-r 
                    from-purple-600 to-purple-400 
                    text-transparent bg-clip-text"
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  {item.disc}
                </p>

                {/* Hover Arrow */}
                <div
                  className="absolute bottom-8 right-8 
                  opacity-0 group-hover:opacity-100 
                  transform translate-x-2 group-hover:translate-x-0
                  transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
