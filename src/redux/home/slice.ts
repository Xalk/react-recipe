import {createSlice} from "@reduxjs/toolkit";
import {RecipesState} from "./types";
import {fetchRecipes} from "./asyncActions";

const initialState: RecipesState = {
    recipesList: [],
    sliderRecipes: []
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setRecipes(state, action) {
            state.recipesList = action.payload;
            state.sliderRecipes = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipesList = action.payload;
            state.sliderRecipes = action.payload;
        })
    }
})

export const {setRecipes} = homeSlice.actions;

export default homeSlice.reducer;