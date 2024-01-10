import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes } from "../../features/allRecipesSlice";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { setSearchTerm, setCuisineQuery, setSortQuery } from "../../features/recipeSearchSlice";
import { getAllCuisines } from "../../features/cuisineSlice";

const Recipes: React.FC = () => {

	const isNavToggled = useAppSelector((state) => state.navToggle.value);
	const listOfRecipes = useAppSelector((state) => state.recipes.allRecipes);
	const allCuisines = useAppSelector((state) => state.cuisines.allCuisines);
	
	const recipeSearchTerm = useAppSelector((state) => state.recipeSearch.value);
	const cuisineQuery = useAppSelector((state) => state.recipeSearch.cuisineQuery);
	const sortQuery = useAppSelector((state) => state.recipeSearch.sortQuery);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllRecipes(recipeSearchTerm, cuisineQuery, sortQuery));
	}, [recipeSearchTerm, cuisineQuery, sortQuery]);

	useEffect(() => {
		dispatch(getAllCuisines());
		dispatch(setSearchTerm(false));
		dispatch(setCuisineQuery(false));
		dispatch(setSortQuery(false));
	},[])

	return (
		<>
			<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
				<h2 className="cursive-header">
					Find the recipes you love
				</h2>
				<div className="recipe-controls">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<div className="recipe-nav-head">
								<Link to={'/recipes/add_recipe'}>
									<button className="styled-btn add-recipe-btn">
										Add Recipe
									</button>
								</Link>
								<Form>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control 
											type="" 
											className="recipe-search-box" 
											placeholder="Search recipe..." 
											onChange={(event) => dispatch(setSearchTerm(event.target.value))}
										/>
									</Form.Group>
								</Form>
								<Accordion.Header>
								</Accordion.Header>
							</div>
							<Accordion.Body>
							<Form>
								<div className="recipe-filter-options">
								<Dropdown>
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{cuisineQuery ? cuisineQuery : "Cuisine"}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{allCuisines.map((cuisine) => {
											return (
												<Dropdown.Item onClick={() => dispatch(setCuisineQuery(cuisine.cuisineName))}>{cuisine.cuisineName}</Dropdown.Item>
											)
										})}
									</Dropdown.Menu>
								</Dropdown>
								<Dropdown>
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{sortQuery ? sortQuery : "Sort By"}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => dispatch(setSortQuery("Popularity"))}>Popularity</Dropdown.Item>
										<Dropdown.Item onClick={() => dispatch(setSortQuery("Difficulty"))}>Difficulty</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								</div>
							</Form>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className="recipe-div">
					{listOfRecipes.map((recipe) => {
						return (
							<li key={recipe.recipeId}>
								<RecipeCard {...recipe} />
							</li>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Recipes;
