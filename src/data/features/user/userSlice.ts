import { PayloadAction } from "@reduxjs/toolkit";
import { AuthError, User, } from "@supabase/supabase-js";
import { createAppSlice } from "../../createAppSlice";
import { signInUser, signOutUser } from "../../actions/user.actions";


export interface UserState {
    isUser: boolean
    error: AuthError | null
    userData: User | null
    status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
    isUser: false,
    userData: null,
    error: null,
    status: "idle",
};
export const userSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User | null>) => {
            if (action.payload) return { ...state, userData: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(signInUser.fulfilled, (state, action: PayloadAction<UserState>) =>
            state = { ...state, ...action.payload }
        );
        builder.addCase(signOutUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(signOutUser.fulfilled, (state, action: PayloadAction<UserState>) =>
            state = { ...state, ...action.payload }
        );
    },
    selectors: {
        selectUser: (state) => state
    }
});

export const { selectUser } = userSlice.selectors;
export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
