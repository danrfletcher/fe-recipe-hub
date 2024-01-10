import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getForksById } from "../../features/allRecipesSlice";
import { useNavigate, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import { getSingleRecipe, recipeId } from "../../features/singleRecipeSlice";
import { lengthenDate } from "../../utils/formatting-utils";

const ForkedRecipes: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes)
  const recipeData = useAppSelector((state) => state.singleRecipe.recipe);

  const params = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const props = {
    forkedFromId: params.recipeId
  }

  useEffect(() => {
    dispatch(getForksById(props))
    dispatch(getSingleRecipe(recipeData.originalRecipeId))
  }, [])

  const handleClick = () => {
    navigate(`/recipe/${recipeData.recipeId}`)
    dispatch(recipeId(recipeData.recipeId))
  }

  console.log(recipeData.originalRecipeId)

  return (
    <>
      <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
        <h2 className="home-sub-header">
          Original Recipe
        </h2>
        <div className="recipe-div">
          <div className="recipe-wrapper">
            <img
              className="recipe-img large-recipe-img"
              src={recipeData.recipeImg}
              onClick={handleClick} />
            <div className="recipe-info-wrapper">
              <h3 className="recipe-el recipe-title">
                {recipeData.recipeTitle}
              </h3>
              {recipeData.postedOn ? (
                <p className="recipe-facts recipe-el">
                  This recipe was published on {lengthenDate(recipeData.postedOn)}.
                </p>
              ) : (
                null
              )}
              <p className="recipe-facts recipe-el">
                View forks of this recipe below, or click on the image above to view the original.
              </p>
            </div>
          </div>
        </div>
        <p className="home-sub-header">
          Forked Recipes
        </p>
        {listOfRecipes.length ? (
          <div className="recipe-div">
            {listOfRecipes.map((recipe) => {
              return (
                <li key={recipe.recipeId}>
                  <RecipeCard {...recipe} />
                </li>
              );
            })}
          </div>
        ) : (
          <div>
            <p>This recipe has not been forked.</p>
            <button
              className="styled-btn back-btn"
              onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ForkedRecipes
