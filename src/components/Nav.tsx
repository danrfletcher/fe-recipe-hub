import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

const Nav: React.FC = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<nav className="flex-container">
			<Link className="nav-link" to="/">
				Home
			</Link>
			<Link className="nav-link" to="/recipes">
				Recipes
			</Link>
			{isAuthenticated ? (
				<span
					className="nav-link"
					onClick={() => {
						handleLogout();
						console.log("clicked");
					}}
				>
					Log out
				</span>
			) : (
				<Link className="nav-link" to="/login">
					Log in
				</Link>
			)}
		</nav>
	);
};

interface Props {
	class: string;
}

export const ToggledNav: React.FC<Props> = (props) => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={props.class}>
			<nav className="toggled-flex-container">
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/recipes">
					Recipes
				</Link>
				{isAuthenticated ? (
					<span
						className="nav-link"
						onClick={() => {
							handleLogout();
							console.log("clicked");
						}}
					>
						Log out
					</span>
				) : (
					<Link className="nav-link" to="/login">Log in</Link>
				)}
			</nav>
		</div>
	);
};

export default Nav;
