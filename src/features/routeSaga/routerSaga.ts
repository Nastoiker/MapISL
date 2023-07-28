import { call, put, takeLatest } from 'redux-saga/effects'
import { routerActions } from './routerSlice'
import routerApi from "../../services/routerApi.ts";

function* fetchRoute(action: any): Iterator<any> {
    try {
        const response = yield call(routerApi.getRoute, action.payload)
        yield put(routerActions.fetchRouteSuccess(response))
    } catch (error) {
        if(error instanceof Error) {
            yield put(routerActions.fetchRouteFailed())
        }
    }
}

export default function* routerSaga() {
    yield takeLatest(routerActions.fetchRoute.type, fetchRoute)
}
