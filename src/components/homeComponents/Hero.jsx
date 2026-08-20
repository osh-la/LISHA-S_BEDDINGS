import { useSectionRefs } from "../../context/sectionRefs";
import TransitionLink from "../transitionLink";

export default function Hero() {
  const { hero, heroHeader, heroText, POD, videoRef } = useSectionRefs();

  return (
    <section
      ref={hero}
      className="relative h-screen md:h-[150vh] overflow-hidden text-white"
    >
      {/* Background */}
      <img
        ref={videoRef}
        src="/images/hero.jpeg"
        alt="Luxury bedding"
        className="absolute inset-0 z-[-2] h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[-1] bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full px-6 md:px-16 lg:px-24">

        {/* Main Hero */}
        <div className="absolute bottom-24 left-6 right-6 md:bottom-32 md:left-16 md:right-16 lg:left-24">

          <div className="max-w-5xl">

            <p className="mb-5 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/80">
              Timeless Comfort
            </p>

            <h1
              ref={heroHeader}
              className="text-6xl font-light uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl lg:text-[9rem]"
            >
              Elevate
              <br />
              Your Space
            </h1>

            <div
              ref={heroText}
              className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-sm font-light leading-relaxed text-white/85 md:text-base">
                Wrap yourself in exceptional comfort with beautifully crafted
                bedding designed to bring elegance, softness and serenity into
                every room.
              </p>

              <TransitionLink to="/shop">
                <button className="group flex items-center gap-5 border border-white/70 rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-white hover:text-black">
                  <span>Explore Collection</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:bg-black">
                    <img
                      src="/images/right.png"
                      alt=""
                      className="h-4 w-4 transition-all duration-500 group-hover:invert"
                    />
                  </span>
                </button>
              </TransitionLink>
            </div>

          </div>
        </div>

        {/* Bottom Label */}
        <div
          ref={POD}
          className="absolute bottom-8 right-6 md:bottom-10 md:right-16 lg:right-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
              Luxury you can feel
            </p>
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute right-6 top-8 md:right-16 md:top-10 lg:right-24">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
            Est. 2026
          </p>
        </div>

      </div>
    </section>
  );
}