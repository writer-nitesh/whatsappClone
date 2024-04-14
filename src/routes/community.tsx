import { HiPlusCircle } from "react-icons/hi2";
import { CommunityIcon } from "../icons";

export default function Community() {
    return (
        <div className="h-full">
            <a aria-label="new_community" className=" hover:bg-gray-100 px-2 py-4 flex gap-2  items-center justify-start">
                <div className="h-10 w-10 min-w-10 overflow-hidden  flex-col items-center flex justify-center rounded-lg bg-gray-300 text-white">
                    <CommunityIcon />
                    <HiPlusCircle className="size-5  absolute left-8 top-[90px] text-primary" />
                </div>
                <div className="flex flex-col font-medium items-start w-full">
                    New Communtiy
                </div>
            </a>
           
        </div>
    )
}
