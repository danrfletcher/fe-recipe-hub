import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import Error from "../Error"

const CreateRecipeSuccess: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)
  const recipeData = useAppSelector((state) => state.singleRecipe.recipe)

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      {recipeData.recipeId ? (
        <>
          <h2 className="cursive-header recipe-success-header">
            Congratulations!
          </h2>
          <div className="feat-recipe-wrapper">
            <p className="recipe-success-text">
              Your recipe has been created and is now live on our site. You can view your recipe by clicking the button below.
            </p>
            <br />
            <p className="recipe-success-text">Thank you for contributing to Umami!</p>
            <img
              className="feat-recipe-img recipe-success-img"
              src={recipeData.recipeImg}
              alt="An image of your recipe" />
          </div>
          <Link to={`/recipe/${recipeData.recipeId}`}>
            <button className="styled-btn large-red-btn">
              View recipe
            </button>
          </Link>
        </>
      ) : (
        <Error />
      )}
    </div>
  )
}

export default CreateRecipeSuccess
