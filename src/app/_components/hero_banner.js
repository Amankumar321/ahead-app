import { useEffect } from "react";
import AppStoreButton from "./app_store_button";
import PhoneDemo from "./phone_demo";
import Rating from "./rating";
import gsap from "gsap";

export default function HeroBanner() {

    useEffect(() => {
      let ctx = gsap.context(() => {
        var target = document.getElementsByClassName("tag-line")[0]
        gsap.from(target, {x: -1600, duration: 1, ease: "power2.out"})
        
        var t1 = gsap.timeline({repeat: 5})
        t1.to(".hero-banner > .bubble", {scale: 0.5, duration: 0.5}).to(".hero-banner > .bubble", {scale: 1, duration: 0.5})
        
        gsap.to(".hero-banner > .leaf-big", {rotation: "+="+720, repeat: 0, duration: 4, ease: "power1.out"})
        gsap.to(".hero-banner > .leaf-small", {rotation: "-="+30, repeat: 0, duration: 3, ease: "power1.out"})
        
        gsap.to(".hero-banner > .circle-1", {x: 20, y: -20, repeat: 0, duration: 3, ease: "power1.out"})
        gsap.to(".hero-banner > .circle-2", {x: -20, y: 20, repeat: 0, duration: 3, ease: "power1.out"})
      })
    
      return () => {
        ctx.revert();
      }
    }, [])
    

    return (
        <div className="w-100 px-8">
            <div className="hero-banner w-100 relative rounded-3xl flex flex-row items-center overflow-clip bg-purple-100">
                <div className="w-1/2 h-full flex flex-col justify-center px-12 z-50">
                    <div className="font-mono font-tighter">
                        Ahead app
                    </div>
                    <div className="text-7xl font-sans font-bold pt-6 pb-10 tag-line">
                        Master your life by mastering emotions
                    </div>
                    <div className="flex flex-row space-x-8">
                        <AppStoreButton></AppStoreButton>
                        <Rating></Rating>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <PhoneDemo></PhoneDemo>
                </div>

                <div className="absolute rounded-full w-12 h-12 top-0 left-3/4 -translate-y-1/4 bg-red-200">
                </div>

                <div className="bubble absolute rounded-full w-12 h-12 top-3/4 left-0 -translate-x-1/2 bg-red-200">
                </div>

                <div className="bubble absolute rounded-full w-12 h-12 bottom-0 left-1/3 translate-y-1/2 bg-red-400">
                </div>

                <div className="leaf-big absolute rounded-b-full w-24 h-12 top-0 left-[10%] scale-x-150 rotate-45 bg-emerald-300">
                </div>

                <div className="leaf-small absolute top-[15%] left-[40%] rounded-t-full w-12 h-6 scale-x-150 rotate-45 bg-emerald-300">
                </div>

                <div className="circle-1 absolute rounded-full w-6 h-6 top-[12%] left-[43%] bg-red-200">
                </div>

                <div className="circle-2 absolute rounded-full w-12 h-12 top-[18%] left-[38%] bg-orange-200 flex flex-row items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-orange-400">
                    </div>
                </div>

            </div>
        </div>
    )
}