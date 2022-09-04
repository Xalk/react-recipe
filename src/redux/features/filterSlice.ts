import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {IFilterRecipesParams, IRecipe, IResFilteredRecipes} from "../types";
import {recipeAPI} from "../../api/api";


interface FilterState {
    searchValue: string,
    sort: string,
    browse: string,
    items: IRecipe[],
    offset: number,
    number: number,
    totalResults: number

}


export const fetchFilteredRecipes = createAsyncThunk<IResFilteredRecipes, IFilterRecipesParams>(
    'filter/getFilteredRecipes',
    async (params) => {
        const data: IResFilteredRecipes = await recipeAPI.getFilteredRecipes(params)
        console.log(data)
        return data;
    }
)


const initialState: FilterState = {
    searchValue: "",
    sort: "",
    browse: "",
    items: [],
    offset: 0,
    number: 0,
    totalResults: 0

}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage(state, action) {
            state.offset = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setBrowse(state, action) {
            state.browse = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchFilteredRecipes.fulfilled, (state, action) => {
            state.items = action.payload.results
            state.number = action.payload.number
            state.totalResults = action.payload.totalResults

        })
    }
})

export const {setPage, setSort, setBrowse, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;