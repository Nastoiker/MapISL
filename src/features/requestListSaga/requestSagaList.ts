import { call, put, takeLatest } from 'redux-saga/effects'
import requestApi from "../../services/api.ts";
import {requestListActions} from "./requestListSlice.ts";


function* fetchRequestList(): Iterator<any> {
    try {
        const response = yield call(requestApi.getAll)
        yield put(requestListActions.fetchRequestListSuccess(response))
    } catch (error) {
        yield put(requestListActions.fetchRequestListFailed(error))
    }
}

export default function* requestListSaga() {
    yield takeLatest(requestListActions.fetchRequestList.type, fetchRequestList)
}
