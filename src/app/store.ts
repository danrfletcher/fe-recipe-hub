import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import authReducer from "../features/auth/authSlice";
import recipesReducer from "../features/allRecipesSlice";
import singleRecipeReducer from "../features/singleRecipeSlice.ts"
import ingredientsReducer from "../features/ingredientsSlice.ts"
import cuisinesReducer from "../features/cuisineSlice.ts"
import footerReducer from "../features/footerSlice.ts"

export const store = configureStore({
	reducer: {
		navToggle: navReducer,
		auth: authReducer,
		recipes: recipesReducer,
    singleRecipe: singleRecipeReducer,
    ingredients: ingredientsReducer,
    cuisines: cuisinesReducer,
    footer: footerReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
