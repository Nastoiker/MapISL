import { createSlice } from '@reduxjs/toolkit'
interface  InitialState {
	loading: boolean,
	error: boolean,
	requests: [],
}
const initialState: InitialState = {
	requests: [],
	error: false,
	loading: false
}

const requestListSlice = createSlice({
	name: 'requestList',
	initialState,
	reducers: {
		fetchRequestList(state, _) {
			state.loading = true
		},
		fetchRequestListSuccess(state, action) {
			state.requests = action.payload
		},
		fetchRequestListFailed(state, action) {
			state.loading = false;
			state.error = true;
		},
	}
})

export const requestListActions = requestListSlice.actions

export const selectListRequests = state => state.requestList.requests

const serviceListReducer = requestListSlice.reducer
export default serviceListReducer
