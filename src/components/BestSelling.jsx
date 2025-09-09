// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const categories = ["All", "Black", "Espresso", "Doppio"];

// const items = [
//   {
//     id: 1,
//     name: "Cappuccino",
//     category: "All",
//     img: "/coffee1.jpg", // replace with your images
//   },
//   {
//     id: 2,
//     name: "Americano",
//     category: "Black",
//     img: "/c2.webp",
//   },
//   {
//     id: 3,
//     name: "Espresso",
//     category: "Espresso",
//     img: "/coffee3.jpg",
//   },
//   {
//     id: 4,
//     name: "Doppio",
//     category: "Doppio",
//     img: "/coffee4.jpg",
//   },
// ];

// export default function BestSelling() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsRef = useRef([]);

//   const filteredItems =
//     activeCategory === "All"
//       ? items
//       : items.filter((item) => item.category === activeCategory);

//   // GSAP Animation for cards
//   useEffect(() => {
//     gsap.fromTo(
//       cardsRef.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: "power3.out",
//       }
//     );
//   }, [activeCategory, currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? filteredItems.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === filteredItems.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="bg-[#dbb78d] py-16 px-6 text-center">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#322010]">
//         Best Selling Item
//       </h2>
//       <p className="mt-4 text-[#5a4632] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
//         Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
//         Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s.
//       </p>

//       {/* Categories */}
//       <div className="mt-8 flex justify-center gap-6 text-[#322010] font-serif">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setActiveCategory(cat);
//               setCurrentIndex(0);
//             }}
//             className={`pb-1 ${
//               activeCategory === cat
//                 ? "font-bold border-b-2 border-[#322010]"
//                 : "opacity-70 hover:opacity-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Carousel */}
//       <div className="relative mt-10 flex justify-center">
//         <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
//           {filteredItems.map((item, i) => {
//             const isActive = i === currentIndex;
//             return (
//               <div
//                 key={item.id}
//                 ref={(el) => (cardsRef.current[i] = el)}
//                 className={`min-w-[280px] sm:min-w-[300px] md:min-w-[320px] transition-transform duration-700 ${
//                   isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
//                 }`}
//               >
//                 <div className="border-4 border-[#322010] bg-[#f4d9b3] shadow-lg flex flex-col">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full aspect-square object-cover"
//                   />
//                   <h3 className="mt-4 font-bold font-['Playfair_Display'] text-2xl text-[#322010]">
//                     {item.name}
//                   </h3>
//                   <button className="mt-4 mb-4 px-4 py-2 bg-[#dbb78d] border border-[#322010] rounded text-[#322010] font-medium hover:bg-[#322010] hover:text-white transition w-[90%] mx-auto">
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
//           <button
//             onClick={handlePrev}
//             className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={handleNext}
//             className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const categories = ["All", "Black", "Espresso", "Doppio"];

// const items = [
//   {
//     id: 1,
//     name: "Cappuccino",
//     category: "All",
//     img: "/coffee1.jpg", // replace with your images
//   },
//   {
//     id: 2,
//     name: "Americano",
//     category: "Black",
//     img: "/c2.webp",
//   },
//   {
//     id: 3,
//     name: "Espresso",
//     category: "Espresso",
//     img: "/coffee3.jpg",
//   },
//   {
//     id: 4,
//     name: "Doppio",
//     category: "Doppio",
//     img: "/coffee4.jpg",
//   },
// ];

// export default function BestSelling() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsRef = useRef([]);

//   const filteredItems =
//     activeCategory === "All"
//       ? items
//       : items.filter((item) => item.category === activeCategory);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? filteredItems.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === filteredItems.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="bg-[#dbb78d] py-16 px-6 text-center">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#322010]">
//         Best Selling Item
//       </h2>
//       <p className="mt-4 text-[#5a4632] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
//         Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
//         Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s.
//       </p>

