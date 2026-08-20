import { Link } from "react-router-dom";
import { useSectionRefs } from "../../context/sectionRefs";

const History = () => {
  const { historySection, historyBg } = useSectionRefs();

  return (
    <section
      ref={historySection}
      className="relative h-[220vh] overflow-hidden bg-stone-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={historyBg}
          src="/images/history.jpg"
          alt="Luxury bedding"
          className="h-full w-full object-cover object-center"
        />

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen">
        <div className="relative h-full w-full px-6 md:px-12 lg:px-20">

          {/* Top Label */}
          <div className="absolute left-6 top-8 z-10 flex items-center gap-4 text-white md:left-12 md:top-12 lg:left-20">
            <span className="h-px w-10 bg-white/70" />

            <p className="text-[10px] uppercase tracking-[0.35em] md:text-xs">
              The Art of Rest
            </p>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex h-full items-center">

            <div className="w-full">

              {/* Main Heading */}
              <div className="max-w-6xl text-white">

                <h2 className="history-title text-[18vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[13vw] lg:text-[11vw]">
                  Make
                </h2>

                <h2 className="history-title ml-[12vw] font-serif text-[18vw] italic leading-[0.78] tracking-[-0.06em] md:text-[13vw] lg:text-[11vw]">
                  room
                </h2>

                <h2 className="history-title text-[18vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[13vw] lg:text-[11vw]">
                  for rest.
                </h2>

              </div>

              {/* Editorial Content */}
              <div className="history-copy mt-12 ml-auto max-w-sm text-white md:mr-[8vw] lg:mr-[12vw]">

                <p className="text-sm leading-7 text-white/95 md:text-base">
                  Bedding should do more than complete a room.
                  It should change the way the room feels.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/75 md:text-base">
                  From crisp and understated to rich, textured and
                  expressive, we bring together pieces designed to
                  make your bedroom feel unmistakably yours.
                </p>

                <Link
                  to="/shop"
                  className="history-button group mt-8 inline-flex items-center gap-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em]">
                    Explore Collection
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-lg transition-all duration-500 group-hover:bg-white group-hover:text-stone-900">
                    →
                  </span>
                </Link>

              </div>
            </div>
          </div>

          {/* Bottom Categories */}
          <div className="history-categories absolute bottom-8 left-6 right-6 z-10 hidden border-t border-white/30 pt-4 text-white md:left-12 md:right-12 md:flex lg:left-20 lg:right-20">

            {[
              "Sheets",
              "Duvets",
              "Comforters",
              "Throws",
              "Pillows",
              "Custom Bedding",
            ].map((item) => (
              <span
                key={item}
                className="text-[9px] uppercase tracking-[0.25em] text-white/75"
              >
                {item}
              </span>
            ))}

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 right-6 z-10 flex items-center gap-3 text-white md:right-12 lg:right-20">
            <span className="text-[9px] uppercase tracking-[0.25em]">
              Scroll
            </span>

            <span className="h-8 w-px bg-white/50" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;