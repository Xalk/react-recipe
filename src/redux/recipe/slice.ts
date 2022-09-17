import {createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../home/types";
import {recipeInfoState} from "./types";
import {fetchRecipeInfo} from "./asyncActions";


const initialState: recipeInfoState = {
    recipeInfo: {} as IRecipe,
    isLoading: false
}


export const recipeSlice = createSlice({
    name: 'recipeInfo',
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchRecipeInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRecipeInfo.fulfilled, (state, action) => {
            state.recipeInfo = action.payload;
            state.isLoading = false;
        });

    }
})

export const {setIsLoading} = recipeSlice.actions;

export default recipeSlice.reducer;