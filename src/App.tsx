import React from 'react';
import './App.scss';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import logo from "./assets/logoRefus.svg";
import search from "./assets/search.svg";
import fb from "./assets/facebook-brands.svg";
import ig from "./assets/instagram-brands.svg";
import tw from "./assets/twitter-brands.svg";
import yt from "./assets/youtube-brands.svg";
import burger from "./assets/buger.jpg";
import star from "./assets/star.svg";
import about1 from "./assets/about-1.jpg";
import about2 from "./assets/about-2.jpg";
import about3 from "./assets/about-3.jpg";
import logoFooter from "./assets/textLogo.svg";
import favInactive from "./assets/fav-inactive .svg";
import cooked from "./assets/Cooked_Logo.png";
import ava from "./assets/ava.jpeg";
import printBtn from "./assets/printBtn.svg";
import fullScreenBtn from "./assets/fullScreenBtn.svg";
import clock from "./assets/clock.svg";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="top">
                    <img src={logo} alt="logo" width={150}/>
                    <div className="rightSide">
                        <div className="searchBlock">
                            <input type="text" placeholder="Find a recipe..."/>
                            <span><img src={search} alt="search" width={20} height={20}/></span>
                        </div>
                        <button>Sign in</button>
                    </div>
                </div>


                <div className="bottom">
                    <div className="menu">
                        <div className="buttons">
                            <ul>
                                <li>Home</li>
                                <li>All Recipes</li>
                                <li>
                                    Cuisines &#9662;
                                    <ul className="dropdown">
                                        <li>American</li>
                                        <li>Italian</li>
                                        <li>Ukrainian</li>
                                    </ul>
                                </li>
                                <li>Blog</li>
                                <li>Profile</li>
                            </ul>
                        </div>
                        <div className="social">
                            <img src={fb} alt="fb"/>
                            <img src={ig} alt="ig"/>
                            <img src={tw} alt="tw"/>
                            <img src={yt} alt="yt"/>
                        </div>

                    </div>

                </div>
            </div>

            {/*<div className="content">*/}
            {/*    <div className="sliderBlock">*/}
            {/*        <h1>Welcome to your recipe community.</h1>*/}
            {/*        <p>Any page can have this recipe slider at the top. You can choose the<br/>recipes, add a heading,*/}
            {/*            subheading and more! <span>Learn More</span>*/}
            {/*        </p>*/}
            {/*        <div className="slider">*/}
            {/*            <Splide options={{*/}
            {/*                perPage: 3,*/}
            {/*                gap: 50,*/}
            {/*                pagination: false*/}
            {/*            }}>*/}
            {/*                <SplideSlide>*/}
            {/*                    <div className="card">*/}

            {/*                        <img src={burger} alt="burger"/>*/}
            {/*                        <div className="info">*/}
            {/*                            <div className="rating">*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}


            {/*                            </div>*/}
            {/*                            <div className="title">*/}
            {/*                                Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                            </div>*/}
            {/*                            <div className="line"></div>*/}
            {/*                            <div className="author">*/}
            {/*                                By <strong>Justin S.</strong>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </SplideSlide>*/}
            {/*                <SplideSlide>*/}
            {/*                    <div className="card">*/}
            {/*                        <img src={burger} alt="burger"/>*/}
            {/*                        <div className="info">*/}
            {/*                            <div className="rating">*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}


            {/*                            </div>*/}
            {/*                            <div className="title">*/}
            {/*                                Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                            </div>*/}
            {/*                            <div className="line"></div>*/}
            {/*                            <div className="author">*/}
            {/*                                By <strong>Justin S.</strong>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </SplideSlide>*/}
            {/*                <SplideSlide>*/}
            {/*                    <div className="card">*/}
            {/*                        <img src={burger} alt="burger"/>*/}
            {/*                        <div className="info">*/}
            {/*                            <div className="rating">*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}


            {/*                            </div>*/}
            {/*                            <div className="title">*/}
            {/*                                Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                            </div>*/}
            {/*                            <div className="line"></div>*/}
            {/*                            <div className="author">*/}
            {/*                                By <strong>Justin S.</strong>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </SplideSlide>*/}
            {/*                <SplideSlide>*/}
            {/*                    <div className="card">*/}
            {/*                        <img src={burger} alt="burger"/>*/}
            {/*                        <div className="info">*/}
            {/*                            <div className="rating">*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}
            {/*                                <img src={star} alt="star"/>*/}


            {/*                            </div>*/}
            {/*                            <div className="title">*/}
            {/*                                Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                            </div>*/}
            {/*                            <div className="line"></div>*/}
            {/*                            <div className="author">*/}
            {/*                                By <strong>Justin S.</strong>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </SplideSlide>*/}
            {/*            </Splide>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="aboutBox">*/}
            {/*        <div className="aboutCard">*/}
            {/*            <div className="title">A Cooking Companion</div>*/}
            {/*            <img src={about1} alt="about-1"/>*/}
            {/*            <p>*/}
            {/*                With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy*/}
            {/*                cooking companion in the kitchen. Better yet, share with friends & family so they can cook*/}
            {/*                along!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="aboutCard">*/}
            {/*            <div className="title">Cooked Pro Included</div>*/}
            {/*            <img src={about2} alt="about-2"/>*/}
            {/*            <p>*/}
            {/*                With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy*/}
            {/*                cooking companion in the kitchen. Better yet, share with friends & family so they can cook*/}
            {/*                along!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="aboutCard">*/}
            {/*            <div className="title">Build a Community</div>*/}
            {/*            <img src={about3} alt="about-3"/>*/}
            {/*            <p>*/}
            {/*                With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy*/}
            {/*                cooking companion in the kitchen. Better yet, share with friends & family so they can cook*/}
            {/*                along!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="ratedRecipes">*/}
            {/*        <h2>Top Rated Recipes</h2>*/}
            {/*        <div className="widgetText">*/}
            {/*            <p>The Homepage Recipes widget allows you to add some recipes to your homepage.</p>*/}
            {/*            <button className="greenBtn">View All Recipes</button>*/}
            {/*        </div>*/}
            {/*        <div className="recipesGrid">*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="card">*/}
            {/*                <div className="innerCard">*/}
            {/*                    <img src={burger} alt="burger"/>*/}
            {/*                    <div className="info">*/}
            {/*                        <div className="rating">*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}
            {/*                            <img src={star} alt="star"/>*/}


            {/*                        </div>*/}
            {/*                        <div className="title">*/}
            {/*                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions*/}
            {/*                        </div>*/}
            {/*                        <div className="line"></div>*/}
            {/*                        <div className="author">*/}
            {/*                            By <strong>Justin S.</strong>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="favBtn">*/}
            {/*                        <img src={favInactive} alt=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="widget">*/}
            {/*        <div className="text">*/}
            {/*            <h2>This is a Parallax Homepage Widget</h2>*/}
            {/*            <p>*/}
            {/*                This is one of the included Homepage Widgets. Go to the Customizer, click on Widgets and*/}
            {/*                then*/}
            {/*                Homepage Content. Add the Homepage - Parallax block. There are lots of text color and size*/}
            {/*                options included, and you can even include basic HTML like clickable links, bold and italic*/}
            {/*                text.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="gradient">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="recipe">
                <div className="titleBlock">
                    <h2>
                        Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                    </h2>
                </div>
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

            <div className="footer">
                <div className="infoBlock">
                    <div className="premium">
                        <img src={logoFooter} alt="logo-footer"/>
                        <p>
                            Basil is a premium recipe theme for WordPress that works alongside the Cooked Pro plugin
                            (included). Basil adds custom features like a recipe slider, homepage widgets and more.
                            Start building your community today!
                        </p>
                        <button className="greenBtn">Purchase Basil</button>
                    </div>
                    <div className="recent">
                        <img src={cooked} alt="recent"/>
                        <p>
                            Basil is a premium recipe theme for WordPress that works alongside the Cooked Pro plugin
                            (included). Basil adds custom features like a recipe slider, homepage widgets and more.
                            Start building your community today!
                        </p>
                        <button className="greenBtn">Purchase Basil</button>
                    </div>
                    <div className="plugin">
                        <img src={cooked} alt="logo-cooked"/>
                        <p>
                            Cooked Pro is the powerful recipe plugin that's included with the Basil theme. It handles
                            all of your recipes! You can create and share recipes, let users create profiles and submit
                            recipes and so much more.
                        </p>
                        <button className="greenBtn">Learn More</button>
                    </div>

                </div>
                <div className="bottomFooter">
                    <p>Copyright ©2022 Xalk</p>
                    <div className="social">
                        <img src={fb} alt="fb"/>
                        <img src={ig} alt="ig"/>
                        <img src={tw} alt="tw"/>
                        <img src={yt} alt="yt"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;