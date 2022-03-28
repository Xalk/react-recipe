import axios from "axios";
import {IRecipe} from "../redux/types";


const API = "3cd282a7c1b34edebdf4db8c41147472";

let baseApi = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
})




export let recipeAPI = {
    getRecipesList() {
        return baseApi.get<IRecipe[]>(`random?apiKey=${API}&number=6`).then(res => res.data);

    }
}