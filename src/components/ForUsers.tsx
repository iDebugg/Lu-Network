'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';


const ForUsers = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        

            <div id='forUsers' className='pt-10'>
              

                    <div className='px-4 md:px-20 grid md:flex gap-15 md:justify-center mb-20 '>
                        <div className='w-full md:w-[547px] '>
                              
              <div className=' mb-2'>
                        <h1 className='text-[#111111] text-[25px] md:text-[40px] font-bold font-[syne]'>For Users</h1>

                    </div>

                            <h3 className='font-poppins text-[#525252] text-[20px] mb-7 hidden md:block'>Access high-speed internet through our decentralized <br /> network of community-operated hotspots. Pay only <br /> what you need with transparent, flat-rate pricing.</h3>

                            <h3 className='font-poppins text-[#525252] text-[20px] mb-7 block md:hidden'>Access high-speed internet through our decentralized network of community-operated hotspots. Pay only  what you need with transparent, flat-rate pricing.</h3>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-3'>
                                    <img src="/instant.png" alt="" />
                                    <div>
                                        <h1 className='text-[#111111] text-[20px] md:text-[25px] md:text-[24px] font-bold font-[syne]'>Instant Access</h1>
                                        <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Connect to nearby Lu Network hotspots <br /> instantly through the mobile app.</h3>
                                        <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Connect to nearby Lu Network hotspots  instantly through the mobile app.</h3>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <img src="/flexible.png" alt="" />
                                    <div>
                                        <h1 className='text-[#111111]  text-[20px] md:text-[25px] md:text-[24px] font-bold font-[syne]'>Flexible Payment</h1>
                                        <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Pay with LU tokens, Naira, or crypto - whatever <br /> works best for you</h3>
                                        <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Pay with LU tokens, Naira, or crypto - whatever works best for you</h3>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <img src="/flat.png" alt="" />
                                    <div>
                                        <h1 className='text-[#111111]  text-[20px] md:text-[25px] md:text-[24px] font-bold font-[syne]'>Flat-Rate Billing</h1>
                                        <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>No surprises - pay a fixed daily or weekly rate <br /> for unlimited access</h3>
                                        <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>No surprises - pay a fixed daily or weekly rate for unlimited access</h3>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <img src="/secure.png" alt="" />
                                    <div>
                                        <h1 className='text-[#111111]  text-[20px] md:text-[25px] md:text-[24px] font-bold font-[syne]'>Secure & Private</h1>
                                        <h3 className='font-poppins text-[#525252] text-[14px] hidden md:block'>Blockchain-secured connections with <br /> transparent billing and no hidden fees</h3>
                                        <h3 className='font-poppins text-[#525252] text-[14px] block md:hidden'>Blockchain-secured connections with  transparent billing and no hidden fees</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PricingSwitcher />


                    </div>


            </div>
           
    );
};

export default ForUsers;
