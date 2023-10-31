import gsap from "gsap"
import { useEffect, useRef } from "react"
import { disableScroll, enableScroll } from "../_utils/handleScroll";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function BulletScroll({points}) {

    var animating = useRef(false)
    var index = useRef(0)

    useEffect(() => {
        var lastScrollTop = 0;
        var ele = document.getElementById("bullet-scroll-container")
        var children = document.querySelectorAll("#bullet-scroll-container .scroll-item")
        var blurContainer = document.getElementById("bullet-scroll-blur")

        let ctx = gsap.context(() => {
            
        })

        document.addEventListener("scroll", () => {
            //if (animating.current) return

            var bounds = ele.getBoundingClientRect()
            var st = document.documentElement.scrollTop
            if (st > lastScrollTop) {
                if (bounds.bottom < window.innerHeight) {
                    //animating.current = true
                    ele.scrollBy({top: st - lastScrollTop, left: 0, behavior: "smooth"})
                }
            }
            if (st < lastScrollTop) {
                if (bounds.top > 0) {
                    //animating.current = true
                    ele.scrollBy({top: st - lastScrollTop, left: 0, behavior: "smooth"})
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        })

        return () => {
            ctx.revert()
        }


    }, [])

    
    return (
        <div className=" w-full relative">
            <div id="bullet-scroll-container" className="w-[40rem] h-[30rem] overflow-y-scroll scrollbar m-auto flex flex-col">
                {
                    points.map((point, index) => (
                        <div className="scroll-item h-fit flex flex-row space-x-20">
                            <div className="scroll-bullet flex flex-col items-center">
                                <div className=" w-3 h-3 rounded-full bg-violet-400">
                                </div>
                                <div className={`w-0.5 flex-1 ${(index !== points.length - 1) ? "bg-violet-200" : ""}`}>
                                </div>
                            </div>
                            <div className="pb-8 flex-1 space-y-4">
                                <div className="text-xl font-medium">
                                    {point.head}
                                </div>
                                <div className="text-gray-700 leading-6">
                                    {point.body}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div id="bullet-scroll-blur" className="absolute m-auto w-[40rem] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <div className="w-full bg-white opacity-50"></div>
                <div className="h-[8rem] w-full"></div>
                <div className="w-full bg-white opacity-50"></div>
            </div>
            
        </div>
    )
}