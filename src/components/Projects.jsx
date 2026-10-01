import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "OnRoute Travel Booking Platform",
    category: "UI/UX • Case Study",
    description: "A travel booking platform concept designed to make trip planning simple, fast, and enjoyable. The experience brings destination discovery, flight booking, hotel reservations, and trip management into a streamlined user journey.",
    github: "#",
    demo: "#",
    tags: ["UI/UX Design", "User Research", "Wireframing", "Prototyping"],
  },
  {
    title: "OnRoute Travel Agency Brand Identity",
    category: "Branding • Visual Identity",
    description: "A travel-agency visual identity developed for OnRoute, combining a modern travel-focused logo with a consistent color system and branded communication across print and promotional materials.",
    github: "#",
    demo: "#",
    tags: ["Branding", "Logo Design", "Visual Identity", "Color Theory"],
  },
  {
    title: "OnRoute Marketing & Promotional Designs",
    category: "Graphic Design • Marketing",
    description: "A collection of promotional travel creatives developed for OnRoute, including brochures, magazines, newspapers, banners, billboards, bus-stop advertising, signage, and other campaign applications.",
    github: "#",
    demo: "#",
    tags: ["Graphic Design", "Marketing Creatives", "Print Design", "Advertising"],
  },
  {
    title: "OnRoute Corporate Brand Collateral",
    category: "Brand Collateral",
    description: "Corporate communication materials created for the OnRoute brand, including business cards, ID cards, envelopes, invoices, letterheads, and other branded stationery.",
    github: "#",
    demo: "#",
    tags: ["Branding", "Print Design", "Corporate Design", "Visual Communication"],
  },
  {
    title: "OnRoute Travel Campaign",
    category: "Campaign Design • Outdoor",
    description: "Travel-focused promotional visuals adapted across outdoor and physical brand applications, including sign boards, roll-up banners, bus-stop advertising, city-light displays, vehicle branding, and environmental graphics.",
    github: "#",
    demo: "#",
    tags: ["Campaign Design", "Outdoor Advertising", "Visual Design", "Brand Application"],
  },
  {
    title: "OnRoute Brand Mockups",
    category: "Mockups • Brand Applications",
    description: "Real-world brand applications visualized through mockups, including office wall branding, T-shirt design, travel bags, vehicle graphics, and promotional display materials.",
    github: "#",
    demo: "#",
    tags: ["Mockups", "Branding", "Visual Design", "Art Direction"],
  },
];

const designProcessData = [
  { title: "Research", desc: "Understanding users, requirements, references, and visual direction.", step: "01" },
  { title: "Define", desc: "Identifying the core problem, audience, goals, and design requirements.", step: "02" },
  { title: "Ideate", desc: "Exploring concepts, layouts, visual directions, and possible solutions.", step: "03" },
  { title: "Wireframe", desc: "Structuring the experience and information hierarchy before detailed visual design.", step: "04" },
  { title: "Design", desc: "Developing the visual interface, branding, typography, color system, and supporting graphics.", step: "05" },
  { title: "Prototype", desc: "Creating interactive prototypes to communicate and test the intended experience.", step: "06" },
  { title: "Test & Refine", desc: "Reviewing the design, identifying usability issues, and refining the final solution.", step: "07" },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-20 relative max-w-2xl" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Projects That Define My Journey
            <svg className="absolute -bottom-4 left-0 w-48 h-3 text-[#ff2a2a]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mt-8">
            A selection of UI/UX case studies, branding work, visual communication, and marketing designs created across digital and print experiences.
          </p>
        </div>

        {/* Small Project Cards Grid - 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projectData.map((project, index) => {
            // Apply slight structural organic tilting variables derived from your portfolio design blueprint
            const tiltClass = index % 3 === 0 ? "hover:rotate-1" : index % 3 === 1 ? "hover:-rotate-1" : "hover:rotate-0";

            return (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group bg-white border border-gray-200 rounded-[2rem] p-1.5 relative flex flex-col items-center hover:scale-[1.02] ${tiltClass} hover:border-red-400 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-700`}
              >
                {/* Skeuomorphic Tag Hole Punch Component */}
                <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
                </div>

                {/* Inner Card Container Frame */}
                <div className="w-full h-full rounded-[1.4rem] mt-6 p-6 flex flex-col justify-between min-h-[310px] bg-[#f4f4f4] group-hover:bg-red-50/20 transition-colors duration-700">
                  <div>
                    {/* Category Label */}
                    <span className="text-xs uppercase tracking-wider font-extrabold text-[#ff2a2a]/90 block mb-2">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-xl font-black text-gray-900 tracking-tight mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description Text */}
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Project Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] md:text-xs font-bold rounded-md bg-white border border-gray-200/60 text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive External Links */}
                    <div className="flex items-center gap-4 border-t border-gray-200/50 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-black text-gray-900 hover:text-[#ff2a2a] inline-flex items-center gap-1 transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Section (Streamlined Code Blocks Array) */}
        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
              My Design Process
            </h3>
            <div className="h-[1px] bg-gray-200 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {designProcessData.map((process, index) => (
              <div
                key={process.title}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group border border-gray-200 bg-white rounded-2xl p-5 hover:border-red-300 hover:shadow-[0_10px_30px_rgba(255,42,42,0.05)] transition-all duration-300 flex items-center justify-between"
              >
                <div className="max-w-[75%]">
                  <h4 className="font-extrabold text-sm md:text-base text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 truncate">
                    {process.title}
                  </h4>
                  <span className="text-[11px] font-medium text-gray-400 block mt-1 whitespace-normal">
                    {process.desc}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gray-100 text-gray-500 border border-gray-200/50 group-hover:bg-red-50 group-hover:text-[#ff2a2a] group-hover:border-red-100 transition-colors duration-300">
                  {process.step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Organic Hand-drawn Accent */}
        <div data-aos="fade-in" className="text-center mt-20 relative">
          <div className="font-['Caveat',cursive] text-3xl text-gray-500 inline-block transform rotate-1">
            Crafting beautiful experiences...
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;