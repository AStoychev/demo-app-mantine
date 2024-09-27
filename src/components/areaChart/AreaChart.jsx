// Import dependencies
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary chart components from Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const AreaChart = () => {
    // Data for the Line Chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [
            {
                label: 'Sales', // The label for the dataset
                data: [30, 50, 70, 40, 85, 60], // Y-axis values
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill under the line
                borderWidth: 2, // Line thickness
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the points
            },
        ],
    };

    // Options to customize the appearance of the chart
    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months', // X-axis title
                },
            },
            y: {
                beginAtZero: true, // Ensures Y-axis starts at 0
                title: {
                    display: true,
                    text: 'Sales Value', // Y-axis title
                },
            },
        },
    };

    return (
        <div>
            <h2>Sales Data</h2>
            <Line data={data} options={options} />
        </div>
    );
};
