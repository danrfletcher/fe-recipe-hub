import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { getUrl } from "../features/fileUploadSlice";
import { success } from "../features/auth/authSlice";



// this component handles picture upload
export const FileUpload: React.FC = () => {
	const { register, handleSubmit,
		formState: { isDirty } } = useForm({ mode: "onChange" })

	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<any> = async (data) => {
		const formData = new FormData();
		formData.append("file", data.file[0]);
		dispatch(getUrl(formData));
		dispatch(success(true))
	};

	return (
		<form onSubmit={handleSubmit(submitForm)} className="auth-form">
			<label htmlFor="filename" className="input-label add-img-label">
				Upload Image
			</label>
			<div className="add-img-div">
				<input type="file" id="filename" {...register("file")} />
				<button
					type="submit"
					className="add-img-btn"
					disabled={!isDirty}>
					Add
				</button>
			</div>
		</form>
	);
};
