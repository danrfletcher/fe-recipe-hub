import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAllCuisines } from "../../features/cuisineSlice";
import { useEffect } from "react";
import {
	clearErrors,
	clearPost,
	ingredientsToPost,
	postRecipe,
	quantityToPost,
	setError,
} from "../../features/createRecipeSlice";
import { getAllIngredients } from "../../features/ingredientsSlice";
import { useNavigate } from "react-router-dom";
import { FileUpload } from "../FileUpload";
import { success } from "../../features/auth/authSlice";

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
	const stateInfo = useAppSelector((state) => state.auth);
	const singleRecipeState = useAppSelector(
		(state) => state.singleRecipe.recipe
	);
	const ingredientsToAdd = useAppSelector(
		(state) => state.createRecipe.ingredientIds
	);
	const quantityToAdd = useAppSelector((state) => state.createRecipe.quantity);
	const error = useAppSelector((state) => state.createRecipe.error);
	const isError = useAppSelector((state) => state.createRecipe.isError);
	const isSuccessful = useAppSelector((state) => state.auth.isSuccessful)

	const navigate = useNavigate();

	const dispatch = useAppDispatch();
	const { register, handleSubmit, getValues, resetField, reset } =
		useForm<FormValues>();
   const imageUrl = useAppSelector((state)=>state.fileUpload.imageUrl) 
	const token = `Bearer ${stateInfo.token}`;

	useEffect(() => {
		dispatch(getAllCuisines());
		dispatch(getAllIngredients());
	}, []);

	const lookupCuisines: any = cuisines.reduce(
		(acc, cur) => ({ ...acc, [cur.cuisineName]: cur.cuisineId }),
		{}
	);
	const lookupIngredients: any = ingredients.reduce(
		(acc, cur) => ({ ...acc, [cur.ingredientName]: cur.ingredientId }),
		{}
	);
	const findId = (array: string[], name: any) => {
		return array[name];
	};
	const arrayOfIngIds = ingredientsToAdd.map((ingredient) => {
		return findId(lookupIngredients, ingredient);
	});

	const submitForm: SubmitHandler<FormValues> = (data) => {
		dispatch(
			postRecipe(
				{
					recipeTitle: data.recipeTitle,
					tagLine: data.tagLine,
					difficulty: data.difficulty,
					timeToPrepare: data.timeToPrepare,
					recipeMethod: data.recipeMethod,
					recipeImg: imageUrl,
					cuisine: data.cuisine,
					forkedFromId: null,
					originalRecipeId: null,
					userId: stateInfo.userId,
					cuisineId: findId(lookupCuisines, data.cuisine),
					recipeId: singleRecipeState.recipeId,
					ingredientIds: arrayOfIngIds,
					quantity: [],
					error: null,
					isError: false,
				},
				token,
				{ ingredientIds: arrayOfIngIds, quantity: quantityToAdd }
			)
		);
		navigate(`/recipes/add_recipe/success`);
		dispatch(success())
		reset();
	};

	return (
		<div
			onTouchEnd={() => {
				if (isError) dispatch(clearErrors());
			}}
			onMouseUp={() => {
				if (isError) dispatch(clearErrors());
			}}
			className={isNavToggled ? "page-slide-in" : "page-slide-out"}
		>
			<h2 className="auth-header">Feeling inspired?</h2>
			<h3 className="auth-header-cursive">Create a new recipe</h3>
      <FileUpload />
			{isSuccessful ? (
				<p className="success-msg">Image uploaded successfully!</p>
			) : (
				null
			)}
			<form className="auth-form" onSubmit={handleSubmit(submitForm)}>
				<div className="input-wrapper">
					<label htmlFor="recipeTitle" className="input-label">
						Recipe Title
					</label>
					<input
						type="text"
						placeholder="e.g. Beef Wellington"
						id="recipeTitle"
						className="input-field"
						{...register("recipeTitle")}
						required
					/>
				</div>

				<div className="input-wrapper">
					<label htmlFor="tagLine" className="input-label">
						Recipe Tagline
					</label>
					<input
						type="text"
						placeholder="e.g. A decadent British classic"
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
							Select a rating
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
						Preparation Time (Minutes)
					</label>
					<input
						type="number"
						min={1}
						placeholder="e.g. 120 for a recipe that takes two hours"
						id="timeToPrepare"
						className="input-field"
						{...register("timeToPrepare")}
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
						<option className="" value="placeholder" disabled>
							Select a cuisine
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
						placeholder="Please enter each step on a new line"
						autoComplete="on"
						className="input-field"
						{...register("recipeMethod")}
						required />
				</div>

				<p className="input-label">
					Ingredients
				</p>
				{ingredientsToAdd.length ? (
					<div className="ingredients-list" id="recipeIng">
						<div>
							{ingredientsToAdd.length
								? ingredientsToAdd.map((ingredient) => {
										return (
											<li
												className="recipe-list-item recipe-list-ingredient"
												key={ingredient}
											>
												{ingredient}
											</li>
										);
								  })
								: null}
						</div>
						<div>
							{quantityToAdd.length
								? quantityToAdd.map((quantity, index) => {
										return (
											<li
												className="recipe-list-item recipe-list-quantity"
												key={index}
											>
												{quantity}
											</li>
										);
								  })
								: null}
						</div>
					</div>
				) : null}

				<div className="recipe-form-internal-wrapper ingredient-field-wrapper">
					<label htmlFor="ingredient-field">Ingredient:</label>
					<input
						type="text"
						list="ingredientsList"
						className="input-field"
						id="ingredient-field"
						placeholder="Search"
						multiple={true}
						{...register("ingredientsId")}
					/>
					<datalist id="ingredientsList">
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
				</div>

				<div className="recipe-form-internal-wrapper">
					<label htmlFor="quantity-field">Quantity:</label>
					<input
						type="text"
						className="input-field"
						id="quantity-field"
						placeholder="e.g. 500g"
						{...register("quantity")}
					/>
				</div>

				<div className="btn-container">
					<button
						className="styled-btn add-btn"
						onClick={(e) => {
							e.preventDefault();
							const values = getValues();
							if (
								ingredients.find(
									(object) => object.ingredientName == values.ingredientsId
								)
							) {
								if (ingredientsToAdd.includes(values.ingredientsId)) {
									dispatch(setError("Sorry, no duplicate items!"));
									resetField("ingredientsId");
									resetField("quantity");
								} else {
									if (!values.quantity) {
										dispatch(setError("Please specify a quantity"));
									} else {
										dispatch(ingredientsToPost(values.ingredientsId));
										dispatch(quantityToPost(values.quantity));
										resetField("ingredientsId");
										resetField("quantity");
									}
								}
							} else {
								dispatch(setError("Please add an ingredient"));
							}
						}}
					>
						Add ingredient
					</button>
					<button
						className="styled-btn clear-all-btn"
						onClick={(e) => {
							e.preventDefault();
							dispatch(clearPost());
						}}
					>
						Clear list
					</button>
				</div>

				{isError ? (
					<div className="error-section create-recipe-error-section">
						<p>{error}</p>
					</div>
				) : null}

				<p className="auth-header-cursive ready-text">Ready to go?</p>
				<button
					type="submit"
					className="styled-btn auth-btn"
					id="create-recipe-btn"
				>
					Create recipe
				</button>
			</form>
		</div>
	);
};
