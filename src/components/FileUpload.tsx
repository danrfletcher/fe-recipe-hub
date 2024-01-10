import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { getUrl } from "../features/fileUploadSlice";


// this component handles picture upload
export const FileUpload: React.FC = () => {
	const { register, handleSubmit } = useForm();

	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<any> = async (data) => {
		const formData = new FormData();
		formData.append("file", data.file[0]);
		dispatch(getUrl(formData));
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<input type="file" id="filename" {...register("file")}></input>
			<input type="submit" />
		</form>
	);
};
