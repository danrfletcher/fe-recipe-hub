import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleRecipe } from "../../features/singleRecipeSlice";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { useParams, Link } from "react-router-dom";
import { LuChefHat } from "react-icons/lu";
import SimilarCuisine from "../SimilarCuisine";
import MostPopularRecipies from "../MostPopularRecipies";
import ReviewStars from "../ReviewStars";
import RecipeMethod from "../RecipeMethod";
import { Ingredients } from "../Ingredients";

const SingleRecipe: React.FC = () => {
	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
	
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
									<p>Posted by: Username</p> {/*add username to the response body on get signle recipe by iD or we need to make another call to the back to get a username by Id*/}
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
								<Ingredients />
								<RecipeMethod />
							</div>
							<MostPopularRecipies />
						</div>
						<div className="buttonsSPR">
							{/*add links to the buttons*/}

							<button className="buttonSPR">View all forks</button>
						</div>
						<SimilarCuisine />
					</div>
				</>
			)}

			<Link to={"/recipes/create_fork"}>
				<button className="styled-btn fork-btn">Fork this recipe</button>
			</Link>
		</div>
	);
};

export default SingleRecipe;
