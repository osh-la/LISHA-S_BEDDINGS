import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#24211d] text-[#f4f0e9] px-6 md:px-16 lg:px-24 pt-24 pb-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="footer-item flex flex-col lg:flex-row justify-between gap-12 pb-20">

          <div>
            <h2 className="font-serif text-5xl md:text-6xl">
              Lisha's Line
            </h2>

            <p className="mt-5 text-sm text-white/50 max-w-sm leading-6">
              Premium bedding and home lifestyle designed for beautiful
              spaces, better comfort and elevated living.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-5 text-white/40">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a href="/shop">Shop</a>
                <a href="/collections">Collections</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-5 text-white/40">
                Services
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a href="/hospitality">Hospitality</a>
                <a href="/wholesale">Wholesale</a>
                <a href="/custom-orders">Custom Orders</a>
                <a href="/size-guide">Size Guide</a>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-5 text-white/40">
                Follow
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">TikTok</a>
              </div>
            </div>

          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-item border-y border-white/10 py-10 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <p className="text-xs tracking-[0.25em] uppercase">
              Stay in the know
            </p>

            <p className="text-sm text-white/45 mt-2">
              New collections, inspiration and exclusive access.
            </p>
          </div>

          <div className="flex w-full md:w-[420px] border-b border-white/30 pb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none flex-1 text-sm placeholder:text-white/30"
            />

            <button className="text-xs tracking-[0.2em] uppercase">
              Subscribe
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-item pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-[0.15em] uppercase text-white/35">

          <p>
            © {new Date().getFullYear()} Lisha's Line. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/delivery-returns">Delivery & Returns</a>
          </div>

        </div>

      </div>
    </footer>
  );
}