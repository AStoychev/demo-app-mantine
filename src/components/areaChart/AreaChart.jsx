import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { useHistoricalData } from "../../hooks/useHistoricalData";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import styles from "./AreaChart.module.css";

export const AreaChart = ({ instruments }) => {
    const [currencyOne, currencyTwo] = instruments.split("/");
    // const currencyOne = "EUR";
    // const currencyTwo = "USD";
    const { data, isLoading, error } = useHistoricalData(currencyOne, currencyTwo);

    if (isLoading) {
        return <p>Loading chart...</p>;
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
                    text: "Date",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Price",
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className={styles.chartWrapper}>
            <h2>Area Chart</h2>
            <Line data={chartData} options={chartOptions} className={styles.line} />
        </div>
    );
};