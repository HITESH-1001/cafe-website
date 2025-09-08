// import React from "react";

// const Hero = () => (
//   <section className="bg-black text-white min-h-[60vh] flex flex-col items-center justify-center px-5 py-10 gap-12">
//     <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight">
//       STAY <span className="text-orange-500">DRIPPED</span> DAILY
//     </h1>
//     <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
//       <div className="bg-neutral-900 rounded-xl shadow-lg flex flex-col items-center p-8">
//         <img src="data:image/png;base64,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" alt="Cafe Mascot" className="w-56 mx-auto" />
//       </div>
//       <div className="rounded-xl overflow-hidden relative group">
//         <img src="data:image/png;base64,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" alt="Cafe Community" className="object-cover w-full h-full max-h-[320px]" />
//         <button className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full font-semibold shadow transition hover:bg-orange-500 hover:text-white">View Collection</button>
//       </div>
//       <div className="flex flex-col gap-5">
//         <div className="bg-orange-500 text-black rounded-xl flex items-center justify-center p-8 font-bold text-2xl h-[120px]">
//           NEW ARRIVALS
//         </div>
//         <div className="flex gap-3">
//           <button className="bg-white text-black flex-grow px-5 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition">
//             Explore
//           </button>
//         </div>
//       </div>
//     </div>
//     {/* Cards row */}
//     <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//       <div className="bg-neutral-900 p-6 rounded-xl flex flex-col items-center">
//         <img src="data:image/png;base64,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" alt="Men" className="h-48 rounded-md" />
//         <div className="mt-3 text-lg font-semibold">a</div>
//       </div>
//       <div className="bg-neutral-900 p-6 rounded-xl flex flex-col items-center">
//         <img src="/download.png" alt="Women" className="h-48 rounded-md" />
//         <div className="mt-3 text-lg font-semibold">a</div>
//       </div>
//       <div className="bg-neutral-900 p-6 rounded-xl flex flex-col items-center">
//         <img src="/download.png" alt="Kids" className="h-48 rounded-md" />
//         <div className="mt-3 text-lg font-semibold">a</div>
//       </div>
//     </div>
//   </section>
// );

// export default Hero;


// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// // List of item images for carousel
// const items = [
//   "/download.png",
//   "/cakes/cake2.png",
//   "/cakes/cake3.png",
//   // Add more images as needed
// ];

// function Hero() {
//   const carouselRef = useRef();
//   const [activeIdx, setActiveIdx] = useState(0);

//   // Auto-rotate images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIdx(prev => (prev + 1) % items.length);
//     }, 2000); // Change duration as needed

//     return () => clearInterval(interval);
//   }, []);

//   // GSAP Animation for fade/slide effect
//   useEffect(() => {
//     if (carouselRef.current) {
//       gsap.fromTo(
//         carouselRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
//       );
//     }
//   }, [activeIdx]);

//   return (
//     <section className="relative flex flex-col items-center justify-center h-[80vh] bg-white overflow-hidden">
//       {/* Central Heading */}
//       <h1 className="z-10 font-extrabold text-4xl md:text-6xl text-center pt-10 pb-6 leading-tight">
//         Delivering Incredible Moments
//       </h1>

//       {/* U-shaped background */}
//       <div className="absolute w-[80vw] h-[40vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
//         <svg width="100%" height="100%">
//           <path
//             d="M0,60 Q50,140 100,60"
//             fill="none"
//             stroke="#faa4cc"
//             strokeWidth="80"
//             transform="scale(8.5 2) translate(-7 -15)"
//           />
//         </svg>
//       </div>

//       {/* Carousel, centered inside U shape */}
//       <div className="relative z-20 flex items-center justify-center w-full mt-2">
//         <div className="flex items-center justify-center gap-8">
//           {/* Left image */}
//           <img
//             src={items[(activeIdx + items.length - 1) % items.length]}
//             alt="prev cake"
//             className="w-48 h-48 object-contain rounded-xl opacity-70 scale-95 transition-all duration-500"
//             style={{ zIndex: 1 }}
//           />
//           {/* Center image (active) */}
//           <img
//             src={items[activeIdx]}
//             alt="active cake"
//             ref={carouselRef}
//             className="w-64 h-64 object-contain rounded-xl shadow-xl border-4 border-pink-300"
//             style={{ zIndex: 2 }}
//           />
//           {/* Right image */}
//           <img
//             src={items[(activeIdx + 1) % items.length]}
//             alt="next cake"
//             className="w-48 h-48 object-contain rounded-xl opacity-70 scale-95 transition-all duration-500"
//             style={{ zIndex: 1 }}
//           />
//         </div>
//       </div>
      
