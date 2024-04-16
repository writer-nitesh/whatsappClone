import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";
export interface MessageState {
    user: 0 | 1;
    message: string;
    time: string;
}

export interface ChatState {
    profile: string | null;
    userName: string;
    isOffical: boolean;
    message?: MessageState[];
}


const initialState: ChatState = {
    profile: null,
    userName: "WhatsApp",
    isOffical: true
};
export const messageSlice = createAppSlice({
    name: "chat",
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<MessageState>) => {
            if (state.message) return { ...state, message: [...state.message, action.payload] }
            else { return { ...state, message: [action.payload] } }
        },
        setUserName: (state, action: PayloadAction<string>) => {
            return { ...state, userName: action.payload }
        },
        setIsOfficial: (state, action: PayloadAction<boolean>) => {
            return { ...state, isOffical: action.payload }
        },
        setProfile: (state, action: PayloadAction<string>) => {
            return { ...state, profile: action.payload }
        },
        clearAll() {
            return initialState
        }
    },
    selectors: {
        selectChat: (state) => state
    }
});

export const { selectChat } = messageSlice.selectors;
export const { setIsOfficial, sendMessage, clearAll, setUserName,setProfile } = messageSlice.actions;
export default messageSlice.reducer;
