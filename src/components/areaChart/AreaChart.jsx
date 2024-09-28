import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { fetchHistoricalData } from "../../functions/fetchHistoricalData";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import styles from "./AreaChart.module.css";

export const AreaChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Close Price",
                data: [],
                fill: true,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.3,
            },
        ],
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchHistoricalData(); // Fetch data from the API

                if (data && data.t && data.c) {
                    const timestamps = data.t.map((timestamp) => new Date(timestamp).toLocaleDateString()); // Convert timestamps to human-readable dates
                    const closePrices = data.c;

                    setChartData({
                        labels: timestamps,
                        datasets: [
                            {
                                label: "Close Price",
                                data: closePrices,
                                fill: true,
                                borderColor: "rgba(75,192,192,1)",
                                backgroundColor: "rgba(75,192,192,0.2)",
                                tension: 0.3,
                            },
                        ],
                    });
                } else {
                    console.error("No valid data returned");
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        getData();
    }, []);

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
            <h2>Area Chart - Close Prices</h2>
            <Line data={chartData} options={chartOptions}  className={styles.line}/>
        </div>
    );
};
