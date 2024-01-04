import { configureStore } from "@reduxjs/toolkit"
import navReducer from "../features/navSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    toggle: navReducer,
    auth: authReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
