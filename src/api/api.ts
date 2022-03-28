import axios from "axios";
import {IRecipe} from "../redux/types";


const API_KEY = "3cd282a7c1b34edebdf4db8c41147472";

let baseApi = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
})


interface responseRecipes {
    recipes: IRecipe[]
}


export let recipeAPI = {
    getRecipesList(limit: number) {
        return baseApi.get<responseRecipes>(`random?apiKey=${API_KEY}&number=${limit}`).then(res => res.data.recipes);
    },

    getRecipeInfo(id: string) {
        return baseApi.get<IRecipe>(`${id}/information?apiKey=${API_KEY}`).then(res => res.data)
    }
}