/* eslint-disable */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const LandingFooter = () => {


    return (
        <div className='bg-white px-5 md:px-15 py-10 md:py-15 z-100 relative'>
            <div className='md:flex grid gap-5 justify-between mb-15'>
                <div className='flex flex-col space-y-10'>
                    <img src="/LuLogo.svg" alt="" className='w-40' />
                    <h1 className='text-[15px] text-[#737373] font-poppins'>Decentralized internet sharing platform powered by <br /> blockchain technology. Join the future of connectivity.</h1>
                    <div className="flex gap-3">
                        <img src="/Social1.svg" alt="" /><img src="/Social2.svg" alt="" /><img src="/Social3.svg" alt="" />
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-[16px] font-semibold font-[syne] text-black'>Product</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>How It Works</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>For Users</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>For Operators</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Mobile App</h1>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-[16px] font-semibold font-[syne] text-black'>Protocol</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Tokenomics</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Governance</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Whitepaper</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>API Docs</h1>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-[16px] font-semibold font-[syne] text-black'>Community</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Discord</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Twitter</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>GitHub</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Blog</h1>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-[16px] font-semibold font-[syne] text-black'>Company</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>About</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Careers</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Privary</h1>
                    <h1 className='text-[16px] font-medium font-[syne] text-[#737373]'>Terms</h1>
                </div>
            </div>
            <h1 style={{ fontFamily: "var(--font-monaSans) !important" }} className='text-[16px] text-[#000000]'>© Lu Network {new Date().getFullYear()}</h1>
        </div>
    );
};

export default LandingFooter;
