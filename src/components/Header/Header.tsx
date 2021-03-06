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
import {authAPI} from "../../api/api";
import {useAppDispatch} from "../../hooks/hooks";
import {setUser} from "../../redux/features/userSlice";

interface HeaderProps {

}


const Header: React.FC<HeaderProps> = () => {

    const {width} = useWindowDimensions();
    const dispatch = useAppDispatch();

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    useEffect(()=>{
        initUser();
    }, [])

    const initUser = async () => {
       try {
           const data = await authAPI.getMe();
           console.log(data.data)
           dispatch(setUser(data.data));
       }catch (e){
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
                            <li>All Recipes</li>
                            <li className={s.downArrow}>
                                <span>Cuisines</span>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                                     width="22px" height="20px" viewBox="0 0 960 560" fill="#fff"
                                     enableBackground="new 0 0 960 560">
                                    <g id="Rounded_Rectangle_33_copy_4_1_">
                                        <path
                                            d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
                                    </g>
                                </svg>
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