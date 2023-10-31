import gsap from "gsap"
import { useEffect } from "react"

export default function SocialConnection () {
    
    useEffect(() => {
        var targets = document.querySelectorAll(".social-connection-container .social-point")
      let ctx = gsap.context(() => {
        for (let i = 0; i < targets.length; i++) {
            gsap.from(targets[i], {scrollTrigger: ".social-connection-container", delay: i * 0.2, duration: 1, x: i * 50, ease: "power1.out"})
            gsap.from(targets[i], {scrollTrigger: ".social-connection-container", opacity: 0, scale: 0, delay: i * 0.2, duration: 1, ease: "power1.in"})
        }
      })
    
      return () => {
        ctx.revert()
      }
    }, [])
    

    return (
        <div className="w-full rounded-xl bg-white px-10 py-20 flex flex-col justify-center">
            <div className="social-connection-container w-full flex flex-row items-center">
                <div className="social-point w-5 h-5 rounded-full bg-purple-400 flex flex-row relative items-center">
                    <div className="absolute bottom-full -translate-y-1/4 w-fit px-4 py-2 rounded-md bg-purple-400 text-white whitespace-nowrap">You</div>
                </div>
                <div className="flex-1 h-1 bg-gray-100"></div>
                <div className="social-point w-5 h-5 rounded-full bg-sky-400 flex flex-row relative items-center">
                    <div className="absolute top-full translate-y-1/4 w-fit px-4 py-2 rounded-md bg-sky-400 text-white whitespace-nowrap">Anonymous 1</div>
                </div>
                <div className="flex-1 h-1 bg-gray-100"></div>
                <div className="social-point w-5 h-5 rounded-full bg-amber-400 flex flex-row relative items-center">
                    <div className="absolute bottom-full -translate-y-1/4 w-fit px-4 py-2 rounded-md bg-amber-400 text-white whitespace-nowrap">Anonymous 2</div>
                </div>
                <div className="flex-1 h-1 bg-gray-100"></div>
                <div className="social-point w-5 h-5 rounded-full bg-green-400 flex flex-row relative items-center">
                    <div className="absolute top-full translate-y-1/4 w-fit px-4 py-2 rounded-md bg-green-400 text-white whitespace-nowrap">Anonymous 3</div>
                </div>
            </div>
        </div>  
    )
}