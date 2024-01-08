import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAllCuisines } from "../../features/cuisineSlice";
import { useEffect } from "react";
import {
	ingredientsToPost,
	postRecipe,
	quantityToPost,
} from "../../features/createRecipeSlice";
import { getAllIngredients } from "../../features/ingredientsSlice";

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
export const CreateRecipe: React.FC = () => {
	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const cuisines = useAppSelector((state) => state.cuisines.allCuisines);
	const ingredients = useAppSelector((state) => state.ingredients.ingredients);
	const dispatch = useAppDispatch();
	const { register, handleSubmit, getValues } = useForm<FormValues>();
	const stateInfo = useAppSelector((state) => state.auth);
	const singleRecipeState = useAppSelector(
		(state) => state.singleRecipe.recipe
	);
	const token = `Bearer ${stateInfo.token}`;

	// ------------------------------------------------------

	useEffect(() => {
		dispatch(getAllCuisines());
		dispatch(getAllIngredients());
	}, []);
	//----------------------------------------------------------
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

	// --------------------------------------------------------------
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
					forkedFromId: null,
					originalRecipeId: null,
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

	// -----------------------------------------------------------
	return (
		<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
			<form className="auth-form" onSubmit={handleSubmit(submitForm)}>
				<h2 className="auth-header">Create a new recipe</h2>
				<div className="input-wrapper">
					<label htmlFor="recipeTitle" className="input-label">
						Recipe Title
					</label>
					<input
						type="text"
						placeholder="Spaghetti..."
						id="recipeTitle"
						className="input-field"
						{...register("recipeTitle")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="tagLine" className="input-label">
						Add a Yummy Tag Line
					</label>
					<input
						type="text"
						placeholder="Classic Italian..."
						id="tagLine"
						autoComplete="on"
						className="input-field"
						{...register("tagLine")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="difficulty" className="input-label">
						Difficulty Rating
					</label>
					<select
						id="difficulty"
						className="input-field"
						{...register("difficulty")}
						required
						defaultValue="placeholder"
					>
						<option value="placeholder" disabled>
							How difficult is this recipe?
						</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div className="input-wrapper">
					<label htmlFor="timeToPrepare" className="input-label">
						Time To Prepare
					</label>
					<input
						type="number"
						min={1}
						placeholder="time in minutes"
						id="timeToPrepare"
						className="input-field"
						{...register("timeToPrepare")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="recipeImg" className="input-label">
						Recipe Image URL
					</label>
					<input
						type="url"
						placeholder="www.recipeImage.co.uk"
						id="recipeImg"
						className="input-field"
						{...register("recipeImg")}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="cuisine" className="input-label">
						Select Cuisine
					</label>
					<select
						id="cuisine"
						className="input-field"
						defaultValue="placeholder"
						{...register("cuisine")}
						required
					>
						<option value="placeholder" disabled>
							e.g. Italian
						</option>
						{cuisines.map((cuisine) => {
							return (
								<option key={cuisine.cuisineId}> {cuisine.cuisineName}</option>
							);
						})}
					</select>
				</div>
				<div className="input-wrapper">
					<label htmlFor="recipeMethod" className="input-label">
						Method
					</label>
					<textarea
						id="recipeMethod"
						rows={5}
						placeholder="Add your step by step instructions here"
						autoComplete="on"
						className="input-field"
						{...register("recipeMethod")}
						required
					/>
				</div>
				<div>
					Ingredients:
					<div className="input-wrapper">
						{ingredientsToAdd.length
							? ingredientsToAdd.map((ingredient) => {
									return <p key={ingredient}>{ingredient}</p>;
							  })
							: null}
					</div>
					<input
						type="text"
						list="ingredientsList"
						className="input-field"
						multiple={true}
						{...register("ingredientsId")}
					/>
					<datalist id="ingredientsList" className="input-field">
						{ingredients.map((ingredient) => {
							return (
								<option
									key={ingredient.ingredientId}
									data-value={ingredient.ingredientId}
								>
									{ingredient.ingredientName}
								</option>
							);
						})}
					</datalist>
					<button
						onClick={(e) => {
							e.preventDefault();
							const values = getValues();
							//if ingredient doesn't exist on the ingredient array it will not be added.
							if (
								ingredients.find(
									(object) => object.ingredientName == values.ingredientsId
								)
							) {
								dispatch(ingredientsToPost(values.ingredientsId));
							}
						}}
					>
						add
					</button>
				</div>
				<div>
					Quantity:
					<div className="input-wrapper">
						{quantityToAdd.length
							? quantityToAdd.map((quantity, index) => {
									return <p key={index}>{quantity}</p>;
							  })
							: null}
					</div>
					<input
						type="text"
						className="input-field"
						{...register("quantity")}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							const values = getValues();
							if (values.quantity && quantityToAdd.length < ingredientsToAdd.length) {
								dispatch(quantityToPost(values.quantity));
								console.log(values.quantity, "<<<ing val");
								console.log(quantityToAdd);
							}
						}}
					>
						add
					</button>
				</div>
				<button type="submit" className="styled-btn auth-btn">
					Add Recipe
				</button>
			</form>
		</div>
	);
};
