import { useAppSelector } from "../app/hooks";

const RecipeMethod: React.FC = () => {
    const recipeData = useAppSelector((state) => state.singleRecipe.recipe);
    const listMethod: string[] = recipeData.recipeMethod.split('%');
    return (
        <div>
            <p>Method</p>
            <ol>
            {listMethod.map((methodStep, index) => (
                    <li key={index} className="listMethod">{methodStep}</li>
                ))}
            </ol>
        </div>
    )
}
export default RecipeMethod