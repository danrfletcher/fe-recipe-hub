import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks";
import { recipeId } from "../features/singleRecipeSlice";
import { Recipe } from "../features/allRecipesSlice";

const RecipeCard: React.FC<Recipe> = (props) => {
	
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/recipe/${props.recipeId}`)
		dispatch(recipeId(props.recipeId))
	}

	return (
		<div onClick={handleClick}>
			<img src={props.recipeImg} />
			<h3>{props.recipeTitle}</h3>
			<p>{props.tagLine}</p>
			<span>Difficulty: {props.difficulty}</span><br /><span>preparation time: {props.timeToPrepare} mins</span>
		</div>
	);
};

export default RecipeCard;
