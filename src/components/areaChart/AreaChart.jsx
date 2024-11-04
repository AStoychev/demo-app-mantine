import { Line } from "react-chartjs-2";
import { Loader } from "@mantine/core";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { useHistoricalData } from "../../hooks/useHistoricalData";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import styles from "./AreaChart.module.css";

export const AreaChart = ({ instruments }) => {
    const localStorageTheme = localStorage.getItem('theme');
    const [currencyOne, currencyTwo] = instruments.split("/");
    const { data, isLoading, error } = useHistoricalData(currencyOne, currencyTwo);

    if (isLoading) {
        return (
            <div className={styles.spinnerWrapper}>
                <p>Loading chart...</p>
                <Loader color={localStorageTheme === 'light' ? "#8607f3" : '#ffffff'}
                    size={15} />
            </div>
        )
    }

    if (error) {
        return <p>Error fetching chart data</p>;
    }

    const timestamps = data.t.map((timestamp) => new Date(timestamp).toLocaleDateString()); // Convert timestamps to human-readable dates
    const closePrices = data.c;
    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: `${data.pairs[0]} / ${data.pairs[1]}`,
                data: closePrices,
                fill: true,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.3,
            },
        ],
    }
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    // text: "Date",
                },
            },
            y: {
                title: {
                    display: true,
                    // text: "Price",
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className={styles.chartWrapper}>
            <Line data={chartData} options={chartOptions} className={styles.line} />
        </div>
    );
};
