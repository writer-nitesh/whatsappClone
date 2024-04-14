
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from "../data/hooks";
import { signInUser } from "../data/actions/user.actions";

export function Authntication() {
    const dispatch = useAppDispatch()

    function handleSignIn() {
        dispatch(signInUser())
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center gap-4 '>
            <div className='auth h-full w-full rounded-b-full flex flex-col items-center justify-center '>
                <h1 className='text-white font-bold text-9xl'> WhatsApp Clone</h1>
            </div>
            <div className='w-fit'>
                <button
                    aria-label="google_signin"
                    className="w-fit flex gap-2 items-center justify-center py-2 px-2 border-[1px] rounded-md mb-2"
                    onClick={handleSignIn}
                >
                    <FcGoogle className="size-8 " />
                    <p className="text-gray-500 capitalize text-sm"> Sign In with Google</p>
                </button>
            </div>
        </div>
    )
}
