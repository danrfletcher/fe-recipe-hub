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
    toggle(state) {
      state.value = !state.value
    }
  }
})

export const { toggle } = navSlice.actions

export default navSlice.reducer
