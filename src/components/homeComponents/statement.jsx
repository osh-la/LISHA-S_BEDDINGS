import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatementSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.from(textRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <img
        ref={imageRef}
        src="/images/statement.jpg"
        alt="Luxury bedroom"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase mb-8">
          The Art of Comfort
        </p>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
          Your bedroom
          <br />
          should feel like
          <br />
          your favourite place.
        </h2>

        <p className="mt-10 max-w-md text-sm leading-6 text-white/80">
          Beautiful textures. Thoughtful details. Exceptional comfort.
        </p>
      </div>
    </section>
  );
}