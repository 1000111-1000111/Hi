import React from "react";
import {useEffect, useState} from "react";

function About(){
    return (
        <div className="Container flex flex-col gap-10">
            <div
                className="flex h-80 bg-linear-0 from-0% from-[rgba(0,0,0,0)] via-30% via-[var(--color-tianyi)] dark:via-[var(--color-longya)] to-93% to-[var(--color-longya)] dark:to-[var(--color-he)]
                justify-center items-center">
                <span className={"text-8xl font-bold text-white font-[chn]"}>关于</span>
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
                        <h1 className="text-3xl font-bold font-[comfortaa] text-end">Ciallo～(∠・ω&gt; )⌒☆ <span className={"font-[chn]"}>关于我</span></h1>
                        <p className="py-3 font-[chn] text-end">
                            本座，成分复杂：舰长，旅行者，开拓者，刀客塔，寻梦者，<span className={"line-through"}>漂泊者</span>
                        </p>
                        <p className="py-3 font-[chn] text-end">
                            主玩粥，五，并且喜欢V家
                        </p>
                        <p className="py-3 font-[chn] text-end">
                            不是二次元，不管你信不信，总之就是拒绝日本人东西（欸嘿
                        </p>
                        <p className="py-3 font-[chn] text-end">
                            联系方式<br/>邮箱：1000111_1000111@proton.me
                        </p>
                        <p className="py-3 font-[chn] text-end">
                            原神<span className={"font-[comfortaa]"}>UID: 213340193</span><br/>
                            崩铁<span className={"font-[comfortaa]"}>UID: 102652270</span><br/>
                            粥<span className={"font-[comfortaa]"}>ID: 499992699</span><br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-start">
                    <div className="flex flex-col justify-start w-full">
                        <h1 className="text-3xl font-bold font-[chn]">关于我对乐器音色的喜好</h1>
                        <ul className="list bg-base-100 rounded-box shadow-md font-[chn] w-full">
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-ling)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[chn]"}>夯</span>
                                </div>
                                <div>
                                    大/中/小/贝斯提琴
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-hua)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[chn]"}>顶级</span>
                                </div>
                                <div>
                                    钢琴 扬琴 古筝 管风琴 大部份弓弦民乐
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-he)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-md font-[chn]"}>人上人</span>
                                </div>
                                <div>
                                    大部份吉他 大部份木管乐器 固定音高打击乐器 大部份拨弦民乐
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-tianyi)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-xl font-[comfortaa]"}>NPC</span>
                                </div>
                                <div>
                                    铜管 无固定音高打击乐器 电吉他
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"min-w-15 h-full bg-[var(--color-stardust)] rounded-lg aspect-square flex justify-center items-center"}>
                                    <span className={"font-bold text-md font-[chn]"}>拉完了</span>
                                </div>
                                <div>
                                    高音增益后的任何东西但是尤其是电吉他
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full">
                    <div className="flex flex-col gap-2 w-full text-end">
                        <h1 className="text-3xl font-bold font-[chn] text-end">关于我各游戏中的<span className={"font-[comfortaa]"}>XP</span></h1>
                        <span className="py-3 font-[chn] text-end">
                            某二字游戏：阿老师 阿蕾奇诺 小提 柯莱 莱茵多特
                        </span>
                        <span className="py-3 font-[chn] text-end">
                            铁：阳光彩虹小白马 托帕 大黑塔 阮梅 螺丝
                        </span>
                        <span className="py-3 font-[chn] text-end">
                            崩崩崩：梅 南希公主 符华 河豚 时雨绮罗
                        </span>
                        <span className="py-3 font-[chn] text-end">
                            粥：拉狗 云迹 <span className={"font-[comfortaa]"}>M3</span>
                        </span>
                        <span className="py-3 font-[chn] text-end">
                            其他：折枝 蓬莱寺九霄
                        </span>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-start">
                    <div className="flex flex-col justify-start w-full">
                        <h1 className="text-3xl font-bold font-[chn]">关于颜色</h1>
                        <p className="py-3 font-[chn]">
                            网站使用如下颜色
                        </p>
                        <ul className="list bg-base-100 rounded-box shadow-md font-[chn] w-full">
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-tianyi)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-tianyi)] font-[comfortaa]">#66CCFF</span>&nbsp;洛天依应援色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-stardust)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-stardust)] font-[comfortaa]">#9999FF</span>&nbsp;星尘应援色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-longya)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-longya)] font-[comfortaa]">#006666</span>&nbsp;乐正龙牙应援色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-ling)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-ling)] font-[comfortaa]">#EE0000</span>&nbsp;乐正绫应援色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-qingxian)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-qingxian)] font-[comfortaa]">#FFFF00</span>&nbsp;墨清弦应援色，星尘第二应援色，也是我最常用的黄色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-he)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-he)] font-[comfortaa]">#00FFCC</span>&nbsp;言二胡应援色
                                </div>
                            </li>
                            <li className="list-row w-full items-center">
                                <div className={"w-5 h-5 bg-[var(--color-hua)] rounded-sm"}></div>
                                <div>
                                    <span className="text-[var(--color-hua)] font-[comfortaa]">#EE82EE</span>&nbsp;字典娘应援色
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5 w-full justify-end">
                    <div className="flex flex-col gap-2 justify-end w-full">
                        <h1 className="text-3xl font-bold font-[chn] text-end">关于网站</h1>
                        <p className="py-6 font-[chn] text-end">
                            网站使用<span className="font-[comfortaa]">React</span>框架，使用<span className={"text-[comfortaa]"}>DaisyUI+TailwindCSS</span>进行样式设计
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About