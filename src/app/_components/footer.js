import AppStoreButton from "./app_store_button";


export default function Footer() {
    const contacts = [
        {"image_url": "/location-dot-solid.svg", "image_h": 10, "image_w": 10, "text": "Auguststraße 26, 10117 Berlin"},
        {"image_url": "/envelope-solid.svg", "image_h": 12, "image_w": 12, "text": "hi@ahead-app.com"},
    ]

    return (
        <div className="w-full border-t-2 flex flex-col items-center space-y-8 pt-10 pb-6 border-t-gray-100">
            <div className="flex flex-col space-y-2 items-center">
                <div className="rounded-lg overflow-clip">
                    <img src="/logo.jpg" width={50} height={50}></img>
                </div>
                <div className="text-xl font-medium text-violet-600">
                    ahead
                </div>
            </div>
            <div className="flex flex-row space-x-4 justify-center items-center">
                {
                    contacts.map(item => (
                        <div className="flex flex-row space-x-1 justify-center items-center">
                            <div className="rounded-full bg-teal-200">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <img src={item.image_url} width={item.image_w} height={item.image_h}></img>
                                </div>
                            </div>
                            <div className="text-xs text-gray-800">
                                {item.text}
                            </div>
                        </div>
                    ))
                }
            </div>
            <AppStoreButton></AppStoreButton>
        </div>
    )
}