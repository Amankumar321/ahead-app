

export default function PracticeCard({image_url, text, duration}) {
    return (
        <div className="practice-card w-full h-full flex flex-col">
            <div className="h-1/2 bg-cyan-200">
                <img src={image_url} className="object-cover"></img>
            </div>
            <div className="h-1/2 flex flex-col p-3 space-x-1 bg-white">
                <div className="flex-1 text-[0.5rem] leading-[0.9rem]">
                    {text}
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="text-[0.4rem] text-gray-500">
                        Practice
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-1">
                        <div className="">
                            <img src="clock-regular.svg" className="h-2 w-2"></img>
                        </div>
                        <div className="text-[0.4rem] leading-[0.8rem] text-gray-800">
                            {duration} min
                        </div>
                    </div>
                </div>
            </div>

        </div>
                        
    )
}