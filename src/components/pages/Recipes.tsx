import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipiesSlice";

const Recipes: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const listOfRecipes = useAppSelector((state)=>state.recipes.allRecipes)
  const dispatch = useAppDispatch()  


  useEffect(()=>{
    dispatch(getAllRecipes())
  },[])
  
  
  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Recipes</h2>
    </div>
  )
}

export default Recipes
