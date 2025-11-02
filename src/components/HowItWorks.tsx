'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';


const HowItWorks = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        

            <div id='howItWorks' className='mt-15 md:mt-20  pt-20'>
              

                <div className='px-4 md:px-20 text-center howItWorks mb-30'>
                    <h1 className='text-[#111111] text-[25px] md:text-[52px] font-bold font-[syne]'>How Lu Network Works</h1>
                    <h3 className='font-poppins text-[#525252] text-[24px] mb-7 hidden md:block font-normal'>A simple, four-step process to join the decentralized <br /> internet revolution</h3>
                    <h3 className='font-poppins text-[#525252] text-[18] mb-7 block md:hidden'>A simple, four-step process to join the decentralized  internet revolution</h3>
                    <div className="grid gap-4 md:justify-center">

                       <div className='grid md:flex gap-4'> 
                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] w-full md:w-[592px]">
                            <div className="h-[400px] bg-[#f1f1f1] rounded-[48px] p-10 text-left cardsBgs">
                                <img src="/download.png" alt="" />


                                <div className='mt-2'>
                                    <h1 className='text-[24px] font-bold font-[syne] text-black mb-2'>Download & Connect</h1>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins hidden md:block'>Download the Lu Network app, scan QR codes to <br /> register nodes, and connect to LuNetwork Wi-Fi <br /> hotspots in your area.</h2>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins block md:hidden'>Download the Lu Network app, scan QR codes to  register nodes, and connect to LuNetwork Wi-Fi hotspots in your area.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] w-full md:w-[592px]">
                            <div className="h-[400px] bg-[#f1f1f1] rounded-[48px] p-10 text-left cardsBgs">
                                <img src="/share.png" alt="" />


                                <div className='mt-2'>
                                    <h1 className='text-[24px] font-bold font-[syne] text-black mb-2'>Share or Access</h1>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins hidden md:block'>Share your internet to become a node operator, or <br /> purchase flat-rate access to connect through the <br /> network.</h2>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins block md:hidden'>Share your internet to become a node operator, or  purchase flat-rate access to connect through the network.</h2>
                                </div>
                            </div>
                        </div>
                        </div>

                    <div className='grid md:flex gap-4'>
                    <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] w-full md:w-[592px]">
                            <div className="h-[400px] bg-[#f1f1f1] rounded-[48px] p-10 text-left cardsBgs">
                                <img src="/earnToken.png" alt="" />


                                <div className='mt-2'>
                                    <h1 className='text-[24px] font-bold font-[syne] text-black mb-2'>Earn LU Tokens</h1>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins hidden md:block'>Node operators earn LU tokens based on uptime <br /> and bandwidth contribution. Users pay with LU or <br /> fiat.</h2>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins block md:hidden'>Node operators earn LU tokens based on uptimeand bandwidth contribution. Users pay with LU or  fiat.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] w-full md:w-[592px]">
                            <div className="h-[400px] bg-[#f1f1f1] rounded-[48px] p-10 text-left cardsBgs">
                                <img src="/govern.png" alt="" />


                                <div className='mt-2'>
                                    <h1 className='text-[24px] font-bold font-[syne] text-black mb-2'>Govern Together</h1>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins hidden md:block'>Participate in DAO governance using your LU <br /> tokens to shape the future of the network.</h2>
                                    <h2 className='text-left text-[#525252] text-[14px] font-poppins block md:hidden'>Participate in DAO governance using your LU  tokens to shape the future of the network.</h2>
                                </div>
                            </div>
                        </div>
                    </div>





                    </div>
                </div>

              



            </div>
           
    );
};

export default HowItWorks;
