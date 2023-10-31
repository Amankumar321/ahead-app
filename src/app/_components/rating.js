import { useEffect } from "react"
import gsap from "gsap";

export default function Rating({stars, title}) {
    useEffect(() => {
        var target = document.querySelectorAll(".app-store-rating")[0];

        let ctx = gsap.context(() => {
            gsap.from(target.children, {scale: 0, opacity: 0, duration: 0.2, stagger: 0.2})
        })
    
        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <div>
            <div className="flex flex-row space-x-1 items-center app-store-rating">
                <Star key={1} color="text-yellow-400"/>
                <Star key={2} color="text-yellow-400"/>
                <Star key={3} color="text-yellow-400"/>
                <Star key={4} color="text-yellow-400"/>
                <Star key={5} color="text-yellow-400"/>
            </div>
            <div className="font-gill text-xs text-gray-600">
                100+ AppStore reviews
            </div>
        </div>
    )
}

function Star({color}) {
    

    return (
        <div className="">
            <svg className={`w-4 h-4 ${color}`} aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
    )
}