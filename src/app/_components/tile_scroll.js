import { useEffect } from "react"

export default function TileScroll({list}) {

    useEffect(() => {
        var lastScrollTop = 0;
        var ele = document.getElementById("tile-scroll-container")

        const func = () => {
            var bounds = ele.getBoundingClientRect()
            var st = document.documentElement.scrollTop
            if (st > lastScrollTop) {
                if (bounds.bottom < window.innerHeight) {
                    ele.scrollBy({top: st - lastScrollTop, left: 0, behavior: "smooth"})
                }
            }
            if (st < lastScrollTop) {
                if (bounds.top > 0) {
                    ele.scrollBy({top: st - lastScrollTop, left: 0, behavior: "smooth"})
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }

        document.addEventListener("scroll", func)
    
      return () => {
        document.removeEventListener("scroll", func)
      }
    }, [])
    

    return (
        <div id="tile-scroll-container" className="w-100 h-full overflow-y-scroll pr-12 scrollbar scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-white">
            <div className="flex flex-col space-y-6">
                {
                    list.map(item => (
                        <div className="rounded-lg flex flex-col p-8 space-y-4 bg-white">
                            <div className="text-sm font-medium">
                                {item.head}
                            </div>
                            <div className="text-xs text-gray-500">
                                {item.body}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}