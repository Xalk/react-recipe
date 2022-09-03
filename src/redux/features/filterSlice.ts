import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


interface UserState {
    searchValue: string,
    sort: string,
    browse: string

}


const initialState: UserState = {
    searchValue: "",
    sort: "Newest first",
    browse: ""
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: builder => {
    }
})

export const {} = filterSlice.actions;

export default filterSlice.reducer;