const pricingPlans = [
  {
    name: "Everyday",
    price: "₦35K – ₦60K+",
    description: "per set, retail",
    featured: false,
  },
  {
    name: "Premium",
    price: "₦60K – ₦120K+",
    description: "per set, retail",
    featured: true,
  },
  {
    name: "Luxury",
    price: "₦120K – ₦250K+",
    description: "per set, retail",
    featured: false,
  },
];

const pricingServices = [
  {
    title: "Custom / Bespoke",
    value: "Quotation",
  },
  {
    title: "Wholesale / Bulk",
    value: "Volume-based",
  },
  {
    title: "Hospitality",
    value: "Project quote",
  },
];

export default function PricingArchitecture() {
  return (
    <section className="bg-[#0c0b0a] px-5 py-20 text-[#f4f0e9] md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#2f929b]">
            LISHA'S LINE
          </p>

          <h2 className="font-serif text-5xl font-light tracking-[-0.04em] text-[#e9e2d8] md:text-6xl lg:text-7xl">
            Pricing Architecture
          </h2>

          <div className="mt-6 h-px w-full bg-white/10" />
        </div>

        {/* Main Pricing Cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                group relative min-h-[380px] overflow-hidden border
                p-8 transition-all duration-500
                md:min-h-[420px] md:p-10
                ${
                  plan.featured
                    ? "border-[#2f929b]/30 bg-[#29231f] text-[#f8f5ef]"
                    : "border-[#d9d1c5] bg-[#f5f2ec] text-[#241f1c] hover:-translate-y-1"
                }
              `}
            >
              {/* subtle number */}
              <span
                className={`
                  absolute right-7 top-6 font-serif text-sm italic
                  ${
                    plan.featured
                      ? "text-[#b58b61]"
                      : "text-[#241f1c]/25"
                  }
                `}
              >
                0{index + 1}
              </span>

              {/* Plan */}
              <div className="relative z-10 flex h-full flex-col">
                <div>
                  <p
                    className={`
                      text-[11px] font-semibold uppercase tracking-[0.25em]
                      ${
                        plan.featured
                          ? "text-[#b58b61]"
                          : "text-[#2f929b]"
                      }
                    `}
                  >
                    {plan.name}
                  </p>

                  <h3
                    className={`
                      mt-16 font-serif text-4xl font-normal tracking-[-0.04em]
                      md:text-[42px]
                      ${
                        plan.featured
                          ? "text-white"
                          : "text-[#241f1c]"
                      }
                    `}
                  >
                    {plan.price}
                  </h3>

                  <p
                    className={`
                      mt-5 text-sm
                      ${
                        plan.featured
                          ? "text-white/55"
                          : "text-[#241f1c]/55"
                      }
                    `}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-auto flex items-end justify-between border-t border-current/10 pt-6">
                  <span
                    className={`
                      text-[10px] uppercase tracking-[0.2em]
                      ${
                        plan.featured
                          ? "text-white/35"
                          : "text-[#241f1c]/35"
                      }
                    `}
                  >
                    {plan.featured ? "Elevated" : "Collection"}
                  </span>

                  <span
                    className={`
                      text-xl transition-transform duration-500
                      group-hover:translate-x-1
                      ${
                        plan.featured
                          ? "text-[#b58b61]"
                          : "text-[#2f929b]"
                      }
                    `}
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`
                  pointer-events-none absolute -bottom-20 -right-20 h-48 w-48
                  rounded-full blur-3xl transition-opacity duration-500
                  group-hover:opacity-30
                  ${
                    plan.featured
                      ? "bg-[#b58b61]/20"
                      : "bg-[#2f929b]/10"
                  }
                `}
              />
            </div>
          ))}
        </div>

        {/* Secondary Pricing Options */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {pricingServices.map((service) => (
            <div
              key={service.title}
              className="group flex min-h-[110px] items-center justify-between border border-[#d9d1c5] bg-[#f5f2ec] px-7 py-6 text-[#241f1c] transition-all duration-300 hover:bg-[#eae5dc] md:px-8"
            >
              <span className="text-base font-semibold">
                {service.title}
              </span>

              <span className="text-sm font-semibold text-[#2f929b] transition-transform duration-300 group-hover:translate-x-1">
                {service.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>
            Pricing varies according to material, quantity, finish and
            specification.
          </p>

          <button className="w-fit text-[#2f929b] transition-colors hover:text-white">
            Enquire about a project →
          </button>
        </div>

      </div>
    </section>
  );
}