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

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// // Register the necessary chart components from Chart.js
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// export const AreaChart = () => {
//     // Data for the Line Chart
//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
//         datasets: [
//             {
//                 label: 'Sales', // The label for the dataset
//                 data: [30, 50, 70, 40, 85, 60], // Y-axis values
//                 borderColor: 'rgba(75, 192, 192, 1)', // Line color
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill under the line
//                 borderWidth: 2, // Line thickness
//                 pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the points
//             },
//         ],
//     };

//     // Options to customize the appearance of the chart
//     const options = {
//         responsive: true,
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Months', // X-axis title
//                 },
//             },
//             y: {
//                 beginAtZero: true, // Ensures Y-axis starts at 0
//                 title: {
//                     display: true,
//                     text: 'Sales Value', // Y-axis title
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <h2>Sales Data</h2>
//             <Line data={data} options={options} />
//         </div>
//     );
// };
