'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';


const Tokenomics = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (


        <div id='tokenomics' className='px-4 md:px-20 text-center grid md:justify-center mb-30 pt-10'>
            <h1 className='text-[#111111] text-[25px] md:text-[52px] font-bold font-[syne]'>Smart Flow Tokenomics</h1>
            <h3 className='font-poppins text-[#525252] text-[24px] mb-7 hidden md:block font-mormal'>Dynamic reward allocation system that adapts to <br /> market conditions</h3>
            <h3 className='font-poppins text-[#525252] text-[18px] mb-7 block md:hidden'>Dynamic reward allocation system that adapts to market conditions</h3>
            <div className="flex items-center justify-center w-full">
                <img
                    src="/tokenomics.svg"
                    alt="Tokenomics"
                    className="drop-shadow-[-18px_20px_32px_rgba(0,0,0,0.35)]"
                />
            </div>


            {/* <div className="h-[413px] bg-[#f1f1f1] rounded-[48px] border-2 border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6 text-left">
            <img src="/smartFlowLogo.svg" alt="" />
            <h1 className='text-black font-[syne] text-[24px] font-bold mt-1'>Dynamic Allocation Tiers</h1>
            <div className='flex justify-between'>
                <div className='grid justify-between '>
                    <h1 className='text-black text-[16px] font-[poppins] font-medium'>LU Price Range</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦50 - ₦200</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦200 - ₦1,000</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦1,000+</h1>
                </div>
              
                <div className='flex flex-col justify-between '>
                    <h1 className='text-black text-[16px] font-[poppins] font-medium'>Burn %</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦50 - ₦200</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦200 - ₦1,000</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦1,000+</h1>
                </div>
                <div className='flex flex-col justify-between '>
                    <h1 className='text-black text-[16px] font-[poppins] font-medium'>Reward Pool %</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦50 - ₦200</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦200 - ₦1,000</h1>
                    <h1 className='text-[#737373] text-[16px] font-[poppins] font-normal'>₦1,000+</h1>
                </div>

            </div>



        </div> */}


            <div className="h-auto md:h-[413px] w-full md:w-[1200px] bg-[#f1f1f1] rounded-[48px] border-2 border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-3 md:p-6 text-left">



                <img src="/smartFlowLogo.svg" alt="" />
                <h1 className='text-black font-[syne] text-[20px] md:text-[24px] font-bold mt-1 mb-4'>Dynamic Allocation Tiers</h1>

                <div className=" divide-y divide-[#E9E9E9]">
                    <div className="grid grid-cols-3  text-[14px] px-0 md:px-8 py-3 md:text-[16px] text-black font-[poppins] font-medium">
                        <div>LU Price Range</div>
                        <div>Burn %</div>
                        <div>Reward Pool %</div>
                    </div>


                    <div className="divide-y divide-[#E9E9E9]">
                        <div className="grid grid-cols-3 px-0 md:px-8 py-4 text-[14px] md:text-[16px] font-[poppins]">
                            <div className="text-[#737373]">₦50 - ₦200</div>
                            <div className="text-[#737373]">50%</div>
                            <div className="font-semibold text-[#6B2ACF] hover:underline cursor-pointer">50%</div>
                        </div>
                        <div className="grid grid-cols-3 px-0 md:px-8 py-4 text-[14px] md:text-[16px] font-[poppins]">
                            <div className="text-[#737373]">₦200 - ₦1,000</div>
                            <div className="text-[#737373]">30%</div>
                            <div className="font-semibold text-[#6B2ACF] hover:underline cursor-pointer">70%</div>
                        </div>
                        <div className="grid grid-cols-3 px-0 md:px-8 py-4 text-[14px] md:text-[16px] font-[poppins]">
                            <div className="text-[#737373]">₦1,000+</div>
                            <div className="text-[#737373]">20%</div>
                            <div className="font-semibold text-[#6B2ACF] hover:underline cursor-pointer">80%</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Tokenomics;
