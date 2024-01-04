import { createSlice } from "@reduxjs/toolkit"

interface NavState {
  value: boolean
}

const initialState: NavState = {
  value: false
}

const navSlice = createSlice({
  name: 'nav-toggle',
  initialState,
  reducers: {
    navToggle: (state) => {
      state.value = !state.value
    }
  }
})

export const { navToggle } = navSlice.actions

export default navSlice.reducer
