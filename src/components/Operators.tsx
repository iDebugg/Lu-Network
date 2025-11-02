'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';


const Operators = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (


            <div id='operators' className='px-4 md:px-20 grid md:flex gap-15 pt-10 md:justify-center'>

                <div className='flex flex-col bg-black rounded-[50px] h-[700px] w-full md:w-[612px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]'>

                    <div className='flex flex-col gap-3 bg-white rounded-[50px] p-5'>
                        <div className='bg-[#F5F5F5] rounded-[32px] py-4 pl-5 h-[144px] w-full  flex flex-col justify-between'>
                            <div className="items-left w-[153px]">
                                <div className="relative rounded-full p-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]">
                                    <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-[#67E8F9]/30 to-[#7E22CE]/30 blur-lg"></div>


                                    <div className="rounded-full bg-white px-4 py-1 flex items-center justify-center">
                                        
                                        <h1 className="text-[16px] font-[syne] text-black"> High Traffic Area</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-semibold text-[36px] text-black font-[poppins]'>₦15,000<span className='text-[#525252] text-[16px] font-normal	'>/month</span></h1>
                        </div>
                        <div className='bg-[#F5F5F5] rounded-[32px] py-4 pl-5 h-[144px] w-full  flex flex-col justify-between'>
                            <div className="items-left w-[181px]">
                                <div className="relative rounded-full p-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]">
                                    <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-[#67E8F9]/30 to-[#7E22CE]/30 blur-lg"></div>


                                    <div className="rounded-full bg-white px-4 py-1 flex items-center justify-center">
                                        <h1 className="text-[16px] font-[syne] text-black"> Medium Traffic Area</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-semibold text-[36px] text-black font-[poppins]'>₦8,000<span className='text-[#525252] text-[16px] font-normal	'>/month</span></h1>
                        </div>
                        <div className='bg-[#F5F5F5] rounded-[32px] py-4 pl-5 h-[144px] w-full  flex flex-col justify-between'>
                            <div className="items-left w-[170px]">
                                <div className="relative rounded-full p-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]">
                                    <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-[#67E8F9]/30 to-[#7E22CE]/30 blur-lg"></div>


                                    <div className="rounded-full bg-white px-4 py-1 flex items-center justify-center">
                                        <h1 className="text-[16px] font-[syne] text-black"> Low Traffic Area</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-semibold text-[36px] text-black font-[poppins]'>₦3,000<span className='text-[#525252] text-[16px] font-normal	'>/month</span></h1>
                        </div>
                        <h1 className='text-[#525252] text-[16px] font-[poppins] '>Earning Potential</h1>
                        <div className="rounded-[32px] p-3 h-[72px] w-full  bg-gradient-to-b from-[#D5D8D8] to-[#818C8C] shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-all flex items-center justify-center text-center">
                            <span className="inline-flex items-center gap-2 font-[syne] text-[16px] font-bold text-black">
                                Start Operating
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 11L21.7 2.80005" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 6.8V2H17.7" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V13" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>

                    </div>

                    <div className="rounded-b-[50px] pb-[4px] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE]">
                        <div className="h-[90px] p-4 flex items-center justify-center rounded-b-[48px] bg-[#0B0B0B]">
                            <div className="flex items-center gap-2 text-center">
                                <h1 className="text-white font-[poppins] text-[14px]">Earnings vary by location</h1>
                                <div className="w-[8px] h-[8px] bg-white rounded-full" />
                                <h1 className="text-white font-[poppins] text-[14px]">Earnings vary by location</h1>
                                <div className="w-[8px] h-[8px] bg-white rounded-full" />
                                <h1 className="text-white font-[poppins] text-[14px]">Earnings vary by location</h1>
                            </div>
                        </div>
                    </div>



                </div>

                <div className='w-full md:w-[528px]'>
                    <h1 className='text-[#111111] text-[25px] md:text-[40px] font-bold font-[syne] tracking-[-3px]'>Become a Node Operator</h1>
                    <h3 className='font-poppins text-[#525252] text-[20px] mb-7 hidden md:block'>Turn your internet connection into a revenue stream. <br /> Share your bandwidth with the community and earn <br /> LU tokens based on your contribution to the network.</h3>
                    <h3 className='font-poppins text-[#525252] text-[20px] mb-7 block md:hidden'>Turn your internet connection into a revenue stream.  Share your bandwidth with the community and earn  LU tokens based on your contribution to the network.</h3>

                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-3'>
                            <img src="/Earn LU.png" alt="" />
                            <div>
                                <h1 className='text-[#111111] text-[20px] md:text-[24px] font-bold font-[syne]'>Earn LU Tokens</h1>
                                <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Get rewarded in LU tokens based on your node  <br /> uptime and bandwidth contribution</h3>
                                <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Get rewarded in LU tokens based on your node   uptime and bandwidth contribution</h3>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <img src="/Real-time.png" alt="" />
                            <div>
                                <h1 className='text-[#111111] text-[20px] md:text-[24px] font-bold font-[syne]'>Real-time Analytics</h1>
                                <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Track your earnings, uptime, and network  <br /> performance through the mobile dashboard</h3>
                                <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Track your earnings, uptime, and network  performance through the mobile dashboard</h3>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <img src="/Easy.png" alt="" />
                            <div>
                                <h1 className='text-[#111111] text-[20px] md:text-[24px] font-bold font-[syne]'>Easy Setup</h1>
                                <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Pre-configured hardware makes deployment <br /> simple - just scan and connect</h3>
                                <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Pre-configured hardware makes deployment  simple - just scan and connect</h3>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <img src="/Passive.png" alt="" />
                            <div>
                                <h1 className='text-[#111111] text-[20px] md:text-[24px] font-bold font-[syne]'>Passive Income</h1>
                                <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Generate ongoing revenue by sharing your  <br /> unused internet bandwidth</h3>
                                <h3 className='font-poppins text-[#525252] text-[14px] blocck md:hidden'>Generate ongoing revenue by sharing your   unused internet bandwidth</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


    );
};

export default Operators;
