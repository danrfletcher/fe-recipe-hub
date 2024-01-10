import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { Ingredient } from "../../features/ingredientsSlice";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { LuChefHat } from "react-icons/lu";
import SimilarCuisine from "../SimilarCuisine";
import MostPopularRecipies from "../MostPopularRecipies";
import ReviewStars from "../ReviewStars";

const SingleRecipe: React.FC = () => {
	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	// Without useParams, map() in line 35 will not work - useParams takes the recipeId from the URL and fixes this issue
	const { recipeId } = useParams();
	const isLoading = useAppSelector((state) => state.singleRecipe.isLoading);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getSingleRecipe(recipeId));
		dispatch(getAllRecipes());
	}, []);

	// set difficulty
	//----------------------------------------------------------------------------------------
	const setDifficulty = (rating: number) => {
		const array = [];
		for (let i = 0; i < rating; i++) {
			array.push(<LuChefHat className="difficulty-icon" key={i} />);
		}
		for (let i = rating; i < 5; i++) {
			array.push(<LuChefHat key={i} className="empty-icon" />);
		}
		return array;
	};
	//-------------------------------------------------------------------------------------------

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className="SPR">
						<div className="topSPR">
							<img src={recipeData.recipeImg} />
							<div className="titleSPR">
								<h2>{recipeData.recipeTitle}</h2>
								<div className="detailsSPR">
									<p>User id: {recipeData.userId}</p>
									<p>on {recipeData.postedOn.split(" ")[0]}</p>
								</div>
								<p className="cuisineSPR">Cuisine: {recipeData.cuisine}</p>
								<ReviewStars />
								<p className="metaSPR">{recipeData.tagLine}</p>
								<img className="secondImgSPR" src={recipeData.recipeImg} />
								<div className="timingSPR">
									<p>Prep time: {recipeData.timeToPrepare} mins</p>
									<p>Difficulty: {setDifficulty(recipeData.difficulty)}</p>
								</div>
							</div>
						</div>
						<div className="mainSPR">
							<div className="recipeSPR">
								<div>
									<p>Ingredients</p>
									<ul>
										{recipeData.recipeIngredients.map(
											(ingredient: Ingredient) => {
												return (
													<li
														key={ingredient.ingredientId}
														className="ingrList"
													>
														<div className="ingDetailsSPR">
															<p>{ingredient.quantity}</p>
															<p>{ingredient.ingredientName}</p>
														</div>

														<div className="nutrDetailsSPR"></div>
													</li>
												);
											}
										)}
									</ul>
								</div>
								<div>
									<p>Method</p>
									<ol>
										<p>{recipeData.recipeMethod}</p>
									</ol>
								</div>
							</div>
						</div>
					</div>
					<MostPopularRecipies/>

					{/* <div className="buttonsSPR">
							<button className="buttonSPR">Fork this recipe</button>
							<button className="buttonSPR">View all forks</button>
						</div> */}
					{/* <div className="commentsSPR">
							<p>3 Comments</p>
							<div className="addCommentSPR">
								<p>User</p>
								<input id="newComment" placeholder="Add a comment..." />
								<button>Comment</button>
							</div>
							<div className="oldCommentSPR">
								<div>
									<p>Gordon Ramsay</p>
									<p> on 2nd January 2024</p>
								</div>
                the comment
								<p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
								<div>
									<FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
									<p>5</p>
									<FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
								</div>
							</div>
							<div className="oldCommentSPR">
								<div>
									<p>Gordon Ramsay</p>
									<p> on 2nd January 2024</p>
								</div>
								<p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
								<div>
									<FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
									<p>5</p>
									<FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
								</div>
							</div>
							<div className="oldCommentSPR">
								<div>
									<p>Gordon Ramsay</p>
									<p> on 2nd January 2024</p>
								</div>
								<p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
								<div>
									<FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
									<p>5</p>
									<FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
								</div>
							</div>
						</div> */}
					<SimilarCuisine />
				</>
			)}

			<Link to={"/recipes/create_fork"}>
				<button className="styled-btn fork-btn">Fork this recipe</button>
			</Link>
		</div>
	);
};

export default SingleRecipe;
