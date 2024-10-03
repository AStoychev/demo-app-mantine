import axios from "axios";
import { getDateBackOneMount } from "./getDateBackOneMount";

const API_KEY = import.meta.env.VITE_API_KEY;
// const baseURL = 'https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day';

export const fetchHistoricalData = async ({currencyOne, currencyTwo}) => {
    const { startDate, endDate } = getDateBackOneMount();
    const url = `https://api.polygon.io/v2/aggs/ticker/C:${currencyOne}${currencyTwo}/range/1/day/${endDate}/${startDate}?apiKey=${API_KEY}`

    try {
        const response = await axios.get(url);
        if (response.data && response.data.results && response.data.results.length > 0) {
            const timestamps = response.data.results.map((item) => item.t);
            const closePrices = response.data.results.map((item) => item.c);

            return { t: timestamps, c: closePrices, pairs: [currencyOne, currencyTwo]};
        } else {
            throw new Error("No data in response");
        }

    } catch (error) {
        console.log("Error", error)
    }
}