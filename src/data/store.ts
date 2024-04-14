import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { messageSlice } from "./features/message/messageSlice";

const rootReducer = combineSlices(userSlice,messageSlice);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store);





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
