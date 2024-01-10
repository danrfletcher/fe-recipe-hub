import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunk } from "../app/store"
import { api } from "../utils/api-utils"

export interface User {
  userId: number | null
  username: string | null
  name: string | null
  profileImg: string | null
  status: boolean
  bio: string | null
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const getUserById = (id: number): AppThunk => {
  return async (dispatch) => {
		try {
			const response = await api.get(`/user/id/${id}`);
			dispatch(getUser(response.data));
		} catch (error) {
			console.log(error);
		}
  }
}

export const { getUser } = userSlice.actions
export default userSlice.reducer
