import { useAppDispatch } from "../app/hooks"
import { getAllRecipes } from "../features/allRecipesSlice"
import { Cuisine } from "../features/cuisineSlice"
import { Link } from "react-router-dom"

const CuisineCard: React.FC<Cuisine> = (props) => {

  const dispatch = useAppDispatch()

  return (
    <div className="cuisine-contents-wrapper">
      <Link to={`/recipes/${props.cuisineName}`}>
        <img
          className="cuisine-img"
          src={props.cuisineImg}
          alt="Cuisine image"
          onClick={() => {
            console.log(props.cuisineId)
            dispatch(getAllRecipes({
              cuisineId: props.cuisineId
            }))
          }} />
      </Link>
      <h4 className="cuisine-title">{props.cuisineName}</h4>
    </div>
  )
}

export default CuisineCard
