import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Cuisine {
	cuisineId: number | null;
	cuisineName: string | null;
	cuisineImg: string | undefined;
	description: string | null;
	recipeCount: number | null;
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
      console.log(response.data,"<<< response API")
      dispatch(getCuisines(response.data))
    }
    catch (error){
      console.log(error)
    }
  }
}


export const {getCuisines} = cuisinesSlice.actions;
export default cuisinesSlice.reducer;
