import axios from "axios";
import { getDateBackOneMount } from "./getDateBackOneMount";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseURL = 'https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day';

export const fetchHistoricalData = async () => {
    const { startDate, endDate } = getDateBackOneMount();
    const url = `${baseURL}/${endDate}/${startDate}?apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
    } catch (error) {
        console.log("Error", error)
    }
}