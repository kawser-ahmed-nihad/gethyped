import React from "react";

import Anniek from '../assets/Anniek Bril.png'
import { FaArrowDown, FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <div className=" min-h-screen flex items-center px-6  py-16">
            <div className="max-w-7xl mx-auto w-full ">

                {/* Heading */}
                <h1 className=" text-5xl md:text-7xl font-bold text-black ">
                    Get Hyped. Get <br className="md:block hidden" /> Noticed. Get Results.
                </h1>

                <p className="mt-4 text-black font-semibold text-xl max-w-md">
                    Klaar met gokken op content <br />
                    die niets oplevert?
                </p>

                {/* Cards */}
                <div className="mt-12 lg:mx-16   flex gap-6 items-end flex-wrap z-0 relative">



                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
  gap-4 md:gap-0 
 lg:flex-row items-center justify-center 
  -space-y-12 lg:space-y-0 lg:space-x-[-16px] z-0 relative "
                    >

                        {/* Card 1 */}
                        <div
                            className="
                           
      w-full md:w-[260px] lg:w-[300px]
h-[260px] md:h-[380px] bg-[#0070F3] text-white p-6 rounded-3xl shadow-xl 
      flex flex-col justify-between

      transform transition-all duration-500
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      will-change-transform

      -rotate-[4deg]

      hover:rotate-0
      hover:-translate-y-6
      hover:scale-105
      hover:mx-10
      hover:z-20
    "
                        >
                            <h3 className="text-5xl font-extrabold mb-4">10M+</h3>
                            <div className="border-t border-white/30 pt-4">
                                <p className="text-xl font-semibold">Organische views</p>
                                <p className="text-sm text-white/80">Groei door slimme content</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="
                            
       md:w-[260px] lg:w-[300px]
h-[260px] md:h-[380px] mt-5 bg-white p-1 rounded-3xl shadow-xl
z-0
      transform transition-all duration-500
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      will-change-transform

      rotate-[11deg]

      hover:rotate-0
      hover:-translate-y-6
      hover:scale-105
      hover:mx-10
      hover:z-20
    "
                        >
                            <div className="w-full h-full bg-[#E5DACE] rounded-2xl p-4">
                                <img src="https://via.placeholder.com/280x360" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="
       md:w-[260px] lg:w-[300px] h-[380px] mt-24 bg-[#00E676] text-black p-6 rounded-3xl shadow-xl 
      lg:flex flex-col justify-between
hidden md:block
      transform transition-all duration-500
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      will-change-transform

      -rotate-[3deg]

      hover:rotate-0
      hover:-translate-y-6
      hover:scale-105
      hover:mx-10
      hover:z-20
    "
                        >
                            <h3 className="text-5xl font-extrabold mb-4">30+</h3>
                            <div className="border-t border-black/20 pt-4">
                                <p className="text-xl font-semibold">Merken geholpen</p>
                                <p className="text-sm text-black/70">Van start-up tot multinational</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="
                            hidden lg:block
      w-[300px] h-[380px] mt-16 bg-white p-1 rounded-3xl shadow-xl

      transform transition-all duration-500
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      will-change-transform

      rotate-[7deg]

      hover:rotate-0
      hover:-translate-y-6
      hover:scale-105
      hover:mx-10
      hover:z-20
    "
                        >
                            <div className="w-full h-full relative">
                                <img src="https://via.placeholder.com/280x360" className="w-full h-full object-cover rounded-2xl" />
                                <div className="absolute bottom-4 left-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                    <p className="text-black text-xs font-bold px-2 py-1 rounded bg-white">
                                        CARBON DAK.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="pt-32 ">
                    <h1 className="lg:text-5xl text-3xl lg:mx-32 font-semibold text-black   max-w-3xl">
                        Wij maken content die opvalt. Die blijft hangen. Die  jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                    </h1>

                    <div
                        className="

mx-4
                             md:hidden
      w-[300px] h-[380px] mt-16 bg-white p-1 rounded-3xl shadow-xl

      transform transition-all duration-500
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      will-change-transform

      rotate-[5deg]

      hover:rotate-0
      hover:-translate-y-6
      hover:scale-105
      hover:mx-10
      hover:z-20
    "
                    >
                        <div className="w-full h-full relative">
                            <img src="https://via.placeholder.com/280x360" className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute bottom-4 left-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                <p className="text-black text-xs font-bold px-2 py-1 rounded bg-white">
                                    CARBON DAK.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row items-end  mt-16">

                        {/* Image */}
                        <div className="w-48 h-full  hidden md:block rounded-xl overflow-hidden">
                            <img
                                src={Anniek}// replace with your image
                                alt="model"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="max-w-md md:ml-20 lg:ml-40">
                            <p className="text-black text-xl font-bold mb-4">
                                We stoppen niet bij mooie plaatjes en vette beelden. We maken het
                                meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
                                content zonder strategie. Nooit meer content zonder resultaat.
                            </p>

                            <button className='bg-transparent outline outline-black space-x-2 p-1.5 flex items-center rounded-xl cursor-pointer
                              transition-transform duration-500
                              hover:-rotate-6 hover:scale-105
                              [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                <span className='text-sm font-bold'>Leer ons kennen</span>
                                <span className='bg-black p-2 rounded-md'>
                                    <FaArrowRightLong className="text-white" />
                                </span>
                            </button>
                        </div>

                        {/* Small Icon Button */}
                        <div className="ml-auto hidden md:block  lg:mr-24">
                            <button className="group relative flex w-10 h-10 items-center justify-center  cursor-pointer
                              transition-transform duration-500 overflow-hidden rounded-lg border hover:scale-105 border-black">

                                {/* Default icon */}
                                <div className="flex items-center justify-center transition-transform duration-500 group-hover:translate-y-12">
                                    <FaArrowDown className="text-sm text-[#fb673c]" />
                                </div>

                                {/* Hover icon (top → center) */}
                                <div className="absolute flex items-center justify-center -translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
                                    <FaArrowDown className="text-sm text-[#fb673c]" />
                                </div>

                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;