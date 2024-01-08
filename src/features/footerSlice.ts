import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FooterState {
  position: number
}

const initialState: FooterState = {
  position: 0
}

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<number> ) => {
      state.position = action.payload
    }
  }
})

export const { setPosition } = footerSlice.actions

export default footerSlice.reducer
