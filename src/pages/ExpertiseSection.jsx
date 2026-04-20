import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ExpertiseSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, 120]);


    const scale2 = useTransform(scrollYProgress, [0.25, 0.5], [1, 0.9]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 120]);


    const scale3 = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.9]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 120]);


    const scale4 = useTransform(scrollYProgress, [0.75, 1], [1, 0.9]);
    const y4 = useTransform(scrollYProgress, [0.75, 1], [0, 120]);





    return (
        <section className=" max-w-7xl mx-auto py-20 px-6 md:px-0">

            <div ref={ref} className="relative h-[400vh]">
                <div className="sticky top-0  h-screen flex ">
                    <motion.div
                        style={{ scale: scale1, y: y1, zIndex: 4 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-white w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row  gap-12"
                    >


                        <div className="flex-1 z-10">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>

                            <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                                Social strategy
                            </h2>

                            <div className="max-w-md">
                                <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold  mb-8">
                                    We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                                </p>



                                <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                    <span className='text-sm font-bold'> Meer over social strategie</span>
                                    <span className='bg-[#fffef7] p-2 rounded-md'>
                                        <BsArrowRight className='text-black' />
                                    </span>
                                </button>


                            </div>
                        </div>


                        <div className="relative flex-shrink-0">

                            <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                                01
                            </span>


                            <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                                <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/300x400"
                                        alt="Social Strategy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
                <div className="sticky top-0 h-screen flex ">
                    <motion.div
                        style={{  scale: scale2, y: y2, zIndex: 3 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#fcb8fa] w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-12"
                    >


                        <div className="flex-1 z-10">
                            <span className="bg-[#ffffff] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>

                            <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                                Social strategy
                            </h2>

                            <div className="max-w-md">
                                <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold  mb-8">
                                    We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                                </p>



                                <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                    <span className='text-sm font-bold'> Meer over content creatie</span>
                                    <span className='bg-[#fffef7] p-2 rounded-md'>
                                        <BsArrowRight className='text-black' />
                                    </span>
                                </button>


                            </div>
                        </div>


                        <div className="relative flex-shrink-0">

                            <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                                02
                            </span>


                            <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                                <div className="border-[12px] border-white rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/300x400"
                                        alt="Social Strategy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
                <div className="sticky top-0 h-screen flex ">
                    <motion.div
                        style={{ scale: scale3, y: y3, zIndex: 2 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#33c791] w-full rounded-[40px] p-6 md:p-12 flex items-center justify-center"
                    >


                        <div className="flex-1 z-10">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>

                            <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                                Social strategy
                            </h2>

                            <div className="max-w-md">
                                <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold  mb-8">
                                    We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                                </p>



                                <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                    <span className='text-sm font-bold'>Meer over activatie</span>
                                    <span className='bg-[#fffef7] p-2 rounded-md'>
                                        <BsArrowRight className='text-black' />
                                    </span>
                                </button>


                            </div>
                        </div>


                        <div className="relative flex-shrink-0">

                            <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                                03
                            </span>


                            <div className="relative z-10 transform mt-2 rotate-[3deg] transition-transform duration-500">
                                <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/300x400"
                                        alt="Social Strategy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
                <div className="sticky top-0 h-screen flex">
                    <motion.div
                        style={{ scale: scale4, y: y4, zIndex: 1 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#0d8dff] w-full
                         rounded-[40px] p-6 md:p-12 flex items-center justify-center"
                    >


                        <div className="flex-1 z-10">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>

                            <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                                Social strategy
                            </h2>

                            <div className="max-w-md">
                                <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold  mb-8">
                                    We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                                </p>



                                <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                    <span className='text-sm font-bold'>Meer over data</span>
                                    <span className='bg-[#fffef7] p-2 rounded-md'>
                                        <BsArrowRight className='text-black' />
                                    </span>
                                </button>


                            </div>
                        </div>


                        <div className="relative flex-shrink-0">

                            <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                                04
                            </span>


                            <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                                <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/300x400"
                                        alt="Social Strategy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* <div className="  bg-white rounded-[40px] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">


                    <div className="flex-1 z-10">
                        <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                            Expertise
                        </span>

                        <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                            Social strategy
                        </h2>

                        <div className="max-w-md">
                            <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                Slimme strategie. Sterke start.
                            </h4>
                            <p className="text-gray-800 font-semibold  mb-8">
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                            </p>



                            <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                <span className='text-sm font-bold'> Meer over social strategie</span>
                                <span className='bg-[#fffef7] p-2 rounded-md'>
                                    <BsArrowRight className='text-black' />
                                </span>
                            </button>


                        </div>
                    </div>


                    <div className="relative flex-shrink-0">

                        <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                            01
                        </span>


                        <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                            <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="Social Strategy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="  bg-[#fcb8fa] rounded-[40px] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">


                    <div className="flex-1 z-10">
                        <span className="bg-[#ffffff] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                            Expertise
                        </span>

                        <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                            Social strategy
                        </h2>

                        <div className="max-w-md">
                            <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                Slimme strategie. Sterke start.
                            </h4>
                            <p className="text-gray-800 font-semibold  mb-8">
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                            </p>



                            <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                <span className='text-sm font-bold'> Meer over content creatie</span>
                                <span className='bg-[#fffef7] p-2 rounded-md'>
                                    <BsArrowRight className='text-black' />
                                </span>
                            </button>


                        </div>
                    </div>


                    <div className="relative flex-shrink-0">

                        <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                            02
                        </span>


                        <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                            <div className="border-[12px] border-white rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="Social Strategy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="  bg-[#33c791] rounded-[40px] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">


                    <div className="flex-1 z-10">
                        <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                            Expertise
                        </span>

                        <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                            Social strategy
                        </h2>

                        <div className="max-w-md">
                            <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                Slimme strategie. Sterke start.
                            </h4>
                            <p className="text-gray-800 font-semibold  mb-8">
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                            </p>



                            <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                <span className='text-sm font-bold'>Meer over activatie</span>
                                <span className='bg-[#fffef7] p-2 rounded-md'>
                                    <BsArrowRight className='text-black' />
                                </span>
                            </button>


                        </div>
                    </div>


                    <div className="relative flex-shrink-0">

                        <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                            03
                        </span>


                        <div className="relative z-10 transform mt-2 rotate-[3deg] transition-transform duration-500">
                            <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="Social Strategy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="  bg-[#0d8dff] rounded-[40px] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">


                    <div className="flex-1 z-10">
                        <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                            Expertise
                        </span>

                        <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-12 tracking-tighter">
                            Social strategy
                        </h2>

                        <div className="max-w-md">
                            <h4 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                                Slimme strategie. Sterke start.
                            </h4>
                            <p className="text-gray-800 font-semibold  mb-8">
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                            </p>



                            <button className='bg-[#FF5722] space-x-2 p-1.5 flex items-center rounded-xl text-white cursor-pointer
  transition-transform duration-500
  hover:-rotate-6 hover:scale-105
  [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
                                <span className='text-sm font-bold'>Meer over data</span>
                                <span className='bg-[#fffef7] p-2 rounded-md'>
                                    <BsArrowRight className='text-black' />
                                </span>
                            </button>


                        </div>
                    </div>


                    <div className="relative flex-shrink-0">

                        <span className="absolute -top-10 -right-5 text-8xl  text-[#eae4d8] leading-none font-bold z-0">
                            04
                        </span>


                        <div className="relative z-10 transform mt-2 rotate-[3deg]  transition-transform duration-500">
                            <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden w-[300px] h-[400px] shadow-2xl">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="Social Strategy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>


        </section>
    );
};

export default ExpertiseSection;