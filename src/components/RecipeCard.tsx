import { useNavigate} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getSingleRecipe, recipeId } from "../features/singleRecipeSlice";
import { useEffect } from "react";

interface recipe {
	recipeId: string;
	recipeTitle: string;
	tagLine: string;
	difficulty: number;
	timeToPrepare: number;
	recipeMethod: string;
	postedOn: string;
	recipeImg: string;
	cuisine: string;
	forkedFromId: number;
	originalRecipeId: number;
	userId: number;
	cuisineId: number;
}
const RecipeCard: React.FC<recipe> = (props) => {
	const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoading = useAppSelector(state => state.singleRecipe.isLoading)
// useEffect(()=>{
//   if (isLoading){
//     

//   }

// }, [])

	return (
    
		<div onClick={async()=>{
      dispatch(recipeId(props.recipeId))
      // dispatch(getSingleRecipe(props.recipeId))
      navigate(`/recipe/${props.recipeId}`)
    }}>
			<img src={props.recipeImg} />
      <h3>{props.recipeTitle}</h3>
      <p>{props.tagLine}</p>
      <span>Dificulty: {props.difficulty}</span><br /><span>preparation time: {props.timeToPrepare} mins</span>
		</div>
	);
};

export default RecipeCard;
