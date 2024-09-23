import { useState, useEffect, useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useCurrencyData } from '../../hooks/useCurrencyData';

export const Table = () => {
    const [data, setData] = useState([])
    const firstInstrument = "USD";
    const secondInstrument = "EUR";
    const { data: currencyData, error, isLoading, isError } = useCurrencyData(firstInstrument, secondInstrument);

    useEffect(() => {
        if (currencyData && currencyData.results && currencyData.results.length > 0) {
            const instruments = currencyData.ticker.split(":")[1];
            const result = currencyData.results[0];
            const openPrice = result.o; // Opening price
            const closePrice = result.c; // Closing price
            const highPrice = result.h; // Highest price
            const lowPrice = result.l; // Lowest price

            // Calculate Change
            const change = (closePrice - openPrice).toFixed(10);

            // console.log('Open Price:', openPrice);
            // console.log('Close Price (Sell):', closePrice);
            // console.log('Change:', change);
            // console.log('USR/EUR Price:', closePrice); // Assuming closing price is the price you need
            // console.log('High Price:', highPrice);
            // console.log('Low Price: ', lowPrice)


            setData([{
                instrument: `${firstInstrument}/${secondInstrument}`,
                price: closePrice,
                low: lowPrice,
                high: highPrice,
                change: change,
                close: closePrice,
                open: openPrice,
            }]); // Set data as an array
        } else {
            console.log('No results found');
        }
    }, [currencyData]); // Depend on cur

    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'instrument',
                header: 'Instrument',
            },
            {
                accessorKey: 'price', //normal accessorKey
                header: 'Price',
            },
            {
                accessorKey: 'low',
                header: 'Low Price',
            },
            {
                accessorKey: 'high',
                header: 'High Price',
            },
            {
                accessorKey: 'change',
                header: 'Changes',
            },
            {
                accessorKey: 'close',
                header: 'Close Price',
            },
            {
                accessorKey: 'open', //access nested data with dot notation
                header: 'Open Price',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MantineReactTable table={table} />;
};