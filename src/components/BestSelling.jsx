import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = ["All", "Black", "Espresso", "Doppio"];

const items = [
  {
    id: 1,
    name: "Cappuccino",
    category: "All",
    img: "/coffee1.jpg", // replace with your images
  },
  {
    id: 2,
    name: "Americano",
    category: "Black",
    img: "/c2.webp",
  },
  {
    id: 3,
    name: "Espresso",
    category: "Espresso",
    img: "/coffee3.jpg",
  },
  {
    id: 4,
    name: "Doppio",
    category: "Doppio",
    img: "/coffee4.jpg",
  },
];

export default function BestSelling() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // GSAP Animation for cards
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [activeCategory, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#dbb78d] py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#322010]">
        Best Selling Item
      </h2>
      <p className="mt-4 text-[#5a4632] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
        Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s.
      </p>

      {/* Categories */}
      <div className="mt-8 flex justify-center gap-6 text-[#322010] font-serif">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentIndex(0);
            }}
            className={`pb-1 ${
              activeCategory === cat
                ? "font-bold border-b-2 border-[#322010]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-10 flex justify-center">
        <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
          {filteredItems.map((item, i) => {
            const isActive = i === currentIndex;
            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`min-w-[280px] sm:min-w-[300px] md:min-w-[320px] transition-transform duration-700 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="border-4 border-[#322010] bg-[#f4d9b3] shadow-lg flex flex-col">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full aspect-square object-cover"
                  />
                  <h3 className="mt-4 font-bold font-['Playfair_Display'] text-2xl text-[#322010]">
                    {item.name}
                  </h3>
                  <button className="mt-4 mb-4 px-4 py-2 bg-[#dbb78d] border border-[#322010] rounded text-[#322010] font-medium hover:bg-[#322010] hover:text-white transition w-[90%] mx-auto">
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
          <button
            onClick={handlePrev}
            className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
