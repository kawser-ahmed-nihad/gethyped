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

                    {/* Card 1 */}
                    {/* কার্ডগুলোর গ্রিড এবং পজিশনিং */}
                    <div className="flex flex-col md:flex-row items-center justify-center -space-y-12 md:space-y-0 md:-space-x-8">

                        {/* ১. নীল কালারের স্ট্যাট কার্ড */}
                        <div
                            className="w-[280px] h-[360px] bg-[#0070F3] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between transform transition-transform hover:scale-105 hover:rotate-[-5deg] rotate-[-7deg] -rotate-[-7deg]"
                            style={{ transform: 'rotate(-7deg)' }}
                        >
                            <div>
                                <h3 className="text-5xl font-extrabold tracking-tight mb-4">10M+</h3>
                            </div>
                            <div className="border-t border-white/30 pt-4">
                                <p className="text-xl font-semibold mb-1">Organische views</p>
                                <p className="text-sm text-white/80">Groei door slimme content</p>
                            </div>
                        </div>

                        {/* ২. ছবির কার্ড (যেমন: ভিডিও শুট বা ফোন) */}
                        <div
                            className="w-[280px] h-[360px] bg-white p-1 rounded-3xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-[3deg] rotate-[5deg] -rotate-[5deg]"
                            style={{ transform: 'rotate(5deg)' }}
                        >
                            <div className="w-full h-full bg-[#E5DACE] rounded-2xl flex items-center justify-center p-4">
                                {/* এখানে আসল ছবির লিঙ্ক বসান */}
                                <img src="https://via.placeholder.com/280x360" alt="Video Shoot" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>

                        {/* ৩. সবুজ কালারের স্ট্যাট কার্ড */}
                        <div
                            className="w-[280px] h-[360px] bg-[#00E676] text-black p-6 rounded-3xl shadow-xl flex flex-col justify-between transform transition-transform hover:scale-105 hover:rotate-[-3deg] rotate-[-5deg] -rotate-[-5deg]"
                            style={{ transform: 'rotate(-5deg)' }}
                        >
                            <div>
                                <h3 className="text-5xl font-extrabold tracking-tight mb-4">30+</h3>
                            </div>
                            <div className="border-t border-black/20 pt-4">
                                <p className="text-xl font-semibold mb-1">Merken geholpen</p>
                                <p className="text-sm text-black/70">Van start-up tot multinational</p>
                            </div>
                        </div>

                        {/* ৪. গাড়ির ছবির কার্ড */}
                        <div
                            className="w-[280px] h-[360px] bg-white p-1 rounded-3xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-[7deg] rotate-[7deg] -rotate-[7deg]"
                            style={{ transform: 'rotate(7deg)' }}
                        >
                            <div className="w-full h-full relative">
                                {/* এখানে আসল গাড়ির ছবির লিঙ্ক বসান */}
                                <img src="https://via.placeholder.com/280x360" alt="Black Sports Car" className="w-full h-full object-cover rounded-2xl" />
                                <div className="absolute bottom-4 left-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                    <p className="text-black text-xs font-bold px-2 py-1 rounded bg-white">CARBON DAK.</p>
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