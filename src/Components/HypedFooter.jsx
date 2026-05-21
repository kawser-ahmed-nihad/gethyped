import React from 'react';
import { BsFire } from 'react-icons/bs';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube, FaEnvelope, FaFire } from 'react-icons/fa';

const HypedFooter = () => {
  return (
    <footer className=" hidden md:block relative max-w-7xl mx-auto pt-20 ">


      <div className=" text-center pt-28   ">
        <h2 className="text-8xl  font-bold text-[#1A1A1A] mb-8">
          Let's Get Hyped!
        </h2>

        <div className="flex justify-center space-x-2 ">
          {/* Mail Button */}


          <button className='bg-transparent outline outline-black space-x-2 p-1.5 flex items-center rounded-xl cursor-pointer
                              transition-transform duration-500
                              hover:-rotate-6 hover:scale-105
                              [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
            <span className='text-[16px] font-bold'>Mail ons direct</span>
            <span className='bg-black p-2 rounded-md'>
              <FaEnvelope size={18} className="text-white" />
            </span>
          </button>

          <button className='bg-[#fa5424]  space-x-2 p-1.5 flex items-center rounded-xl cursor-pointer
                              transition-transform duration-500
                              hover:-rotate-6 hover:scale-105
                              [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]'>
            <span className='text-[16px] text-white font-bold'>Get Results</span>
            <span className='bg-[#fffef7] p-2 rounded-md'>
              <BsFire className='text-[#fa5b2d]' />
            </span>
          </button>



        </div>
      </div>


    </footer>
  );
};

export default HypedFooter;