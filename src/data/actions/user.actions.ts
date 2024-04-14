import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "../features/user/userSlice";
import { supabase } from "../../utils";

export const signInUser = createAsyncThunk('user/getUser', async () => {
    const data = await supabase.auth.signInWithOAuth({ provider: "google" })
    if (data.data.provider) {
        return {
            error: null,
            status: "idle",
            isUser: true,
            userData: null
        } as UserState
    }
    else {
        return {
            error: data.error,
            status: "failed",
            isUser: false,
            userData: null
        } as UserState
    }
});

export const signOutUser = createAsyncThunk('user/logoutUser', async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        return {
            error: error,
            status: "failed",
            isUser: false,
            userData: null
        } as UserState

    }
    else {
        return {
            error: null,
            status: "idle",
            isUser: false,
            userData: null
        } as UserState
    }
});

// export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (file: File, thunkAPI) => {


// })

