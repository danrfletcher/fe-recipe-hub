import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../../features/auth/authSlice";
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
	
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<FormValues>();
	
	const submitForm: SubmitHandler<FormValues> = (data) => {
		if (data.password !== data.confirmPassword) {
			alert("Passwords do not match!");
		} else {
			dispatch(registerUser(
				data.username,
				data.name,
				data.ProfileImg,
				data.password,
				data.bio
			))
		}
	}

	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			<h2 className="login-header">Register</h2>
			<form
				className="login-form"
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
					<label htmlFor="profileImg" className="input-label" >
						Image URL
					</label>
					<input
						type="text"
						id="profileImg"
						className="input-field"
						{...register("ProfileImg")}
						required />
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
				<div className="input-wrapper">
					<label htmlFor="bio" className="input-label" >Add your bio</label>
					<input
						type="text"
						id="bio"
						autoComplete="on"
						className="input-field"
						{...register("bio")}
						required
					/></div>
				<button type="submit" className="login-btn">
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
