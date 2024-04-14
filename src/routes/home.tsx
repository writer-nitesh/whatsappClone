import { Outlet } from "react-router-dom";
// import { useAppDispatch, } from "../data/hooks";
// import { selectUser } from "../data/features/user/userSlice";
// import { signOutUser } from "../data/actions/user.actions";
import ChatSetting from "../components/chatSetting";
export default function Home() {
    // const { userData } = useAppSelector(selectUser)
    // const dispatch = useAppDispatch()

    // function handleSignOut() {
    //     dispatch(signOutUser())
    // }

    return (
        <>
            <div className='h-screen lg:flex hidden '>
                <div className='h-full flex flex-col w-[30%] '>
                    <Outlet />
                </div>
                <div className='h-full w-full bg-black p-4 overflow-hidden flex flex-col text-white gap-2'  >
                    <h1 className='text-white text-center font-bold text-9xl'>WhatsApp Clone</h1>

                    {/* <div className='flex gap-2 items-center justify-end'>
                        <div className='text-white'>{userData?.user_metadata?.name}</div>
                        <button className='bg-white text-green-500 px-2 py-1 rounded-md' onClick={handleSignOut}>Sign Out</button>
                    </div> */}
                    <ChatSetting />
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
