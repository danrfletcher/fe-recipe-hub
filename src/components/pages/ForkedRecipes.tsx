import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getForksById } from "../../features/allRecipesSlice";
import { useNavigate, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard";

const ForkedRecipes: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes)
  const { recipeId } = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const props = {
    forkedFromId: recipeId
  }

  useEffect(() => {
    dispatch(getForksById(props))
  }, [])

  return (
    <>
      <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
        <h2 className="home-sub-header">
          Forked Recipes
        </h2>
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
