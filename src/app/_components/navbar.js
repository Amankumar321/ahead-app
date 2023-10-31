
export default function Navbar() {
    const navOptions = ["Emoticons", "Manifesto", "Self-awareness test", "Work With Us"]

    return (
      <div className="w-full sticky z-[100] top-0 bg-white flex flex-row items-center pt-4 pb-4">
        <div className="pl-20">
          <div className="overflow-clip rounded-lg">
            <img src="/logo.jpg" height={50} width={50}></img>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-center">
          {
            navOptions.map((value) => (
              <button className="p-4 text-sm hover:underline underline-offset-8">
                {value}
              </button>
            ))
          }
        </div>
        <div className="pr-20">
          <button className="bg-black text-sm text-white px-6 py-3 rounded-full">
            Download app
          </button>
        </div>
      </div>
    )
  }
  