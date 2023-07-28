import {Provider} from "react-redux";
import {ReactNode} from "react";
import {store} from "../../store/store.ts";
interface StoreProviderProps {
    children?: ReactNode;
}
export const ReduxProvider = ({children}: StoreProviderProps) => {
    return <Provider store={store}>
        {children}
    </Provider>;
}