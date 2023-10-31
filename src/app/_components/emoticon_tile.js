
export default function EmoticonTile({color, emoticon_src, head, body, head_color, body_color, transform}) {

    return (
        <div className={`flex flex-col ${color} ${transform} rounded-xl p-6 w-[20rem]`}>
            <div className="py-2">
                <img src={emoticon_src} height={30} width={30}></img>
            </div>
            <div className={`font-semibold text-sm py-2 ${head_color}`}>
                {head}
            </div>
            <div className={`text-xs leading-2 py-2 ${body_color}`}>
                {body}
            </div>
        </div>
    )
}