
import { MdOutlinePhotoCamera, MdOutlineSearch } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { BiSolidVideo } from "react-icons/bi";
import { contacts } from "../data/constants";
import ImageUploader from "./image";

export function TitleBar() {
    const [currentPage, setCurrentPage] = useState<string | null>(null)
    const loc = useLocation()

    useEffect(() => {
        setCurrentPage(loc.pathname)
    }, [loc, currentPage])
    return (
        <header className="flex items-center justify-between  py-3 bg-primary text-white px-3">
            <span className="text-lg">WhatsApp</span>
            <div className="flex gap-4 items-center">
                <MdOutlinePhotoCamera className="size-6" />
                {currentPage === "/communities" ? null : <MdOutlineSearch className="size-6" />}
                <BsThreeDotsVertical className="size-5" />
            </div>
        </header>
    )
}
export function ChatTitleBar() {
    return (
        <header className="flex items-center justify-between  py-3 bg-primary text-white px-3">

            <span className="text-lg">WhatsApp</span>
            <div className="flex gap-4 items-center">
                <MdOutlinePhotoCamera className="size-6" />
                <MdOutlineSearch className="size-6" />
                <BsThreeDotsVertical className="size-5" />
            </div>
        </header>
    )
}
export function AddContactsTitleBar() {
    return (
        <header className="flex items-center justify-between  py-3 bg-primary text-white px-3">

            <div className="flex gap-4 items-center">
                <a href="/" aria-label="back"><HiArrowLeft className="size-4" /></a>
                <div className="flex flex-col items-start">
                    <span>Select Contacts</span>
                    <span className="text-[10px]">{contacts.length} Contacts</span>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <MdOutlineSearch className="size-6" />
                <BsThreeDotsVertical className="size-5" />
            </div>
        </header>
    )
}
export function NewContactTitleBar() {
    return (
        <header className="flex items-center justify-between  py-3 bg-primary text-white px-3">

            <div className="flex gap-4 items-center">
                <a href="/add_contact" aria-label="back"><HiArrowLeft className="size-4" /></a>
                <div className="flex flex-col items-start">
                    <span>New Contact</span>
                </div>
            </div>
        </header>
    )
}
export function MessageTitleBar({ userName, isOfficial }: { userName: string, isOfficial: boolean }) {
    return (
        <header className="flex items-center justify-between  py-3 bg-primary text-white px-3">

            <div className="flex gap-2 items-center">
                <a href="/" aria-label="back"><HiArrowLeft className="size-4" /></a>
                <div className="h-8 w-8 min-w-8 overflow-hidden  items-center flex justify-center rounded-full bg-black text-white">
                    <ImageUploader />
                </div>
                <div className="flex  justify-center items-center gap-1">
                    <span className="overflow-hidden" style={{ WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{userName}</span>

                    {
                        isOfficial && <div className="h-4 w-4 ">
                            <img src="/assets/images/green-tick.png" alt="" className="h-full w-full object-cover" />
                        </div>
                    }
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <BiSolidVideo className="size-5" />
                <MdCall className="size-5" />
                <BsThreeDotsVertical className="size-5" />
            </div>

        </header>
    )
}



