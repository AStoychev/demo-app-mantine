import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCurrencyData = async (fromCurrency, toCurrency) => {
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);

    try {

        const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/prev?apiKey=${API_KEY}`);

        // if (data && data.results && data.results.length > 0) {
        //     const result = data.results[0];

        //     const openPrice = result.o; // Opening price (start of the day)
        //     const closePrice = result.c; // Closing price (end of the day) or Sell price
        //     const highPrice = result.h; // Highest price of the day
        //     const lowPrice = result.l; // Lowest price of the day

        //     // Calculate Change
        //     const change = closePrice - openPrice;

        //     console.log('Open Price:', openPrice);
        //     console.log('Close Price (Sell):', closePrice);
        //     console.log('Change:', change);
        //     console.log('USR/EUR Price:', closePrice); // Assuming closing price is the price you need
        //     console.log('High Price:', highPrice);
        //     console.log('Low Price: ', lowPrice)
        // } else {
        //     console.log('No results found');
        // }

        return data
    }
    catch (error) {
        console.log('ERROR', error)
    }
}