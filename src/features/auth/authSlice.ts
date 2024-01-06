import { AppThunk } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api-utils";

interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
	userId: number | null;
	username: string | null;
	hasRegistered: boolean;
	isError: boolean;
	error: string | null
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: null,
	userId: null,
	username: null,
	hasRegistered: false,
	isError: false,
	error: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<any>) => {
			state.isAuthenticated = true;
			state.token = action.payload.token;
			state.userId = action.payload.userId;
			state.username = action.payload.username
			state.error = null
			state.isError = false
		},
		authFail: (state, action: PayloadAction<string>) => {
			state.isError = true;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.token = null;
			state.userId = null;
			state.username = null
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
				// dispatching a response object to the store to update the state
				dispatch(loginSuccess(response.data));
				console.log("Login successful")
			} catch (error: any) {
				console.log(error.response.data);
				const errorMsg = error.response.data
				dispatch(authFail(errorMsg))
			}
		};

export const registerUser = (
	username: string,
	name: string,
	ProfileImg: string,
	password: string,
	bio: string
): AppThunk =>
	async (dispatch) => {
		try {
			await api.post("/register", { username, name, ProfileImg, password, bio });
			console.log("Registration successful");
		} catch (error: any) {
			const baseError = error.response.data
			if (baseError.errors) {
				console.log(baseError)
			} else {
				dispatch(authFail(baseError))
			}
		}
	};

export const { loginSuccess, logout, authFail } = authSlice.actions;
export default authSlice.reducer;
