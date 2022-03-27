import React from "react";
import logo from "../../assets/logoRefus.svg";
import search from "../../assets/search.svg";
import fb from "../../assets/facebook-brands.svg";
import ig from "../../assets/instagram-brands.svg";
import tw from "../../assets/twitter-brands.svg";
import yt from "../../assets/youtube-brands.svg";
import {NavLink} from "react-router-dom";

interface HeaderProps {

}


const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="header">
            <div className="top">
                <NavLink to="/">
                    <img src={logo} alt="logo" width={150}/>
                </NavLink>
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

    );
}

export default Header;