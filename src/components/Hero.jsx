

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const headingRef = useRef(null);
  const bgTextRef = useRef(null);
  const carouselWrap = useRef(null);
  const imagesRef = useRef([]);

  // replace with your own images (transparent PNGs look great)
  const images = useMemo(
    () => [
      "/c1.png",
      "/c2.webp",
      // "/download.png",
    ],
    []
  );

  // Word-by-word slide-up for heading + bg text fade/slide
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".hero-word");
      gsap.from(words, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay:1.2
      });

      gsap.fromTo(
        bgTextRef.current,
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.8 }
      );
    }, headingRef);
    return () => ctx.revert();
  }, []);

  // Simple auto-fade carousel (non-blocking)
  useEffect(() => {
    const imgs = imagesRef.current.filter(Boolean);
    if (!imgs.length) return;

    gsap.set(imgs, { autoAlpha: 0, zIndex: 0 });
    gsap.set(imgs[0], { autoAlpha: 1, zIndex: 2 });

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });
    imgs.forEach((img, i) => {
      const next = imgs[(i + 1) % imgs.length];
      tl.to(img, { autoAlpha: 0, duration: 1.2, delay: 2.4 }, "+=0");
      tl.to(next, { autoAlpha: 1, duration: 1.2 }, "<");
    });

    return () => tl.kill();
  }, [images]);

  return (
    <section className="relative bg-[#1b120b] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Heading + content */}
          <div className="relative z-10" ref={headingRef}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {["Discover", "The", "Art", "Of", "Perfect", "Coffee"].map((w, i) => (
                <span key={i} className="hero-word inline-block mr-2">
                  {w}
                </span>
              ))}
            </h1>

            <p className="mt-6 text-white/85 text-base sm:text-lg max-w-prose">
              Experience the rich and bold flavors of our exquisite coffee blends, crafted to awaken your senses and start your day right.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="h-11 px-6 rounded bg-white text-[#1b120b] font-medium shadow hover:shadow-lg active:scale-[0.98] transition inline-flex items-center gap-2">
                Order Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="h-11 px-6 rounded border border-white/40 hover:bg-white hover:text-[#1b120b] transition font-medium">
                Explore More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md text-center sm:text-left sm:max-w-none">
              {[
                { n: "50+", l: "Item of Coffee" },
                { n: "20+", l: "Order Running" },
                { n: "2k+", l: "Happy Customer" },
              ].map((s) => (
                <div key={s.l} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold">{s.n}</div>
                  <div className="text-white/70 text-sm sm:text-base">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + background big text */}
          <div className="relative">
            {/* Large faint text behind */}
            <div
              ref={bgTextRef}
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-6 -right-2 md:-right-6 lg:-right-10 text-[18vw] md:text-[9rem] lg:text-[12rem] font-extrabold text-white/5 leading-none"
            >
              Hipsters Cafe
            </div>

            {/* Carousel wrapper */}
            <div ref={carouselWrap} className="relative aspect-square w-[80%] md:w-[420px] mx-auto">
              {images.map((src, i) => (
                <img
                  key={src}
                  ref={(el) => (imagesRef.current[i] = el)}
                  src={src}
                  alt={`coffee ${i + 1}`}
                  className="absolute inset-0 m-auto h-full w-full object-contain drop-shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacking spacing */}
      <style>{`
        @media (max-width: 767px){
          .hero-word{ margin-right: .5rem }
        }
      `}</style>
    </section>
  );
}

