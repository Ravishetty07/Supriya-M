import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

const allCertifications = [
  { 
    title: "BSc (Computer Science)", 
    issuer: "KSG College of Arts and Science (July 2019 – June 2022)", 
    cat: "Education", 
    desc: "Completed BSc (Computer Science) in Coimbatore." 
  },
  { 
    title: "Graphic Design & UI/UX Design", 
    issuer: "MAAC Institute", 
    cat: "Education", 
    desc: "Comprehensive Graphic Design & UI/UX Design Course training." 
  },
  { 
    title: "Graphic Designer Intern", 
    issuer: "Geo Holidays (Nov 2025 – Aug 2026)", 
    cat: "Experience", 
    desc: "Maintained consistent design quality. Created social media posts, travel brochures, and promotional creatives. Edited images and prepared marketing materials." 
  },
  { 
    title: "Professional Summary", 
    issuer: "Graphic & UI/UX Designer", 
    cat: "Summary", 
    desc: "Creative and passionate UI/UX Designer and Graphic Designer with training in user experience design, branding, and visual communication." 
  },
  { 
    title: "Software Proficiency", 
    issuer: "Design Toolkit", 
    cat: "Skills", 
    desc: "Proficient in Figma, Adobe Photoshop, and Adobe Illustrator. Experienced in creating user-friendly digital interfaces." 
  },
  { 
    title: "Career Objective", 
    issuer: "Professional Growth", 
    cat: "Summary", 
    desc: "Eager to contribute innovative design solutions and grow as a professional designer in a dynamic organization." 
  }
];

const doubleCertifications = [...allCertifications, ...allCertifications];

const Certifications = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  const [baseWidth, setBaseWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualNavigating, setIsManualNavigating] = useState(false);
  
  const rawX = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 });

  // Calculate length of single loop block
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        setBaseWidth(trackRef.current.scrollWidth / 2);
      }
    };

    calculateWidth();
    const timer = setTimeout(calculateWidth, 200);

    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  // Fast Auto-Scroll Engine Loop
  useEffect(() => {
    if (baseWidth === 0 || isManualNavigating) return;

    let animationFrameId;
    
    const normalSpeed = 1.8; 
    const crawlSpeed = 0.3; // Keeps moving beautifully slow on hover instead of stopping completely
    
    const updateLoop = () => {
      const currentSpeed = isHovered ? crawlSpeed : normalSpeed;
      const currentVal = rawX.get() - currentSpeed;
      
      if (Math.abs(currentVal) >= baseWidth) {
        rawX.jump(0);
      } else {
        rawX.set(currentVal);
      }
      
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [baseWidth, isHovered, isManualNavigating, rawX]);

  // Navigation Controls Arrow Actions
  const handleNavigation = (direction) => {
    if (baseWidth === 0) return;

    setIsManualNavigating(true);

    const stepDistance = 340; 
    let targetX = rawX.get() + (direction === "next" ? -stepDistance : stepDistance);

    if (targetX > 0) {
      targetX = -baseWidth + stepDistance;
    } else if (Math.abs(targetX) >= baseWidth) {
      targetX = 0;
    }

    animate(rawX, targetX, {
      type: "spring",
      stiffness: 80,
      damping: 18,
      onComplete: () => {
        setTimeout(() => setIsManualNavigating(false), 1500);
      }
    });
  };

  return (
    <section
      ref={containerRef}
      id="education"
      className="w-full bg-white font-sans py-20 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-7xl mx-auto relative w-full">
        
        {/* Navigation Action Row */}
        <div className="mb-14 flex justify-between items-end relative w-full z-20 flex-shrink-0">
          <div className="relative max-w-xl">
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold text-gray-600 mb-4 shadow-sm bg-white">
              Background
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
              Education & Training
              <svg className="absolute -bottom-2 left-0 w-36 h-2 text-[#ff2a2a]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </h2>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 mb-1">
            <button
              onClick={() => handleNavigation("prev")}
              className="p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Side-Scrolling Infinite Track Area */}
        <div 
          className="relative w-full py-8 overflow-visible cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Synchronized Vector Wire */}
          <svg className="absolute top-[40px] left-0 w-full h-4 pointer-events-none z-0 hidden md:block" fill="none">
            <motion.path
              d={`M -50,8 Q 200,16 450,4 Q 700,-4 950,8 Q 1200,16 1450,4 Q 1700,-4 1950,8 Q 2200,16 2450,4 Q 2700,-4 2950,8 Q 3200,16 3450,4 Q 3700,-4 3950,8 Q 4200,16 4450,4 Q 4700,-4 4950,8 Q 5200,16 5450,4 Q 5700,-4 5950,8 L 20000,8`}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 8"
              style={{ x: springX }}
            />
          </svg>

          {/* Marquee Runner Content */}
          <motion.div 
            ref={trackRef}
            style={{ x: springX }} 
            className="flex gap-6 w-max pl-2 select-none"
          >
            {doubleCertifications.map((cert, index) => {
              const displayIndex = (index % allCertifications.length) + 1;
              const formattedNumber = displayIndex < 10 ? `0${displayIndex}` : displayIndex;

              return (
                /* 1. PERSPECTIVE CONTAINER */
                <div
                  key={index}
                  className="group w-[265px] sm:w-[290px] h-[220px] flex-shrink-0 [perspective:1000px]"
                >
                  {/* 2. FLIP INNER WRAPPER */}
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* ================= FRONT SIDE ================= */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border border-gray-200 rounded-[2rem] p-1.5 flex flex-col items-center hover:border-red-400 hover:shadow-[0_20px_45px_rgba(255,42,42,0.1)] transition-all duration-500">
                      
                      {/* Hole Punch Design */}
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
                      </div>

                      {/* Card Main Canvas */}
                      <div className="w-full h-full rounded-[1.4rem] mt-6 p-5 flex flex-col justify-between bg-[#f4f4f4] group-hover:bg-red-50/20 transition-colors duration-700">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#ff2a2a]/90">
                              {cert.cat}
                            </span>
                            <span className="text-xs font-bold font-serif italic text-gray-400">
                              {formattedNumber}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight mb-1 group-hover:text-[#ff2a2a] transition-colors duration-300 leading-snug line-clamp-2">
                            {cert.title}
                          </h3>
                        </div>

                        <div className="border-t border-gray-200/50 pt-3 mt-3">
                          <p className="text-gray-400 text-[9px] font-bold tracking-tight uppercase">
                            Institution / Role
                          </p>
                          <p className="text-gray-700 text-xs font-semibold truncate">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================= BACK SIDE ================= */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[2rem] p-5 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
                      
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                          <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-gray-500 font-bold uppercase">
                          Record
                        </span>
                      </div>

                      <div className="my-auto text-center px-2">
                        <p className="text-[10px] text-gray-400 font-mono mb-1 uppercase tracking-wider">Details</p>
                        <h4 className="text-xs text-white font-medium line-clamp-2 mb-4">
                          {cert.title}
                        </h4>
                        
                        {/* DESCRIPTION TEXT */}
                        <p className="text-[10.5px] sm:text-xs text-gray-300 font-medium leading-relaxed mb-4 text-left">
                          {cert.desc}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-t border-gray-800 pt-2">
                        <span>ID: #{formattedNumber}</span>
                        <span className="text-[#ff2a2a] font-bold">VALID</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footnote Core Logs */}
        <div className="text-center mt-12 relative">
          <div className="font-['Caveat',cursive] text-2xl text-gray-400 inline-block transform rotate-1">
            Hover a card to flip and review • Displaying {allCertifications.length} records.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;