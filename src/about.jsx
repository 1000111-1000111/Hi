import React from "react";
import {useEffect, useState} from "react";

function About(){
    return (
        <div className="Container flex flex-col gap-10">
            <div
                className="flex h-80 bg-linear-0 from-0% from-[rgba(0,0,0,0)] via-30% via-[var(--color-tianyi)] dark:via-[var(--color-longya)] to-93% to-[var(--color-longya)] dark:to-[var(--color-he)]
                justify-center items-center">
                <span className={"text-8xl font-bold text-white font-[comfortaa]"}>About</span>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full">
                    <div
                        className="min-w-1/3 max-w-2/3 md:max-w-1/2 object-cover rounded-2xl shadow-2xl
                        bg-linear-135 from-[var(--color-tianyi)] to-[var(--color-stardust)] dark:from-[var(--color-hua)] dark:to-[var(--color-he)] aspect-square p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 110 110"
                             className={"rounded-full bg-radial dark:from-[var(--color-tianyi)] dark:to-[var(--color-stardust)] from-[var(--color-hua)] to-[var(--color-he)]"}>
                            <mask id="selfieMask"
                                  maskUnits="userSpaceOnUse"
                                  className={"mask-type-luminance mask-center mask-no-repeat mask-cover fill-[var(--color-he)]"}>
                                <g transform="translate(0,0)" className="bg-black">
                                    <g strokeWidth="0.5">
                                        <path d="M 6.698729811 25 L 93.30127019 25 L 50 100 Z"/>
                                        <path d="M 6.698729811 75 L 93.30127019 75 L 50 0 Z"/>
                                    </g>
                                    <g fill="none" strokeWidth="2" stroke="var(--color-he)">
                                        <circle cx="50" cy="50" r="51"/>
                                    </g>
                                    <g strokeWidth="0.5" fill="var(--color-he)">
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(30,50,50)"/>
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(90,50,50)"/>
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(150,50,50)"/>
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(210,50,50)"/>
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(270,50,50)"/>
                                        <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z" transform="rotate(330,50,50)"/>
                                    </g>
                                </g>
                            </mask>
                            <image
                                href={"/selfie.png"}
                                x="-50" y="-50"
                                height="190%" width="190%"
                                mask="url(#selfieMask)"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2 w-full text-end">
                        <h1 className="text-3xl font-bold font-[comfortaa] text-end">Ciallo～(∠・ω&gt; )⌒☆ About<span className={"font-[noto-sans]"}> わたくし</span></h1>
                        <p className="py-3 font-[comfortaa] text-end">
                            <span className={"font-[noto-sans]"}>わたくし</span>, Complex Composition：Captain Hyperion, Traveller, Trailblazer, Doctor, Dreamseeker, <span className={"line-through"}>Rover</span>
                        </p>
                        <p className="py-3 font-[comfortaa] text-end">
                            Plays AK, Identity V, fond of Vocaloids
                        </p>
                        <p className="py-3 font-[comfortaa] text-end">
                            Not Nichigenn, no Japanese s**t
                        </p>
                        <p className="py-3 font-[comfortaa] text-end">
                            Contacts<br/>Email：1000111_1000111@proton.me
                        </p>
                        <p className="py-3 font-[comfortaa] text-end">
                            GI<span className={"font-[comfortaa]"}>UID: 213340193</span><br/>
                            HKSR<span className={"font-[comfortaa]"}>UID: 102652270</span><br/>
                            AK<span className={"font-[comfortaa]"}>ID: 499992699</span><br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-start">
                    <div className="flex flex-col justify-start w-full">
                        <h1 className="text-3xl font-bold font-[comfortaa]">About my fondness of timbre</h1>
                        <ul className="list bg-base-100 rounded-box shadow-md font-[comfortaa] w-full">
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-ling)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[comfortaa]"}>T0</span>
                                </div>
                                <div>
                                    Cello/Viola/Violin/Bass
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-hua)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[comfortaa]"}>T1</span>
                                </div>
                                <div>
                                    Piano, Yangqin, Guzheng, Pipe organ, Most bowed Chinese folk instruments
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-he)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-md font-[comfortaa]"}>T2</span>
                                </div>
                                <div>
                                    Most guitars, Most woodwinds, Fixed-pitch percussion, Most plucked Chinese folk instruments
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-tianyi)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[comfortaa]"}>NPC</span>
                                </div>
                                <div>
                                    Brass, Unfixed-pitch percussions, E-guitars
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-stardust)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-md font-[comfortaa]"}>Sh*t</span>
                                </div>
                                <div>
                                    Hi-Gained everything but especially guitars
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full">
                    <div className="flex flex-col gap-2 w-full text-end">
                        <h1 className="text-3xl font-bold font-[comfortaa] text-end">About my favorite game characters</h1>
                        <span className="py-3 font-[comfortaa] text-end">
                            GI: Albedo Arlecchino Tighnari Collei Rhinedottir
                        </span>
                        <span className="py-3 font-[comfortaa] text-end">
                            HKSR: Hyacine Topaz Herta Ruanmri March
                        </span>
                        <span className="py-3 font-[comfortaa] text-end">
                            HK3: Mei Edison Fuhua Sirin Kiro
                        </span>
                        <span className="py-3 font-[comfortaa] text-end">
                            AK: Lappland Contrail Mon3tr
                        </span>
                        <span className="py-3 font-[comfortaa] text-end">
                            Others: Zhezhi Kyuusyou
                        </span>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-start">
                    <div className="flex flex-col justify-start w-full">
                        <h1 className="text-3xl font-bold font-[comfortaa]">About Colors</h1>
                        <p className="py-3 font-[comfortaa]">
                            The website uses the following colors
                        </p>
                        <ul className="list bg-base-100 rounded-box shadow-md font-[comfortaa] w-full">
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-tianyi)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-tianyi)] font-[comfortaa]">#66CCFF</span>&nbsp;Luo Tianyi blue
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-stardust)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-stardust)] font-[comfortaa]">#9999FF</span>&nbsp;Stardust blue
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-longya)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-longya)] font-[comfortaa]">#006666</span>&nbsp;Yuezheng Longya green
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-ling)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-ling)] font-[comfortaa]">#EE0000</span>&nbsp;Yuezheng Ling red
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-qingxian)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-qingxian)] font-[comfortaa]">#FFFF00</span>&nbsp;Mo Qingxian yellow, Second support color for Xingchen, Also my favorite yellow
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-he)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-he)] font-[comfortaa]">#00FFCC</span>&nbsp;Yan He green
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-hua)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-hua)] font-[comfortaa]">#EE82EE</span>&nbsp;Xin Hua pink
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-end">
                    <div className="flex flex-col gap-2 justify-end w-full">
                        <h1 className="text-3xl font-bold font-[comfortaa] text-end">About Website</h1>
                        <p className="py-6 font-[comfortaa] text-end">
                            Written using the React framework, Tailwind and Daisyui for UI design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About