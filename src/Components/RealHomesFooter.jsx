import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaGofore } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { NavLink } from "react-router";

const RealHomesFooter = () => {


  return (
    <>
      <style>{`

       .mobile-friendly-footer{
clip-path: path('M 0,245 C 0,245 0,225 15,220 L 1265,2 C 1280,0 1280,14 1280,14 L 1280,320 L 0,320 Z') !important;     }
@media (max-width: 767px) {
  .mobile-friendly-footer {
clip-path: path('M 0 70 Q 0 45, 25 38 L 375 0 Q 400 0, 400 25 L 400 1000 L 0 1000 Z') !important;    background: #EAE4D8 !important;
    margin-left: 15px !important;
    margin-right: 15px !important;
    width: calc(100% - 30px) !important;
  }
    @media (min-width: 768px) and (max-width: 1023px) {
  .mobile-friendly-footer {
    clip-path: path('M 0,245 C 0,245 0,225 15,220 L 753,2 C 768,0 768,14 768,14 L 768,320 L 0,320 Z') !important;
     margin-left: 15px !important;
    margin-right: 15px !important;
    width: calc(100% - 30px) !important;
  }
}
}

      `}</style>


      <div className="w-full  ">
        {/*  — top-right */}
        <div className="hidden lg:block relative h-0">
          <div className="absolute right-4 sm:right-10 -bottom-10 z-20">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#fbc2ff] rounded-full shadow-lg animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold uppercase fill-black">
                    <textPath href="#circlePath">
                      GET HYPED • GET NOTICED • GET RESULTS •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="z-10 text-black font-black text-2xl sm:text-3xl italic -rotate-12">
                GH
              </div>
            </div>
          </div>
        </div>
        <div
          className="mobile-friendly-footer md:max-w-7xl md:mx-auto relative bg-[#eae4d8] w-full md:h-80 transition-all duration-300"

        >



          <div className="flex flex-col h-full pt-2 pb-6  md:pb-0 md:px-2  ">

            {/* GETHYPED  */}
            <div className="flex flex-col items-center sm:flex-row  sm:justify-between gap-6 mt-auto">

              {/*  GETHYPED SVG  */}
              <div className="w-[360px] md:w-64 mt-2 relative  shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none">
                  <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC" />
                  <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
                  <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
                  <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
                  <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
                  <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
                  <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white" />
                  <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
                  <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
                  <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
                </svg>
              </div>

              {/*  nav + social + contact */}
              <div className="flex md:flex-row flex-col mx-7 md:mx-0 pr-20 relative md:-mt-20  gap-4">
                <div>
                  <ul className="flex  items-center gap-2 font-semibold text-sm">
                    {["Expertises", "Work", "About", "Contact"].map((item) => (
                      <li key={item}>
                        <NavLink
                          className="group bg-white relative block px-3 py-1.5 text-sm font-semibold cursor-pointer overflow-hidden rounded-md"
                        >
                          <span
                            className="relative z-10 block transition-[translate] duration-[750ms] group-hover:[translate:0_-100%]"
                            style={{
                              transitionTimingFunction: `linear(0 0%, 0.5737 7.6%, 0.8382 11.87%, 1.0292 16.54%, 1.1258 21.53%, 1.1424 24.48%, 1.1165 31.01%, 1.0507 38.62%, 0.9995 46.99%, 1 100%)`,
                            }}
                          >
                            {item}
                          </span>
                          <span
                            className="absolute inset-0 z-10 flex items-center justify-center text-white transition-[translate] duration-[750ms] [translate:0_100%] group-hover:[translate:0_0%]"
                            style={{
                              transitionTimingFunction: `linear(0 0%, 0.5737 7.6%, 0.8382 11.87%, 1.0292 16.54%, 1.1258 21.53%, 1.1424 24.48%, 1.1165 31.01%, 1.0507 38.62%, 0.9995 46.99%, 1 100%)`,
                            }}
                          >
                            {item}
                          </span>
                          <span
                            className="absolute inset-0 z-0 transition-[transform] duration-[600ms] [transform:translateY(100%)_skewY(-8deg)] [transform-origin:bottom_right] group-hover:[transform:translateY(0%)_skewY(0deg)]"
                            style={{
                              background: "linear-gradient(to right, #7b4397 0%, #dc2430 40%, #f5a623 70%)",
                              transitionTimingFunction: `cubic-bezier(0.23, 1, 0.320, 1)`,
                            }}
                          />
                          <span
                            className="absolute inset-0 z-0 transition-[transform] duration-[600ms] delay-300 [transform:translateY(100%)] group-hover:[transform:translateY(0%)]"
                            style={{
                              background: "#111",
                              transitionTimingFunction: `cubic-bezier(0.23, 1, 0.320, 1)`,
                            }}
                          />
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center mt-4 gap-2">
                    <span className="font-bold text-sm">Follow us</span>
                    <div className="flex items-center gap-2">
                      <div className="bg-white transition-all duration-300 hover:scale-110 p-2.5 rounded-full">
                        <GrLinkedinOption size={14} />
                      </div>
                      <div className="bg-white transition-all duration-300 hover:scale-110 p-2.5 rounded-full">
                        <FaGithub size={14} />
                      </div>
                      <div className="bg-white transition-all duration-300 hover:scale-110 p-2.5 rounded-full">
                        <FaGofore size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h1 className="text-sm  font-bold">Contact</h1>
                  <p className="text-xs">kawserahmednihad@gmail.com</p>
                  <p className="text-xs">+8801841397448</p>
                  <h1 className="text-sm font-bold mt-1">Address</h1>
                  <p className="text-xs">Mymensingh, Bangladesh</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealHomesFooter;