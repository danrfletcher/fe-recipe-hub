import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Recipe {
	recipeId: string | null;
	recipeTitle: string | null;
	tagLine: string | null;
	difficulty: string | null;
	timeToPrepare: string | null;
	recipeMethod: string | null;
	postedOn: string | null;
	recipeImg: string | null;
	cuisine: string | null;
	forkedFromId: string | null;
	originalRecipeId: string | null;
	userId: string | null;
	cuisineId: string | null;
}

interface RecipesState {
	allRecipes: Recipe[];
}

const initialState: RecipesState = {
	allRecipes: [],
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		getRecipes: (state, action: PayloadAction<Recipe[]>) => {
			state.allRecipes = action.payload;
		},
	},
});

export const getAllRecipes = (): AppThunk => {
	return async (dispatch) => {
		try {
			const response = await api.get("/recipes");
			dispatch(getRecipes(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const { getRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
