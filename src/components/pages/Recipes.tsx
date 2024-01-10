import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";

const Recipes: React.FC = () => {

	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes);
	const user = useAppSelector((state) => state.auth.username)

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
	}, []);

	return (
		<>
			<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
				<h2 className="cursive-header">
					Find the recipes you love
				</h2>
				<Link to={user ? (
					'/recipes/add_recipe'
				) : (
					'/login'
				)}>
					<button className="styled-btn large-red-btn">
						Add a recipe
					</button></Link>
				<div className="recipe-div">
					{listOfRecipes.map((recipe) => {
						return (
							<li key={recipe.recipeId}>
								<RecipeCard {...recipe} />
							</li>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Recipes;
