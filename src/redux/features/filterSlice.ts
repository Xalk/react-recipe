import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {IRecipe, IResFilteredRecipes} from "../types";
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


export const fetchFilteredRecipes = createAsyncThunk<IResFilteredRecipes, number>(
    'filter/getFilteredRecipes',
    async (limit) => {
        const data: IResFilteredRecipes = await recipeAPI.getFilteredRecipes(limit)
        console.log(data)
        return data;
    }
)


const initialState: FilterState = {
    searchValue: "",
    sort: "Newest first",
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

export const {setPage} = filterSlice.actions;

export default filterSlice.reducer;