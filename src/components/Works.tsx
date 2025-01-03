import ScrollAnimation from "./animations/scrollAnimation";

export default function Works() {
  return (
    <section className="">
      <div className="">
        <div className="mx-auto text-center max-w-2xl pb-16">
          <ScrollAnimation>
            <p className="section-title">My Recent Works</p>
            <h2 className="section-subtitle">
            Showcasing innovative web solutions through carefully crafted 
            projects that combine creativity with technical excellence.
            </h2>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
