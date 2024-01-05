import { AppThunk } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api-utils";

interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
	hasRegistered: boolean;
}
const initialState: AuthState = {
	isAuthenticated: false,
	token: null,
	hasRegistered: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<string>) => {
			state.isAuthenticated = true;
			state.token = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.token = null;
		},
	},
	extraReducers: (builder) => {
		builder;
	},
});

export const login =
	(username: string, password: string): AppThunk =>
	async (dispatch) => {
		try {
			const response = await api.post("/login", { username, password });
			const token = response.data;
			dispatch(loginSuccess(token));
		} catch (error: any) {
			console.log(error.message);
			// console.error("Login error:", error.response.data);
		}
	};

export const registerUser =
	(username: string,name: string,ProfileImg: string, password: string, bio: string): AppThunk =>
	async () => {
		try {
      await api.post("/register", { username, name, ProfileImg, password, bio  });
			console.log("registration successful");
		} catch (error: any) {
			console.log(error);
		}
	};

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
