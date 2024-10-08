import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCurrencyData = async (fromCurrency, toCurrency) => {
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);

    try {
        const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/prev?apiKey=${API_KEY}`);
        return data
    }
    catch (error) {
        if (error.response && error.response.status === 429) {
            console.warn("Rate limit exceeded, retrying...");
            await delay(10000); // Wait for 10 seconds before retrying
            return fetchCurrencyData(fromCurrency, toCurrency);
            
            // console.log("Rate limit exceeded. Retrying...");
            // // Retry after some delay
            // await new Promise(resolve => setTimeout(resolve, 10000)); // wait for 1 second
            // console.log("ERROR REQUEST")
            // return fetchCurrencyData(fromCurrency, toCurrency); // retry the request
        }
        throw error; //
    }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllCurrencyData = async () => {
    const currencyPairs = [
        { from: 'EUR', to: 'USD' },
        { from: 'GBP', to: 'USD' },
        { from: 'USD', to: 'CHF' },
    ];

    const fetchPromises = currencyPairs.map(pair =>
        fetchCurrencyData(pair.from, pair.to).then(data => ({
            from: pair.from,
            to: pair.to,
            data,
        }))
    );

    try {
        const results = await Promise.all(fetchPromises);
        return results; // Array of objects containing from, to, and data
    } catch (error) {
        console.error('Error fetching all currency data:', error);
        throw error; // Throw error for react-query to catch
    }
};