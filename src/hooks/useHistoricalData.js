import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { fetchHistoricalData } from '../functions/fetchHistoricalData';
import { setHistoricalCurrencyData, setLoading, setError } from '../redux/slices/historicalCurrencySlice';

export const useHistoricalData = (currencyOne, currencyTwo) => {
    const dispatch = useDispatch();

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['historicalData', currencyOne, currencyTwo],
        queryFn: () => fetchHistoricalData({ currencyOne, currencyTwo }),
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        retry: (failureCount, error) => {
            if (error.response?.status === 429) {
                return false;
            }
            return failureCount < 3;
        },
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.error('Error fetching historical data:', error);
        },
    });
    dispatch(setHistoricalCurrencyData(data))
    return { data, error, isLoading, isError }
};
