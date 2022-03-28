import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {IRecipe} from '../types';
import {recipeAPI} from "../../api/api";


// Define a type for the slice state
interface RecipesState {
    recipesList: IRecipe[],
    sliderRecipes: IRecipe[]
}

// Define the initial state using that type
const initialState: RecipesState = {
    recipesList: [],
    sliderRecipes: []
}

export const fetchRecipes = createAsyncThunk<IRecipe[], number>(
    'recipes/getRecipes',
    async (limit, thunkAPI) => {
        const data: IRecipe[] = await recipeAPI.getRecipesList(limit)
        return data;
    }
)


export const recipesSlice = createSlice({
    name: 'recipes',
    // `createSlice` will infer the state type from the `initialState` argument
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

export const {setRecipes} = recipesSlice.actions;

export default recipesSlice.reducer;