//       {/* CTA Button */}
//       <button className="mt-12 px-8 py-3 bg-pink-500 text-white text-lg font-bold rounded-full shadow hover:bg-pink-600 transition">
//         Order Now
//       </button>
//     </section>
//   );
// }

// export default Hero;


// Hero.jsx

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const cakes = [
//   "/download.png",
//   "/download.png",
//   "/download.png",
  
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   // Auto slide every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cakes.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center w-full h-[90vh] overflow-hidden bg-white">
//       <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
//         Delivering <span className="text-pink-600">Incredible</span> Moments
//       </h1>

//       {/* Carousel Container */}
//       <div className="relative w-[80vw] h-[400px] flex items-center justify-center">
//         {cakes.map((cake, i) => {
//           // Calculate position relative to active index
//           const diff = (i - index + cakes.length) % cakes.length;

//           // Positioning for U-shape (center, left, right, far sides)
//           let x = 0,
//             y = 0,
//             scale = 1,
//             zIndex = 0,
//             opacity = 1;

//           if (diff === 0) {
//             // Center
//             x = 0;
//             y = 0;
//             scale = 1.2;
//             zIndex = 30;
//           } else if (diff === 1) {
//             // Right
//             x = 250;
//             y = 50;
//             scale = 0.9;
//             zIndex = 20;
//           } else if (diff === cakes.length - 1) {
//             // Left
//             x = -250;
//             y = 50;
//             scale = 0.9;
//             zIndex = 20;
//           } else {
//             // Faded back images
//             x = diff > 1 ? 400 : -400;
//             y = 120;
//             scale = 0.7;
//             zIndex = 10;
//             opacity = 0;
//           }

//           return (
//             <motion.img
//               key={i}
//               src={cake}
//               alt={`Cake ${i}`}
//               initial={false}
//               animate={{ x, y, scale, opacity }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="absolute w-[280px] h-[280px] object-contain drop-shadow-xl rounded-full bg-white p-4"
//               style={{ zIndex }}
//             />
//           );
//         })}
//       </div>

//       <button className="mt-10 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
//         Order Now
//       </button>
//     </section>
//   );
// }


// Hero.jsx

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const cakes = [
//   "/download.png",
//   "/download.png",
//   "/download.png",
//   // "/cakes/cake4.png",
//   // "/cakes/cake5.png",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cakes.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center w-full h-[90vh] overflow-hidden bg-white">
//       <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
//         Delivering <span className="text-pink-600">Incredible</span> Moments
//       </h1>

//       {/* Carousel */}
//       <div className="relative w-[80vw] h-[400px] flex items-center justify-center">
//         {cakes.map((cake, i) => {
//           const diff = (i - index + cakes.length) % cakes.length;

//           // Default curve (U-shape positions)
//           let x = 0,
//             y = 0,
//             scale = 1,
//             zIndex = 0,
//             opacity = 1;

//           if (diff === 0) {
//             // Center top
//             x = 0;
//             y = -40;
//             scale = 1.2;
//             zIndex = 30;
//           } else if (diff === 1) {
//             // Right arc
//             x = 220;
//             y = 40;
//             scale = 1;
//             zIndex = 20;
//           } else if (diff === cakes.length - 1) {
//             // Left arc
//             x = -220;
//             y = 40;
//             scale = 1;
//             zIndex = 20;
//           } else if (diff === 2) {
//             // Far right bottom
//             x = 350;
//             y = 120;
//             scale = 0.8;
//             zIndex = 10;
//           } else if (diff === cakes.length - 2) {
//             // Far left bottom
//             x = -350;
//             y = 120;
//             scale = 0.8;
//             zIndex = 10;
//           } else {
//             opacity = 0; // hide others
//           }

//           return (
//             <motion.img
//               key={i}
//               src={cake}
//               alt={`Cake ${i}`}
//               initial={false}
//               animate={{ x, y, scale, opacity }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="absolute w-[260px] h-[260px] object-contain drop-shadow-xl rounded-full bg-white p-4"
//               style={{ zIndex }}
//             />
//           );
//         })}
//       </div>

//       <button className="mt-10 px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
//         Order Now
//       </button>
//     </section>
//   );
// }


// Hero.jsx

// import { useEffect, useState } from "react";

// const cakes = [
//   "/download.png",

//   "/download.png",
//   "/download.png",
//   "/download.png",
//   "/download.png",
//   "/download.png",

// ];

// export default function Hero() {
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev - 60); // rotate 60deg each time
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden bg-white">
//       <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
//         Delivering <span className="text-pink-600">Incredible</span> Moments
//       </h1>

//       {/* Circular Carousel */}
//       <div className="relative w-[500px] h-[500px] perspective">
//         <div
//           className="absolute inset-0 transform-style-preserve-3d transition-transform duration-1000 ease-in-out"
//           style={{ transform: `rotateY(${angle}deg)` }}
//         >
//           {cakes.map((cake, i) => {
//             const theta = (360 / cakes.length) * i;
//             return (
//               <div
//                 key={i}
//                 className="absolute w-[220px] h-[220px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   transform: `rotateY(${theta}deg) translateZ(350px)`,
//                 }}
//               >
//                 <img
//                   src={cake}
//                   alt={`Cake ${i}`}
//                   className="w-full h-full object-contain drop-shadow-lg bg-white rounded-full p-3"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <button className="mt-10 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
//         Order Now
//       </button>

//       <style jsx>{`
//         .perspective {
//           perspective: 1200px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//       `}</style>
//     </section>
//   );
// }

// Hero.jsx

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const cakes = [
//   "/download.png",
//     "/download.png",

//       "/download.png",

//         "/download.png",

  
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cakes.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center w-full h-[100vh] bg-white overflow-hidden">
//       <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
//         Delivering <span className="text-pink-600">Incredible</span> Moments
//       </h1>

//       <div className="relative w-full h-[400px] flex items-center justify-center">
//         {cakes.map((cake, i) => {
//           const diff = (i - index + cakes.length) % cakes.length;

//           // default values
//           let x = 0,
//             y = 0,
//             scale = 1,
//             opacity = 1,
//             zIndex = 0;

//           if (diff === 0) {
//             // Center bottom (main focus)
//             x = 0;
//             y = 80;
//             scale = 1.2;
//             zIndex = 30;
//           } else if (diff === 1) {
//             // coming from right top
//             x = 250;
//             y = -40;
//             scale = 0.9;
//             zIndex = 20;
//           } else if (diff === cakes.length - 1) {
//             // going to left top
//             x = -250;
//             y = -40;
//             scale = 0.9;
//             zIndex = 20;
//           } else {
//             // hide far images
//             opacity = 0;
//           }

//           return (
//             <motion.img
//               key={i}
//               src={cake}
//               alt={`Cake ${i}`}
//               initial={false}
//               animate={{ x, y, scale, opacity }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="absolute w-[260px] h-[260px] object-contain drop-shadow-xl rounded-full bg-white p-4"
//               style={{ zIndex }}
//             />
//           );
//         })}
//       </div>

//       <button className="mt-10 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
//         Order Now
//       </button>
//     </section>
//   );
// }



// Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cakes = [
  "/cakes/cake1.png",
  "/cakes/cake2.png",
  "/cakes/cake3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cakes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[90vh] bg-white overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mt-10">
        <span className="block">Delivering Incredible</span>
        <span className="block">Moments</span>
      </h1>

      {/* Arc Background */}
      <div className="absolute bottom-[220px] left-1/2 -translate-x-1/2 w-[90%] h-[300px] rounded-[50%] bg-orange-800 -z-5" ></div>

      {/* Cakes on Bowl Arc */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {cakes.map((cake, i) => {
          const diff = (i - index + cakes.length) % cakes.length;

          // U-curve positions
          let x = 0,
            y = 0,
            scale = 1,
            zIndex = 0,
            opacity = 1;

          if (diff === 0) {
            // Center bottom
            x = 0;
            y = 80;
            scale = 1.2;
            zIndex = 30;
          } else if (diff === 1) {
            // Right top
            x = 280;
            y = -40;
            scale = 1;
            zIndex = 20;
          } else if (diff === cakes.length - 1) {
            // Left top
            x = -280;
            y = -40;
            scale = 1;
            zIndex = 20;
          } else {
            opacity = 0;
          }

          return (
            <motion.img
              key={i}
              src={cake}
              alt={`Cake ${i}`}
              initial={false}
              animate={{ x, y, scale, opacity }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[320px] h-[320px] object-contain drop-shadow-xl"
              style={{ zIndex }}
            />
          );
        })}
      </div>

      {/* CTA */}
      <button className="mt-10 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
        Order Now
      </button>
    </section>
  );
}

