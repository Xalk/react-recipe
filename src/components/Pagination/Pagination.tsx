import React from 'react';
import s from "./Pagination.module.scss"
import ReactPaginate from "react-paginate";
import ArrowSvg from "../common/ArrowSvg/ArrowSvg";

interface PaginationProps {
    currentPage: number;
    totalResults:number;
    onChangePage: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage, totalResults}) => {
    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel={<ArrowSvg color={"#39db7f"}/>}
            previousLabel={<ArrowSvg color={"#39db7f"}/>}
            onPageChange={(event) => onChangePage(event.selected)}
            pageRangeDisplayed={1}
            pageCount={totalResults/9}
            forcePage={currentPage}
        />
    );
};

export default Pagination;