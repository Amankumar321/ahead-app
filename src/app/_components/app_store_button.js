
export default function AppStoreButton() {
    return (
        <button className="w-fit px-3 py-1 flex flex-row items-center rounded-md bg-black">
            <div>
                <img src="/apple.png" width={16}></img>
            </div>
            <div className="flex flex-col px-2">
                <div className="text-[8px] font-medium leading-none text-gray-100">
                    Download on the
                </div>
                <div className="text-sm font-sans leading-none text-gray-100">
                    App Store
                </div>
            </div>
        </button>
    )
}