import { useAppSelector } from "../../app/hooks";

const Recipes: React.FC = () => {

  const isToggled = useAppSelector((state) => state.toggle.value);

  return (
    <div className={isToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Recipes</h2>
    </div>
  )
}

export default Recipes
