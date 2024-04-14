import { AddContactsTitleBar } from './titlebar'
import { FaUserPlus } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { CommunityIcon } from '../icons';
import { contacts } from '../data/constants';

export default function AddContacts() {
    return (
        <div className='h-full flex flex-col '>
            <AddContactsTitleBar />

            <div className='overflow-y-auto'>
                <div className='py-2 '>
                    <a aria-label="new group" className=" hover:bg-gray-100 px-3 py-2 flex gap-4 items-center justify-start">
                        <div className="h-10 w-10 min-w-10 overflow-hidden  flex-col items-center flex justify-center rounded-full bg-primary text-white">
                            <FaUserGroup className="size-5" />
                        </div>
                        <div className="flex flex-col  items-start w-full">
                            <span className='font-medium'>New Group</span>
                        </div>
                    </a>
                    <a href='/new_contact' aria-label="new contact" className=" hover:bg-gray-100 px-3 py-2 flex gap-4 items-center justify-start">
                        <div className="h-10 w-10 min-w-10 overflow-hidden  flex-col items-center flex justify-center rounded-full bg-primary text-white">
                            <FaUserPlus className="size-5 -scale-x-100" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className='font-medium'>New Contact</span>
                        </div>
                    </a>
                    <a aria-label="new community" className=" hover:bg-gray-100 px-3 py-2 flex gap-4  items-center justify-start">
                        <div className="h-10 w-10 min-w-10 overflow-hidden  flex-col items-center flex justify-center rounded-full bg-primary text-white">
                            <CommunityIcon className="size-5" />
                        </div>
                        <div className="flex flex-col  items-start w-full">
                            <span className='font-medium'>New Community</span>
                        </div>
                    </a>


                </div>

                <div className='flex flex-col gap-2 ' >

                    <h2 className='text-sm text-gray-500 px-3 '>Contacts on WhatsApp</h2>
                    {
                        contacts.map((contact, index) => (
                            <a key={index} aria-label="new contact" className="px-3  hover:bg-gray-100  py-2 flex gap-4 items-center justify-start">
                                <div className="h-10 w-10 min-w-10 overflow-hidden flex-col items-center flex justify-center rounded-full ">
                                    <img src={contact.image} alt={contact.name} className='h-full w-full object-cover' />
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <span className='font-medium'>{contact.name}</span>
                                    {contact.caption && <span className='text-[12px] text-gray-500'>{contact.caption}</span>}
                                </div>
                            </a>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
