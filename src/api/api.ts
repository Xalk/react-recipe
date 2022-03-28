import axios from "axios";
import {IRecipe} from "../redux/types";


const API = "3cd282a7c1b34edebdf4db8c41147472";

let baseApi = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
})


interface responseRecipes {
    recipes: IRecipe[]
}


export let recipeAPI = {
    getRecipesList(limit: number) {
        return baseApi.get<responseRecipes>(`random?apiKey=${API}&number=${limit}`).then(res => res.data.recipes);
    }
}