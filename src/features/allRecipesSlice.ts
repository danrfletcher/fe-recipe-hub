import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

interface RecipesState {
  allRecipes: any[];
}

const initialState: RecipesState = {
  allRecipes: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers:{
    getRecipes: (state, action: PayloadAction <any>) =>{
      state.allRecipes = action.payload
    }
  }
})

export const getAllRecipes = ():AppThunk =>{
 return async (dispatch) =>{
  try {
    const response = await api.get("/recipes")
    
    dispatch(getRecipes(response.data))
  }
  catch (error){
    
    console.log(error)
  }
}
}


export const {getRecipes} = recipesSlice.actions;
export default recipesSlice.reducer;