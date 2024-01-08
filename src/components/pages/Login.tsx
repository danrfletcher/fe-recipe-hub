import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { clearErrors, getUserData, loading, login, resetRegisteredStatus } from "../../features/auth/authSlice";
import { useEffect } from "react";

interface FormValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {

	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<FormValues>();

	const isError = useAppSelector((state) => state.auth.isError)
	const error = useAppSelector((state) => state.auth.error)
	const isLoading = useAppSelector((state) => state.auth.isLoading)

	const submitForm: SubmitHandler<FormValues> = (data) => {
		dispatch(loading())
		dispatch(login(data.username, data.password));
		dispatch(getUserData(data.username))
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/login/success");
		}
	}, [isAuthenticated]);

	return (
		<div
			onClick={() => dispatch(clearErrors())}
			className={isNavToggled ? (
				"page-slide-in"
			) : (
				"page-slide-out"
			)}>
			<h2 className="auth-header">Welcome to Umami</h2>
			<form className="auth-form" onSubmit={handleSubmit(submitForm)}>
				<div className="input-wrapper">
					<label className="input-label" htmlFor="username">
						Username
					</label>
					<input
						type="text"
						className="input-field"
						id="username"
						autoComplete="on"
						{...register("username")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label className="input-label" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						className="input-field"
						id="password"
						{...register("password")}
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
				<button
					className="styled-btn auth-btn"
					type="submit"
					disabled={isLoading}>
					Log in
				</button>
			</form>
			<p>
				Not signed up?{" "}
				<Link
					onFocus={() => dispatch(resetRegisteredStatus())}
					className="nav-link"
					to="/register">
					Register
				</Link>
			</p>
		</div>
	);
};

export default Login;
