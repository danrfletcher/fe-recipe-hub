import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";

const ReviewStars: React.FC = () => {
	const recipeData = useAppSelector((state) => state.singleRecipe.recipe);

	const starsArray = [];
	const wholePart = Math.floor(recipeData.averageRating);
	const fractionalPart = (recipeData.averageRating - wholePart) * 100;
	for (let i = 0; i < 5; i++) {
		if (i < wholePart) {
			starsArray.push(<FaStar key={i} className="yellowStars" />);
		} else if (i === wholePart && fractionalPart > 0) {
			starsArray.push(<FaStarHalfAlt key={i} className="yellowStars" />);
		} else {
			starsArray.push(<FaRegStar key={i} className="yellowStars" />);
		}
	}

	return (
		<div className="reviewSPR">
			<p>{recipeData.averageRating}</p>
			<p>{starsArray}</p>
			<p>({recipeData.ratingCount} reviews)</p>
		</div>
	);
};
export default ReviewStars;
