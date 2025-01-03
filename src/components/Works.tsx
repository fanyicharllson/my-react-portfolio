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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
          {WORKS_DATA.map((work, index) => (
            <div
              key={index}
              className="rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative h-[300px]"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
