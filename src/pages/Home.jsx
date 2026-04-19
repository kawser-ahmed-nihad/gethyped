import React from "react";

const HeroSection = () => {
    return (
        <div className=" min-h-screen flex items-center px-6  py-16">
            <div className="max-w-7xl mx-auto w-full">

                {/* Heading */}
                <h1 className="text-7xl font-bold text-black ">
                    Get Hyped. Get <br /> Noticed. Get Results.
                </h1>

                <p className="mt-4 text-black font-semibold text-xl max-w-md">
                    Klaar met gokken op content <br />
                    die niets oplevert?
                </p>

                {/* Cards */}
                <div className="mt-12 mx-16 flex gap-6 items-end flex-wrap">

                    {/*                     
                    <div className="flex flex-col md:flex-row items-center justify-center -space-y-12 group md:px-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:px-10 md:space-y-0 md:-space-x-4">

                        <div
                            className="w-[300px] h-[380px] bg-[#0070F3] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between transform transition-transform hover:rotate-[0deg]  rotate-[4deg] -rotate-[4deg]"

                        >
                            <div>
                                <h3 className="text-5xl font-extrabold tracking-tight mb-4">10M+</h3>
                            </div>
                            <div className="border-t border-white/30 pt-4">
                                <p className="text-xl font-semibold mb-1">Organische views</p>
                                <p className="text-sm text-white/80">Groei door slimme content</p>
                            </div>
                        </div>

                        <div
                            className="w-[300px] h-[380px] mt-5 bg-white p-1 rounded-3xl shadow-xl transform transition-transform  hover:rotate-[0deg] rotate-[11deg] -rotate-[11deg]"

                        >
                            <div className="w-full h-full bg-[#E5DACE] rounded-2xl flex items-center justify-center p-4">

                                <img src="https://via.placeholder.com/280x360" alt="Video Shoot" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>

                        <div
                            className="w-[300px] h-[380px] mt-24 bg-[#00E676] text-black p-6 rounded-3xl shadow-xl flex flex-col justify-between transform transition-transform  hover:rotate-[0deg] rotate-[-3deg] -rotate-[-3deg]"

                        >
                            <div>
                                <h3 className="text-5xl font-extrabold tracking-tight mb-4">30+</h3>
                            </div>
                            <div className="border-t border-black/20 pt-4">
                                <p className="text-xl font-semibold mb-1">Merken geholpen</p>
                                <p className="text-sm text-black/70">Van start-up tot multinational</p>
                            </div>
                        </div>

                        <div
                            className="w-[300px] h-[380px] mt-16 bg-white p-1 rounded-3xl shadow-xl transform transition-transform  hover:rotate-[0deg] rotate-[7deg] -rotate-[7deg]"

                        >
                            <div className="w-full h-full relative">

                                <img src="https://via.placeholder.com/280x360" alt="Black Sports Car" className="w-full h-full object-cover rounded-2xl" />
                                <div className="absolute bottom-4 left-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                    <p className="text-black text-xs font-bold px-2 py-1 rounded bg-white">CARBON DAK.</p>
                                </div>
                            </div>
                        </div>

                        



                    </div> */}


                    <div className="flex flex-col md:flex-row items-center justify-center 
  -space-y-12 md:space-y-0 md:space-x-[-16px]"
                    >

                        {/* Card 1 */}
                        <div
                            className="
      w-[300px] h-[380px] bg-[#0070F3] text-white p-6 rounded-3xl shadow-xl 
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
      w-[300px] h-[380px] mt-5 bg-white p-1 rounded-3xl shadow-xl

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
      w-[300px] h-[380px] mt-24 bg-[#00E676] text-black p-6 rounded-3xl shadow-xl 
      flex flex-col justify-between

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
            </div>
        </div>
    );
};

export default HeroSection;