
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { selectUser, setUserData } from "../data/features/user/userSlice";
import { getData, Props } from "../utils";
export default function Middlewear({ children }: Props) {
    const { isUser } = useAppSelector(selectUser);
    const router = useNavigate();
    const dispatch = useAppDispatch()


    useEffect(() => {
        async function getUser() {
            const d = await getData()
            dispatch(setUserData(d))
        }
        if (isUser === true) {
            getUser()

        }
        
    }, [isUser, router])

    if (isUser === true) {
        return <>{children}</>
    }
    else {
        router("/auth")
    }
}
