import {createAsyncThunk} from "@reduxjs/toolkit";
import {recipeAPI} from "../../api";
import {IFilterRecipesParams, IResFilteredRecipes} from "./types";

export const fetchFilteredRecipes = createAsyncThunk<IResFilteredRecipes, IFilterRecipesParams>(
    'filter/getFilteredRecipes',
    async (params) => {
        const data: IResFilteredRecipes = await recipeAPI.getFilteredRecipes(params)
        console.log(data)
        return data;
    }
)
