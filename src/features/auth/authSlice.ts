import { createSlice } from "@reduxjs/toolkit"

type User = {
  username?: string,
  password?: string
}

interface AuthState {
  loading: boolean,
  userInfo: User,
  userToken: string | null,
  error: string | null,
  success: boolean
}

const initialState: AuthState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for JWT
  error: null,
  success: false // monitors registration process
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
  }
})

export default authSlice.reducer
