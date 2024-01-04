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

/*
Redux contains the entirety of the app's state in a JavaScript object called the store.

The store has access to the entire App component because it is called by a provider (see main.tsx).

In lines 3-5, we are making sure the store is aware of any reducers we have made in our slices.

In lines 7-8, we are declaring and exporting the type of AppDispatch and RootState based on our store.
These are then imported and used in hooks.ts when we add types to our hooks.
*/