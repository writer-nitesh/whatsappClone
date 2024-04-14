import { MessageTitleBar } from "../components";
import { MdMic, MdEmojiEmotions, MdPhotoCamera } from "react-icons/md";
import { PiPaperclip } from "react-icons/pi";
import { HiCurrencyRupee } from "react-icons/hi2";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { selectChat, sendMessage } from "../data/features/message/messageSlice";
import { getCurrentTime } from "../utils";
import { IoCheckmarkDoneOutline } from "react-icons/io5";


export default function Message() {
    const { userName, isOffical, message } = useAppSelector(selectChat)
    const [msg, setMsg] = useState<string>("")
    const ref = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()

    function handleMessage(event: ChangeEvent<HTMLInputElement>) {
        setMsg(event.target.value)
    }
    function send() {
        dispatch(sendMessage({ user: 0, message: msg, time: getCurrentTime() }))
        setMsg("")
    }

    useEffect(() => {
        if (ref.current != null) {
            ref.current.scrollTo(0, ref.current.scrollHeight)
        }

    }, [message])




    return (
        <div className=" h-full msg flex flex-col" >
            <MessageTitleBar userName={userName} isOfficial={isOffical} />
            <div className="h-[85vh] flex flex-col justify-end">
                <div ref={ref} className=" gap-2 overflow-y-auto overflow-x-hidden my-1   py-2 flex w-[100%] px-2 flex-col  ">
                    {
                        message && message.map((my_msg) => {
                            if (my_msg.user == 0) {
                                return (
                                    <div className="flex justify-end px-1">
                                        <div className="bubble_user0 flex flex-col py-1 px-2 min-w-28 w-fit rounded-2xl max-w-64 ">
                                            <div className="flex text-left ">
                                                {my_msg.message}
                                            </div>
                                            <div className="flex gap-1 items-end justify-end min-h-4 h-full text-[10px] text-gray-500">
                                                {my_msg.time}
                                                <IoCheckmarkDoneOutline className="size-4 text-blue-500" />

                                            </div>
                                        </div>

                                    </div>

                                )
                            }
                            else {
                                return (
                                    <div className="flex justify-start px-1">
                                        <div className="bubble_user1 flex flex-col p-1 w-fit rounded-md max-w-64 ">
                                            <div className="flex text-left ">
                                                {my_msg.message}
                                            </div>
                                            <div className="flex gap-1 items-end justify-end min-h-4 h-full text-[10px] text-gray-500">
                                                {my_msg.time}
                                                <IoCheckmarkDoneOutline className="size-4 text-blue-500" />

                                            </div>
                                        </div>

                                    </div>

                                )
                            }
                        })

                    }
                </div>

                <div className="absolute w-[23%] bottom-0">
                    <div className="px-1 flex items-center py-2 rounded-full gap-2">
                        <div className="flex w-full h-10 px-2 items-center gap-2 rounded-full bg-white">
                            <MdEmojiEmotions className="size-8 text-gray-500" />
                            <input
                                className="w-full capitalize caret-[#075E54] outline-none bg-transparent"
                                type="text"
                                aria-label="messgae"
                                placeholder="message"
                                value={msg}
                                onChange={handleMessage}
                                onKeyDown={(e) => e.key === "Enter" && send()}
                            />
                            <PiPaperclip className="size-8 text-gray-500 -rotate-90" />

                            {
                                msg === "" &&
                                <>
                                    <HiCurrencyRupee className="size-8 text-gray-500 " />
                                    <MdPhotoCamera className="size-8  text-gray-500" />
                                </>
                            }

                        </div>

                        {
                            msg === "" ?
                                <button title="record" className="bg-primary  h-10 w-10 min-w-10 rounded-full items-center flex justify-center">
                                    <MdMic className="text-white" />
                                </button>
                                :
                                <button
                                    title="send"
                                    className="bg-primary  h-10 w-10 min-w-10 rounded-full items-center flex justify-center"
                                    onClick={send}

                                >
                                    <MdSend className="text-white" />
                                </button>


                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
