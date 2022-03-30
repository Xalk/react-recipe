import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit'
import {IRecipe} from '../types';
import {recipeAPI} from "../../api/api";


// Define a type for the slice state
interface recipeInfoState {
    recipeInfo: IRecipe,
    isLoading: boolean
}

// Define the initial state using that type
const initialState: recipeInfoState = {
    recipeInfo: {} as IRecipe,
    isLoading: false
}

export const fetchRecipeInfo = createAsyncThunk<IRecipe, string>(
    'recipeInfo/getRecipeInfo',
    async (id, thunkAPI) => {
        const data: IRecipe = await recipeAPI.getRecipeInfo(id)
        return data;
    }
)


export const recipeInfoSlice = createSlice({
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

export const {setIsLoading} = recipeInfoSlice.actions;

export default recipeInfoSlice.reducer;