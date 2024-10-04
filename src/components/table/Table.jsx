import { useState, useEffect, useMemo } from 'react';
import { Accordion, Text } from '@mantine/core';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useCurrencyData } from '../../hooks/useCurrencyData';
import { AreaChart } from '../areaChart/AreaChart';

import styles from "./Table.module.css";

export const Table = () => {
    const [data, setData] = useState([])
    const { data: currencyData, error, isLoading, isError } = useCurrencyData();

    useEffect(() => {
        if (currencyData && currencyData.length > 0) {
            const transformedData = currencyData.map(item => {
                const { from, to, data } = item;
                const instruments = data?.ticker.split(":")[1];
                const result = data?.results[0];
                const openPrice = result?.o;
                const closePrice = result?.c;
                const highPrice = result?.h;
                const lowPrice = result?.l;

                const change = (closePrice - openPrice).toFixed(10);

                return {
                    instrument: `${from}/${to}`,
                    price: closePrice,
                    lowHigh: `${lowPrice} / ${highPrice}`,
                    change: change,
                    close: closePrice,
                    open: openPrice,
                };

            })
            setData(transformedData)
            // const instruments = currencyData.ticker.split(":")[1];
            // const result = currencyData.results[0];
            // const openPrice = result.o;
            // const closePrice = result.c;
            // const highPrice = result.h;
            // const lowPrice = result.l;

            // const change = (closePrice - openPrice).toFixed(10);

            // console.log('Open Price:', openPrice);
            // console.log('Close Price (Sell):', closePrice);
            // console.log('Change:', change);
            // console.log('USR/EUR Price:', closePrice); // Assuming closing price is the price you need
            // console.log('High Price:', highPrice);
            // console.log('Low Price: ', lowPrice)

            // setData([{
            //     instrument: `${firstInstrument}/${secondInstrument}`,
            //     price: closePrice,
            //     lowHigh: `${lowPrice} / ${highPrice}`,
            //     change: change,
            //     close: closePrice,
            //     open: openPrice,
            // }]);
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
                accessorKey: 'close',
                header: 'Close Price',
            },
            {
                accessorKey: 'open',
                header: 'Open Price',
            },
            {
                accessorKey: 'change',
                header: 'Changes',
            },
            {
                accessorKey: 'lowHigh',
                header: 'Low / High',
                enableSorting: false,
                enableFiltering: false,
                enableResizing: false,
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data,
    });

    return (
        <div className={styles.wrapper}>
            <MantineReactTable
                columns={columns}
                data={data}
                renderDetailPanel={({ row }) => (
                    <Accordion defaultValue={null} transitionDuration={1000}>
                        <Accordion.Item value={`row-${row.index}`}>
                            <Text>{row.original.instrument}</Text>
                            <div style={{ width: '100%', height: '420px' }}>
                                <AreaChart instruments={data[row.index].instrument}/>
                            </div>
                        </Accordion.Item>
                    </Accordion>
                )}
            />
        </div>
    )
};