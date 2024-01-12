import { AppThunk } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utils/api-utils";

interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
	userId: number | null;
	username: string | null;
	name: string | null
	profileImg: string | undefined
	bio: string | null
	hasRegistered: boolean;
	isError: boolean;
	error: string | null
	isLoading: boolean
	isSuccessful: boolean
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: null,
	userId: null,
	username: null,
	name: null,
	profileImg: undefined,
	bio: null,
	hasRegistered: false,
	isError: false,
	error: null,
	isLoading: false,
	isSuccessful: false
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<AuthState>) => {
			state.isAuthenticated = true;
			state.token = action.payload.token;
			state.userId = action.payload.userId;
			state.username = action.payload.username
			state.error = null
			state.isError = false
			state.isLoading = false
			state.hasRegistered = false
		},
		userDetails: (state, action: PayloadAction<AuthState>) => {
			state.name = action.payload.name
			state.profileImg = action.payload.profileImg
			state.bio = action.payload.bio
		},
		registrationSuccess: (state) => {
			state.hasRegistered = true
			state.isLoading = false
			state.error = null
			state.isError = false
		},
		authFail: (state, action: PayloadAction<string>) => {
			state.isError = true;
			state.error = action.payload;
			state.isLoading = false
			state.hasRegistered = false
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.token = null;
			state.userId = null;
			state.username = null
			state.isLoading = false
			state.hasRegistered = false
		},
		loading: (state) => {
			state.isLoading = true
		},
		clearErrors: (state) => {
			state.isError = false
			state.error = null
		},
		resetRegisteredStatus: (state) => {
			state.hasRegistered = false
		},
		success: (state) => {
			state.isSuccessful = !state.isSuccessful
		}
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
				dispatch(loginSuccess(response.data));
				console.log("Login successful")
			} catch (error: any) {
				console.log(error.response.data);
				const errorMsg = error.response.data
				dispatch(authFail(errorMsg))
			}
		};

export const getUserData =
	(username: string): AppThunk =>
		async (dispatch) => {
			try {
				const response = await api.get(`/user/${username}`)
				dispatch(userDetails(response.data))
			} catch (error: any) {
				console.log(error)
			}
		}

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
			dispatch(registrationSuccess())
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

export const {
	loginSuccess,
	userDetails,
	registrationSuccess,
	authFail,
	logout,
	loading,
	clearErrors,
	resetRegisteredStatus,
	success
} = authSlice.actions;

export default authSlice.reducer;
