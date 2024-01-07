import { useEffect } from "react"
import { getAllIngredients } from "../features/ingredientsSlice"
import { useAppDispatch } from "../app/hooks"

// add this component on the create recipe page
//add logic :
// {ing id name}
//add state for suggestion ingredients limited to 10 and add logic for predictive typing
// add state for array of ingredients Ids to add to the request body as well as quantity array,to add to the recipe, add clear it on post
export const Ingredients: React.FC = ()=>{
const dispatch = useAppDispatch()

useEffect(()=>{
 dispatch(getAllIngredients())
}, [])

  return <div>
    ingredients list
  </div>
}