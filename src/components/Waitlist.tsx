'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';


const Waitlist = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <NavBar />

            <div className='mt-15 md:mt-20 FAGbG'>
                <div className='px-4 md:px-20  text-center pt-20 pb-20 md:pt-50 md:pb-50 waitlistBg '>
                    <h1 className='text-[#111111] text-[20px] md:text-[52px] font-bold font-[syne] leading-none mb-5'>Be the First to Join the Future of <br />
                        <span className="bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent">
                            Decentralized Internet
                        </span>
                    </h1>
                    <h1 style={{ fontFamily: "var(--font-monaSans) !important" }}
                        className='text-[#5A5A5A] text-[20px] hidden md:block'>Lu Network empowers users, nodes, and blockchain infrastructure in a secure, <br /> community-driven ecosystem. Sign up now to be part of the waitlist.</h1>
                    <h1 style={{ fontFamily: "var(--font-monaSans) !important" }}
                        className='text-[#5A5A5A] text-[16px] block md:hidden'>Lu Network empowers users, nodes, and blockchain infrastructure in a secure, community-driven ecosystem. Sign up now to be part of the waitlist.</h1>
                    <div className="flex items-center justify-center text-center mt-7">
                        <div className="flex items-center justify-between bg-white border border-[#E5E5E5] rounded-[61px] w-full md:w-[500px] pl-5 py-0.5 pr-0.5">
                            <input
                                type="text"
                                placeholder="Type your email"
                                className="placeholder:text-[#A4A4A4] placeholder:text-[16px] text-[#000000] outline-none w-[200px] md:w-[300px]"
                            />
                            <button className="text-white bg-black py-3 px-4 md:px-7 rounded-[29px] text-[14px] md:text-[16px] font-semibold font-[syne]">
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-center mt-7">
                        <div className="flex items-center justify-between  w-[296px] ">
                            <img src="/Frame 76.png" alt="" />
                            <h1 style={{ fontFamily: "var(--font-monaSans) !important" }} className='text-[#5A5A5A] text-[12px]'>Join <span className='text-[#111111]'>+1,000</span> others on the waitlist</h1>
                        </div>
                    </div>
                </div>

                <div className='px-4 md:px-20'>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 [grid-auto-rows:1fr] mt-30 ">

                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#7E22CE] to-[#67E8F9]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-10 text-left">
                                <img src="/user.png" alt="" />

                                <div className='self-end'>
                                    <h1 className='text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2'>For Users</h1>
                                    <h2 className='text-left text-[#E5E5E5] text-[20px]'>Secure, fast, censorship- <br />resistant internet.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#7E22CE] to-[#67E8F9]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-10 text-left">
                                <img src="/cpu.png" alt="" />

                                <div className='self-end'>
                                    <h1 className='text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2'>For Node Operators</h1>
                                    <h2 className='text-left text-[#E5E5E5] text-[20px]'>Earn by powering the <br /> network.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-[3px] rounded-[48px] bg-gradient-to-r from-[#7E22CE] to-[#67E8F9]">
                            <div className="h-[400px] grid bg-black rounded-[48px] p-10 text-left">
                                <img src="/building-4.png" alt="" />

                                <div className='self-end'>
                                    <h1 className='text-[24px] font-bold font-[syne] bg-gradient-to-r from-[#67E8F9] to-[#7E22CE] bg-clip-text text-transparent mb-2'>For Builders </h1>
                                    <h2 className='text-left text-[#E5E5E5] text-[20px]'>Access blockchain <br /> infrastructure.</h2>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>



                <div className='flex flex-col items-center justify-center text-center mt-40 px-4 md:px-20 '>
                    <h1 className='text-[#111111] text-[25px] md:text-[52px] font-bold font-[syne] leading-tight mb-10'>Frequently <br /> Asked Questions</h1>
                    <div className='w-full md:w-[794px] h-[116px] bg-[#F5F5F5] border-3 border-white rounded-[32px] px-8 flex justify-between items-center mb-3'>
                        <h1 className='text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne]'>What is Lu Network?</h1>
                        <button><img src="/add-circle.png" alt="" /></button>
                    </div>
                    <div
                        className={`w-full md:w-[794px] transition-all duration-300 rounded-[32px] p-[3px] mb-3 ${isOpen ? "bg-gradient-to-r from-[#67E8F9] to-[#7E22CE]" : "bg-white"
                            }`}
                    >
                        <div
                            className={`bg-[#F5F5F5] rounded-[30px] px-8 flex justify-between items-center transition-all duration-300 ${isOpen ? "py-6 h-[116px]" : "h-[116px]"
                                }`}
                        >

                            <div className="flex flex-col justify-center text-left">
                                <h1 className="text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne] hidden md:block">
                                    Do I need a crypto wallet to use Lu Network?
                                </h1>
                                <h1 className="text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne] md:hidden block">
                                    Do I need a crypto wallet <br /> to use Lu Network?
                                </h1>

                                {isOpen && (
                                    <p
                                        style={{ fontFamily: "var(--font-monaSans)" }}
                                        className="text-[#7C7C7C] text-[12px] md:text-[14px] mt-2 leading-[20px]"
                                    >
                                        Not for the MVP. LU tokens are managed via a centralized wallet within
                                        the app to <br /> make onboarding and usage seamless.
                                    </p>
                                )}
                            </div>


                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex-shrink-0 self-center"
                            >
                                <img
                                    src={isOpen ? "/close-circle.png" : "/add-circle.png"}
                                    alt="toggle"
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                    </div>



                    <div className='w-full md:w-[794px] h-[116px] bg-[#F5F5F5] border-3 border-white rounded-[32px] px-8 flex justify-between items-center mb-3'>
                        <h1 className='text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne] text-left'>How do I earn as a node operator?</h1>
                        <button><img src="/add-circle.png" alt="" /></button>
                    </div>
                    <div className='w-full md:w-[794px] h-[116px] bg-[#F5F5F5] border-3 border-white rounded-[32px] px-8 flex justify-between items-center mb-3'>
                        <h1 className='text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne] text-left'>Can I vote on proposals without being a node operator?</h1>
                        <button><img src="/add-circle.png" alt="" /></button>
                    </div>
                    <div className='w-full md:w-[794px] h-[116px] bg-[#F5F5F5] border-3 border-white rounded-[32px] px-8 flex justify-between items-center mb-3'>
                        <h1 className='text-[#111111] text-[14px] md:text-[20px] font-bold font-[syne]'>Is my connection secure?</h1>
                        <button><img src="/add-circle.png" alt="" /></button>
                    </div>

                </div>

            </div>
            <Footer />

        </>
    );
};

export default Waitlist;
