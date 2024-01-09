import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";
import { CreateRecipe } from "../components/pages/CreateRecipe";
import { getSingleRecipe } from "./singleRecipeSlice";
import { Ingredient } from "./ingredientsSlice";

interface CreateRecipe {
	recipeTitle: string | null;
	tagLine: string | null;
	difficulty: number | null;
	timeToPrepare: number | null;
	recipeMethod: string | null;
	recipeImg: string | null;
	cuisine: string | null;
	forkedFromId: number | null;
	originalRecipeId: number | null;
	userId: number | null;
	cuisineId: any | number | null;
	recipeId: number | null;
	ingredientIds: any[];
	quantity: string[];
}

const initialState: CreateRecipe = {
	recipeTitle: null,
	tagLine: null,
	difficulty: null,
	timeToPrepare: null,
	recipeMethod: null,
	recipeImg: null,
	cuisine: null,
	forkedFromId: null,
	originalRecipeId: null,
	userId: null,
	cuisineId: null,
	recipeId: null,
	ingredientIds: [],
	quantity: [],
};

const createRecipeSlice = createSlice({
	name: "postRecipe",
	initialState,
	reducers: {
		recipeToPost: (state, action: PayloadAction<CreateRecipe>) => {
			state.recipeTitle = action.payload.recipeTitle;
		},
		ingredientsToPost: (state, action: PayloadAction<Ingredient>) => {
			state.ingredientIds.push(action.payload);
		},
		quantityToPost: (state, action: PayloadAction<string>) => {
			state.quantity.push(action.payload);
		},
		clearPost: (state) => {
			state.quantity = []
			state.ingredientIds = []
		}
	},
});

export const postRecipe = (object: CreateRecipe, token: string, ingredientObj: object): AppThunk => {
	return async (dispatch) => {
		try {
			const response = await api.post("/recipes", object, { headers: { Authorization: token } });
			dispatch(getSingleRecipe(response.data.recipeId))
			if (response.status == 201) {
				await api.post(`ingredients/recipes/${response.data.recipeId}/ingredients`, ingredientObj)
				dispatch(clearPost())
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const { recipeToPost, ingredientsToPost, quantityToPost, clearPost } = createRecipeSlice.actions;
export default createRecipeSlice.reducer;
