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
                    { value: 1, name: '獾' },
                    { value: 4, name: '蛇' },
                    { value: 4, name: '鹰' },
                    { value: 3, name: '狮' }
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
                <span className={"text-8xl font-bold text-white font-[chn]"}>成分</span>
            </div>
            <div className="flex flex-col pb-5">
                <div className="mx-5 md:mx-20 my-0 rounded-b-2xl flex flex-col shadow-lg p-5 gap-10">
                    <p className="text-lg  font-[chn]">
                        很久很久以前，当时的主播还是小小的主播。当时的主播满脑子都是什么哈利波特，也是经常看那些书和电影之类的。结果到最后也是给小小的主播看出了轻度中二病，每天手里拿一只笔或者筷子或者只要是个长条型状的东西在那里乱挥念咒语。某一天教室的门莫名其妙锁上打不开了全班都被关在外面，然后小小的老子也是小咒语一念，门把手一拉，门就应声而开了哈。从那以后，我对念咒语也是越来越上头了哈。虽然但是小小的主播到最后也没有等来自己的猫头鹰
                        <br/>
                        给大家附赠一张成份图吧
                    </p>
                    <div id={"chart-container"} className={`w-full aspect-square`} style={{height:`${size/3}px`}}></div>
                    <p className="text-lg  font-[chn]">
                        稍微没那么久以前，小小的主播上了初中变成了小主播。那个时候小主播还没有现在那么抽象，行为除了还是有点喜欢乱下咒以外也挺正常的哈。当时小主播的朋友们都喜欢玩一款米哈游自主研发的全新开放世界二字冒险游戏。小主播为了合群也是玩上了哈，结果一不小心变成了肝帝也是每天打到凌晨3点。当时的小主播也是直接被mhy脑控了哈，一直到上了高中都还在mhy。后来也是在一个老同学都脑控下入了粥，最近的母鸡卡联动第一次被游戏厂商骗走了<span className={"font-[noto-sans]"}>お金</span>（好像80大洋左右吧，主播我平时坚决抵制氪金的来着）
                    </p>
                    <p className="text-lg  font-[chn]">
                        嗯大概也是从去年还是前年的样子吧，也是下定决心戒掉J-Pop这个赛博鸦片，所以决定搞搞这个从小就从我姐姐大人那里了解到的中V圈。除此之外，我经常攻击隔壁圈，所以也是经常被身边的人踢出各种各样相关的群。感觉这圈子里也没什么吧，不会化妆所以搞不了考斯，不会乐理所以写不了歌，不会画画也做不了同人曲绘啥的，看样子只能当纯听歌的下等人啦～
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comp