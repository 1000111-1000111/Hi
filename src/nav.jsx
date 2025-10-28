import React from "react";
import {NavLink} from "react-router-dom";

function Nav(){
    return (
        <div className="navbar shadow-sm w-screen px-3 bg-transparent backdrop-blur-sm fixed top-0 left-0 z-50">
            <div className="flex-none">
                <button id="icon"
                        className="btn animate-[var(--animate-autospin)] btn-square backdrop-blur-2xl bg-transparent border-none shadow-none stroke-[var(--color-tianyi)] dark:stroke-[var(--color-hua)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 110 110">
                        <g transform="translate(0,0)">
                            <g  stroke-width="1" fill="transparent">
                                <path d="M 6.698729811 25 L 93.30127019 25 L 50 100 Z"/>
                                <path d="M 6.698729811 75 L 93.30127019 75 L 50 0 Z"/>
                            </g>
                            <g fill="transparent" stroke-width="1" >
                                <circle cx="50" cy="50" r="50"/>
                                <circle cx="50" cy="50" r="25"/>
                                <circle cx="50" cy="50" r="52"/>
                            </g>
                            <g stroke-width="1">
                                <path d="M 50 0 L 50 100"/>
                                <path d="M 6.698729811 25 L 93.30127019 75"/>
                                <path d="M 93.30127019 25 L 6.698729811 75"/>
                            </g>
                            <g fill="transparent" stroke-width="1">
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(30,50,50)"/>
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(90,50,50)"/>
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(150,50,50)"/>
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(210,50,50)"/>
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(270,50,50)"/>
                                <path d="M 29.77143 6.4972 A 48 48 0 0 1 70.2857 6.4972 L 50 18.175 Z"
                                      transform="rotate(330,50,50)"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <NavLink to="/"><span className="px-5 cursor-default text-3xl font-[comfortaa] font-extrabold tracking-tight border-none shadow-none font-mont
                bg-linear-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent">Inteyvat</span></NavLink>
            </div>
            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal gap-10 px-5">
                    <li>
                        <NavLink to={"/about"} className="btn bg-transparent border-none shadow-none w-auto px-3">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[comfortaa]"}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/comp"} className="btn bg-transparent border-none shadow-none w-auto px-3">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[comfortaa]"}>Composition</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/oshi"} className="btn bg-transparent border-none shadow-none w-auto px-3">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[noto-sans]"}>推し</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-[var(--color-tianyi)] dark:stroke-[var(--color-hua)]">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-30 p-2 bg-transparent">
                    <li>
                        <NavLink to={"/about"} className="btn bg-transparent border-none shadow-none w-30 px-3 backdrop-blur-sm">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[comfortaa]"}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/comp"} className="btn bg-transparent border-none shadow-none w-30 px-3 backdrop-blur-sm">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[comfortaa]"}>Composition</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/oshi"} className="btn bg-transparent border-none shadow-none w-30 px-3 backdrop-blur-sm">
                            <span
                                className={"text-lg bg-conic-181 from-[var(--color-tianyi)] dark:from-[var(--color-hua)] to-[var(--color-stardust)] bg-clip-text text-transparent font-[noto-sans]"}>推し</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
