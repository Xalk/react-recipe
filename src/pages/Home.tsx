import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

import burger from "../assets/buger.jpg";
import star from "../assets/star.svg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import favInactive from "../assets/fav-inactive .svg";
import {NavLink} from "react-router-dom";

interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
    return (
        <div className="content">
            <div className="sliderBlock">
                <h1>Welcome to your recipe community.</h1>
                <p>Any page can have this recipe slider at the top. You can choose the<br/>recipes, add a heading,
                    subheading and more! <span>Learn More</span>
                </p>
                <div className="slider">
                    <Splide options={{
                        perPage: 3,
                        gap: 50,
                        pagination: false
                    }}>
                        <SplideSlide>
                            <NavLink to="/recipe">
                                <div className="card">

                                    <img src={burger} alt="burger"/>
                                    <div className="info">
                                        <div className="rating">
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>


                                        </div>
                                        <div className="title">
                                            Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                        </div>
                                        <div className="line"></div>
                                        <div className="author">
                                            By <strong>Justin S.</strong>
                                        </div>
                                    </div>

                                </div>
                            </NavLink>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card">
                                <img src={burger} alt="burger"/>
                                <div className="info">
                                    <div className="rating">
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>


                                    </div>
                                    <div className="title">
                                        Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                    </div>
                                    <div className="line"></div>
                                    <div className="author">
                                        By <strong>Justin S.</strong>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card">
                                <img src={burger} alt="burger"/>
                                <div className="info">
                                    <div className="rating">
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>


                                    </div>
                                    <div className="title">
                                        Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                    </div>
                                    <div className="line"></div>
                                    <div className="author">
                                        By <strong>Justin S.</strong>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card">
                                <img src={burger} alt="burger"/>
                                <div className="info">
                                    <div className="rating">
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>
                                        <img src={star} alt="star"/>


                                    </div>
                                    <div className="title">
                                        Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                    </div>
                                    <div className="line"></div>
                                    <div className="author">
                                        By <strong>Justin S.</strong>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div className="aboutBox">
                <div className="aboutCard">
                    <div className="title">A Cooking Companion</div>
                    <img src={about1} alt="about-1"/>
                    <p>
                        With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy
                        cooking companion in the kitchen. Better yet, share with friends & family so they can cook
                        along!
                    </p>
                </div>
                <div className="aboutCard">
                    <div className="title">Cooked Pro Included</div>
                    <img src={about2} alt="about-2"/>
                    <p>
                        With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy
                        cooking companion in the kitchen. Better yet, share with friends & family so they can cook
                        along!
                    </p>
                </div>
                <div className="aboutCard">
                    <div className="title">Build a Community</div>
                    <img src={about3} alt="about-3"/>
                    <p>
                        With Basil & Cooked, you can add recipes and then view them in full-screen mode for an easy
                        cooking companion in the kitchen. Better yet, share with friends & family so they can cook
                        along!
                    </p>
                </div>
            </div>
            <div className="ratedRecipes">
                <h2>Top Rated Recipes</h2>
                <div className="widgetText">
                    <p>The Homepage Recipes widget allows you to add some recipes to your homepage.</p>
                    <button className="greenBtn">View All Recipes</button>
                </div>
                <div className="recipesGrid">
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="innerCard">
                            <img src={burger} alt="burger"/>
                            <div className="info">
                                <div className="rating">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>


                                </div>
                                <div className="title">
                                    Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
                                </div>
                                <div className="line"></div>
                                <div className="author">
                                    By <strong>Justin S.</strong>
                                </div>
                            </div>
                            <div className="favBtn">
                                <img src={favInactive} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="widget">
                <div className="text">
                    <h2>This is a Parallax Homepage Widget</h2>
                    <p>
                        This is one of the included Homepage Widgets. Go to the Customizer, click on Widgets and
                        then
                        Homepage Content. Add the Homepage - Parallax block. There are lots of text color and size
                        options included, and you can even include basic HTML like clickable links, bold and italic
                        text.
                    </p>
                </div>
                <div className="gradient">
                </div>
            </div>
        </div>

    );
}

export default Home;