//       {/* Categories */}
//       <div className="mt-8 flex justify-center gap-6 text-[#322010] font-serif">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setActiveCategory(cat);
//               setCurrentIndex(0);
//             }}
//             className={`pb-1 ${
//               activeCategory === cat
//                 ? "font-bold border-b-2 border-[#322010]"
//                 : "opacity-70 hover:opacity-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Carousel */}
//       <div className="relative mt-10 flex justify-center">
//         <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
//           {filteredItems.map((item, i) => {
//             const isActive = i === currentIndex;
//             return (
//               <div
//                 key={item.id}
//                 ref={(el) => (cardsRef.current[i] = el)}
//                 className={`min-w-[280px] sm:min-w-[300px] md:min-w-[320px] transition-transform duration-700 ${
//                   isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
//                 }`}
//               >
//                 <div className="border-4 border-[#322010] bg-[#f4d9b3] shadow-lg flex flex-col">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90"
//                   />
//                   <h3 className="mt-4 font-bold font-['Playfair_Display'] text-2xl text-[#322010]">
//                     {item.name}
//                   </h3>
//                   <button className="mt-4 mb-4 px-4 py-2 bg-[#dbb78d] border border-[#322010] rounded text-[#322010] font-medium hover:bg-[#322010] hover:text-white transition w-[90%] mx-auto">
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
//           <button
//             onClick={handlePrev}
//             className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={handleNext}
//             className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const categories = ["All", "Black", "Espresso", "Doppio"];

// const items = [
//   {
//     id: 1,
//     name: "Cappuccino",
//     category: "All",
//     img: "/coffee1.jpg",
//   },
//   {
//     id: 2,
//     name: "Americano",
//     category: "Black",
//     img: "/c2.webp",
//   },
//   {
//     id: 3,
//     name: "Espresso",
//     category: "Espresso",
//     img: "/coffee3.jpg",
//   },
//   {
//     id: 4,
//     name: "Doppio",
//     category: "Doppio",
//     img: "/coffee4.jpg",
//   },
// ];

// export default function BestSelling() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const filteredItems =
//     activeCategory === "All"
//       ? items
//       : items.filter((item) => item.category === activeCategory);

//   // Show 3 cards at a time
//   const visibleCards = filteredItems.slice(
//     currentIndex,
//     currentIndex + 3
//   ).length === 3
//     ? filteredItems.slice(currentIndex, currentIndex + 3)
//     : [
//         ...filteredItems.slice(currentIndex),
//         ...filteredItems.slice(0, 3 - (filteredItems.length - currentIndex)),
//       ];

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? filteredItems.length - 3 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === filteredItems.length - 3 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="bg-[#dbb78d] py-16 px-6 text-center">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#322010]">
//         Best Selling Item
//       </h2>
//       <p className="mt-4 text-[#5a4632] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
//         Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
//         Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s.
//       </p>

