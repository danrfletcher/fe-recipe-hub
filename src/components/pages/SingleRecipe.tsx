import { useAppSelector } from "../../app/hooks";
//import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const SingleRecipe: React.FC = () => {

    const isNavToggled = useAppSelector((state) => state.navToggle.value);
    /*const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
    const [isMethodOpen, setIsMethodOpen] = useState(false);

    const handleIngredientsClick = () => {
        setIsIngredientsOpen(!isIngredientsOpen);
        setIsMethodOpen(false);
    };
    const handleMethodsClick = () => {
        setIsMethodOpen(!isMethodOpen);
        setIsIngredientsOpen(false);
    };*/

    return (
        <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>           
            <div className="SPR">
                <div className="topSPR">
                    <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                    <div className="titleSPR">
                        <h2>Boiled Crawfish</h2>
                        <div className="detailsSPR">
                            <p>Joe Bloggs</p>
                            <p>on 20th Dec 2023</p>
                        </div>
                        <p className="cuisineSPR">Cuisine: American, Southern</p>
                        <div className="reviewSPR">
                            <p>5.0</p>
                            <img className="reviewStars" src="src\asets\5-star-rating-review.png" alt="five stars" />
                            <p>(16 reviews)</p>
                        </div>
                        <p className="metaSPR">
                            A taste of the south, something about something to say something to make the space fill
                            up so we can get an idea of what it looks like!
                        </p>
                        <img className="secondImgSPR" src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                        <div className="timingSPR">
                            <p>Prep time: 80 mins</p>
                            <p>Difficulty: Easy</p>
                        </div>
                    </div>
                </div>
                <div className="mainSPR">
                    <div className="recipeSPR">
                        <div>
                            <p>Ingredients</p>
                            <ul>
                                <li>Crawfish (use fresh, brightly coloured specimens)  1kg</li>
                                <li>Water 4l</li>
                                <li>Salt 4 tsp</li>
                                <li>Old Bay 3 tbsp</li>
                                <li>Paprika 3 tsp</li>
                                <li>Corn cobs (I like to cut them in half and salt them first) 10</li>
                            </ul>
                        </div>
                        <div>
                            <p>Method</p>
                            <ol>
                                <li>Bring the water to the boil using a very large pot or cauldron</li>
                                <li>Stir in the salt and Old Bay</li>
                                <li>Add the crawfish</li>
                                <li>Boil for 25 minutes</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mostPopularSPR">
                        <h2>Most popular fork</h2>
                        <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                        <div>
                            <p>5.0</p>
                            <img className="reviewStars" src="src\asets\5-star-rating-review.png" alt="five stars" />
                            <p>(29 reviews)</p>
                        </div>
                        <p>Gordon Ramsay</p>
                        <p>2nd Jan 2024</p>
                        <button>View all forks</button>
                    </div>
                </div>
                <div className="textSPR">
                    <p>This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish. This is the method for preparing boiled crawfish.
                        This is the method for preparing boiled crawfish.
                    </p>
                </div>
                <div className="buttonsSPR">
                    <button className="buttonSPR">Fork this recipe</button>
                    <button className="buttonSPR">View all forks</button>
                </div>
                <div className="commentsSPR">
                    <p>3 Comments</p>
                    <div className="addCommentSPR">
                        <p>User</p>
                        <input placeholder="Add a comment..." />
                        <button>Comment</button>
                    </div>
                    <div className="oldCommentSPR">
                        <div>
                            <p>Gordon Ramsay</p>
                            <p> on 2nd January 2024</p>
                        </div>
                        <p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
                            <p>5</p>
                            <FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
                        </div>
                    </div>
                    <div className="oldCommentSPR">
                        <div>
                            <p>Gordon Ramsay</p>
                            <p> on 2nd January 2024</p>
                        </div>
                        <p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
                            <p>5</p>
                            <FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
                        </div>
                    </div>
                    <div className="oldCommentSPR">
                        <div>
                            <p>Gordon Ramsay</p>
                            <p> on 2nd January 2024</p>
                        </div>
                        <p>This is an example of a comment on the recipe. Where’s the lamb sauce?!</p>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} className="thumbSPR" />
                            <p>5</p>
                            <FontAwesomeIcon icon={faThumbsDown} className="thumbSPR" />
                        </div>
                    </div>
                </div>
                <div className="similarSPR">
                    <h2>Similar Recipes</h2>
                    <div>
                        <div>
                            <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                            <div className="similarRevSPR">
                                <p>5.0</p>
                                <img src="src\asets\5-star-rating-review.png" alt="five stars" />
                                <p>(16 reviews)</p>
                            </div>
                            <p>Boiled Crawfish</p>
                        </div>
                        <div>
                            <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                            <div className="similarRevSPR">
                                <p>5.0</p>
                                <img src="src\asets\5-star-rating-review.png" alt="five stars" />
                                <p>(16 reviews)</p>
                            </div>
                            <p>Boiled Crawfish</p>
                        </div>
                        <div>
                            <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                            <div className="similarRevSPR">
                                <p>5.0</p>
                                <img src="src\asets\5-star-rating-review.png" alt="five stars" />
                                <p>(16 reviews)</p>
                            </div>
                            <p>Boiled Crawfish</p>
                        </div>
                        <div>
                            <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                            <div className="similarRevSPR">
                                <p>5.0</p>
                                <img src="src\asets\5-star-rating-review.png" alt="five stars" />
                                <p>(16 reviews)</p>
                            </div>
                            <p>Boiled Crawfish</p>
                        </div>
                        <div>
                            <img src="src\asets\imgRec.png" alt="Boiled Crawfish" />
                            <div className="similarRevSPR">
                                <p>5.0</p>
                                <img src="src\asets\5-star-rating-review.png" alt="five stars" />
                                <p>(16 reviews)</p>
                            </div>
                            <p>Boiled Crawfish</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe
