import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit"
import navReducer from "../features/navSlice"
import authReducer from "../features/auth/authSlice"
import userReducer from "../features/userSlice"

export const store = configureStore({
  reducer: {
    navToggle: navReducer,
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
