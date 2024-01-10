import { useEffect } from "react"
import { getAllIngredients } from "../features/ingredientsSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"

// add this component on the create recipe page
//add logic :
// {ing id name}
//add state for suggestion ingredients limited to 10 and add logic for predictive typing
// add state for array of ingredients Ids to add to the request body as well as quantity array,to add to the recipe, add clear it on post
export const Ingredients: React.FC = () => {
  const dispatch = useAppDispatch()
  const recipeData = useAppSelector((state) => state.singleRecipe.recipe);


  useEffect(() => {
    dispatch(getAllIngredients())
  }, [])

  return (
    <div>
      <p>Ingredients</p>
      <ul>
        {recipeData.recipeIngredients.map((ingredient: Ingredient) => {
          return (
            <li key={ingredient.ingredientId} className="ingrList">
              <div className="ingDetailsSPR">
                <p>{ingredient.quantity}</p>
                <p>{ingredient.ingredientName}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}