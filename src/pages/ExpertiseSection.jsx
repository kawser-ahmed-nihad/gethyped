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
        <section className=" max-w-7xl mx-auto md:py-20 px-6 md:px-0">

            <div ref={ref} className="relative  md:h-[400vh]">
                <div className="sticky top-0  flex ">
                    <motion.div
                        style={{ scale: scale1, y: y1, zIndex: 4 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-white w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row  gap-12"
                    >


                        <div className="flex-1 z-10 p-2 md:p-10 ">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>
                            <div className='flex md:flex-row flex-col justify-between '>
                                <h2 className="text-4xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-2 md:mb-12 tracking-tighter">
                                    Social strategy
                                </h2>

                                <div className="relative z-10 transform md:rotate-[4deg]  rotate-[2deg]  transition-transform duration-500">
                                    <div className="border-[12px] border-[#FF5722] rounded-[40px] overflow-hidden md:w-[300px] md:h-[400px] w-[200px] h-[250px] md:-mr-20 shadow-2xl">
                                        <img
                                            src="https://via.placeholder.com/300x400"
                                            alt="Social Strategy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="max-w-md relative md:-mt-60">
                                <h4 className="text-xl font-bold mb-2 md:mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold md:4  md:mb-10">
                                    We duiken diep in jouw merk, doelgroep en <br /> doelen. En vertalen data naar een duidelijk <br /> plan met formats die écht impact maken. <br /> Zo weet je precies waarom het werkt.
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

                            <span className="absolute -top-[700px] right-2   md:top-1 md:-right-5 md:text-8xl text-6xl text-[#eae4d8] leading-none font-bold z-0">
                                01
                            </span>
                        </div>

                    </motion.div>
                </div>
                <div className="sticky top-0  flex ">
                    <motion.div
                        style={{ scale: scale2, y: y2, zIndex: 4 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#fdb8fb] w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row  gap-12"
                    >


                        <div className="flex-1 z-10 p-2 md:p-10 ">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>
                            <div className='flex md:flex-row flex-col justify-between '>
                                <h2 className="text-4xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-2 md:mb-12 tracking-tighter">
                                    Social strategy
                                </h2>

                                <div className="relative z-10 transform md:rotate-[4deg]  rotate-[2deg]  transition-transform duration-500">
                                    <div className="border-[12px] border-[#feffff] rounded-[40px] overflow-hidden md:w-[300px] md:h-[400px] w-[200px] h-[250px] md:-mr-20 shadow-2xl">
                                        <img
                                            src="https://via.placeholder.com/300x400"
                                            alt="Social Strategy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="max-w-md relative md:-mt-60">
                                <h4 className="text-xl font-bold mb-2 md:mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold mb-4  md:mb-10">
                                    We duiken diep in jouw merk, doelgroep en <br /> doelen. En vertalen data naar een duidelijk <br /> plan met formats die écht impact maken. <br /> Zo weet je precies waarom het werkt.
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

                            <span className="absolute -top-[710px] right-2    md:top-1 md:-right-5 md:text-8xl text-6xl  text-[#eae4d8] leading-none font-bold z-0">
                                02
                            </span>
                        </div>

                    </motion.div>
                </div>
                <div className="sticky top-0  flex ">
                    <motion.div
                        style={{ scale: scale3, y: y3, zIndex: 4 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#33c891] w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row  gap-12"
                    >


                        <div className="flex-1 z-10 p-2 md:p-10 ">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>
                            <div className='flex md:flex-row flex-col justify-between '>
                                <h2 className="text-4xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-2 md:mb-12 tracking-tighter">
                                    Social strategy
                                </h2>

                                <div className="relative z-10 transform md:rotate-[4deg]  rotate-[2deg]  transition-transform duration-500">
                                    <div className="border-[12px] border-[#feffff] rounded-[40px] overflow-hidden md:w-[300px] md:h-[400px] w-[200px] h-[250px] md:-mr-20 shadow-2xl">
                                        <img
                                            src="https://via.placeholder.com/300x400"
                                            alt="Social Strategy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="max-w-md relative md:-mt-60">
                                <h4 className="text-xl font-bold mb-2 md:mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold mb-4 md:mb-10">
                                    We duiken diep in jouw merk, doelgroep en <br /> doelen. En vertalen data naar een duidelijk <br /> plan met formats die écht impact maken. <br /> Zo weet je precies waarom het werkt.
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

                            <span className="absolute -top-[710px] right-2    md:top-1 md:-right-5 md:text-8xl text-6xl text-[#eae4d8] leading-none font-bold z-0">
                                03
                            </span>
                        </div>

                    </motion.div>
                </div>
                <div className="sticky  top-0  flex ">
                    <motion.div
                        style={{ scale: scale4, y: y4, zIndex: 4 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="bg-[#0e8dff] w-full rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row  gap-12"
                    >


                        <div className="flex-1 z-10 p-2 md:p-10 ">
                            <span className="bg-[#eae4d8] text-black text-xs font-bold px-3 py-2 rounded-md uppercase tracking-wider">
                                Expertise
                            </span>
                            <div className='flex md:flex-row flex-col justify-between '>
                                <h2 className="text-4xl md:text-8xl font-bold text-[#1A1A1A] mt-6 mb-2 md:mb-12 tracking-tighter">
                                    Social strategy
                                </h2>

                                <div className="relative z-10 transform md:rotate-[4deg]  rotate-[2deg]  transition-transform duration-500">
                                    <div className="border-[12px] border-[#feffff] rounded-[40px] overflow-hidden md:w-[300px] md:h-[400px] w-[200px] h-[250px] md:-mr-20 shadow-2xl">
                                        <img
                                            src="https://via.placeholder.com/300x400"
                                            alt="Social Strategy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="max-w-md relative md:-mt-60">
                                <h4 className="text-xl font-bold mb-2 md:mb-4 text-[#1A1A1A]">
                                    Slimme strategie. Sterke start.
                                </h4>
                                <p className="text-gray-800 font-semibold mb-4 md:mb-10">
                                    We duiken diep in jouw merk, doelgroep en <br /> doelen. En vertalen data naar een duidelijk <br /> plan met formats die écht impact maken. <br /> Zo weet je precies waarom het werkt.
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

                            <span className="absolute -top-[710px] right-2   md:top-1 md:-right-5 md:text-8xl text-6xl text-[#eae4d8] leading-none font-bold z-0">
                                04
                            </span>
                        </div>

                    </motion.div>
                </div>
             
            </div>


        </section>
    );
};

export default ExpertiseSection;