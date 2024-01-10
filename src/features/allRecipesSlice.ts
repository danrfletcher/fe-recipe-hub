import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Recipe {
	recipeId: any;
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
	forkCount: number;
	directForkCount: number;
	ratingCount: number;
	averageRating: number;
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

export const getForksById = (params: any): AppThunk => {
	return async (dispatch) => {
		try {
			const response = await api.get(`/recipes/forks?${Object.keys(params)}=${params[Object.keys(params)[0]]}`)
			dispatch(getRecipes(response.data))
		} catch (error) {
			console.log(error)
		}
	}
}

export const { getRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
