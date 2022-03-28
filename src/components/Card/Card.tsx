import React from "react";
import burger from "../../assets/buger.jpg";
import star from "../../assets/star.svg";
import favInactive from "../../assets/fav-inactive .svg";

interface CardProps {
    title: string;
    image: string;
}


const MyComponent: React.FC<CardProps> = ({title, image}) => {
    return (
        <div className="card">
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
        </div>
    );
}

export default MyComponent;