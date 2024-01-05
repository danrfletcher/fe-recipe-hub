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

	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<FormValues>();

	const submitForm: SubmitHandler<FormValues> = (data) => {
		dispatch(login(data.username, data.password));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/login/success");
		}
	}, [isAuthenticated]);

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
