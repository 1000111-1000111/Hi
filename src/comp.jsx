import React from "react";
import {useEffect, useState} from "react";

function Comp(){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    const [size,setSize] = useState(Math.min(windowWidth, windowHeight))
    useEffect(()=>{
        const container = document.getElementById('chart-container');
        var myChart = window.echarts.init(container)
        // 指定图表的配置项和数据
        var option = {
            series: [{
                name: '',
                type: 'pie',
                radius: [size/18, size/7],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 6.626
                },
                color:[
                    "#FFFF00",
                    "#006666",
                    "#66ccff",
                    "#ee0000"
                ],
                data: [
                    { value: 1, name: 'Badger' },
                    { value: 4, name: 'Snake' },
                    { value: 4, name: 'Eagle' },
                    { value: 3, name: 'Lion' }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option, true);
        window.addEventListener('resize', ()=>{
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
            let newSize=Math.min(windowWidth, windowHeight)
            setSize(newSize)
        });
        return () => {
            window.removeEventListener('resize', ()=>{})
            myChart.dispose();
        };
    },[size])

    return (
        <div className="Container flex flex-col gap-10">
            <div
                className="flex h-80 bg-linear-0 from-0% from-[rgba(0,0,0,0)] via-30% via-[var(--color-tianyi)] dark:via-[var(--color-longya)] to-93% to-[var(--color-longya)] dark:to-[var(--color-he)]
                justify-center items-center">
                <span className={"text-8xl font-bold text-white font-[comfortaa]"}>Composition</span>
            </div>
            <div className="flex flex-col pb-5">
                <div className="mx-5 md:mx-20 my-0 rounded-b-2xl flex flex-col shadow-lg p-5 gap-10">
                    <p className="text-lg  font-[comfortaa]">
                        A long long time ago, I was a kid. My brain was filled with Harry Potter stuff, and I loved reading those stuff. In the end I had Cyuunibyo Syndrome, holding a chopstick or pen or any stick-like thing muttering incantations. And on a certain day the classroom got locked and everyone ended up locked outside, and I casted a spell, grabbed the knob, and the door somehow opened. And since then, I was addicted to casting spells. And I ended up not recieving an owl post
                        <br/>
                        And a free composition chart about me
                    </p>
                    <div id={"chart-container"} className={`w-full aspect-square`} style={{height:`${size/3}px`}}></div>
                    <p className="text-lg  font-[comfortaa]">
                        An int time ago, I ended up an older kid. I was not as crazy then compared to now, and was rather normal apart from Math.random()>0.7?spell.cast():setTimeout(5000). And my friends played some kinda 2-word game developed by Hoyoverse. And they drugged me into playing the game, and ended up playing the game everyday until 3am. Hoyoverse reverse-shelled my brain, and was Hoyoversing until highschool. And then someone reverse-shelled me to play AK, recently got scammed okane=80RMB by Hypergryph because of AK X Ave Mujica
                    </p>
                    <p className="text-lg  font-[comfortaa]">
                        And about sometime last year, decided to get rid of cyber-opium J-Pop, and decided to listen to <span className={"font-[noto-sans]]"}>中V</span> which I heard from <span className={"font-[noto-sans]]"}>お姉様</span>. Also, I bully neighbor community, so I was bullied by neighbor community. Nothing interesting in this community. canDoMakeup=false so no cosplay, knowMusicTheory=false so no make music, canDraw=false so no fanart. <span className={"font-[noto-sans]]"}>わたくし</span>.isGarbage=true
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comp