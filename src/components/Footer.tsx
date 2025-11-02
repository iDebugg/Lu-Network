'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const Footer = () => {


    return (
        <div className='flex flex-col items-center justify-center text-center py-5 border border-t-[#E5E5E5]'>
            <hr className='text-[#737373]'/>
            <h1 style={{ fontFamily: "var(--font-monaSans) !important" }} className='text-[16px] text-[#737373]'>© Lu Network {new Date().getFullYear()}</h1>
        </div>
    );
};

export default Footer;
