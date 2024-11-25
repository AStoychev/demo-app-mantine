import { Text, Flex } from "@mantine/core";
import { AreaChart } from "../areaChart/AreaChart";
import { useHistoricalData } from "../../hooks/useHistoricalData";
import styles from "./Chart.module.css";

export const Chart = () => {
    const currencyPairs = [
        { from: "EUR", to: "USD" },
        { from: "GBP", to: "USD" },
        { from: "USD", to: "CHF" },
    ];

    return (
        <Flex className={styles.wrapper} align="center">
            <Flex className={styles.dataWrapper}>
                {currencyPairs.map(({ from, to }) => {
                    const { data, isLoading, error } = useHistoricalData(from, to);
                    if (isLoading) {
                        return <Text key={`${from}-${to}`}>Loading {from}/{to}...</Text>;
                    }
                    if (error) {
                        return <Text key={`${from}-${to}`}>Error loading {from}/{to}</Text>;
                    }
                    return (
                        <div className={styles.areaWrapper} key={`${from}-${to}`}>
                            <AreaChart key={`${from}/${to}`} instruments={`${from}/${to}`} />
                        </div>

                    );
                })}
            </Flex>
        </Flex>
    )
}