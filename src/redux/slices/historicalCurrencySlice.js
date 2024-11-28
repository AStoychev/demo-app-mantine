import { createSlice } from '@reduxjs/toolkit';

const historicalCurrencySlice = createSlice({
    name: 'historicalCurrency',
    initialState: {
        data: {},
        isLoading: false,
        error: null
    },
    
    reducers: {
        setHistoricalCurrencyData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setHistoricalCurrencyData, setLoading, setError } = historicalCurrencySlice.actions;
export default historicalCurrencySlice.reducer;
