import React from 'react';
import { motion } from "framer-motion";
import brand from '../assets/brand-removebg-preview.png'
import brand1 from '../assets/brand1-removebg-preview.png'
import brand2 from '../assets/brand2-removebg-preview.png'
import brand3 from '../assets/brand3-removebg-preview.png'
import brand4 from '../assets/brand4-removebg-preview.png'
import brand5 from '../assets/brand5-removebg-preview.png'
import brand6 from '../assets/brand6-removebg-preview.png'
import brand7 from '../assets/brand7-removebg-preview.png'
import brand8 from '../assets/brand8-removebg-preview.png'

const logos = [brand, brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const Brands = () => {
    return (
        <div className="py-28 ">
            <div className='max-w-7xl mx-auto mb-14'>
                <h1 className="text-6xl mb-10 text-black font-black tracking-tight">
                    These brands <br /> got hyped.
                </h1>
            </div>



            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    style={{ width: 'max-content' }}
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: 'linear',
                    }}
                >

                    {[...logos, ...logos].map((img, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center bg-[#faf4ec] rounded-2xl border border-gray-400 p-4 flex-shrink-0"

                        >
                            <img
                                src={img}
                                className="w-56  h-56 object-cover "
                                alt=""
                            />
                        </div>
                    ))}
                </motion.div>
            </div>


            <div className='w-full mt-20 h-px max-w-7xl mx-auto bg-[#ccc7c1]'>

            </div>
            

        </div>
    );
};

export default Brands;