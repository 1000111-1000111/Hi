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
                        <h1 className="text-3xl font-bold font-[chn]">星尘</h1>
                        <p className={"font-[chn]"}>关键词：平行四界  五维介质  VOCALOID  <span className="text-[var(--color-stardust)]">#9999FF</span>  SynthV</p>
                        <p className={"font-[chn]"}><i>众星因你 皆降为尘</i></p>
                        <p className="py-6 font-[chn]">
                            你说的对，但是「星尘」是一款<span className="line-through">托福</span>福托<span className="line-through">自主研发</span>不知道怎么搞出来的全新付费术力口/SV声库。 这个术力口声库就是依托啊，然后SV的声库你确定你是星尘不是茶叔？这边再吐槽一下官方啊，你们给星尘Infinity搞得形象是什么鬼，能不能不要搞个像什么科技风格拉满的抽象东西关键是 也不是一般的丑，比Vocaloid形象差的不是一星半点拉完了属于是
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
                        <h1 className="text-3xl font-bold font-[chn]">洛天依</h1>
                        <p className={"font-[chn]"}>关键词：世界第一的吃货殿下  <span className={"font-[comfortaa]"}>Vsinger</span>  南北组  VOCALOID  <span className="text-[var(--color-tianyi)]">#66CCFF</span></p>
                        <p className={"font-[chn]"}><i>华风夏韵 洛水天依</i></p>
                        <p className="py-6 font-[chn]">
                            <span className="line-through">落</span>是一款<span className="line-through">上海禾念（被阿B吃了）</span>YAMAHA<span className="line-through">自主研发</span>在Vocaloid China Project搞出的东西。
                            中国人自己的<span className="line-through">初音未来</span>虚拟歌姬（拒绝日本人东西）。 这边再吐槽一下官方啊，你们什么时候提高一下我们天依宝宝谷子的质量啊，现在物丑价昂啊属于是（可能就水家联动的BL3好些？）
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
                        <h1 className="text-3xl font-bold font-[chn]">拉普兰德</h1>
                        <p className={"font-[chn]"}>关键词：拉狗  明日方舟</p>
                        <p className="py-6 font-[chn]">
                            扎罗的声音令人安心<br/>
                            全图锁敌+恐惧的美谁懂啊，怪还没进入射程范围就直接没了，飞天马桶也没那么恶心了。 作为我的<span className="line-through">第二个</span>第一个限定干员（归鲨是谁真不熟这强度也能限定？除了挡塔露拉火雨真想不到别的作用）， 也是以美和强度的美带我走过了非常多个关卡哈。这里排名也是直接给到夯完了
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
                        <h1 className="text-3xl font-bold font-[chn]">符华</h1>
                        <p className={"font-[chn]"}>关键词：羽渡尘  华生  符门  崩坏三  赤鸢仙人</p>
                        <p className={"font-[chn]"}><i>神者，变化之极，妙万物而为言，不可以形诘者也</i></p>
                        <p className={"font-[chn]"}><i>既无形体亦不需形体，此剑充盈空间，此剑即是空间。故而无处不在，无往不利</i></p>
                        <p className={"font-[chn]"}><i>律者啊，这一剑--<b>是无法可挡的</b></i></p>
                        <p className="py-6 font-[chn]">
                            符华是一款米哈游自主研发的一款<span className="line-through">神州第一平板</span>五万四千岁老登。什么？你说你是爱门？不是很认可
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Oshi;
