import React, {useEffect, useState} from "react";
import logo from "../../assets/logoRefus.svg";
import search from "../../assets/search.svg";
import fb from "../../assets/facebook-brands.svg";
import ig from "../../assets/instagram-brands.svg";
import tw from "../../assets/twitter-brands.svg";
import yt from "../../assets/youtube-brands.svg";
import hamMenu from "../../assets/hamburger-menu.svg";
import {NavLink} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./Header.module.scss";
import {authAPI} from "../../api";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {setUser} from "../../redux/user/slice";
import ArrowSvg from "../common/ArrowSvg/ArrowSvg";

interface HeaderProps {

}


const Header: React.FC<HeaderProps> = () => {

    const {width} = useWindowDimensions();
    const dispatch = useAppDispatch();

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    useEffect(() => {
        initUser();
    }, [])

    const initUser = async () => {
        try {
            const data = await authAPI.getMe();
            console.log(data.data)
            dispatch(setUser(data.data));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={s.header}>
            <div className={s.top}>
                <NavLink to="/">
                    <img src={logo} alt="logo" width={150}/>
                </NavLink>
                {
                    width > 760 && <div className={s.rightSide}>
                        <div className={s.searchBlock}>
                            <input type="text" placeholder="Find a recipe..."/>
                            <span><img src={search} alt="search" width={20} height={20}/></span>
                        </div>
                        <button>Sign in</button>
                    </div>
                }
                <div className={s.hamBlock}>
                    <img src={hamMenu} alt="menu" width={30} height={30}
                         onClick={() => setIsMenuVisible(prev => !prev)}/>
                </div>
            </div>


            <div className={`${s.bottom} ${isMenuVisible ? s.visible : ""} `}>
                <div className={s.menu}>
                    <div className={s.buttons}>
                        <ul>
                            {
                                width < 760 && <li>
                                    <div className={s.rightSide}>
                                        <div className={s.searchBlock}>
                                            <input type="text" placeholder="Find a recipe..." autoFocus={false}/>
                                            <span><img src={search} alt="search" width={20} height={20}/></span>
                                        </div>
                                        <button>Sign in</button>
                                    </div>
                                </li>
                            }
                            <li>Home</li>
                            <NavLink to="/all-recipes">
                                <li>All Recipes</li>
                            </NavLink>

                            <li className={s.downArrow}>
                                <span>Cuisines</span>
                                <ArrowSvg/>
                                <ul className={s.dropdown}>
                                    <li>American</li>
                                    <li>Italian</li>
                                    <li>Ukrainian</li>
                                </ul>
                            </li>
                            <li>Blog</li>
                            <NavLink to="/profile">
                                <li>Profile</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className={s.social}>
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