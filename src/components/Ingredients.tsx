import { useAppSelector } from "../app/hooks"

export const Ingredients: React.FC = () => {

  const recipeData = useAppSelector((state) => state.singleRecipe.recipe);

  return (
    <div>
      <p className="profile-header">Ingredients</p>
      <ul>
        {recipeData.recipeIngredients.map((ingredient: any) => {
          return (
            <li key={ingredient.ingredientId} className="ingrList">
              <div className="ingDetailsSPR">
                <p>{ingredient.ingredientName}</p>
                <p>{ingredient.quantity}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}