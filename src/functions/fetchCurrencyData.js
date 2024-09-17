import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCurrencyData = async (fromCurrency, toCurrency) => {
    const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/prev?apiKey=${API_KEY}`);
    return data
}