import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";
import { useEffect } from "react";

interface FormValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	const { register, handleSubmit } = useForm<FormValues>();

	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<FormValues> = (data) => {
		dispatch(login(data.username, data.password));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate(-1);
		}
	}, [isAuthenticated]);
	// const handleLogout = () => {
	// 	dispatch(logout());
	// };

	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			<h2 className="login-header">Welcome to Umami</h2>
			<form className="login-form" onSubmit={handleSubmit(submitForm)}>
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
				<button className="login-btn" type="submit">
					Log in
				</button>
			</form>
			<p>
				Not signed up?{" "}
				<Link className="nav-link" to="/register">
					Register
				</Link>
			</p>
		</div>
	);
};

export default Login;

//need to get the token and put it in the header with "authorization" and `Bearer {token}` for anything that needs authorisation
