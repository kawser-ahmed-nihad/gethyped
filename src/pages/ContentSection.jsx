import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import Video1 from '../assets/video/Loop Salontopper.mp4'

const ContentSection = () => {
  const videoRef = useRef(null);

  
  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  
  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <section className=" px-10 py-28 ">

      <div className="lg:mx-32">
        <h1 className="md:text-7xl text-5xl mb-5 text-black font-extrabold">Content <br /> dat scoort.</h1>
        <p className="text-black text-xl mb-5 font-bold">Wij vertellen jouw verhaal. Op <br /> een manier die écht past bij jouw <br /> doelgroep. Met creatieve content <br /> die werkt en het verschil maakt.</p>

        <button className='bg-transparent outline outline-black space-x-2 p-1.5 flex items-center rounded-xl cursor-pointer
                                      transition-transform duration-500
                                      hover:-rotate-6 hover:scale-105
                                      [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
          <span className='text-sm font-bold'>Bekijk al ons werk</span>
          <span className='bg-black p-2 rounded-md'>
            <FaArrowRightLong className="text-white" />
          </span>
        </button>
      </div>

      <div className=" mt-11 lg:mx-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="relative w-full -rotate-[2deg] max-w-[400px] md:max-w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] border-[6px] border-[#FF5722] overflow-hidden bg-black group cursor-pointer shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Video Element */}
          <video
 ref={videoRef}
   muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* The Slanted & Perfectly Rounded Content Box */}
          <div
            className="absolute bottom-1 m-1 left-1 right-1 p-6 pt-12 bg-[#FF5722]"
            style={{
              WebkitMaskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              maskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              borderRadius: "0 0 2rem 2rem",
            }}
          >
            {/* Title */}
            <h3 className="text-white text-xl font-extrabold leading-tight mb-4 max-w-[85%]">
              Van nul naar vol, <br /> binnen 3 weken
            </h3>

            {/* Tag/Label */}
            <div className="inline-block px-4 py-1.5 bg-[#fc997b] border border-white/20 backdrop-blur-sm rounded-md text-white font-semibold text-[12px]">
              Bullit
            </div>

            {/* Floating Arrow Button with In-Out Animation */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         group-hover:translate-x-12 group-hover:-translate-y-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>

                {/* Secondary Arrow that comes in from bottom-left */}
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full md:mt-8 max-w-[400px] md:max-w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] border-[6px] border-[#0d8dff] overflow-hidden bg-black group cursor-pointer shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* The Slanted & Perfectly Rounded Content Box */}
          <div
            className="absolute bottom-1 m-1 left-1 right-1 p-6 pt-12 bg-[#0d8dff]"
            style={{
              WebkitMaskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              maskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              borderRadius: "0 0 2rem 2rem",
            }}
          >
            {/* Title */}
            <h3 className="text-white text-xl font-extrabold leading-tight mb-4 max-w-[85%]">
              Van nul naar vol, <br /> binnen 3 weken
            </h3>

            {/* Tag/Label */}
            <div className="inline-block px-4 py-1.5 bg-[#28aaff] border border-white/20 backdrop-blur-sm rounded-md text-white font-semibold text-[12px]">
              Roasta
            </div>

            {/* Floating Arrow Button with In-Out Animation */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         group-hover:translate-x-12 group-hover:-translate-y-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>

                {/* Secondary Arrow that comes in from bottom-left */}
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full md:-mt-0 -rotate-[2deg] max-w-[400px] md:max-w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] border-[6px] border-[#33c791] overflow-hidden bg-black group cursor-pointer shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* The Slanted & Perfectly Rounded Content Box */}
          <div
            className="absolute bottom-1 m-1 left-1 right-1 p-6 pt-12 bg-[#33c791]"
            style={{
              WebkitMaskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              maskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"%3E%3Cpath d="M0 35 C 0 25, 5 23, 10 21 L 85 1 C 90 -1, 100 0, 100 10 V 100 H 0 Z" fill="black"/%3E%3C/svg%3E')`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              borderRadius: "0 0 2rem 2rem",
            }}
          >
            {/* Title */}
            <h3 className="text-white text-xl font-extrabold leading-tight mb-4 max-w-[85%]">
              Van nul naar vol, <br /> binnen 3 weken
            </h3>

            {/* Tag/Label */}
            <div className="inline-block px-4 py-1.5 bg-[#73e2b6] border border-white/20 backdrop-blur-sm rounded-md text-white font-semibold text-[12px]">
              Loco
            </div>

            {/* Floating Arrow Button with In-Out Animation */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         group-hover:translate-x-12 group-hover:-translate-y-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>

                {/* Secondary Arrow that comes in from bottom-left */}
                <svg
                  className="w-6 h-6 text-black absolute transition-all duration-500 ease-in-out transform 
                         -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ContentSection;