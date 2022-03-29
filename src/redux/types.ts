interface IIngredient {
    id: number;
    original: string;
}

interface IStep {
    number: number;
    step: string;
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
