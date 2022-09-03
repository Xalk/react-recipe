import {configureStore} from "@reduxjs/toolkit";
import {homeSlice} from "./features/homeSlice";
import {recipeSlice} from "./features/recipeSlice";
import {userSlice} from "./features/userSlice";
import {filterSlice} from "./features/filterSlice";


export const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        recipe: recipeSlice.reducer,
        user: userSlice.reducer,
        filter: filterSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;