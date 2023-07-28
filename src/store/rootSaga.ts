import { all } from 'redux-saga/effects'
import routerSaga from "../features/routeSaga/routerSaga.ts";
import requestListSaga from "../features/requestListSaga/requestSagaList.ts";

export default function* rootSaga() {
    yield all([routerSaga(), requestListSaga()])
}
