import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { authFail, clearErrors, loading, registerUser, success } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FileUpload } from "../FileUpload";

interface FormValues {
	name: string;
	username: string;
	ProfileImg: string;
	password: string;
	confirmPassword: string;
	bio: string;
}

const Register: React.FC = () => {

	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const isError = useAppSelector((state) => state.auth.isError)
	const error = useAppSelector((state) => state.auth.error)
	const isLoading = useAppSelector((state) => state.auth.isLoading)
	const hasRegistered = useAppSelector((state) => state.auth.hasRegistered)
	const isSuccessful = useAppSelector((state) => state.auth.isSuccessful)

	const dispatch = useAppDispatch();
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm<FormValues>();
	const imageUrl = useAppSelector((state) => state.fileUpload.imageUrl)

	const submitForm: SubmitHandler<FormValues> = (data) => {
		if (data.password !== data.confirmPassword) {
			dispatch(authFail("Passwords do not match"))
		} else if (data.password.length < 6) {
			dispatch(authFail("Password must contain at least 6 characters"))
		} else if (!isSuccessful) {
			dispatch(authFail("Please upload an image"))
		} else {
			dispatch(loading())
			dispatch(success(false))
			dispatch(registerUser(
				data.username,
				data.name,
				imageUrl,
				data.password,
				data.bio
			))
		}
	}

	useEffect(() => {
		dispatch(success(false))
		if (hasRegistered) {
			navigate("/login");
		}
	}, [hasRegistered]);

	return (
		<div
			onClick={() => dispatch(clearErrors())}
			className={isNavToggled ? (
				"page-slide-in"
			) : (
				"page-slide-out"
			)}>
			<h2 className="auth-header">Register</h2>
			<FileUpload />
			{isSuccessful ? (
				<p className="success-msg">Image uploaded successfully!</p>
			) : (
				null
			)}
			<form
				className="auth-form"
				onSubmit={handleSubmit(submitForm)}>
				<div className="input-wrapper">
					<label htmlFor="name" className="input-label" >
						Name
					</label>
					<input
						type="text"
						id="name"
						className="input-field"
						{...register("name")}
						required />
				</div>
				<div className="input-wrapper">
					<label htmlFor="username" className="input-label" >
						Username
					</label>
					<input
						type="text"
						id="username"
						autoComplete="on"
						className="input-field"
						{...register("username")}
						required />
				</div>
				<div className="input-wrapper">
					<label htmlFor="bio" className="input-label" >Bio</label>
					<input
						type="text"
						id="bio"
						autoComplete="on"
						className="input-field"
						{...register("bio")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="password" className="input-label" >
						Password
					</label>
					<input
						type="password"
						id="password"
						className="input-field"
						{...register("password")}
						required />
				</div>
				<div className="input-wrapper">
					<label htmlFor="confirmPassword" className="input-label" >
						Confirm Password
					</label>
					<input
						type="password"
						className="input-field"
						id="confirmPassword"
						{...register("confirmPassword")}
						required
					/>
				</div>
				{isError ? (
					<div className="error-section">
						<p>{error}</p>
					</div>
				) : (
					null
				)}
				<div className="form-btns">
					<button
						type="submit"
						className="styled-btn auth-btn"
						disabled={isLoading}>
						Register
					</button>
					<button
						type="button"
						className="styled-btn back-btn"
						disabled={isLoading}
						onClick={() => navigate("/login")}>
						Back to Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
