/* eslint-disable */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';
import PricingSwitcher from './PricingSwitcher';
import LandingFooter from './LandingFooter';


const Governance = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (


        <div id='governance' className='px-4 md:px-20 text-center grid md:justify-center pt-10'>
            <h1 className='text-[#111111] text-[25px] md:text-[54px] font-bold font-[syne]'>Community Governance</h1>
            <h3 className='font-poppins text-[#525252] text-[20px] mb-7 hidden md:block'>Lu Network is governed by its community through a <span className='bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent'>Decentralized Autonomous Organization (DAO)</span>. LU <br /> token holders can propose and vote on network improvements, parameter changes, and strategic <br /> decisions.</h3>
            <h3 className='font-poppins text-[#525252] text-[16px] mb-7 block md:hidden'>Lu Network is governed by its community through a <span className='bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent'>Decentralized Autonomous Organization (DAO)</span>. </h3>


            <div className="rounded-full bg-white px-4 py-3 flex items-center justify-center w-[279px] mx-auto mb-30 border-2 border-[#E5E5E5] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <h1 className="text-[16px] font-[syne] text-black font-semibold">View Active Proposals</h1>

            </div>
            <div className='w-full h-[500px] md:w-[1200px] md:h-[413px] bg-[#7E22CE] rounded-[48px] border-3 border-white governanceCard mb-10 py-8 md:py-15 px-3 flex flex-col justify-between shadow-[0_32px_80px_rgba(126,34,206,0.35)]'>

            <div className="bg-transparent w-[167px] h-[48px] rounded-[32px] mx-auto flex items-center justify-center"> </div>



                <div><h1 className="text-[24px] md:text-[32px] font-[syne] font-bold bg-gradient-to-r from-white/75 via-white to-white/75 bg-clip-text text-transparent">
                    Ready to Join the Future?
                </h1>
                    <h1 className='text-[16px] font-poppins text-white/90 hidden md:block'>Download the Lu Network app today and start experiencing decentralized internet access. Whether <br /> you want to connect or operate a node, we've got you covered.</h1>
                    <h1 className='text-[16px] font-poppins text-white/90 block md:hidden'>Download the Lu Network app today and start experiencing decentralized internet access. Whether  you want to connect or operate a node, we've got you covered.</h1>

                </div>
                <button className='bg-white text-black px-7 py-3 text-[16px] font-[syne] font-semibold rounded-[29px] w-[184px] mx-auto flex items-center justify-center'>Download app</button>
                <h1 className='text-white text-[14px] underline font-poppins'>View Documentation</h1>

            </div>
            <img src="/LuNetwork.png" alt="" className='w-full md:w-[1200px]' />








        </div>

    );
};

export default Governance;
