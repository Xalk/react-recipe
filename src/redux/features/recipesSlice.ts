import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import { IRecipe } from '../types';
import {recipeAPI} from "../../api/api";


// Define a type for the slice state
interface RecipesState {
    recipesList: IRecipe[]
}

// Define the initial state using that type
const initialState: RecipesState = {
    recipesList: []
}

export const fetchRecipes = createAsyncThunk<IRecipe[]>(
    'recipes/getRecipes',
    async (limit, thunkAPI) => {
        const data: IRecipe[] = await recipeAPI.getRecipesList()
        return data;
    }
)


export const recipesSlice = createSlice({
    name: 'recipes',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            // Add recipes to the state array
            state.recipesList = action.payload;
        })
    }
})

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;