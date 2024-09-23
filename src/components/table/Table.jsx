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
            const openPrice = result.o;
            const closePrice = result.c;
            const highPrice = result.h;
            const lowPrice = result.l;

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
            }]);
        } else {
            console.log('No results found');
        }
    }, [currencyData]);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'instrument',
                header: 'Instrument',
            },
            {
                accessorKey: 'price',
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
                accessorKey: 'open',
                header: 'Open Price',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data,
    });

    return <MantineReactTable table={table} />;
};