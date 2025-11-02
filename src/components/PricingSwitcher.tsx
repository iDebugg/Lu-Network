/* eslint-disable */
"use client";

import { useState } from "react";

function Badge({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center rounded-full bg-white font-[syne] px-3 py-1 text-[16px] font-semibold text-black shadow-[0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
            {text}
        </div>
    );
}

function CTAButton() {
    return (
        <button
            className="group w-full rounded-full px-5 py-3 text-sm font-semibold text-gray-900
                 bg-gradient-to-b from-[#D5D8D8] to-[#818C8C]
                 shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_8px_24px_rgba(0,0,0,0.18)]
                 ring-1 ring-black/10 transition-all"
        >
            <span className="inline-flex items-center gap-2 font-[syne] text-[16px] font-bold text-black">
                Get Started
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 11L21.7 2.80005" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5 6.8V2H17.7" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V13" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </span>
        </button>
    );
}

function Feature({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-sm text-gray-700">
            <span className="grid size-5 place-items-center rounded-full bg-gray-400 ring-1 ring-black/5">
                <svg viewBox="0 0 24 24" className="size-3.5 text-gray-700">
                    <path fill="currentColor" d="M9.55 17.05L4.9 12.4l1.4-1.4l3.25 3.25l7.2-7.2l1.4 1.4z" />
                </svg>
            </span>
            {text}
        </li>
    );
}

function PricingCard({
    label,
    price,
    unit,
    tint = "from-[#D7F3F0] to-[#E8F7FF]",
    offset = "",
    active = false,
    onClick,
}: {
    label: string;
    price: string;
    unit: string;
    tint?: string;
    offset?: string;
    active?: boolean;
    side?: "left" | "right";
    onClick?: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`absolute top-0 ${offset} w-[320px] md:w-[360px] cursor-pointer select-none 
                    transition-all duration-300 ease-out
                    ${active ? "z-30 scale-100 translate-y-0 opacity-100" : "z-10 scale-[0.92] translate-y-2 opacity-90"}`}
            style={{ transformOrigin: "center" }}
        >
            <div className={`absolute inset-0 -z-10 rounded-[28px] blur-2xl ${active ? "bg-black/10" : "bg-black/5"}`} />

            <div
                className={`rounded-[28px] bg-white ring-1 ring-black/5
                      transition-all duration-300
                      ${active
                        ? "shadow-[0_20px_60px_rgba(0,0,0,0.12)] h-[500px]"
                        : "shadow-[0_12px_28px_rgba(0,0,0,0.10)] h-[480px]"}`}
            >
                <div className="rounded-[28px] pb-5 px-5 pt-5 overflow-visible shadow-[0_24px_48px_-12px_rgba(17,17,17,0.55)]">
                    <div className={`rounded-2xl bg-gradient-to-b ${tint} p-4 h-[140px] flex flex-col justify-between items-start`}>
                        <Badge text={label} />
                        <div className="text-3xl md:text-[36px] font-semibold tracking-tight text-black font-poppins">
                            {price}
                            <span className="ml-1 align-baseline text-[16px] font-semibold text-[#525252]">{unit}</span>
                        </div>
                    </div>

                    <p className="mt-4 text-[16px] text-[#525252]">Sample Pricing</p>
                    <div className="mt-4">
                        <CTAButton />
                    </div>
                </div>

                <div className="px-10 pt-15">
                    <ul className="mt-6 space-y-3">
                        <Feature text="Unlimited data" />
                        <Feature text="No hidden fees" />
                        <Feature text="Pay with LU tokens or fiat" />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default function PricingSwitcher() {
    const [top, setTop] = useState<"daily" | "weekly">("daily");

    return (
        <div className="relative  h-[480px] w-full md:w-[591px]  ">
            <PricingCard
                label="Daily Access"
                price="₦500"
                unit="/daily"
                tint="from-[#D8F6F3] to-[#EAF6FF]"
                offset="left-0 md:left-6"
                active={top === "daily"}
                side="right"
                onClick={() => setTop("daily")}
            />

            <PricingCard
                label="Weekly Access"
                price="₦3,000"
                unit="/weekly"
                tint="from-[#EFE4FF] to-[#F6ECFF]"
                offset="left-12 md:left-80"
                active={top === "weekly"}
                side="left"
                onClick={() => setTop("weekly")}
            />
        </div>
    );
}
