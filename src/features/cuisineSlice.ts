import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Cuisine {
	cuisineId: number;
	cuisineName: string;
	cuisineImg: string;
	description: string;
	recipeCount: number;
}

interface CuisinesState {
	allCuisines: Cuisine[];
}

const initialState: CuisinesState = {
	allCuisines: [],
};

const cuisinesSlice = createSlice({
	name: "cuisines",
	initialState,
	reducers: {
		getCuisines: (state, action: PayloadAction<Cuisine[]>) => {
			state.allCuisines = action.payload;
		},
	},
});

export const getAllCuisines = (): AppThunk =>{
  return async (dispatch)=>{
    try {
      const response = await api.get('/cuisines');

      dispatch(getCuisines(response.data))
    }
    catch (error){
      console.log(error)
    }
  }
}


export const {getCuisines} = cuisinesSlice.actions;
export default cuisinesSlice.reducer;
