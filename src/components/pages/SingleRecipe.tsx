import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";

const SingleRecipe: React.FC = () => {

	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	const recipeId = useAppSelector((state) => state.singleRecipe.recipeId);
	const isLoading = useAppSelector((state) => state.singleRecipe.isLoading);
	
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSingleRecipe(recipeId));
	}, []);

	return (
		<div>
			<h2>{recipeData.recipeTitle}</h2>
			<p>{recipeData.tagLine}</p>
			<img src={recipeData.recipeImg} />
			<br />
			<span>Prep time: {recipeData.timeToPrepare} mins </span>
			<span>Difficulty: {recipeData.difficulty}</span>
			<div>
				Ingredients:
				{!isLoading ? (
					recipeData.recipeIngredients.map((ingredient: any) => {
						return (
							<li key={ingredient.ingredientId}>
								{ingredient.ingredientName}
							</li>
						);
					})
				) : (
					null
				)}
			</div>
			<div>
				Method:
				<p>{recipeData.recipeMethod}</p>
			</div>
		</div>
	);
};

export default SingleRecipe;
