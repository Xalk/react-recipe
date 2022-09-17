import React, {useEffect, useState} from 'react';
import SubHeader from "../../components/common/SubHeader/SubHeader";
import s from "./BrowseRecipes.module.scss"
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";
import {useAppSelector} from "../../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import { setBrowse, setPage, setSearchValue, setSort} from "../../redux/filter/slice";
import { fetchFilteredRecipes} from "../../redux/filter/asyncActions";

import Pagination from "../../components/Pagination/Pagination";
import ArrowSvg from "../../components/common/ArrowSvg/ArrowSvg";
import {useDebounce} from "../../hooks/useDebounce";
import {selectFilter} from "../../redux/filter/selectors";

interface BrowseRecipesProps {

}

const categories = ["Main course", "Dessert", "Salad", "Bread", "Breakfast"];
const cuisines = ["American", "European", "Italian"];

const BrowseRecipes: React.FC<BrowseRecipesProps> = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const {items, offset, totalResults, sort, browse, searchValue} = useAppSelector(selectFilter)

    const dispatch = useDispatch()

    const debouncedSearch = useDebounce(searchValue, 500)

    const onChangePage = (page: number) => {
        dispatch(setPage(page))
    }
    const onChangeSort = (sort: string) => {
        dispatch(setSort(sort))
    }
    const onClickBrowse = (browse: string) => {
        dispatch(setBrowse(browse.toLowerCase()));
        setIsFilterOpen(false)
    }
    const onChangeSearch = (value: string) => {
        dispatch(setSearchValue(value));
    }


    useEffect(() => {
        dispatch(fetchFilteredRecipes({offset, sort, browse, searchValue}))
    }, [offset, sort, browse, debouncedSearch])

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <SubHeader title={"Browse Recipes"}/>
            <div className={s.content}>

                <div className={s.inputs}>
                    <div className={s.filterBlock}>
                        <div className={s.btn} onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            {browse ? capitalizeFirstLetter(browse) : "Browse"}
                            <ArrowSvg/>
                        </div>
                        {
                            isFilterOpen && (
                                <div className={s.dropdown}>
                                    <div className={s.item}>
                                        <p>MEAL TYPES</p>
                                        <div className={s.divider}></div>
                                        <ul>
                                            {categories.map((c, i) => <li key={i}
                                                                          onClick={() => onClickBrowse(c)}>{c}</li>)}
                                        </ul>
                                    </div>
                                    <div className={s.item}>
                                        <p>CUISINES</p>
                                        <div className={s.divider}></div>
                                        <ul>
                                            {cuisines.map((c, i) => <li key={i}
                                                                        onClick={() => onClickBrowse(c)}>{c}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={s.searchBlock}>
                        <input type="text" placeholder="Find a recipe..." value={searchValue}
                               onChange={(e) => onChangeSearch(e.target.value)}/>
                        <select name="" id="" onChange={(e) => onChangeSort(e.target.value)}>
                            <option value="">Newest first</option>
                            <option value="popularity">Popularity</option>
                            <option value="asc">Alphabetical (A-Z)</option>
                            <option value="desc">Alphabetical (Z-A)</option>
                            <option value="time">Time</option>
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