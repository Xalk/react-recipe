import React from "react";
import burger from "../../assets/buger.jpg";
import star from "../../assets/star.svg";
import favInactive from "../../assets/fav-inactive .svg";
import {NavLink} from "react-router-dom";
import s from "./Card.module.scss"

interface CardProps {
    id:number
    title: string;
    image: string;
}


const MyComponent: React.FC<CardProps> = ({title, image, id}) => {
    return (
        <div className={s.card}>
            <NavLink to={`/recipe/${id}`}>
                <div className={s.innerCard}>
                    <img src={image} alt="burger"/>
                    <div className={s.info}>
                        <div className={s.rating}>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                        </div>
                        <div className={s.title}>
                            {title}
                        </div>
                        <div className={s.line}></div>
                        <div className={s.author}>
                            By <strong>Justin S.</strong>
                        </div>
                    </div>
                    <div className={s.favBtn}>
                        <img src={favInactive} alt="" width={22} height={22}/>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default MyComponent;