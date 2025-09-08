
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Animate navbar on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".brand", ".nav-link", ".nav-cta"], {
        y: -24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 inset-x-0 z-50 bg-[#25180e] text-white border-b border-white/20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <a href="/" className="brand text-2xl font-semibold tracking-wide">
The Hipsters Cafe            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-10">
              {["Home", "Menu", "About Us", "Facilities"].map((item) => (
                <li key={item}>
                  <a
                    href={"#" + item.toLowerCase().replace(/\s+/g, "")}
                    className="nav-link inline-block py-2 text-sm lg:text-base hover:text-white/80"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side (Search + Sign In) */}
            <div className=" flex items-center gap-4">
              <button
                aria-label="Search"
                className="nav-ta h-10 w-10 grid place-items-center rounded border border-white/25 hover:bg-white/10"
              >
                {/* search icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="nav-ta h-10 px-4 rounded border border-white/30 hover:bg-white hover:text-[#25180e] font-medium transition">
                Sign In
              </button>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden h-11 w-11 grid place-items-center rounded border border-white/25"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#25180e]/95 backdrop-blur-sm text-white md:hidden transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-5 pb-8 flex items-center justify-between border-b border-white/15">
          <span className="text-2xl font-semibold">Caffeine</span>
          <div className="flex items-center gap-3">
            {/* search button */}
            <button
              aria-label="Search"
              className="h-11 w-11 grid place-items-center rounded border border-white/25"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="h-11 w-11 grid place-items-center rounded border border-white/25"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 py-6 space-y-2">
          {["Home", "Menu", "About Us", "Facilities"].map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase().replace(/\s+/g, "")}
              onClick={() => setOpen(false)}
              className="block text-lg py-3 border-b border-white/10"
            >
              {item}
            </a>
          ))}

          {/* <div className="pt-4">
            <button className="w-full h-11 rounded border border-white/25 hover:bg-white hover:text-[#25180e] font-medium transition">
              Sign In
            </button>
          </div> */}
        </div>
      </div>

      {/* Spacer so hero isn't covered */}
      <div className="h-16" />
    </>
  );
}
