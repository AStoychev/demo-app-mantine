import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // This is for the filled area
);

// Example data (use your own fetched data here)
const data = [
    { t: 1724630400000, c: 1.11645 },
    { t: 1724716800000, c: 1.1176 },
    { t: 1724803200000, c: 1.11244 },
    { t: 1724889600000, c: 1.108 },
    // More data...
];

// Convert timestamp to human-readable date and format your data
const chartData = {
    labels: data.map((point) => new Date(point.t).toLocaleDateString()), // Convert timestamp to date
    datasets: [
        {
            label: "Close Price",
            data: data.map((point) => point.c), // Use the close price 'c'
            fill: true, // This enables the fill under the line (area chart)
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)", // Fill color
            tension: 0.3, // Smoothing the line
        },
    ],
};

// Options for the chart
const chartOptions = {
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

export const AreaChart = () => {
    return (
        <div>
            <h2>Area Chart - Close Prices</h2>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};