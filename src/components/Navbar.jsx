import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";

const Navbar = () => {
  const navRef = useRef(null);
useGSAP(()=>{
 const tl= gsap.timeline();
    //animate the ul also
    tl.from('.logo', {
      y: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
    });
    tl.from('ul li', {
      y: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
    });
});

  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-black text-white border-b border-bottom-white" ref={navRef}>
      <div className="logo font-bold text-xl tracking-tight flex items-center gap-2">
        <span className="text-orange-500 text-2xl">☕</span>
    THE HIPSTERS CAFE
      </div>
      <ul className="flex gap-20 text-lg font-large ">
        <li>
          <a href="#" className="hover:text-orange-400 transition text-3xl">Shop</a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition text-3xl">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition text-3xl">Contact</a>
        </li>
      </ul>
      <div className="flex gap-5">
       {/* <button className="bg-orange-500 px-3 py-1 rounded-full text-black font-semibold">
          Cart
        </button>  */}
        <button onClick={()=>alert('Search clicked')} className="bg-orange-500 px-3 py-1 h-15 w-15 rounded-full text-black font-semibold flex items-center justify-center">
          <svg width="24" height="24" fill="none" className="">
            {/* Add a simple search icon here or use heroicons */}
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm7-1l4 4"></path>
          </svg>
        </button>
         <button className="bg-orange-500 px-3 py-1 h-15 w-15 rounded-full text-black font-semibold flex items-center justify-center">
            <svg width="24" height="24" fill="none" className="">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9m-6 0h-4"></path>
            </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
