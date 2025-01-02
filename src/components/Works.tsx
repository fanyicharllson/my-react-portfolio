import ScrollAnimation from "./animations/scrollAnimation";

export default function Works() {
  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center max-w-2xl mb-16">
          <ScrollAnimation>
            <p className="section-title">My Recent Project</p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
