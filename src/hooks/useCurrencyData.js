import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { fetchAllCurrencyData } from "../functions/fetchCurrencyData";
import { setCurrencyData, setLoading, setError } from "../redux/slices/currencySlice";

export const useCurrencyData = (fromCurrency, toCurrency) => {    
    const dispatch = useDispatch();

    const { data, error, isLoading, isError} = useQuery({
        queryKey: ["currencyData", fromCurrency, toCurrency],
        queryFn: fetchAllCurrencyData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        retry: 2,
    });
    dispatch(setCurrencyData(data))
    return { data, error, isLoading, isError }
}