import { useQuery } from "@tanstack/react-query";
import { fetchAllCurrencyData } from "../functions/fetchCurrencyData";

export const useCurrencyData = (fromCurrency, toCurrency) => {
    return useQuery({
        queryKey: ["currencyData", fromCurrency, toCurrency],
        queryFn: fetchAllCurrencyData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
        retry: 2,
    })
}