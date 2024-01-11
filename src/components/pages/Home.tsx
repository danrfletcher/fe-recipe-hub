import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { setDifficulty } from "../../utils/react-utils";
import { formatTime } from "../../utils/formatting-utils";
import { getAllCuisines } from "../../features/cuisineSlice";
import { Link } from "react-router-dom";
import CuisineCard from "../CuisineCard";

const Home: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const recipes = useAppSelector((state) => state.recipes.allRecipes)
  const cuisines = useAppSelector((state) => state.cuisines.allCuisines)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllRecipes())
    dispatch(getAllCuisines())
  }, [])

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      {!recipes.length ? (
        <Loading />
      ) : (
        <section>
          <div className="feat-recipe-wrapper">
            <h2 className="home-sub-header">Featured recipe</h2>
            <Link to={`/recipe/${recipes[0].recipeId}`}>
              <img
                className="feat-recipe-img"
                src={recipes[0].recipeImg}
                alt="An image of the dish" />
            </Link>
            <div className="recipe-facts-wrapper">
              <h3 className="recipe-title feat-recipe-el">
                {recipes[0].recipeTitle}
              </h3>
              <p className="feat-recipe-el difficulty-rating">
                {setDifficulty(recipes[0].difficulty)}
              </p>
            </div>
            <p className="feat-recipe-el">{recipes[0].tagLine}</p>
            <div className="recipe-facts-wrapper">
              <p className="recipe-facts recipe-el">
                Prep time: {formatTime(recipes[0].timeToPrepare)}
              </p>
              <p className="recipe-facts recipe-el">
                <b>{recipes[0].ratingCount}</b> reviews / <b>{recipes[0].averageRating.toFixed(1)}</b> average
              </p>
            </div>
          </div>
          <div className="feat-categories-wrapper">
            <h2 className="home-sub-header">Popular cuisines</h2>
            <ul className="cuisine-list">
              {cuisines.map((cuisine) => {
                return (
                  <li className="cuisine-item" key={cuisine.cuisineId}>
                    <CuisineCard {...cuisine} />
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
