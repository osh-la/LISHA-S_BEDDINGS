import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntro() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        y: 100,
        scale: 1.12,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(contentRef.current.children, {
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
      className="relative min-h-screen bg-[#f4f0e9] px-6 py-20 md:px-16 lg:px-24 flex items-center overflow-hidden"
    >
      <div className="grid w-full max-w-7xl mx-auto lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* IMAGE */}
        <div className="relative h-[65vh] overflow-hidden">
          <img
            ref={imageRef}
            src="/images/about.jpeg"
            alt="Lisha's Line bedding"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] tracking-[0.35em] uppercase">
              Lisha's Line
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="max-w-xl">

          <p className="text-xs tracking-[0.35em] uppercase mb-8">
            The Lisha's Line Experience
          </p>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[#24211d]">
            Where comfort
            <br />
            meets considered
            <br />
            design.
          </h2>

          <div className="mt-10 space-y-6 text-sm md:text-base leading-7 text-[#5e5952]">
            <p>
              Lisha's Line brings together quality, comfort, beauty and
              functionality to create bedding and home-lifestyle pieces
              that make everyday living feel elevated.
            </p>

            <p>
              From beautifully curated bedrooms to thoughtfully furnished
              hospitality spaces, we believe comfort should never come
              at the expense of style.
            </p>
          </div>

          {/* <a
            href="/about"
            className="inline-flex mt-10 border-b border-black pb-2 text-xs tracking-[0.25em] uppercase"
          >
            Discover Lisha's Line
          </a> */}

        </div>
      </div>
    </section>
  );
}