import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { getUrl } from "../features/fileUploadSlice";



// this component handles picture upload
export const FileUpload: React.FC = () => {
	const { register, handleSubmit,
  formState: { isDirty }  } = useForm({ mode: "onChange" })

	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<any> = async (data) => {
		const formData = new FormData();
		formData.append("file", data.file[0]);
		dispatch(getUrl(formData));
  
	};

	return (
    <form onSubmit={handleSubmit(submitForm)} className="auth-form">
          <label htmlFor="filename" className="input-label add-img-label">Add your image</label>
        <div className="add-img-div input-field">
  			<input className="add-img" type="file" id="filename" {...register("file")}/>
  			<button type="submit" disabled={ !isDirty} className="styled-btn back-btn add-img-btn" >Add</button>
		</div>
  		</form>
  	);
};
