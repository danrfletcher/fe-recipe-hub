import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";

interface FormValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate()
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

	const { register, handleSubmit } = useForm<FormValues>();

	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<FormValues> = async (data) => {
		dispatch(login(data.username, data.password));
		if (isAuthenticated) {
			navigate('/')
		}
	};

	// const handleLogout = () => {
	// 	dispatch(logout());
	// };

	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			<h2>Welcome to Umami</h2>
			<form onSubmit={handleSubmit(submitForm)}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						autoComplete="on"
						{...register("username")}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						{...register("password")}
						required
					/>
				</div>
				<button type="submit">Log in</button>
			</form>
			<p>
				Not signed up? <Link to="/register">Register</Link>
			</p>
		</div>
	);
};

export default Login;

//need to get the token and put it in the header with "authorization" and `Bearer {token}` for anything that needs authorisation