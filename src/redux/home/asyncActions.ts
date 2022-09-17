import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRecipe} from "./types";
import {recipeAPI} from "../../api";

export const fetchRecipes = createAsyncThunk<IRecipe[], number>(
    'home/getRecipes',
    async (limit) => {
        const data: IRecipe[] = await recipeAPI.getRecipesList(limit)
        return data;
    }
)