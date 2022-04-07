import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { IUser } from '../types';


interface UserState {
  data: IUser | null;
}


const initialState: UserState = {
    data: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => {
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;