import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function VacancyTile({head, points}) {
    var tl = gsap.timeline({paused: true})
    var vacancyCardRef = useRef(null)
    
    useEffect(() => {
      let ctx = gsap.context(() => {
        tl
        .to(vacancyCardRef.current, {height: "100%", backgroundColor: "rgb(254 243 199)", duration: 0.5, ease: "none"})
        .to(vacancyCardRef.current.querySelector(".vacancy-card .see-details-btn"), {scale: 1, opacity: 1, display: "block", duration: 0.3}, "-=0.3")
      })
    
      return () => {
        ctx.revert()
      }
    }, [])

    const handleMouseEnter = () => {
        tl.play()
        //tl.resume();
    };
   
    const handleMouseLeave = () => {
        tl.reverse();
    };  
    
    
    return (
        <div className="h-[14rem]">
            <div ref={vacancyCardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="vacancy-card h-fit w-[20rem] py-8 px-6 rounded-lg bg-yellow-50 space-y-4 items-start">
                <div className="font-semibold">
                    {head}
                </div>
                <ul className="list-disc list-inside space-y-3">
                    {
                        points.map(item => (
                            <li className="text-xs text-gray-800">{item}</li>
                        ))
                    }
                </ul>
                <button className="see-details-btn scale-0 opacity-0 hidden rounded-full px-4 py-3 bg-black text-white text-xs text-medium">See Details</button>
            </div>
        </div>
    )
}