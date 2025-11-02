/* eslint-disable */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';
import HowItWorks from './HowItWorks';
import ForUsers from './ForUsers';
import Operators from './Operators';
import Tokenomics from './Tokenomics';
import Governance from './Governance';



const Hero = () => {
    const [isOpen, setIsOpen] = useState(true);
   

    return (
        <>
           

            <div id='hero' className='mt-15 md:mt-20 mb-[-5px] '>
                <div className='px-4 md:px-20 text-center pt-20 pb-20 md:pt-20 md:pb-20'>
                    <div className="mx-auto w-[250px] mb-10">
                        <div className="relative rounded-full p-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]">
                            <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-[#67E8F9]/30 to-[#7E22CE]/30 blur-lg"></div>


                            <div className="rounded-full bg-white px-4 py-2 flex items-center justify-center">
                                <h1 className="text-[16px] font-[syne] text-black">Powered by Sui Blockchain</h1>
                            </div>
                        </div>
                    </div>

                    <h1   className='text-[#111111] text-[20px] md:text-[32px] lg:text-[52px] font-bold font-[syne] leading-none mb-5'>
                        Powering <span className="bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent">  Decentralized
                        </span> Internet Access
                    </h1>

                    <h1 style={{ fontFamily: "var(--font-monaSans) !important" }}
                        className='text-[#5A5A5A] text-[20px] hidden md:block'>
                        Lu Network is a mobile-first, token-powered platform that lets you access affordable internet <br />
                        through community-powered hotspots. Pay with LU tokens or fiat. Earn by sharing bandwidth.
                    </h1>

                    <h1 style={{ fontFamily: "var(--font-monaSans) !important" }}
                        className='text-[#5A5A5A] text-[16px] block md:hidden'>
                        Lu Network empowers users, nodes, and blockchain infrastructure in a secure, community-driven ecosystem. Sign up now to be part of the waitlist.
                    </h1>

                    <div className='waitlistBg'>
                        <div className="hidden md:flex items-center justify-center text-center mt-7 gap-5 mb-5">
                            <Link href="/waitlist">
                                <button className="flex items-center justify-center gap-3 bg-white border-2 border-[#E5E5E5] rounded-[61px] w-full md:w-[279px] h-[56px] md:h-[56px] px-4">
                                    <img src="/mobile.svg" alt="" className="h-5 w-5" />
                                    <span className="text-black text-[16px] font-[syne] font-semibold">Join Waitlist</span>
                                </button>

                            </Link>

                            <button className="flex items-center gap-3 bg-black border-2 border-[#E5E5E5] rounded-[61px] w-full md:w-[279px] md:h-[56px] pl-8 py-2 md:py-0 pr-4">
                                <img src="/global.svg" alt="" />
                                <h1 className='text-white text-[16px] font-[syne] font-semibold'>Be a Node Operator</h1>
                            </button>


                        </div>
                        <div className="md:hidden grid items-center justify-center text-center mt-7 gap-5 mb-5">
                            <Link href="/waitlist">
                                <button className="flex items-center justify-center gap-3 bg-white border-2 border-[#E5E5E5] rounded-[61px] w-full p-3">
                                    <img src="/mobile.svg" alt="" />
                                    <h1 className='text-black text-[16px] font-[syne] font-semibold'>Join Waitlist</h1>
                                </button>
                            </Link>

                            <button className="flex items-center justify-center gap-3 bg-black border-2 border-[#E5E5E5] rounded-[61px] w-full p-3">
                                <img src="/global.svg" alt="" />
                                <h1 className='text-white text-[16px] font-[syne] font-semibold'>Be a Node Operator</h1>
                            </button>


                        </div>

                        <div className="flex items-center justify-center w-full">
                            <img src="/EarthNode.svg" alt=""  className="drop-shadow-[-18px_20px_32px_rgba(0,0,0,0.35)]" />
                        </div>
                    </div>
                </div>


                <div className='px-4 md:px-20 text-center mb-30'>
                    <h1 className='text-[#111111] text-[25px] md:text-[40px] font-bold font-[syne]'>Key Features</h1>
                    <h3 className='font-poppins text-[#525252] text-[16px] mb-7 font-medium'>Explore what makes Lu Network different.</h3>
                    <div className="grid md:flex gap-4 md:justify-center">

                        <div className="p-[3px] w-full md:w-[390px] rounded-[48px] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] shadow-[0_16px_48px_rgba(17,17,17,0.55)]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-8 text-left">
                                <img src="/Dollar.png" alt="" />

                                <div className='self-end'>
                                    <h1 className='text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2'>Flat-Rate Access</h1>
                                    <h2 className='text-left text-[#E5E5E5] text-[14px]'>Pay a fixed fee for unlimited internet <br /> access. No per-byte charges or hidden <br /> costs.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-[3px] w-full md:w-[390px] rounded-[48px] bg-gradient-to-r from-[#7E22CE] to-[#67E8F9] shadow-[0_16px_48px_rgba(17,17,17,0.55)]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-8 text-left">
                                <img src="/earn.png" alt="" />

                                <div className="self-end">
                                    <h1 className="text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2">
                                        Earn LU Tokens
                                    </h1>
                                    <h2 className="text-left text-[#E5E5E5] text-[14px]">
                                        Node operators earn rewards based on <br /> bandwidth contribution, uptime, and <br /> network performance.
                                    </h2>
                                </div>
                            </div>
                        </div>


                        <div className="p-[3px] w-full md:w-[390px] rounded-[48px] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] shadow-[0_16px_48px_rgba(17,17,17,0.55)]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-8 text-left">
                                <img src="/lock.png" alt="" />

                                <div className='self-end'>
                                    <h1 className='text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2'>Blockchain Transparency</h1>
                                    <h2 className='text-left text-[#E5E5E5] text-[14px]'>All rewards, burns, and governance <br /> actions are recorded on the Sui <br /> blockchain for full transparency.</h2>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

<HowItWorks />

                <div className='coloredBg mb-30'>
                    <ForUsers />

                   <Operators />

                </div>


               <Tokenomics />

               <Governance />



            </div>
            <LandingFooter />
        </>
    );
};

export default Hero;
