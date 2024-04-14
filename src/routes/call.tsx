
import { MdAddCall, MdOutlineInsertLink } from "react-icons/md";

export default function Call() {
    return (
        <div className="h-full">

            <a aria-label="calls" className=" hover:bg-gray-100 px-2 py-4 flex gap-2  items-start justify-start">
                <div className="h-10 w-10 min-w-10 overflow-hidden  flex-col items-center flex justify-center rounded-full bg-primary text-white">
                    <MdOutlineInsertLink className="size-5" />
                </div>
                <div className="flex flex-col  items-start w-full">
                    <span className="font-medium">Create Call Link</span>
                    <span className="text-[12px] text-gray-500">Create a link for WhatsApp call</span>
                </div>
            </a>

            <div className="px-2">
                <div className=' flex items-center justify-between '>
                    <h1 >Recent</h1>
                </div>
                <div className="flex flex-col items-center justify-center py-4">
                    <span className="text-sm text-center text-gray-500">No calls yet</span>
                </div>
            </div>

            <a aria-label='new call' className='fixed bottom-24 h-12 w-12  flex items-center justify-center shadow-md right-[78%] bg-primary p-3 rounded-xl  '>
                <MdAddCall className='text-white size-5' />
            </a>
        </div>
    )
}
