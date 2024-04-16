import { MdClearAll, MdSend } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { clearAll, selectChat, sendMessage, setIsOfficial, setUserName } from "../data/features/message/messageSlice";
import { ChangeEvent, useEffect, useState } from "react";
import ImageUploader from "./avatar";
import { getCurrentTime } from "../utils";
import { CgScreenShot } from "react-icons/cg";

interface ChatSettingProps {
    getScreenShot: () => void
    children: React.ReactNode
}


export default function ChatSetting({ getScreenShot, children }: ChatSettingProps) {
    const dispatch = useAppDispatch()
    const { isOffical, userName } = useAppSelector(selectChat)
    const [name, setName] = useState<string>(userName)
    const [msg, setMsg] = useState<string>("")

    function handleOfficial() {
        dispatch(setIsOfficial(!isOffical))
    }
    function handleClear() {
        dispatch(clearAll())
    }
    function handleUserName() {
        if (name !== "") {
            dispatch(setUserName(name))
        }
    }
    function send() {
        if (msg.trim() !== "") {
            dispatch(sendMessage({ user: 1, message: msg, time: getCurrentTime() }))
        }
        setMsg("")
    }
    function handleMessage(event: ChangeEvent<HTMLInputElement>) {
        setMsg(event.target.value)
    }
    useEffect(() => {
        if (userName !== name) {
            setName(userName)
        }
    }, [userName])


    return (
        <div className="mt-3 flex flex-col h-full  gap-3 py-1 justify-between">
            <div className="flex gap-2 items-center justify-between">
                <h1 className="font-bold text-lg">Chat Setting</h1>
                <div className="flex gap-2">
                    <button title="Clear Chat Data" onClick={handleClear}><MdClearAll className="size-8" /></button>
                    <button title="Get Verified" onClick={handleOfficial}>
                        <FaCheck className={`size-6 ${isOffical && "text-primary"}`} />
                    </button>
                    <button onClick={getScreenShot} title="Capture Screenshot" type="button"><CgScreenShot className="size-5" /></button>


                </div>
            </div>

            <div>
                {children}
                <div className="mt-5 px-2">
                    <div className="px-3 py-2 gap-4 flex items-center">
                        <ImageUploader />
                        <div className="flex  w-full gap-2">
                            <input
                                type="text"
                                placeholder="User Name"
                                className="rounded-full px-2 w-full py-1 text-black outline-none"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleUserName()}
                            />
                            <button
                                onClick={handleUserName}
                                className="bg-primary flex items-center justify-center rounded-full px-4 py-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="rounded-full px-2 w-full py-1 text-black outline-none"
                        placeholder="Reply"
                        value={msg}
                        onChange={handleMessage}
                        onKeyDown={(e) => e.key === "Enter" && send()}
                    />
                    <button onClick={send} title="reply" className="bg-primary flex rounded-full h-10 w-10 justify-center items-center" >
                        <MdSend className="text-white" />
                    </button>
                </div>

            </div>

        </div>
    )
}
