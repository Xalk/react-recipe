import {IRecipe} from "../home/types";

export interface FilterState {
    searchValue: string,
    sort: string,
    browse: string,
    items: IRecipe[],
    offset: number,
    number: number,
    totalResults: number

}

export interface IResFilteredRecipes {
    results: IRecipe[],
    offset: number,
    number: number,
    totalResults: number
}

export interface IFilterRecipesParams {
    offset?:number,
    sort?: string,
    browse?: string,
    searchValue?: string
}
