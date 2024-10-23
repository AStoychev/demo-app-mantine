import axios from "axios";
import { getDateBackOneMount } from "./getDateBackOneMount";

const API_KEY = import.meta.env.VITE_API_KEY;
const REQUEST_DELAY = 10000; // 10 seconds delay for retry

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchHistoricalData = async ({ currencyOne, currencyTwo }) => {
    const { startDate, endDate } = getDateBackOneMount();
    const url = `https://api.polygon.io/v2/aggs/ticker/C:${currencyOne}${currencyTwo}/range/1/day/${endDate}/${startDate}?apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        if (response.data && response.data.results && response.data.results.length > 0) {
            const timestamps = response.data.results.map((item) => item.t);
            const closePrices = response.data.results.map((item) => item.c);

            return { t: timestamps, c: closePrices, pairs: [currencyOne, currencyTwo] };
        } else {
            throw new Error("No data in response");
        }
    } catch (error) {
        // Suppress sensitive info
        if (error.response) {
            if (error.response.status === 429) {
                console.warn("Rate limit exceeded, waiting for 10 seconds before retrying...");
                await delay(REQUEST_DELAY); // Wait before retrying
                return fetchHistoricalData({ currencyOne, currencyTwo }); // Retry the request
            } else {
                // Log a custom message without exposing API details
                console.error("Error fetching historical data: Rate limit exceeded or server error.");
            }
        } else {
            // Log a generic error if no response
            console.error("Error fetching historical data: No response from server.");
        }
        throw error; // Rethrow to handle it elsewhere if needed
    }
}




// import axios from "axios";
// import { getDateBackOneMount } from "./getDateBackOneMount";

// const API_KEY = import.meta.env.VITE_API_KEY;
// // const baseURL = 'https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day';

// export const fetchHistoricalData = async ({currencyOne, currencyTwo}) => {
//     const { startDate, endDate } = getDateBackOneMount();
//     const url = `https://api.polygon.io/v2/aggs/ticker/C:${currencyOne}${currencyTwo}/range/1/day/${endDate}/${startDate}?apiKey=${API_KEY}`

//     try {
//         const response = await axios.get(url);
//         if (response.data && response.data.results && response.data.results.length > 0) {
//             const timestamps = response.data.results.map((item) => item.t);
//             const closePrices = response.data.results.map((item) => item.c);

//             return { t: timestamps, c: closePrices, pairs: [currencyOne, currencyTwo]};
//         } else {
//             throw new Error("No data in response");
//         }

//     } catch (error) {
//         console.log("Error", error)
//     }
// }