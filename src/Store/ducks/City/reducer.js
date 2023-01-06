import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({ 
    name: 'allCitys',
    initialState: { 
        data: null
    },
    reducers: {
        requestSuccess(state, action){
            state.data = action.payload
        }
    }
});

export const { requestSuccess } = slice.actions

export default slice.reducer