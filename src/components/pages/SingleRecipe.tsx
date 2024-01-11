import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import Loading from "../Loading";
import { useParams, Link, useNavigate } from "react-router-dom";
import SimilarRecipes from "../SimilarRecipes";
import ReviewStars from "../ReviewStars";
import RecipeMethod from "../RecipeMethod";
import { Ingredients } from "../Ingredients";
import { setDifficulty } from "../../utils/react-utils";
import { lengthenDate } from "../../utils/formatting-utils";
import "../styles.css"
import { getForksById } from "../../features/allRecipesSlice";
import { TbArrowFork } from "react-icons/tb";

const SingleRecipe: React.FC = () => {

	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	const params = useParams();
	const isNavToggled = useAppSelector((state) => state.navToggle.value)
	const isLoading = useAppSelector((state) => state.singleRecipe.isLoading);
	const user = useAppSelector((state) => state.auth.username)
	const navigate = useNavigate()

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSingleRecipe(params.recipeId));
	}, []);

	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className="SPR">
						<div className="topSPR">
							<img src={recipeData.recipeImg} />
							<div className="titleSPR">
								<div className="spr-title-wrapper">
									<h2 className="recipe-title">{recipeData.recipeTitle}</h2>
									{recipeData.originalRecipeId ? (
										<p className="spr-fork-icon">
											<TbArrowFork />
										</p>
									) : (
										null
									)}
								</div>
								<img className="secondImgSPR recipe-el" src={recipeData.recipeImg} />
								<div className="detailsSPR">
									{recipeData.postedOn ? (
										<p className="timestamp recipe-el">Published by <b>{recipeData.username}</b> on {lengthenDate(recipeData.postedOn)}</p>
									) : (
										null
									)}
								</div>
								<p className="recipe-el">{recipeData.tagLine}</p>
								<p className="cuisineSPR recipe-el">Cuisine: {recipeData.cuisine}</p>
								<div className="reviewSPR">
									<ReviewStars />
									<p className="recipe-el"><b>{recipeData.averageRating.toFixed(1)}</b> average / <b>{recipeData.ratingCount}</b> reviews</p>
								</div>
								<div className="timingSPR">
									<p className="recipe-el">Prep time: {recipeData.timeToPrepare} mins</p>
									<p className="recipe-el">Difficulty: {setDifficulty(recipeData.difficulty)}</p>
								</div>
							</div>
						</div>
						<div className="spr-btn-wrapper">
							{recipeData.directForkCount || recipeData.forkCount ? (
								<button
									className="styled-btn fork-btn spr-btn"
									onClick={() => {
										dispatch(getForksById({
											forkedFromId: recipeData.recipeId
										}))
										navigate(`/recipe/${recipeData.recipeId}/forks/${recipeData.originalRecipeId}/`)
									}}>
									View forks
								</button>
							) : (
								null
							)}
							{recipeData.originalRecipeId ? (
								<button
									className="styled-btn fork-btn spr-btn"
									onClick={() => {
										dispatch(getSingleRecipe(recipeData.originalRecipeId))
										navigate(`/recipe/${recipeData.originalRecipeId}`)
									}}>
									View original
								</button>
							) : (
								null
							)}
						</div>
						<div className="mainSPR">
							<div className="recipeSPR">
								<Ingredients />
								<RecipeMethod />
							</div>
						</div>
						{user ? (
							<Link to={"/recipes/create_fork"}>
								<button className="styled-btn fork-btn spr-btn">
									Fork this recipe
								</button>
							</Link>
						) : (
							null
						)}
						<SimilarRecipes />
					</div>
				</>
			)}
		</div>
	);
};

export default SingleRecipe;
