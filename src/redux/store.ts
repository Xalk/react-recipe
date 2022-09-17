import {configureStore} from "@reduxjs/toolkit";
import {homeSlice} from "./home/slice";
import {filterSlice} from "./filter/slice";
import {userSlice} from "./user/slice";
import {recipeSlice} from "./recipe/slice";


const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        recipe: recipeSlice.reducer,
        user: userSlice.reducer,
        filter: filterSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;