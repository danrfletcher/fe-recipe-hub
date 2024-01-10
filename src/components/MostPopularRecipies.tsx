import { useAppSelector } from "../app/hooks";
import { Recipe } from "../features/allRecipesSlice";
import { LuChefHat } from "react-icons/lu";
import ReviewStars from "./ReviewStars";

const MostPopularRecipies: React.FC = () => {
	const allRecipes = useAppSelector((state) => state.recipes.allRecipes);

	// set difficulty make as component
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

	let popular: Recipe | null = null;
	let maxRate = 0;
	for (let i = 0; i < allRecipes.length; i++) {
		if (maxRate < allRecipes[i].averageRating) {
			maxRate = allRecipes[i].averageRating;
			popular = allRecipes[i];
		}
	}
	return (
		<div className="mostPopularSPR">
			{popular ? (
				<div className="popularSPR">
					<h2>Most popular fork</h2>
					<h3>{popular.recipeTitle}</h3>
					<img src={popular.recipeImg} className="imgPopular" />
					<p>{popular.tagLine}</p>
					<ReviewStars />
					<p>Difficulty: {setDifficulty(popular.difficulty)}</p>
					<p>UserId {popular.userId}</p>
					<p>{popular.postedOn}</p>
					<button>View all forks</button>
				</div>
			) : (
				<div className="popularErrorSPR">No recipes found.</div>
			)}
		</div>
	);
};

export default MostPopularRecipies;
