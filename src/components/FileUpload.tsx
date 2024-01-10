import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import {  getUrl } from "../features/fileUpload";

export const FileUpload: React.FC = ()=>{
const {register, handleSubmit} = useForm()

const dispatch =useAppDispatch()



  const submitForm: SubmitHandler<any> = (data)=>{
   const formData = new FormData()
   formData.append('files[]', data.filename)
    console.log(data, "<<<FD")

    dispatch(getUrl(data))
  }

 
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit(submitForm)}><input type="file" id="filename" {...register('file')}></input>
    <input type="submit"/></form>
  )
}



// const handleSubmit = async () => {
//   if (!file) return;
//   const formData = new FormData();
//   formData.append('file', file);
//   try {
//       const response = await fetch('YOUR_ENDPOINT_URL', {
//           method: 'POST',
//           body: formData,
//           // Don't set Content-Type header, let the browser set it
//       });
//       const result = await response.json();
//       console.log(result); // Handle the response
//   } catch (error) {
//       console.error('Error uploading file:', error);
//   }
// };