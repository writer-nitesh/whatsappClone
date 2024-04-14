
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Props } from "../utils";
import { persistor, store } from "../data/store";



export const AppProvider = ({ children }: Props) => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
