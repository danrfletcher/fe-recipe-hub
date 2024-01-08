import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks";
import { recipeId } from "../features/singleRecipeSlice";
import { Recipe } from "../features/allRecipesSlice";
import { formatTime, lengthenDate } from "../utils/formatting-utils";
import { setDifficulty } from "../utils/react-utils";

const RecipeCard: React.FC<Recipe> = (props) => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/recipe/${props.recipeId}`)
		dispatch(recipeId(props.recipeId))
	}

	return (
		<div className="recipe-wrapper">
			<img
				className="recipe-img"
				src={props.recipeImg}
				onClick={handleClick} />
			<div className="recipe-info-wrapper">
				<p className="recipe-el timestamp">
					{lengthenDate(props.postedOn)}
				</p>
				<h3 className="recipe-el recipe-title">
					{props.recipeTitle}
				</h3>
				<p className="recipe-el">
					{props.tagLine}
				</p>
				<div className="recipe-facts-wrapper">
					<p className="recipe-facts recipe-el">
						Difficulty: {setDifficulty(props.difficulty)}
					</p>
					<p className="recipe-facts recipe-el">
						Prep time: {formatTime(props.timeToPrepare)}
					</p>
				</div>
				<button className="styled-btn fork-btn">Fork this recipe</button>
			</div>
		</div>
	);
};

export default RecipeCard;
