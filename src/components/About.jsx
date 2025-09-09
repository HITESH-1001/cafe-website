// // import { useGSAP } from '@gsap/react'
// // import gsap from 'gsap'
// // import { ScrollTrigger } from 'gsap/all'
// // import React from 'react'

// // function About() {
// //   gsap.registerPlugin(ScrollTrigger)
// //   useGSAP(()=>{
// //     gsap.to("#aa",{
// //      scrollTrigger:{
// //       trigger:"#aa",
// //       start:"top 40%",
// //       end:"bottom top",
// //       markers:true,
// //      },
// //       x:350,
// //       opacity:1,
// //       scale:0.5,
// //       duration:1,
// //       ease:"power4.out",
// //       stagger:0.2
     
// //     })
// //   })
  
// //   return (
// //    <div id='about' className='h-full w-full bg-red-600 flex items-center justify-center box'>
// //     <div id='aa' className='bg-red-200 h-30 w-30 aa'></div>
// //    </div>
// //   )
// // }

// // export default About


// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import React from 'react'

// function About() {
//   gsap.registerPlugin(ScrollTrigger)
//   useGSAP(() => {
//     gsap.fromTo(
//       "#aa",
//       { scale: 0, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: "#aa",
//           start: "top 50%", // triggers as soon as you enter the section
//           end: "bottom 80%",
//           markers: true,
//         },
//       }
//     )
//   })

//   return (
//     <div id='about' className='h-full w-full bg-red-600 flex items-center justify-center box'>
//       <div id='aa' className='bg-red-200 h-30 w-30 '></div>
//     </div>
//   )
// }

// export default About


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const whiteBoxRef = useRef(null);
  const blackBoxRef = useRef(null);
  const whiteBox2Ref = useRef(null);
  const blackBox2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whiteBoxRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      whiteBoxRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6, ease: 'power2.out' }
    )
      .fromTo(
        blackBoxRef.current,
        { scaleX: 0, transformOrigin: 'right center' },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '>-0.3'
      )
      .fromTo(
        whiteBox2Ref.current,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 0.6, ease: 'power2.out' },
        '>-0.3'
      )
      .fromTo(
        blackBox2Ref.current,
        { scaleY: 0, transformOrigin: 'bottom center' },
        { scaleY: 1, duration: 0.6, ease: 'power2.out' },
        '>-0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[400px] gap-6 p-12">
      <div
        ref={whiteBoxRef}
        className="bg-white w-64 h-16"
        style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }}
      />
      <div
        ref={blackBoxRef}
        className="bg-black w-64 h-16"
        style={{ transformOrigin: 'right center', transform: 'scaleX(0)' }}
      />
      <div
        ref={whiteBox2Ref}
        className="bg-white w-16 h-64"
        style={{ transformOrigin: 'top center', transform: 'scaleY(0)' }}
      />
      <div
        ref={blackBox2Ref}
        className="bg-black w-16 h-64"
        style={{ transformOrigin: 'bottom center', transform: 'scaleY(0)' }}
      />
    </section>
  );
};

export default About;
