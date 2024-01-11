import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import Loading from "../Loading";
import { getAllCuisines } from "../../features/cuisineSlice";
import CuisineCard from "../CuisineCard";
import FeaturedRecipe from "../FeaturedRecipe";

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
          <FeaturedRecipe />
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
