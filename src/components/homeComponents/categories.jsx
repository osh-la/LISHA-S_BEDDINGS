// Categories.jsx
import { Link } from "react-router-dom";
import { useSectionRefs }  from "../../context/sectionRefs";


const categories = [
  { id: 1, title: "AMERICAN COTTON", slug: "american cooton", img2: "/images/americancotton.jpeg" },
  { id: 2, title: "BED COVERS", slug: "bed covers", img2: "/images/bedcover.jpeg" },
  { id: 3, title: "COMBO DESIGNS", slug: "combo ", img2: "/images/combodesign.jpeg" },
  { id: 4, title: "EGYPTIAN COTTON", slug: "egyptian cotton", img2: "/images/egyptiancotton.jpeg" },
  { id: 5, title: "STRIP DESIGNS", slug: "strip ", img2: "/images/strip.jpeg" },
   { id: 6, title: "STRIP FUR", slug: "strip fur", img2: "/images/stripfur.jpeg" },
    { id: 7, title: "PINTUCK DESIGNS", slug: "pintuck ", img2: "/images/pintuck.jpeg" },
        { id: 7, title: "POLISH SILK", slug: "polish silk", img2: "/images/polishsilk.jpeg" },
];

export default function Categories() {
  const { categoriesContainer } = useSectionRefs();

  return (
    <section
      ref={categoriesContainer}
      className="relative w-full h-screen overflow-hidden bg-red-50"
    >
      <div className="flex w-max h-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-slide w-screen h-full flex flex-col md:flex-row
                       items-center justify-center p-6 gap-8 md:gap-16 shrink-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="glide-bg absolute inset-0 scale-[1.25] pointer-events-none"
                style={{
                  backgroundImage: `url(${cat.img2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>

            <div className="text-center md:text-left text-zinc-900 max-w-md">
              <h1 className="text-3xl md:text-7xl font-bold mb-4">{cat.title}</h1>
              <Link
                to={`/shop/${cat.slug}`}
                className="border-2 border-zinc-900 py-2 px-4 rounded-full
                           text-sm md:text-base flex items-center gap-2"
              >
                View our {cat.title}
                <div className="rounded-full bg-white p-2">
                  <img className="w-5 h-5" src="/images/right.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
