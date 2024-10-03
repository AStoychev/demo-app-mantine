import { useQuery } from '@tanstack/react-query';
import { fetchHistoricalData } from '../functions/fetchHistoricalData';

export const useHistoricalData = (currencyOne, currencyTwo) => {
    return useQuery({
        queryKey: ['historicalData', currencyOne, currencyTwo],  // Unique query key
        queryFn: () => fetchHistoricalData({ currencyOne, currencyTwo }),  // Function to fetch the data
        staleTime: 1000 * 60 * 5,      // Cache data for 5 minutes
        retry: (failureCount, error) => {
            // Retry for network errors but not 429 errors
            if (error.response?.status === 429) {
                return false;
            }
            return failureCount < 3;
        },
        refetchOnWindowFocus: false,   // Disable refetching on window focus
        onError: (error) => {
            console.error('Error fetching historical data:', error);
        },
    });
};
