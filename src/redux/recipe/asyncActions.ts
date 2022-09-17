import {createAsyncThunk} from "@reduxjs/toolkit";
import {recipeAPI} from "../../api";
import {IRecipe} from "../home/types";

export const fetchRecipeInfo = createAsyncThunk<IRecipe, string>(
    'recipeInfo/getRecipeInfo',
    async (id, thunkAPI) => {
        const data: IRecipe = await recipeAPI.getRecipeInfo(id)
        return data;
    }
)
