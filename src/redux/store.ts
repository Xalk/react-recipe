import {configureStore} from "@reduxjs/toolkit";
import {recipesSlice} from "./features/recipesSlice";
import {recipeInfoSlice} from "./features/recipeInfoSlice";


export const store = configureStore({
    reducer: {
        recipes: recipesSlice.reducer,
        recipePage: recipeInfoSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;