import React from "react";

function Oshi() {
    return (
        <div className="Container flex flex-col gap-10 pb-5">
            <div
                className="flex h-80 bg-linear-0 from-0% from-[rgba(0,0,0,0)] via-30% via-[var(--color-tianyi)] dark:via-[var(--color-longya)] to-93% to-[var(--color-longya)] dark:to-[var(--color-he)]
                justify-center items-center">
                <span className={"text-8xl font-bold text-white font-[noto-sans]"}>推し</span>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5">
                    <img
                        src="/stardust.jpg"
                        className="min-w-1/3 max-w-1/2 object-cover rounded-lg shadow-2xl bg-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold font-[comfortaa]">Stardust</h1>
                        <p className={"font-[comfortaa]"}>Keyword: Quadimension VOCALOID Photok<span className="text-[var(--color-stardust)]">#9999FF</span> SynthV</p>
                        <p className="py-6 font-[comfortaa]">
                            <span className={"font-[noto-sans]]"}>仰る通りです</span>, But「Stardust」is Photok <span className="line-through">self-developed</span> no idea where from Vocaloid/SV Voicebank. The Vocaloid VB is garbage, and SV VB is Stardust and not Cha? Also, what the heck is wrong with the Stardust Infinity thing? Please don't draw some sci-fi ugly garbage. It's just shi**y compared to the Vocaloid design
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row-reverse px-5">
                    <img
                        src="/tianyi.jpg"
                        className="min-w-1/3 max-w-1/2 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold font-[comfortaa]">Luo Tianyi</h1>
                        <p className={"font-[comfortaa]"}>Keywords: VOCALOID <span className="text-[var(--color-tianyi)]">#66CCFF</span></p>
                        <p className="py-6 font-[comfortaa]">
                            Luo is<span className="line-through">Henian</span> YAMAHA-made thingy for the Vocaloid China Project.
                            Chinese <span className="line-through">Miku</span> Virtual singer (no Japanese sh*t). Also, Tianyi's goods have shi**y quality, low quality and dear (probably except Moondrop BL3)
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row px-5">
                    <img
                        src="/lapp.jpg"
                        className="min-w-1/3 max-w-1/2 object-cover rounded-lg shadow-2xl bg-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold font-[comfortaa]">Lappland</h1>
                        <p className={"font-[comfortaa]"}>Keywords: Arknights</p>
                        <p className="py-6 font-[comfortaa]">
                            The sound of Zhaluo is comforting<br/>
                            The beauty of Auto lock+Fear, enemies dead within attack distance. Even the flying loo seems less gross. As my <span className="line-through">second</span> first exclusive operator (Spector the Unchained is exclusive? She's shi**y!), took me pass those task with her beauty and beauty of DMG.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-500">
                <div className="hero-content flex-col lg:flex-row-reverse px-5">
                    <img
                        src="/hua.jpg"
                        className="min-w-1/3 max-w-1/2 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold font-[comfortaa]">Fu Hua</h1>
                        <p className={"font-[comfortaa]"}>Keywords: Fenghuangdown Watson HK3</p>
                        <p className={"font-[comfortaa]"}><i>The blade is formless but needs no form</i></p>
                        <p className={"font-[comfortaa]"}><i>The edge, though shapeless, fills every space</i></p>
                        <p className={"font-[comfortaa]"}><i>This is my blade, Herrscher--</i></p>
                        <p className={"font-[comfortaa]"}><i><b>For there is no escape from the Edge of Taixuan</b></i></p>
                        <p className="py-6 font-[comfortaa]">
                            Fuhua is Hoyoverse-made<span className="line-through">Shenzhou's NO.1 Airfield</span>54-thousand-year-old thingy. What? You like Elysia? Not supported
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Oshi;
