import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

interface FileUploadState {
	imageUrl: any;
}

const initialState: FileUploadState = {
	imageUrl: null,
};

const fileUploadSlice = createSlice({
	name: "fileUpload",
	initialState,
	reducers: {
		getFileUrl: (state, action: PayloadAction<string>) => {
			state.imageUrl = action.payload;
		},
    clearFileUrl: (state)=>{
      state.imageUrl = null
    }
	},
});

export const getUrl = (formData: any): AppThunk => {
	return async (dispatch) => {
		try {
			const response = await api.post(`/image`, formData);
			console.log(response.data, "<<<<");
			dispatch(getFileUrl(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const { getFileUrl, clearFileUrl } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
