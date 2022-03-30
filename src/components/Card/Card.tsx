import React from "react";
import burger from "../../assets/buger.jpg";
import star from "../../assets/star.svg";
import favInactive from "../../assets/fav-inactive .svg";
import {NavLink} from "react-router-dom";

interface CardProps {
    id:number
    title: string;
    image: string;

}


const MyComponent: React.FC<CardProps> = ({title, image, id}) => {
    return (
        <div className="card">
            <NavLink to={`/recipe/${id}`}>
                <div className="innerCard">
                    <img src={image} alt="burger"/>
                    <div className="info">
                        <div className="rating">
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                        </div>
                        <div className="title">
                            {title}
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
            </NavLink>
        </div>
    );
}

export default MyComponent;