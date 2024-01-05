import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface UserState {
  value: string
}

const initialState: UserState = {
  value: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer
