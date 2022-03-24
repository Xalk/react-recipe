import React from 'react';
import './App.scss';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import logo from "./assets/logo.png";
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
import logoFooter from "./assets/logo_footer.png";
import favInactive from "./assets/fav-inactive .svg";
import cooked from "./assets/Cooked_Logo.png";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="top">
                    <img src={logo} alt="logo" width={100}/>
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