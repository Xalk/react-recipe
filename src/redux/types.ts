interface IIngredient {
    id: number;
    original: string;
}

interface IStep {
    number: number;
    step: string;
}

export interface IUser {
    token: string;
    info: {
        id: number,
        name: string,
        email: string,
        email_verified_at: null | string,
        created_at: string,
        updated_at: string
    }
}


export interface IRecipe {
    id: number;
    title: string;
    summary: string;
    image: string;
    instructions: string;
    extendedIngredients: IIngredient[],
    analyzedInstructions: [
        {
            name: "",
            steps: IStep[]
        }
    ]
}

export interface IResFilteredRecipes {
    results: IRecipe[],
    offset: number,
    number: number,
    totalResults: number
}

export interface IFilterRecipesParams {
    offset?:number,
    sort?: string,
    browse?: string,
    searchValue?: string
}
