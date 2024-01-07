import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

export interface Cuisine {
	cuisineId: string | null;
	cuisineName: string | null;
	cuisineImg: string | null;
	description: string | null;
	recipeCount: string | null;
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
		getCuisines: (state, action: PayloadAction<any>) => {
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
