import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

interface Ingredients {
	ingredients: any[];
}

const initialState: Ingredients = {
	ingredients: [],
};

const ingredientsSlice = createSlice({
	name: "ingredients",
	initialState,
	reducers: {
		ingredients: (state, action: PayloadAction<any>) => {
			state.ingredients = action.payload;
		},
	},
});


export const getAllIngredients = (): AppThunk=>{
return async (dispatch)=>{
  try {
    const response = await api.get('/ingredients')
    console.log(response, "<<<< server response")
    dispatch(ingredients(response.data))
  }
  catch(error){
    console.log(error);
  }
}
}


export const { ingredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer