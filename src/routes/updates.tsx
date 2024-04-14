import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPlus } from "react-icons/hi2";
import { MdPhotoCamera, MdModeEdit } from "react-icons/md";
import { contacts } from "../data/constants";


export default function Updates() {
    return (
        <div className="flex flex-col  h-full py-2">

            <div className='border-b-[1px] px-2 py-3'>
                <div className='py-2 flex items-center justify-between '>
                    <h1 className='font-medium'>Status</h1>
                    <BsThreeDotsVertical className="size-4" />
                </div>


                <div className="flex gap-3  overflow-x-auto">
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <div className=" rounded-full h-12 w-12 flex items-center justify-center border-[2px]  border-green-500 p-0.5 ">
                            <div className="bg-gray-500 rounded-full h-full w-full flex items-center justify-center">Test</div>
                        </div>
                        <span className="text-[12px] truncate w-fit">My Status</span>
                    </div>
                    {
                        contacts.map((contact, index) => {
                            if (index < 4) {
                                return (
                                    <div className='flex flex-col gap-2 items-start justify-center w-full'>

                                        <div className=" rounded-full h-12 w-12 flex items-center overflow-hidden justify-center border-[2px]  border-green-500 p-0.5 ">
                                            <img src={contact.image} alt="profile_image" className="h-full w-full object-cover rounded-full" />
                                        </div>
                                        <span className="text-[12px] text-center overflow-hidden" style={{ WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{contact.name}

                                        </span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="py-4 px-2 ">

                <div className=' flex items-center justify-between '>
                    <h1 className='font-medium'>Channels</h1>
                    <HiPlus className="size-5" />
                </div>
                <div className="flex flex-col items-center justify-center py-4">
                    <span className="text-sm text-center text-gray-500">No Channels Followed</span>
                </div>
            </div>

            <div className="fixed bottom-24 items-center gap-4 justify-center flex flex-col right-[78%]  " >
                <a aria-label='add updates' className='h-8 w-8 flex items-center justify-center shadow-md bg-green-200 p-2 rounded-lg  '>
                    <MdModeEdit className=' size-5 text-primary ' />
                </a>
                <a aria-label='edit updates' className='h-12 w-12 flex items-center justify-center shadow-md bg-primary p-3 rounded-xl  '>
                    <MdPhotoCamera className='text-white size-5' />
                </a>
            </div>
        </div>
    )
}
