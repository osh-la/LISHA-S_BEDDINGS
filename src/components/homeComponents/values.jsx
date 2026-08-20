
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Quality",
    text: "Thoughtfully sourced products selected for comfort, durability and lasting value.",
  },
  {
    number: "02",
    title: "Elegance",
    text: "Timeless designs that make your space feel effortlessly refined.",
  },
  {
    number: "03",
    title: "Customer Experience",
    text: "A thoughtful experience designed around your needs, from selection to delivery.",
  },
  {
    number: "04",
    title: "Reliability",
    text: "Consistent quality, dependable fulfilment and service you can trust.",
  },
];

export default function Values() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-row", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4f0e9] px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-24">
          <p className="text-xs tracking-[0.35em] uppercase mb-7">
            What Sets Us Apart
          </p>

          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
            The difference
            <br />
            is in the details.
          </h2>
        </div>

        <div className="border-t border-black/20">
          {values.map((value) => (
            <div
              key={value.number}
              className="value-row grid md:grid-cols-[100px_1fr_1.2fr] gap-6 md:gap-12 py-10 border-b border-black/20"
            >
              <span className="text-xs tracking-[0.2em]">
                {value.number}
              </span>

              <h3 className="font-serif text-3xl md:text-4xl">
                {value.title}
              </h3>

              <p className="text-sm leading-7 text-[#625d56] max-w-md">
                {value.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}