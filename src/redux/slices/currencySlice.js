import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoading: false,
    error: null,
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrencyData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setCurrencyData, setLoading, setError } = currencySlice.actions;
export default currencySlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const currencySlice = createSlice({
//     name: 'currency',
//     initialState: {
//         data: {},
//         isLoading: false,
//         error: null
//     },
//     reducers: {
//         setCurrencyData: (state, action) => {
//             state.data = action.payload;
//         },
//         setLoading: (state, action) => {
//             state.isLoading = action.payload;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//         }
//     }
// });

// export const { setCurrencyData, setLoading, setError } = currencySlice.actions;
// export default currencySlice.reducer;
