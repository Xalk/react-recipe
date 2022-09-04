import React, {useEffect, useState} from 'react';
import SubHeader from "../../components/common/SubHeader/SubHeader";
import s from "./BrowseRecipes.module.scss"
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";
import {useAppSelector} from "../../hooks/hooks";
import {useDispatch} from "react-redux";
import {fetchFilteredRecipes, setPage} from "../../redux/features/filterSlice";
import Pagination from "../../components/Pagination/Pagination";
import ArrowSvg from "../../components/common/ArrowSvg/ArrowSvg";

interface BrowseRecipesProps {

}


const BrowseRecipes: React.FC<BrowseRecipesProps> = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const {items, offset, totalResults} = useAppSelector(state => state.filter)

    const dispatch = useDispatch()

    const onChangePage = (page: number) => {
        dispatch(setPage(page))
    }


    useEffect(() => {
        dispatch(fetchFilteredRecipes(offset))
    }, [offset])



    return (
        <>
            <SubHeader title={"Browse Recipes"}/>
            <div className={s.content}>

                <div className={s.inputs}>
                    <div className={s.filterBlock}>
                        <div className={s.btn} onClick={() => setIsFilterOpen(!isFilterOpen)}>Browse
                            <ArrowSvg/>
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
                            <option value="Popularity">Popularity</option>
                            <option value="Alphabetical (A-Z)">Alphabetical (A-Z)</option>
                            <option value="Alphabetical (Z-A)">Alphabetical (Z-A)</option>
                        </select>
                        <button><img src={search} alt="search" width={20} height={20}/></button>
                    </div>
                </div>

                <div className={s.grid}>

                    {
                        items?.map(e => <Card key={e.id} id={e.id} title={e.title} image={e.image}/>)
                    }

                </div>
                <Pagination currentPage={offset} onChangePage={onChangePage} totalResults={totalResults}/>
            </div>
        </>

    );
};

export default BrowseRecipes;