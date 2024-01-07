import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import RecipeCard from "../RecipeCard";
import { Ingredients } from "../Ingredients";


const Recipes: React.FC = () => {
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
	}, []);
	console.log(listOfRecipes);

	return (
		<>
			<Ingredients />
			<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
				<h2>Recipes</h2>
				<div className="recipe-div">
					{listOfRecipes.map((recipe) => {
						return (
							<li key={recipe.recipeId}>
								{/* to keep typescript happy, need to spread props you're passing dowd and declare interface on the  component page  */}

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
