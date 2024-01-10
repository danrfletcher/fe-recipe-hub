import { AppThunk } from "../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../utils/api-utils";

interface FileUploadState {
  imageUrl: string | null
}

const initialState: FileUploadState = {
  imageUrl: null
}

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    getFileUrl: (state, action: PayloadAction<string>)=>{
      state.imageUrl = action.payload
    }
  }
})

export const getUrl = (formData: any): AppThunk =>{
 return async (dispatch) =>{
  //  if (!file) return;
//   const formData = new FormData();
console.log('>>>', formData);
try {
      // await formData.append('file[]', formData);


      const response = await api.post(`/image`, formData)
      console.log(response.data,"<<<<")
      dispatch(getFileUrl(response.data))
    }

    catch(error){
      console.log(error)
    }
  }
}

export const { getFileUrl} = fileUploadSlice.actions
export default fileUploadSlice.reducer