//       {/* Categories */}
//       <div className="mt-8 flex justify-center gap-6 text-[#322010] font-serif">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setActiveCategory(cat);
//               setCurrentIndex(0);
//             }}
//             className={`pb-1 ${
//               activeCategory === cat
//                 ? "font-bold border-b-2 border-[#322010]"
//                 : "opacity-70 hover:opacity-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Carousel */}
//       <div className="relative mt-10 flex justify-center">
//         <div className="flex gap-6 overflow-hidden w-full max-w-5xl justify-center">
//           {visibleCards.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] transition-transform duration-700 opacity-100 scale-100"
//             >
//               <div className="border-4 border-[#322010] bg-[#f4d9b3] shadow-lg flex flex-col">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90"
//                 />
//                 <h3 className="mt-4 font-bold font-['Playfair_Display'] text-2xl text-[#322010]">
//                   {item.name}
//                 </h3>
//                 <button className="mt-4 mb-4 px-4 py-2 bg-[#dbb78d] border border-[#322010] rounded text-[#322010] font-medium hover:bg-[#322010] hover:text-white transition w-[90%] mx-auto">
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         {filteredItems.length > 3 && (
//           <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
//             <button
//               onClick={handlePrev}
//               className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={handleNext}
//               className="p-3 bg-[#322010] text-white rounded hover:opacity-80"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const items = [
//   {
//     id: 1,
//     category: 'All',
//     name: 'Cappuccino',
//     image:
//       'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 2,
//     category: 'Black',
//     name: 'Americano',
//     image:
//       'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 3,
//     category: 'Espresso',
//     name: 'Espresso',
//     image:
//       'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//    {
//     id: 4,
//     category: 'Espresso',
//     name: 'dfs',
//     image:
//       'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//    {
//     id: 5,
//     category: 'Espresso',
//     name: 'aa',
//     image:
//       'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//    {
//     id: 6,
//     category: 'Espresso',
//     name: 'bb',
//     image:
//       'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
// ];

// const categories = ['All', 'Black', 'Espresso', 'Doppio'];

// const BestSelling = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [filteredItems, setFilteredItems] = useState(items);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     if (activeCategory === 'All') {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter(item => item.category === activeCategory));
//     }
//   }, [activeCategory]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'power3.out' }
//     );
//   }, [filteredItems]);

//   const [startIndex, setStartIndex] = useState(0);
//   const cardsToShow = 3;

//   const prevSlide = () => {
//     setStartIndex(prev =>
//       prev === 0 ? Math.max(filteredItems.length - cardsToShow, 0) : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setStartIndex(prev =>
//       prev + cardsToShow >= filteredItems.length ? 0 : prev + 1
//     );
//   };

//   const visibleCards = filteredItems.slice(startIndex, startIndex + cardsToShow);

//   return (
//     <section className="bg-[#dbb78d] px-8 py-12 min-h-screen text-[#322010]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-serif font-bold mb-2 text-center">
//           Best Selling Item
//         </h2>
//         <p className="text-center mb-6 text-sm font-serif max-w-xl mx-auto">
//           {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
//         </p>

//         {/* Categories Menu */}
//         <ul className="flex justify-center gap-8 mb-8 font-serif cursor-pointer text-sm">
//           {categories.map(cat => (
//             <li
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`${
//                 activeCategory === cat
//                   ? 'border-b-2 border-[#322010] font-bold'
//                   : 'opacity-50'
//               }`}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>

//         {/* Cards Carousel */}
//         <div className="relative flex justify-center items-center gap-6 flex-wrap">
//           {visibleCards.length === 0 ? (
//             <p className="text-center w-full">No items in this category</p>
//           ) : (
//             visibleCards.map((item, idx) => (
//               <div
//                 key={item.id}
//                 ref={el => (cardsRef.current[idx] = el)}
//                 className="bg-[#e1c9a0] rounded-md cursor-pointer drop-shadow-md flex flex-col items-center p-1 max-w-[220px]"
//               >
//                 <div className="border-8 border-[#322010] w-[175px] h-[175px] flex justify-center items-center p-2">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-cover max-w-full max-h-full"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-serif font-extrabold mt-2 mb-2">
//                   {item.name}
//                 </h3>

//                 <button className="border border-[#322010] w-full py-2 bg-[#c9b393] hover:bg-[#b0995f] transition rounded-b-md">
//                   Order Now
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Carousel Navigation */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button
//             onClick={prevSlide}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &larr;
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &rarr;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSelling;


// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const items = [
//   {
//     id: 1,
//     category: 'All',
//     name: 'Cappuccino',
//     image:
//       'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 2,
//     category: 'Black',
//     name: 'Americano',
//     image:
//       'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 3,
//     category: 'Espresso',
//     name: 'Espresso',
//     image:
//       'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//   },
 
//     {
//       id: 4,
//       category: 'Doppio',
//       name: 'Doppio',
//       image:
//         'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//     },
//     {
//       id: 5,
//       category: 'Black',
//         name: 'Black Coffee',
//         image:
//           'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
//     },
// ];

// const categories = ['All', 'Black', 'Espresso', 'Doppio'];

// const BestSelling = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [filteredItems, setFilteredItems] = useState(items);
//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (activeCategory === 'All') {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter(item => item.category === activeCategory));
//     }
//   }, [activeCategory]);

//   // Animate container slide left-to-right when filtered items change
//   useEffect(() => {
//     if (containerRef.current) {
//       gsap.fromTo(
//         containerRef.current,
//         { x: 100, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
//       );
//     }
//   }, [filteredItems]);

//   // Animate individual cards fade and slide up
//   useEffect(() => {
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: 'power3.out' }
//     );
//   }, [filteredItems]);

//   const [startIndex, setStartIndex] = useState(0);
//   const cardsToShow = 3;

//   const prevSlide = () => {
//     setStartIndex(prev =>
//       prev === 0 ? Math.max(filteredItems.length - cardsToShow, 0) : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setStartIndex(prev =>
//       prev + cardsToShow >= filteredItems.length ? 0 : prev + 1
//     );
//   };

//   const visibleCards = filteredItems.slice(startIndex, startIndex + cardsToShow);

