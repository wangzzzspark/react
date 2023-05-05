import {createSlice, configureStore} from '@reduxjs/toolkit';

const countSlice = createSlice({
    name:'counteSlice',
    initialState:{
        count:1
    },

    reducers:{
        increment:(state) => {
            state.count =state.count +1
        },
        decrement: (state) => {
            state.count =state.count - 1

        }
        
    }
})
export const { increment, decrement } = countSlice.actions
const store = configureStore({
    reducer: {
        counter : countSlice.reducer
    }
})

export default store