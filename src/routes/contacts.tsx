import { IoPerson } from "react-icons/io5";
import { NewContactTitleBar } from "../components";

import { MdCall, MdOutlineFileDownload } from "react-icons/md";

export default function NewContact() {
    return (
        <div >
            <NewContactTitleBar />
            <div className="flex h-full flex-col">
                <div className="mt-5 px-2">
                    <div className="px-3 py-2 gap-4 flex items-baseline">
                        <div>
                            <IoPerson className="relative size-5 top-2 text-gray-400" />
                        </div>
                        <div className="flex flex-col w-full gap-10">
                            <input type="text" placeholder="First name" className="w-full border-b-[1px] outline-none border-gray-500 font-normal" />
                            <input type="text" placeholder="Last name" className="w-full border-b-[1px] outline-none border-gray-500 font-normal" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 px-2">
                    <div className="px-3 py-2 gap-4 flex items-baseline">
                        <div>
                            <MdCall className="relative size-5 top-2 text-gray-400" />
                        </div>
                        <div className="flex w-full gap-2">
                            <select name="country" id="" title="country" className="border-b-[1px] outline-none border-gray-500">
                                <option>IN +91</option>
                            </select>
                            <input type="text" placeholder="Phone" className="w-full border-b-[1px] outline-none border-gray-500 font-normal" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 px-2">
                    <div className="px-3 py-2 gap-4 flex items-baseline">
                        <div>
                            <MdOutlineFileDownload className="relative size-7 top-2 text-gray-400" />
                        </div>
                        <div className="flex w-full gap-2">
                            <select name="country" id="" title="country" className=" w-full border-b-[1px] outline-none border-gray-500">
                                <option>Phone</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex absolute w-[23%] bottom-0 px-3 py-2">
                    <button type="button" className="bg-primary text-white px-2 py-1 rounded-full w-full">Save</button>
                </div>
            </div>
        </div>
    )
}
