import { useAppSelector } from "../app/hooks";
import ReviewStars from "./pages/ReviewStars";



const SimilarCuisine: React.FC = () => {
  const allRecipes = useAppSelector((state) => state.recipes.allRecipes);
  const recipeData = useAppSelector((state) => state.singleRecipe.recipe);

  const filteredRecipes = allRecipes.filter((recipe) => recipe.cuisineId === recipeData.cuisineId);
  
  
  return (
    <div className="similarSPR">
      <h2>Similar Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.recipeId}>
            <h4>{recipe.recipeTitle}</h4>
            <img src={recipe.recipeImg} />
            <ReviewStars/>
            <p>{recipe.tagLine}</p>
            <button>View fork</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarCuisine;