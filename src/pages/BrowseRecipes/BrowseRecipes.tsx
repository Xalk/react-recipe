import React, {useState} from 'react';
import SubHeader from "../../components/common/SubHeader/SubHeader";
import s from "./BrowseRecipes.module.scss"
import search from "../../assets/search.svg";

interface BrowseRecipesProps {

}


const BrowseRecipes: React.FC<BrowseRecipesProps> = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);


    return (
        <>
            <SubHeader title={"Browse Recipes"}/>
            <div className={s.content}>

                <div className={s.inputs}>
                    <div className={s.filterBlock}>
                        <div className={s.btn} onClick={() => setIsFilterOpen(!isFilterOpen)}>Browse
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                                 width="22px" height="20px" viewBox="0 0 960 560" fill="#fff"
                                 enableBackground="new 0 0 960 560">
                                <g id="Rounded_Rectangle_33_copy_4_1_">
                                    <path
                                        d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
                                </g>
                            </svg>
                        </div>
                        {
                            isFilterOpen && (
                                <div className={s.dropdown}>
                                    <div className={s.item}>
                                        <p>CATEGORIES</p>
                                        <div className={s.divider}></div>
                                        <ul>
                                            <li>Burgers</li>
                                            <li>Cakes</li>
                                            <li>Chicken</li>
                                            <li>Cookies</li>
                                            <li>Hash</li>
                                        </ul>
                                    </div>
                                    <div className={s.item}>
                                        <p>CUISINES</p>
                                        <div className={s.divider}></div>
                                        <ul>
                                            <li>American</li>
                                            <li>Asian</li>
                                            <li>Italian</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={s.searchBlock}>
                        <input type="text" placeholder="Find a recipe..."/>
                        <select name="" id="">
                            <option value="Newest first">Newest first</option>
                            <option value="Oldest first">Newest first</option>
                            <option value="Alphabetical (A-Z)">Alphabetical (A-Z)</option>
                            <option value="Alphabetical (Z-A)">Alphabetical (Z-A)</option>
                        </select>
                        <button><img src={search} alt="search" width={20} height={20}/></button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BrowseRecipes;