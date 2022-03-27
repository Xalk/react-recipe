import React from "react";
import ava from "../assets/ava.jpeg";
import printBtn from "../assets/printBtn.svg";
import fullScreenBtn from "../assets/fullScreenBtn.svg";
import star from "../assets/star.svg";
import favInactive from "../assets/fav-inactive .svg";
import burger from "../assets/buger.jpg";
import clock from "../assets/clock.svg";

interface RecipeProps {

}


const Recipe: React.FC<RecipeProps> = () => {
    return (
        <div className="recipe">
            <div className="titleBlock">
                <h2>
                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                </h2>
            </div>

            {/*
                <div className="popular">
                    <h2>Popular Recipes</h2>
                    <div className="popularCard">
                        <img src={burger} alt=""/>
                        <ul>
                            <li>Grilled Tuna Salade Niçoise</li>
                            <li>By <span>Justin S.</span></li>
                        </ul>
                    </div>
                    <div className="popularCard">
                        <img src={burger} alt=""/>
                        <ul>
                            <li>Grilled Tuna Salade Niçoise</li>
                            <li>By <span>Justin S.</span></li>
                        </ul>
                    </div>
                    <div className="popularCard">
                        <img src={burger} alt=""/>
                        <ul>
                            <li>Grilled Tuna Salade Niçoise</li>
                            <li>By <span>Justin S.</span></li>
                        </ul>
                    </div>
                    <div className="popularCard">
                        <img src={burger} alt=""/>
                        <ul>
                            <li>Grilled Tuna Salade Niçoise</li>
                            <li>By <span>Justin S.</span></li>
                        </ul>
                    </div>

                </div>
                */}


            <div className="recipeContent">
                <div className="recipeHeader">
                    <div className="rightSide">
                        <div className="recipeAuthor">
                            <img src={ava} alt="avatar"/>
                            <ul>
                                <li>AUTHOR</li>
                                <li>Justin S</li>
                            </ul>
                        </div>
                        <img src={printBtn} alt="print" width={36}/>
                        <img src={fullScreenBtn} alt="fullScreen" width={36}/>
                    </div>
                    <div className="leftSide">
                        <div className="rating">
                            <p>RATING</p>
                            <ul>
                                <li><img src={star} alt="star" width={16}/></li>
                                <li><img src={star} alt="star" width={16}/></li>
                                <li><img src={star} alt="star" width={16}/></li>
                                <li><img src={star} alt="star" width={16}/></li>
                                <li><img src={star} alt="star" width={16}/></li>
                            </ul>
                        </div>
                        <div className="difficulty">
                            <ul>
                                <li>Difficulty</li>
                                <li>Intermediates</li>
                            </ul>
                        </div>
                        <img src={favInactive} alt="fav" width={32}/>
                    </div>
                </div>
                <div className="shortInfo">
                    <p>Prolific cookbook author James McNair has been chief judge of Sutter Home Winery's burger
                        cook-off since it began in Napa in 1990.</p>
                    <img src={burger} alt="recipePhoto"/>
                    <div className="shareBlock">
                        <div className="grayLine"></div>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     fill="rgb(162 162 162)" width={22}>
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                                <span>Share</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     fill="rgb(162 162 162)" width={22}>
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                                <span>Share</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     fill="rgb(162 162 162)" width={22}>
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                                <span>Share</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     fill="rgb(162 162 162)" width={22}>
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                                <span>Share</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     fill="rgb(162 162 162)" width={22}>
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                                <span>Share</span>
                            </li>
                        </ul>
                        <div className="grayLine"></div>
                    </div>
                    <div className="timeBlock">
                        <ul>
                            <li>
                                <img src={clock} alt=""/>
                                <span>
                                        <p>PREP TIME</p>
                                        <p>20 min</p>
                                    </span>

                            </li>
                            <li>
                                <img src={clock} alt=""/>
                                <span>
                                        <p>COOK TIME</p>
                                    <p>20 min</p>
                                    </span>

                            </li>
                            <li>
                                <img src={clock} alt=""/>

                                <span>
                                        <p>TOTAL TIME</p>
                                    <p>40 min</p>
                                    </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ingredients">
                    <h2>Ingredients: </h2>
                    <h2>Burgers</h2>
                    <ul>
                        <li className="active"><input type="checkbox"/>1/2 pound andouille sausage, cut into scant
                            1/4-inch cubes
                        </li>
                        <li><input type="checkbox"/>3/4 cup pecans, toasted, chopped</li>
                        <li><input type="checkbox"/>1 teaspoon salt</li>
                        <li><input type="checkbox"/>1/4 teaspoon ground black pepper</li>
                        <li><input type="checkbox"/>1 1/2 pounds ground beef chuck or ground beef (20 percent fat)
                        </li>
                    </ul>
                </div>
                <div className="instructions">
                    <h2>
                        Instructions:
                    </h2>
                    <div className="steps">
                        <ul>
                            <li>
                                <span>1</span>
                                Mix all ingredients in small bowl. Cover and chill.
                            </li>
                            <li>
                                <span>2</span>
                                Mix all ingredients in small bowl. Cover and chill.
                            </li>
                            <li>
                                <span>3</span>
                                Mix all ingredients in small bowl. Cover and chill.
                            </li>
                            <li>
                                <span>4</span>
                                Mix all ingredients in small bowl. Cover and chill.
                            </li>
                            <li>
                                <span>5</span>
                                Mix all ingredients in small bowl. Cover and chill.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Recipe;