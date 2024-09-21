import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useCurrencyData } from '../../hooks/useCurrencyData';

const data = [
    {
        price: {
            open: 'Zachary',
            close: 'Davis',
            low: 'Columbus',
            high: 'Ohio',
            price: '261 Battle Ford',
        },
        change: '111111'
    },
    // {
    //     name: {
    //         firstName: 'Robert',
    //         lastName: 'Smith',
    //     },
    //     address: '566 Brakus Inlet',
    //     city: 'Westerville',
    //     state: 'West Virginia',
    // },
    // {
    //     name: {
    //         firstName: 'Kevin',
    //         lastName: 'Yan',
    //     },
    //     address: '7777 Kuhic Knoll',
    //     city: 'South Linda',
    //     state: 'West Virginia',
    // },
    // {
    //     name: {
    //         firstName: 'John',
    //         lastName: 'Upton',
    //     },
    //     address: '722 Emie Stream',
    //     city: 'Huntington',
    //     state: 'Washington',
    // },
    // {
    //     name: {
    //         firstName: 'Nathan',
    //         lastName: 'Harris',
    //     },
    //     address: '1 Kuhic Knoll',
    //     city: 'Ohiowa',
    //     state: 'Nebraska',
    // },
];

export const Table = () => {
    const { data: currencyData, error, isLoading, isError } = useCurrencyData('USD', "EUR");

    if (currencyData && currencyData.results && currencyData.results.length > 0) {
        const result = currencyData?.results[0];
        const openPrice = result.o; // Opening price (start of the day)
        const closePrice = result.c; // Closing price (end of the day) or Sell price
        const highPrice = result.h; // Highest price of the day
        const lowPrice = result.l; // Lowest price of the day

        // Calculate Change
        const change = closePrice - openPrice;

        console.log('Open Price:', openPrice);
        console.log('Close Price (Sell):', closePrice);
        console.log('Change:', change);
        console.log('USR/EUR Price:', closePrice); // Assuming closing price is the price you need
        console.log('High Price:', highPrice);
        console.log('Low Price: ', lowPrice)

    } else {
        console.log('No results found');

    }

    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'price.price', //normal accessorKey
                header: 'Price',
            },
            {
                accessorKey: 'price.low',
                header: 'Low Price',
            },
            {
                accessorKey: 'price.high',
                header: 'High Price',
            },
            {
                accessorKey: 'change',
                header: 'Changes',
            },
            {
                accessorKey: 'price.close',
                header: 'Close Price',
            },
            {
                accessorKey: 'price.open', //access nested data with dot notation
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