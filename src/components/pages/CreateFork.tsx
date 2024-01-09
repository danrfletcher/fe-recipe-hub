import { useEffect } from "react";
import { useAppSelector,useAppDispatch } from "../../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAllCuisines } from "../../features/cuisineSlice";
import { getAllIngredients } from "../../features/ingredientsSlice";
import {
	ingredientsToPost,
	postRecipe,
	quantityToPost,
} from "../../features/createRecipeSlice";

interface FormValues {
	recipeTitle: string;
	tagLine: string;
	difficulty: number;
	timeToPrepare: number;
	recipeMethod: string;
	recipeImg: string;
	cuisine: string;
	forkedFromId: number;
	originalRecipeId: number;
	userId: number;
	cuisineId: any;
	ingredientsId: any;
	quantity: any;
}


export const CreateFork: React.FC = () => {
	const { register, handleSubmit, getValues } = useForm<FormValues>();
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const stateInfo = useAppSelector((state) => state.auth);
  const cuisines = useAppSelector((state) => state.cuisines.allCuisines);
	const ingredients = useAppSelector((state) => state.ingredients.ingredients);
	const dispatch = useAppDispatch();
  const singleRecipeState = useAppSelector(
		(state) => state.singleRecipe.recipe
	);
	const token = `Bearer ${stateInfo.token}`;

	useEffect(() => {
		dispatch(getAllCuisines());
		dispatch(getAllIngredients());
	}, []);


  	// cuisine/ingredient lookup objects
	const lookupCuisines: any = cuisines.reduce(
		(acc, cur) => ({ ...acc, [cur.cuisineName]: cur.cuisineId }),
		{}
	);
  const lookupIngredients: any = ingredients.reduce(
		(acc, cur) => ({ ...acc, [cur.ingredientName]: cur.ingredientId }),
		{}
	);
	// function to lookup the id of ingredients/cuisines by name
	const findId = (array: string[], name: any) => {
		return array[name];
	};
	// -----------------------------------------------------
	const ingredientsToAdd = useAppSelector(
		(state) => state.createRecipe.ingredientIds
	);
	const quantityToAdd = useAppSelector((state) => state.createRecipe.quantity);
	// converts the ingredients names to ingredients Ids
	const arrayOfIngIds = ingredientsToAdd.map((ingredient) => {
		return findId(lookupIngredients, ingredient);
	});


  const submitForm: SubmitHandler<FormValues> = (data) => {
		console.log(data);
		dispatch(
			postRecipe(
				{
					recipeTitle: data.recipeTitle,
					tagLine: data.tagLine,
					difficulty: data.difficulty,
					timeToPrepare: data.timeToPrepare,
					recipeMethod: data.recipeMethod,
					recipeImg: data.recipeImg,
					cuisine: data.cuisine,
					forkedFromId: singleRecipeState.recipeId,
					originalRecipeId: !singleRecipeState.originalRecipeId ? singleRecipeState.recipeId : singleRecipeState.originalRecipeId,
					userId: stateInfo.userId,
					cuisineId: findId(lookupCuisines, data.cuisine),
					recipeId: singleRecipeState.recipeId,
					ingredientIds: arrayOfIngIds,
					quantity: [],
				},
				token,
				{ ingredientIds: arrayOfIngIds, quantity: quantityToAdd }
			)
		);
	};



  // ----------------------------------------------------------
  return(<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>

  </div>)
}