//   return (
//     <section className="bg-[#dbb78d] px-8 py-12 min-h-screen text-[#322010]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-serif font-bold mb-2 text-center">
//           Best Selling Item
//         </h2>
//         <p className="text-center mb-6 text-sm font-serif max-w-xl mx-auto">
//           {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
//         </p>

//         {/* Categories Menu */}
//         <ul className="flex justify-center gap-8 mb-8 font-serif cursor-pointer text-sm">
//           {categories.map(cat => (
//             <li
//               key={cat}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setStartIndex(0); // Reset slide on category change
//               }}
//               className={`${
//                 activeCategory === cat
//                   ? 'border-b-2 border-[#322010] font-bold'
//                   : 'opacity-50'
//               }`}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>

//         {/* Cards Carousel */}
//         <div
//           ref={containerRef}
//           className="relative flex justify-center items-center gap-6 flex-wrap"
//         >
//           {visibleCards.length === 0 ? (
//             <p className="text-center w-full">No items in this category</p>
//           ) : (
//             visibleCards.map((item, idx) => (
//               <div
//                 key={item.id}
//                 ref={el => (cardsRef.current[idx] = el)}
//                 className="bg-[#e1c9a0] rounded-md cursor-pointer drop-shadow-md flex flex-col items-center p-1 max-w-[220px]"
//               >
//                 <div className="border-8 border-[#322010] w-[175px] h-[175px] flex justify-center items-center p-2 overflow-hidden relative group">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-cover max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-serif font-extrabold mt-2 mb-2">
//                   {item.name}
//                 </h3>

//                 <button className="border border-[#322010] w-full py-2 bg-[#c9b393] hover:bg-[#b0995f] transition rounded-b-md">
//                   Order Now
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Carousel Navigation */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button
//             onClick={prevSlide}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &larr;
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &rarr;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSelling;


// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const items = [
//   { id: 1, category: 'Black', name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//   { id: 2, category: 'Black', name: 'Americano', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//   { id: 3, category: 'Espresso', name: 'Espresso', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//     { id: 4, category: 'Doppio', name: 'Doppio', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//     { id: 5, category: 'Black', name: 'Black Coffee', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
// ];

// const categories = ['All', 'Black', 'Espresso', 'Doppio'];

// const BestSelling = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [filteredItems, setFilteredItems] = useState(items);
//   const [startIndex, setStartIndex] = useState(0);
//   const cardsToShow = 3;

//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (activeCategory === 'All') {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter(item => item.category === activeCategory));
//     }
//     setStartIndex(0); // Reset to first slide when category changes
//   }, [activeCategory]);

//   // Calculate visible cards for current slide
//   const visibleCards = filteredItems.slice(startIndex, startIndex + cardsToShow);

//   // Animate carousel sliding on next/prev
//   const slideAnimation = (direction) => {
//     if (!containerRef.current) return;

//     // Slide width depends on container width
//     const width = containerRef.current.offsetWidth;

//     const fromX = direction === 'next' ? width : -width;
//     const toX = 0;

//     // Slide out current cards to left/right
//     gsap.to(containerRef.current, {
//       x: direction === 'next' ? -width : width,
//       duration: 0.5,
//       ease: 'power2.inOut',
//       onComplete: () => {
//         // Reset position offscreen on opposite side
//         gsap.set(containerRef.current, { x: fromX });

//         // Move slide index
//         if (direction === 'next') {
//           setStartIndex(prev => (prev + cardsToShow >= filteredItems.length ? 0 : prev + 1));
//         } else {
//           setStartIndex(prev => (prev === 0 ? Math.max(filteredItems.length - cardsToShow, 0) : prev - 1));
//         }

//         // Slide container back into view
//         gsap.to(containerRef.current, { x: toX, duration: 0.5, ease: 'power2.inOut' });
//       }
//     });
//   };

//   return (
//     <section className="bg-[#dbb78d] px-8 py-12 min-h-screen text-[#322010]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-serif font-bold mb-2 text-center">Best Selling Item</h2>
//         <p className="text-center mb-6 text-sm font-serif max-w-xl mx-auto">
//           {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
//         </p>

//         <ul className="flex justify-center gap-8 mb-8 font-serif cursor-pointer text-sm">
//           {categories.map(cat => (
//             <li
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`${
//                 activeCategory === cat
//                   ? 'border-b-2 border-[#322010] font-bold'
//                   : 'opacity-50'
//               }`}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>

