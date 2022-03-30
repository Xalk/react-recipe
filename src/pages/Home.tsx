import React, {useEffect} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

import burger from "../assets/buger.jpg";
import star from "../assets/star.svg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import favInactive from "../assets/fav-inactive .svg";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {fetchRecipes, setRecipes} from "../redux/features/recipesSlice";
import Card from "../components/Card/Card";
import useWindowDimensions from "../hooks/useWindowDimensions";


interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {

    const {width} = useWindowDimensions();

    const dispatch = useAppDispatch();
    const {recipesList, sliderRecipes} = useAppSelector(state => state.recipes)


    useEffect(() => {
        initRecipes();
    }, [])

    const initRecipes = async () => {
        const recipesListDB = localStorage.getItem("recipesList");
        if (recipesListDB) {
            dispatch(setRecipes(JSON.parse(recipesListDB)));
        } else {
            let res = await dispatch(fetchRecipes(6));
            localStorage.setItem("recipesList", JSON.stringify(res.payload));
        }
    }

    return (
        <div className="content">
            <div className="sliderBlock">
                <h1>Welcome to your recipe community.</h1>
                <p>Any page can have this recipe slider at the top. You can choose the<br/>recipes, add a heading,
                    subheading and more! <span>Learn More</span>
                </p>
                <div className="slider">
                    <Splide options={{
                        perPage: width < 760 ? 1 : 3,
                        gap: 50,
                        pagination: false,
                        drag: "free"
                    }}>

                        {
                            sliderRecipes?.map(r => {
                                return (
                                    <SplideSlide key={r.id}>
                                        <NavLink to={`/recipe/${r.id}`}>
                                            <div className="card">

                                                <img src={r.image} alt="burger"/>
                                                <div className="info">
                                                    <div className="rating">
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                    </div>
                                                    <div className="title">
                                                        {r.title}
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="author">
                                                        By <strong>Justin S.</strong>
                                                    </div>
                                                </div>

                                            </div>
                                        </NavLink>
                                    </SplideSlide>
                                )
                            })
                        }


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

                    {
                        recipesList?.map(r => <Card key={r.id} title={r.title} image={r.image} id={r.id}/>)
                    }

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