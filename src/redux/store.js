import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import historicalCurrencyReducer from './slices/historicalCurrencySlice';
import { saveToSessionStorage, loadFromSessionStorage } from "./sessionStorage";

const persistedState = loadFromSessionStorage();

const store = configureStore({
    reducer: {
        currency: currencyReducer,
        historicalCurrency: historicalCurrencyReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveToSessionStorage(store.getState())
});

export default store;