//         <div
//           ref={containerRef}
//           className="relative flex justify-center items-center gap-6 flex-wrap overflow-hidden"
//           style={{ willChange: 'transform' }}
//         >
//           {visibleCards.length === 0 ? (
//             <p className="text-center w-full">No items in this category</p>
//           ) : (
//             visibleCards.map(item => (
//               <div
//                 key={item.id}
//                 className="bg-[#e1c9a0] rounded-md cursor-pointer drop-shadow-md flex flex-col items-center p-1 max-w-[220px]"
//               >
//                 <div className="border-8 border-[#322010] w-[175px] h-[175px] flex justify-center items-center p-2 overflow-hidden relative group">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-cover max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-serif font-extrabold mt-2 mb-2">{item.name}</h3>

//                 <button className="border border-[#322010] w-full py-2 bg-[#c9b393] hover:bg-[#b0995f] transition rounded-b-md">
//                   Order Now
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="flex justify-center gap-4 mt-10">
//           <button
//             onClick={() => slideAnimation('prev')}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &larr;
//           </button>
//           <button
//             onClick={() => slideAnimation('next')}
//             className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
//           >
//             &rarr;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSelling;


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const items = [
  { id: 1, category: 'Black', name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 2, category: 'Black', name: 'Americano', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 3, category: 'Espresso', name: 'Espresso', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 4, category: 'Doppio', name: 'Doppio', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 5, category: 'Black', name: 'Black Coffee', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
];

const categories = ['All', 'Black', 'Espresso', 'Doppio'];

const BestSelling = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(items);
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
  const cardsRef = useRef([]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === activeCategory));
    }
    setStartIndex(0);
  }, [activeCategory]);

  const cardsToShow = 3;

  const prevSlide = () => {
    setSlideDirection('prev');
    setStartIndex(prev => (prev === 0 ? Math.max(filteredItems.length - cardsToShow, 0) : prev - 1));
  };

  const nextSlide = () => {
    setSlideDirection('next');
    setStartIndex(prev => (prev + cardsToShow >= filteredItems.length ? 0 : prev + 1));
  };

  // Animate individual cards sliding in from left or right when visibleCards change
  useEffect(() => {
    const distanceX = 100; // px distance to slide from
    const fromX = slideDirection === 'next' ? distanceX : -distanceX;
    const toX = 0;

    cardsRef.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(el, { x: fromX, opacity: 0 }, { x: toX, opacity: 1, duration: 0.5, delay: idx * 0.1, ease: 'power3.out' });
      }
    });
  }, [startIndex, filteredItems, slideDirection]);

  const visibleCards = filteredItems.slice(startIndex, startIndex + cardsToShow);

  return (
    <section className="bg-[#dbb78d] px-8 py-12 min-h-screen text-[#322010]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center">Best Selling Item</h2>
        <p className="text-center mb-6 text-sm font-serif max-w-xl mx-auto">
          {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>

        <ul className="flex justify-center gap-8 mb-8 font-serif cursor-pointer text-sm">
          {categories.map(cat => (
            <li
              key={cat}
              onClick={() => { setActiveCategory(cat); setSlideDirection('next'); }}
              className={`${activeCategory === cat ? 'border-b-2 border-[#322010] font-bold' : 'opacity-50'}`}
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="relative flex justify-center items-center gap-6 flex-wrap overflow-hidden">
          {visibleCards.length === 0 ? (
            <p className="text-center w-full">No items in this category</p>
          ) : (
            visibleCards.map((item, idx) => (
              <div
                key={item.id}
                ref={el => (cardsRef.current[idx] = el)}
                className="bg-[#e1c9a0] rounded-md cursor-pointer drop-shadow-md flex flex-col items-center p-1 max-w-[220px]"
              >
                <div className="border-8 border-[#322010] w-[175px] h-[175px] flex justify-center items-center p-2 overflow-hidden relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-serif font-extrabold mt-2 mb-2">{item.name}</h3>

                <button className="border border-[#322010] w-full py-2 bg-[#c9b393] hover:bg-[#b0995f] transition rounded-b-md">
                  Order Now
                </button>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#322010] text-[#dbb78d] p-3 rounded shadow-lg hover:bg-[#c9b393] transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
