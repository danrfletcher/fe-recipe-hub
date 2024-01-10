import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface searchState {
  value: boolean | string,
  cuisineQuery: boolean | string
  sortQuery: boolean | string
}

const initialState: searchState = {
  value: false,
  cuisineQuery: false,
  sortQuery: false,
}

const recipeSearch = createSlice({
  name: 'recipe-search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string | boolean>) => {
      state.value = action.payload;
    },
    setCuisineQuery: (state, action: PayloadAction<string | boolean>) => {
      state.cuisineQuery = action.payload;
    },
    setSortQuery: (state, action: PayloadAction<string | boolean>) => {
      state.sortQuery = action.payload;
    }
  }
})

export const { setSearchTerm, setCuisineQuery, setSortQuery } = recipeSearch.actions

export default recipeSearch.reducer
