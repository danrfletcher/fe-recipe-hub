import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import Loading from "../Loading";

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
			{isLoading ? (
				<Loading />
			) : (
				<>
					<h2>{recipeData.recipeTitle}</h2>
					<p>{recipeData.tagLine}</p>
					<img src={recipeData.recipeImg} className="single-recipe-img" />
					<br />
					<span>Prep time: {recipeData.timeToPrepare} mins </span>
					<span>Difficulty: {recipeData.difficulty}</span>
					<h3>Ingredients</h3>
					<ul>
						{recipeData.recipeIngredients.map((ingredient: any) => {
							return (
								<li key={ingredient.ingredientId}>
									{ingredient.ingredientName}
								</li>
							)
						})}
					</ul>
					<div>
						<h3>Method</h3>
						<p>{recipeData.recipeMethod}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default SingleRecipe;
