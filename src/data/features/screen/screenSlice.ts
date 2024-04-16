import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";

interface Image {
    name: string
    image: string
}
interface ScreenState {
    images: Image[] | null
}

const initialState: ScreenState = {
    images: null
};

export const screenSlice = createAppSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<Image>) => {
            if (action.payload) return { images: [...(state.images || []), action.payload] }
        },
        clearScreen: () => {
            return { images: null }
        }
    },
    selectors: {
        selectScreeen: (state) => state
    }
});

export const { selectScreeen } = screenSlice.selectors;
export const { setScreen,clearScreen } = screenSlice.actions;
export default screenSlice.reducer;
