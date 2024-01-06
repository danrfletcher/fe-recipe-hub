import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";

const Recipes: React.FC = () => {
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
	}, []);
console.log(listOfRecipes)
	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			<h2>Recipes</h2>
		</div>
	);
};

export default Recipes;
