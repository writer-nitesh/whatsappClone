import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector, } from "../data/hooks";
// import { selectUser } from "../data/features/user/userSlice";
// import { signOutUser } from "../data/actions/user.actions";
import ChatSetting from "../components/chatSetting";
import { useRef } from "react";
import { useScreenshot } from 'use-react-screenshot'

import { clearScreen, selectScreeen, setScreen } from "../data/features/screen/screenSlice";
import { MdDownload, MdClose } from "react-icons/md";


export default function Home() {

    const ref = useRef(null)
    const [/*_*/, takeScreenshot] = useScreenshot()
    const { images } = useAppSelector(selectScreeen)
    const dispatch = useAppDispatch()

    const getImage = async () => {
        const img_url = await takeScreenshot(ref.current)
        dispatch(setScreen({ image: img_url, name: `WatsApp_Clone_SS_${Math.random()}.png` }))

    }


    // function handleSignOut() {
    //     dispatch(signOutUser())
    // }

    function handleClearScreen() {
        dispatch(clearScreen())
    }




    return (
        <>
            <div className='h-screen lg:flex hidden '>
                <div ref={ref} className='h-full flex flex-col w-[30%] '>
                    <Outlet />
                </div>
                <div className='h-full w-full bg-black p-4 overflow-hidden flex flex-col text-white gap-2'  >
                    <h1 className='text-white text-center font-bold text-9xl'>WhatsApp Clone</h1>
                    {/* <div className='flex gap-2 items-center justify-end'>
                        <div className='text-white'>{userData?.user_metadata?.name}</div>
                        <button className='bg-white text-green-500 px-2 py-1 rounded-md' onClick={handleSignOut}>Sign Out</button>
                    </div> */}
                    <ChatSetting getScreenShot={getImage} >

                        <div className="">
                            {
                                images &&
                                <>
                                    <div className="flex justify-end">
                                        <button title="Clear Screen" onClick={handleClearScreen}>
                                            <MdClose className="size-5" />
                                        </button>
                                    </div>
                                    <div className="flex gap-2 px-4 justify-center items-center overflow-y-scroll">
                                        {
                                            images && images.map(({ image, name }) => {
                                                return (
                                                    <a href={image} download={name} >
                                                        <div className="flex relative overflow-hidden rounded-md">
                                                            <img src={image} className="size-12 rounded-md" alt="screenshort" />
                                                            <div className="absolute top-0 flex items-center h-full w-full justify-center hover:bg-white 
                                                    transition duration-100 ease-in-out hover:opacity-100">
                                                                <MdDownload className="size-6 text-primary" />
                                                            </div>

                                                        </div>
                                                    </a>
                                                )

                                            })
                                        }

                                    </div>
                                </>
                            }



                        </div>
                    </ChatSetting>
                </div>
            </div>
            <div className="flex lg:hidden h-screen items-center justify-center">
                <p className="text-xl font-extralight">
                    We Need Big Screen to Display.
                </p>

            </div>
        </>
    )
}
