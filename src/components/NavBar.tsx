'use client';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  const handleNavClick = (key: string) => {
    setMenu(key);
    setIsOpen(false); 
  };

  return (
    <nav className="navbggg bg-[#f1f1f1] text-white px-4 md:px-20 py-3  top-0 left-0 w-full fixed z-50 font-[syne]">
      <div className=" mx-auto flex justify-between items-center">

        <AnchorLink className="anchor-link" offset={50} href="#hero">
          <div
            className="flex gap-3 items-center "
            onClick={() => setMenu('hero')}
          >
            <img src="/Asset 5_1 1.svg" alt="" className="ToroGlogo" />
            <h1 className="CompanyName text-[24px] font-semibold font-[syne] text-[#111111]">
            Lu Network
            </h1>
          </div>
        </AnchorLink>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburgerBg sm:hidden text-[#737373] hover:text-white p-2 rounded-[12px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w- h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex space-x-6">

          <AnchorLink className="anchor-link text-[#737373]" href="#howItWorks">
            <p onClick={() => setMenu('howItWorks')}>How it Works</p>
          </AnchorLink>


          <AnchorLink className="anchor-link text-[#737373]" offset={50} href="#forUsers">
            <p onClick={() => setMenu('forUsers')}>For Users</p>
          </AnchorLink>


          <AnchorLink
            className="anchor-link text-[#737373]"
            offset={50}
            href="#operators"
          >
            <p onClick={() => setMenu('operators')}>For Operators</p>
          </AnchorLink>


          <AnchorLink className="anchor-link text-[#737373]" offset={50} href="#tokenomics">
            <p onClick={() => setMenu('tokenomics')}>Tokenomics</p>
          </AnchorLink>


          <AnchorLink className="anchor-link text-[#737373]" offset={50} href="#governance">
            <p onClick={() => setMenu('governance')}>Governance</p>
          </AnchorLink>

          

        </div>
        <Link href="/waitlist" className='hidden md:block'>
      <button className='text-white bg-black py-3 px-7 rounded-[29px] text-[16px] font-semibold hidden md:block'>Join Waitlist</button></Link>
      </div>

      {isOpen && (
        <div className="sm:hidden text-[20px] mt-3 space-y-2 grid">
          <AnchorLink
            className="anchor-link text-[#737373] mb-2"
            href="#howItWorks"
            onClick={() => handleNavClick("howItWorks")}
          >
            How it Works
          </AnchorLink>

          <AnchorLink
            className="anchor-link text-[#737373] mb-2"
            offset={50}
            href="#forUsers"
            onClick={() => handleNavClick("forUsers")}
          >
            For Users
          </AnchorLink>

          <AnchorLink
            className="anchor-link text-[#737373] mb-2"
            offset={50}
            href="#operators"
            onClick={() => handleNavClick("operators")}
          >
            For Operators
          </AnchorLink>

          <AnchorLink
            className="anchor-link text-[#737373] mb-2"
            offset={50}
            href="#tokenomics"
            onClick={() => handleNavClick("tokenomics")}
          >
            Tokenomics
          </AnchorLink>

          <AnchorLink
            className="anchor-link text-[#737373] mb-2"
            offset={50}
            href="#governance"
            onClick={() => handleNavClick("governance")}
          >
            Governance
          </AnchorLink>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
