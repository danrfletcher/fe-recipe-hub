import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit"
import navReducer from "../features/navSlice"
import authReducer from "../features/auth/authSlice"
import userReducer from "../features/userSlice"
import recipesReducer from "../features/allRecipiesSlice"


export const store = configureStore({
  reducer: {
    navToggle: navReducer,
    auth: authReducer,
    user: userReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
