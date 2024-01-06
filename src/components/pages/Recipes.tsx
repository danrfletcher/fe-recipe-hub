import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const Recipes: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const listOfRecipes = useAppSelector((state)=>state.recipes.allRecipes)
  
  useEffect(()=>{

  },[listOfRecipes])
  
  
  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Recipes</h2>
    </div>
  )
}

export default Recipes
