import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/gallery/galleryvid.mp4",
  "/images/gallery/gal1.jpeg",
  "/images/gallery/gal2.jpeg",
  "/images/gallery/gal3.jpeg",
  "/images/gallery/gal4.jpeg",
];

export default function LifestyleGallery() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((image, index) => {
        gsap.from(image, {
          y: index % 2 === 0 ? 100 : -80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f4f0e9] px-6 py-32 md:px-16 lg:px-24"
    >
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.4em] text-black/45">
            The Lisha's Line Journal
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] md:text-7xl">
            Life,
            <br />
            <span className="italic">beautifully lived.</span>
          </h2>
        </div>

        <p className="max-w-sm font-sans text-sm leading-7 text-black/50">
          Inspiration for softer mornings, slower evenings and spaces you'll
          love coming home to.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <div
          ref={(el) => (imagesRef.current[0] = el)}
          className="col-span-2 h-[55vh] overflow-hidden md:row-span-2 md:h-[80vh]"
        >
          <video
            src={images[0]}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className="h-[35vh] overflow-hidden md:h-[38vh]"
        >
          <img
            src={images[1]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[2] = el)}
          className="h-[35vh] overflow-hidden md:h-[38vh]"
        >
          <img
            src={images[2]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[3] = el)}
          className="h-[35vh] overflow-hidden md:h-[38vh]"
        >
          <img
            src={images[3]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div
          ref={(el) => (imagesRef.current[4] = el)}
          className="h-[35vh] overflow-hidden md:h-[38vh]"
        >
          <img
            src={images[4]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
