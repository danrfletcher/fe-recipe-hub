import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ForkedIngredients {
  forkedIngredients: any[],
  forkedQuantities: any[]
};

const initialState: ForkedIngredients = {
  forkedIngredients: [],
  forkedQuantities: []
};

const forkedIngredientsSlice = createSlice({
  name: "forkedIngredients",
  initialState,
  reducers: {
    forkedIngredientsToPost: (state, action: PayloadAction<any>) => {
      state.forkedIngredients.push(action.payload);
    },
    forkedQuantitiesToPost: (state, action: PayloadAction<any>) => {
      state.forkedQuantities.push(action.payload);
    },
    clearForkedIngredients: (state) => {
      state.forkedIngredients = [];
      state.forkedQuantities = [];
    },
      forkedIngredientsInitial: (state, action: PayloadAction<any>) => {
      state.forkedIngredients = action.payload;
    },
    forkedQuantitiesInitial: (state, action: PayloadAction<any>) => {
      state.forkedQuantities = action.payload;
    }
  }
});

export const {forkedIngredientsToPost, forkedQuantitiesToPost, clearForkedIngredients, forkedIngredientsInitial, forkedQuantitiesInitial} = forkedIngredientsSlice.actions
export default forkedIngredientsSlice.reducer
