import gsap from "gsap"
import { useEffect } from "react"

export default function StarSteps({steps}) {

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(".star-step-container .star-container", {scrollTrigger: ".star-step-container", opacity: 0, scale: 0, duration: 0.5, stagger: 0.2})
        gsap.from(".star-step-container .step-container", {scrollTrigger: ".star-step-container", opacity: 0, scale: 0, duration: 0.5, stagger: 0.2})

      })
    
      return () => {
        ctx.revert()
      }
    }, [])
    

    return (
        <div className="star-step-container w-full flex flex-col space-y-4">
            <div className="w-full flex flex-row">
                {
                    steps.map((_, index) => (
                        <div className="flex-1 flex flex-row items-center">
                            <div className={`flex-1 border-orange-200 border-gray- border-t-2 border-dashed ${index == 0 ? "border-none" : ""}`}>
                            </div>
                            <div className="star-container relative flex">
                                <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-white">
                                    {index}
                                </div>
                                <img src="/star.png" width={50} height={50}></img>
                            </div>
                            <div className={`flex-1 border-orange-200 border-t-2 border-dashed ${index == steps.length - 1 ? "border-none" : ""}`}>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full flex flex-row">
                {
                    steps.map((step) => (
                        <div className="step-container flex-1 text-xs text-gray-800 text-center px-4">
                            {step}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

