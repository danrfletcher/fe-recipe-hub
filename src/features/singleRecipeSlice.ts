import { AppThunk } from "../app/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

interface SingleRecipeState {
  recipe: any,
  recipeId: string,
  isLoading: boolean
}

const initialState: SingleRecipeState = {
  recipe: [],
  recipeId: "",
  isLoading: false
};

const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState,
  reducers: {
    singleRecipe: (state, action: PayloadAction<any>) => {
      state.recipe = action.payload
      state.isLoading = false
      state.recipeId = action.payload.recipeId
    },
    recipeId: (state, action: PayloadAction<string>) => {
      state.recipeId = action.payload
      state.isLoading = true
    }
  }
})

export const getSingleRecipe = (recipeId: string): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/recipes/${recipeId}`);
      dispatch(singleRecipe(response.data))
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const { singleRecipe, recipeId } = singleRecipeSlice.actions
export default singleRecipeSlice.reducer;