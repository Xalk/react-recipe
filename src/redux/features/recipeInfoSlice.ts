import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit'
import {IRecipe} from '../types';
import {recipeAPI} from "../../api/api";


// Define a type for the slice state
interface RecipesState {
    recipeInfo: IRecipe | null
}

// Define the initial state using that type
const initialState: RecipesState = {
    recipeInfo: null
}

export const fetchRecipeInfo = createAsyncThunk<IRecipe, string>(
    'recipes/getRecipeInfo',
    async (id, thunkAPI) => {
        const data: IRecipe = await recipeAPI.getRecipeInfo(id)
        return data;
    }
)


export const recipeInfoSlice = createSlice({
    name: 'recipeInfo',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRecipeInfo.fulfilled, (state, action) => {
            state.recipeInfo = action.payload;
        })
    }
})

export const {} = recipeInfoSlice.actions;

export default recipeInfoSlice.reducer;