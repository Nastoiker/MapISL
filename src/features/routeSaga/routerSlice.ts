import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    loadingError: false,
    route: null,
    space: []
}

const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        fetchRoute(state, action) {
            state.loading = true
            state.loadingError = false
            state.space = action.payload
        },
        fetchRouteSuccess(state, action) {
            state.route = action.payload
            state.loading = false
        },
        fetchRouteFailed(state) {
            state.loading = false
            state.loadingError = true
        }
    }
})

// Actions
export const routerActions = routerSlice.actions
// // Selectors
export const routeLoading = state => state.router.loading
export const routeLoadingError = state => state.router.loadingError
export const selectRoute = state => state.router.route
export const selectSpace = state => state.router.space
// Reducers
const routerReducer = routerSlice.reducer
export default routerReducer
