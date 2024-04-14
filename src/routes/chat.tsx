'use client'
import { IoPerson } from "react-icons/io5";
import { RiChatNewFill } from "react-icons/ri";
import { useAppSelector } from "../data/hooks";
import { selectUser } from "../data/features/user/userSlice";
import { Chats } from "../components";
import { contacts } from "../data/constants";
import { generatePhone, generateRandomTime } from "../utils";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function Chat() {
    const { userData } = useAppSelector(selectUser)
    return (
        <div className="overflow-y-auto">
            <Chats>
                <a href='/user/0' className=" hover:bg-gray-100 px-2 py-4 flex gap-2  items-start justify-start">
                    <div className="h-10 w-10 min-w-10 overflow-hidden  items-center flex justify-center rounded-full bg-gray-400 text-white">

                        <IoPerson className="relative size-8 top-2" />

                    </div>
                    <div className="flex flex-col  w-full">
                        <div className="flex items-center justify-between">
                            {/* <span>{userData?.user_metadata.name} (You)</span> */}
                            <span>+91 {generatePhone()} (You)</span>
                            <div className="text-[12px] text-gray-500 ">10:30 PM</div>
                        </div>
                        <div className="flex justify-start items-center">
                            <IoCheckmarkDoneOutline className="size-4 text-blue-500" />
                            <span className="text-[14px] text-gray-500">
                                ok
                            </span>
                        </div>
                    </div>
                </a>


                {
                    contacts.map((contact) => {
                        return (
                            <a href='/user/0' className=" hover:bg-gray-100 px-2 py-4 flex gap-2  items-start justify-start">
                                <div className="h-10 w-10 min-w-10 overflow-hidden  items-center flex justify-center rounded-full bg-gray-400 text-white">

                                    {
                                        contact.image ?
                                            <img className="h-full w-full object-cover" src={contact.image} alt="profile_image" />
                                            :
                                            <IoPerson className="relative size-8 top-2" />

                                    }
                                </div>
                                <div className="flex flex-col  w-full">
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>{contact.name}</span>
                                            {
                                                contact.isOffical && <div className="h-3 w-3">
                                                    <img src="/assets/images/green-tick.png" alt="" className="h-full w-full object-cover" />
                                                </div>
                                            }
                                        </span>

                                        <div className="text-[12px] text-gray-500 ">{generateRandomTime()}</div>
                                    </div>
                                    {
                                        contact.lastMessage &&
                                        <div className="flex justify-start items-center">
                                            <IoCheckmarkDoneOutline className="size-4 text-blue-500" />
                                            <span className="text-[14px]  overflow-hidden text-gray-500" style={{ WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
                                                {contact.lastMessage}
                                            </span>


                                        </div>

                                    }

                                </div>
                            </a>
                        )
                    })

                }

            </Chats>



            <a href='/add_contact' aria-label='add contact' className='fixed bottom-24  h-12 w-12 flex items-center justify-center shadow-md right-[78%] bg-primary p-3 rounded-xl  '>
                <RiChatNewFill className='text-white size-5' />
            </a>
        </div>

    )
}
