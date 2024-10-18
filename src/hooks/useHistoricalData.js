import { useQuery } from '@tanstack/react-query';
import { fetchHistoricalData } from '../functions/fetchHistoricalData';

export const useHistoricalData = (currencyOne, currencyTwo) => {
    return useQuery({
        queryKey: ['historicalData', currencyOne, currencyTwo],
        queryFn: () => fetchHistoricalData({ currencyOne, currencyTwo }),
        staleTime: 1000 * 60 * 5,
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
};
