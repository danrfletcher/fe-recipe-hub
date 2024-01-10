import { useAppSelector } from "../app/hooks"

export const Ingredients: React.FC = () => {

  const recipeData = useAppSelector((state) => state.singleRecipe.recipe);

  return (
    <div>
      <p>Ingredients</p>
      <ul>
        {recipeData.recipeIngredients.map((ingredient: any) => {
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