import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Ingredient {
	ingredientId: string
	ingredientName: string
	calories: string
	carbohydrate: string
	sugar: string
	fiber: string
	fat: string
	protein: string
}

interface IngredientState {
	ingredients: Ingredient[];
}

const initialState: IngredientState = {
	ingredients: [],
};

const ingredientsSlice = createSlice({
	name: "ingredients",
	initialState,
	reducers: {
		ingredients: (state, action: PayloadAction<Ingredient[]>) => {
			state.ingredients = action.payload;
		},
	},
});


export const getAllIngredients = (): AppThunk => {
	return async (dispatch) => {
		try {
			const response = await api.get('/ingredients')

			dispatch(ingredients(response.data))
		}
		catch (error) {
			console.log(error);
		}
	}
}

export const { ingredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer