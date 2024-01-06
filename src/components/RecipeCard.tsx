interface recipe {
	recipeId: number;
	recipeTitle: string;
	tagLine: string;
	difficulty: number;
	timeToPrepare: number;
	recipeMethod: string;
	postedOn: string;
	recipeImg: string;
	cuisine: string;
	forkedFromId: number;
	originalRecipeId: number;
	userId: number;
	cuisineId: number;
}
const RecipeCard: React.FC<recipe> = (props: any) => {
	console.log(props, "<<<<props on a card");
	return (
		<div>
			<img src={props.recipeImg} />
      <h3>{props.recipeTitle}</h3>
      <p>{props.tagLine}</p>
      <span>Dificulty: {props.difficulty}</span><br /><span>preparation time: {props.timeToPrepare} mins</span>
		</div>
	);
};

export default RecipeCard;
