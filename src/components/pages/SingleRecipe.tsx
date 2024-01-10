import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { LuChefHat } from "react-icons/lu";
import SimilarCuisine from "../SimilarCuisine";
import MostPopularRecipies from "./MostPopularRecipies";
import ReviewStars from "./ReviewStars";
import RecipeMethod from "../RecipeMethod";
import { Ingredients } from "../Ingredients";




const SingleRecipe: React.FC = () => {

	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	// Without useParams, map() in line 35 will not work - useParams takes the recipeId from the URL and fixes this issue
	const { recipeId } = useParams()
	const isLoading = useAppSelector((state) => state.singleRecipe.isLoading);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getSingleRecipe(recipeId));
		dispatch(getAllRecipes());
	}, []);





	// set difficulty
	//----------------------------------------------------------------------------------------
	const setDifficulty = (rating: number) => {
		const array = []
		for (let i = 0; i < rating; i++) {
			array.push(<LuChefHat className="difficulty-icon" key={i} />)
		}
		for (let i = rating; i < 5; i++) {
			array.push(<LuChefHat key={i} className="empty-icon" />)
		}
		return array
	}
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
									<p>Posted by: Username</p> {/*add username */}
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
								<Ingredients/>								
								<RecipeMethod/>
							</div>
							<MostPopularRecipies />
						</div>
						<div className="buttonsSPR">  {/*add links to this buttons*/}
							<button className="buttonSPR">Fork this recipe</button>
							<button className="buttonSPR">View all forks</button>
						</div>
						<SimilarCuisine />
					</div>
				</>
			)}
		</div>
	);
};

export default SingleRecipe;
