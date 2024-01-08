import { LuChefHat } from "react-icons/lu";

export const setDifficulty = (rating: number) => {
  const array = []
  for (let i = 0; i < rating; i++) {
    array.push(<LuChefHat className="difficulty-icon" key={i} />)
  }
  for (let i = rating; i < 5; i++) {
    array.push(<LuChefHat key={i} />)
  }
  return array
}
