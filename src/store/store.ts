import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import routerReducer from "../features/routeSaga/routerSlice.ts";
import serviceListReducer from "../features/requestListSaga/requestListSlice.ts";
import rootSaga from "./rootSaga.ts";

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: {
        router: routerReducer,
        requestList: serviceListReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(sagaMiddleware)
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga)