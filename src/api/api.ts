import axios from "axios";
import {IFilterRecipesParams, IRecipe, IUser} from "../redux/types";
import Cookie from "cookie-universal";


// const API_KEY = "3cd282a7c1b34edebdf4db8c41147472"; //1
const API_KEY = "f41fbb5089e6411cbd2a18def9d51872"; //2

let baseApi = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
})


interface responseRecipes {
    recipes: IRecipe[]
}

const cookies = Cookie();
const cookieRes = cookies.get('access_token');


export let recipeAPI = {
    getRecipesList(limit: number) {
        return baseApi.get<responseRecipes>(`random?apiKey=${API_KEY}&number=${limit}`).then(res => res.data.recipes);
    },

    getRecipeInfo(id: string) {
        return baseApi.get<IRecipe>(`${id}/information?apiKey=${API_KEY}`).then(res => res.data)
    },

    getFilteredRecipes(params :IFilterRecipesParams) {
        return baseApi.get(`complexSearch?query=${params.searchValue}&sort=${params.sort}&type=${params.browse}&cuisine=${params.browse}&sortDirection=${params.sort}&apiKey=${API_KEY}&number=9&offset=${params.offset}`).then(res => res.data);
    },
}

type reqUser = {
    email: string;
    password: string;
}

export let authAPI = {
    login(data: reqUser) {
        return axios.post<IUser>(`http://127.0.0.1:8000/api/login`, data).then(res => res);
    },
    getMe() {
        return axios.get(`http://127.0.0.1:8000/api/me`, {
            headers: {
                Authorization: "Bearer " + cookieRes
    }
        }).then(res => res);
    },

}

