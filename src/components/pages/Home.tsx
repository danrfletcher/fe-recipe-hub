import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { setDifficulty } from "../../utils/react-utils";
import { formatTime } from "../../utils/formatting-utils";
import { getAllCuisines } from "../../features/cuisineSlice";
import { Link } from "react-router-dom";

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
            <Link to={`/recipe/${recipes[1].recipeId}`}>
              <img
                className="feat-recipe-img"
                src={recipes[1].recipeImg}
                alt="An image of the dish" />
            </Link>
            <div className="recipe-facts-wrapper">
              <h3 className="recipe-title feat-recipe-el">
                {recipes[1].recipeTitle}
              </h3>
              <p className="feat-recipe-el difficulty-rating">
                {setDifficulty(recipes[1].difficulty)}
              </p>
            </div>
            <p className="feat-recipe-el">{recipes[1].tagLine}</p>
            <p className="recipe-facts recipe-el">
              Prep time: {formatTime(recipes[1].timeToPrepare)}
            </p>
          </div>
          <div className="feat-categories-wrapper">
            <h2 className="home-sub-header">Popular cuisines</h2>
            <ul className="cuisine-list">
              {cuisines.map((cuisine) => {
                return (
                  <li className="cuisine-item" key={cuisine.cuisineId}>
                    <div className="cuisine-contents-wrapper">
                      <img
                        className="cuisine-img"
                        src={cuisine.cuisineImg}
                        alt="Cuisine image" />
                      <h4 className="cuisine-title">{cuisine.cuisineName}</h4>
                    </div>
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
