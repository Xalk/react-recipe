import React, {useEffect} from "react";
import ava from "../../assets/ava.jpeg";
import printBtn from "../../assets/printBtn.svg";
import fullScreenBtn from "../../assets/fullScreenBtn.svg";
import star from "../../assets/star.svg";
import favInactive from "../../assets/fav-inactive .svg";
import burger from "../../assets/buger.jpg";
import clock from "../../assets/clock.svg";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchRecipeInfo} from "../../redux/features/recipeSlice";
import Loader from "../../components/common/Loader/Loader";

import s from "./Recipe.module.scss";
import SubHeader from "../../components/common/SubHeader/SubHeader";

interface RecipeProps {

}


const Recipe: React.FC<RecipeProps> = () => {
    const {id} = useParams() as { id: string };
    const dispatch = useAppDispatch();

    const {
        summary,
        image,
        extendedIngredients,
        analyzedInstructions,
        title
    } = useAppSelector(state => state.recipe.recipeInfo);
    const isLoading = useAppSelector(state => state.recipe.isLoading);


    useEffect(() => {
        dispatch(fetchRecipeInfo(id));
    }, [])


    // const changeSummary = (str?: string) => {
    //     let indx = str?.indexOf("spoonacular score of");
    //     let shortStr = str?.slice(0, indx)
    //     let lastDot = shortStr?.lastIndexOf(".");
    //     return shortStr?.slice(0, lastDot);
    // }


    return (
        <>
            {isLoading ? (
                    <Loader/>
                )
                : <div className={s.recipe}>
                    <SubHeader title={title}/>

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


                    <div className={s.recipeContent}>
                        <div className={s.recipeHeader}>
                            <div className={s.rightSide}>
                                <div className={s.recipeAuthor}>
                                    <img src={ava} alt="avatar"/>
                                    <ul>
                                        <li>AUTHOR</li>
                                        <li>Justin S</li>
                                    </ul>
                                </div>
                                <img src={printBtn} alt="print" width={36}/>
                                <img src={fullScreenBtn} alt="fullScreen" width={36}/>
                            </div>
                            <div className={s.leftSide}>
                                <div className={s.rating}>
                                    <p>RATING</p>
                                    <ul>
                                        <li><img src={star} alt="star" width={16}/></li>
                                        <li><img src={star} alt="star" width={16}/></li>
                                        <li><img src={star} alt="star" width={16}/></li>
                                        <li><img src={star} alt="star" width={16}/></li>
                                        <li><img src={star} alt="star" width={16}/></li>
                                    </ul>
                                </div>
                                <div className={s.difficulty}>
                                    <ul>
                                        <li>Difficulty</li>
                                        <li>Intermediate</li>
                                    </ul>
                                </div>
                                <img src={favInactive} alt="fav" width={32}/>
                            </div>
                        </div>
                        <div className={s.shortInfo}>
                            <p dangerouslySetInnerHTML={{__html: summary || ""}}>
                            </p>
                            <div className={s.imgContainer}>
                                <img src={image} alt="recipePhoto"/>
                            </div>

                            <div className={s.shareBlock}>
                                <div className={s.grayLine}></div>
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
                                <div className={s.grayLine}></div>
                            </div>
                            <div className={s.timeBlock}>
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
                        <div className={s.ingredients}>
                            <h2>Ingredients: </h2>

                            <ul>
                                {
                                    extendedIngredients?.map(ing => {
                                        return (
                                            <li key={ing.id}>
                                                <input type="checkbox" id={ing.original} autoFocus={false}
                                                       required={false}/>
                                                <label htmlFor={ing.original}>{ing.original}</label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={s.instructions}>
                            <h2>
                                Instructions:
                            </h2>
                            <div className={s.steps}>
                                <ul>
                                    {
                                        analyzedInstructions && analyzedInstructions[0]?.steps.map((s, i) => {
                                            return (
                                                <li key={i}>
                                                    <span>{s.number}</span>
                                                    <p>
                                                        {s.step}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            }

        </>


    );
}

export default Recipe;

