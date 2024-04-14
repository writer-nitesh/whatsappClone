import { MdOutlineCall } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { CommunityIcon, UpdatesIcon } from "../icons";




export function Navbar() {
    return (
        <div className="relative h-14 bottom-0 border-[1px] bg-white w-full flex items-center  justify-between py-9  px-4 ">
            <a href="/" className="flex flex-col items-center cursor-pointer gap-2" >
                <BsChatLeftText className="size-[16px]   " />
                <span className="text-[14px]">Chats</span>
            </a>
            <a href="/updates" className="flex flex-col items-center cursor-pointer gap-2" >
                <UpdatesIcon className="size-[20px]" />
                <span className="text-[14px]">Updates</span>
            </a>
            <a href="/communities" className="flex flex-col items-center cursor-pointer gap-2" >
                <CommunityIcon className="size-[20px]" />
                <span className="text-[14px]">Communities</span>
            </a>
            <a href="/calls" className="flex flex-col items-center cursor-pointer gap-2" >
                <MdOutlineCall className="size-[18px]" />
                <span className="text-[14px]">Calls</span>
            </a>
        </div>
    )
}
