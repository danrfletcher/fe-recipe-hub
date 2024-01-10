import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import Loading from "../Loading";
import { Ingredient } from "../../features/ingredientsSlice";
import { useParams, Link } from "react-router-dom";

const SingleRecipe: React.FC = () => {

	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	// Without useParams, map() in line 35 will not work - useParams takes the recipeId from the URL and fixes this issue
	const { recipeId } = useParams()
	const isLoading = useAppSelector((state) => state.singleRecipe.isLoading);

	const dispatch = useAppDispatch();
// this will initially set the state which we will be accessing later with recipeData
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
						{recipeData.recipeIngredients.map((ingredient: Ingredient) => {
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
      	<Link to={'/recipes/create_fork'}><button className="styled-btn fork-btn">
					Fork this recipe
				</button></Link>
		</div>
	);
};

export default SingleRecipe;
