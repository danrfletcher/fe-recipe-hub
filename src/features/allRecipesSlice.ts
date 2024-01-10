import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Recipe {
	recipeId: string;
	recipeTitle: string;
	tagLine: string;
	difficulty: number;
	timeToPrepare: number;
	recipeMethod: string;
	postedOn: string;
	recipeImg: string;
	cuisine: string;
	forkedFromId: number;
	originalRecipeId: number;
	userId: number;
	cuisineId: number;
	averageRating: number;  //changed
	ratingCount: number; //changed
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
