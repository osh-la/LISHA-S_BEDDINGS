// LookoutSection.jsx
import { useLayoutEffect, useRef } from "react";
import { useSectionRefs } from "../../context/sectionRefs";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "BEDSPREADS",
    slug: "bedspreads",
    image: "/images/bedspread.jpeg",
  },
  {
    title: "DUVETS",
    slug: "duvets",
    image: "/images/duvet.jpeg",
  },
  {
    title: "PILLOWS",
    slug: "pillows",
    image: "/images/pillows.jfif",
  },
  {
    title: "CURTAINS",
    slug: "curtains",
    image: "/images/curtains.jfif",
  },
  {
    title: "THROWS",
    slug: "throws",
    image: "/images/throw.jfif",
  },
  {
    title: "ACCESSORIES",
    slug: "accessories",
    image: "/images/bedcover.jpeg",
  },
];

const LookoutSection = () => {
  const { lookoutSection, lookoutText, lookoutImage } = useSectionRefs();

  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        const speed =
          index === 0
            ? -25
            : index === 1
            ? 15
            : index === 2
            ? -12
            : index === 3
            ? 18
            : index === 4
            ? -15
            : 12;

        gsap.fromTo(
          img,
          {
            yPercent: speed * -0.5,
          },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: lookoutSection.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });
    }, lookoutSection);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={lookoutSection}
      className="relative w-full overflow-hidden bg-red-50 px-6 py-20 md:px-16 md:py-28 lg:px-24"
    >
      {/* Header */}
      <div
        ref={lookoutText}
        className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-stone-500">
            Explore Our Collection
          </p>

          <h2 className="text-4xl font-light uppercase leading-none tracking-tight text-stone-800 md:text-6xl lg:text-7xl">
            Find Your
            <br />
            Comfort
          </h2>
        </div>

        <p className="max-w-sm text-sm font-light leading-relaxed text-stone-600 md:text-base">
          Thoughtfully crafted pieces designed to bring softness, warmth and
          timeless elegance into your space.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            to={`/shop/${category.slug}`}
            ref={index === 0 ? lookoutImage : null}
            className="group relative block aspect-[4/3] overflow-hidden"
          >
            {/* Parallax Image */}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={category.image}
              alt={category.title}
              className="absolute left-0 top-0 h-[130%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

            {/* Category */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
              <h3 className="text-xl font-light uppercase tracking-[0.15em] text-white md:text-2xl">
                {category.title}
              </h3>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:bg-black">
                <img
                  src="/images/right.png"
                  alt=""
                  className="h-4 w-4 transition-all duration-500 group-hover:invert"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LookoutSection;