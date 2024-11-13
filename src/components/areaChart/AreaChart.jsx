import { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Loader } from "@mantine/core";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { useHistoricalData } from "../../hooks/useHistoricalData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import styles from "./AreaChart.module.css";

export const AreaChart = ({ instruments }) => {
    const chartRef = useRef(null); // Create a ref for the chart
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

    const timestamps = data.t.map((timestamp) => new Date(timestamp).toLocaleDateString());
    const closePrices = data.c;

    // Create a gradient fill color
    const createGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Height for the gradient
        gradient.addColorStop(0, "rgba(155,129,236)"); // Darker color at the top
        gradient.addColorStop(1, "rgba(155,129,236, 0.2)"); // Lighter color at the bottom
        return gradient;
    };

    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: `${data.pairs[0]} / ${data.pairs[1]}`,
                data: closePrices,
                fill: true,
                // borderColor: "rgba(255,99,132,1)",  
                // backgroundColor: "rgba(255,99,132,0.2)", 
                backgroundColor: chartRef.current
                    ? createGradient(chartRef.current.ctx) // Apply gradient fill if chart is loaded
                    : "rgba(155,129,236)", // Fallback color 
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "rgba(129, 171, 236, 1)",
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                    color: "#333",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Price",
                    color: "#333",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: "rgba(200, 200, 200, 0.2)",
                    borderDash: [5, 5],
                },
                beginAtZero: false,
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeInQuad',
            delay: (context) => context.datasetIndex * 500,

            // duration: 1000,
            // easing: 'linear',
            // backgroundColor: {
            //     type: 'color',
            //     easing: 'easeInSine',
            //     from: 'rgba(75,192,192,0.2)',
            //     to: 'rgba(75,192,192,0.6)',
            //     duration: 1500,
            // },
        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 5,
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: '500',
                    },
                    color: '#444',
                },
            },
        },
    };

    // const chartData = {
    //     labels: timestamps,
    //     datasets: [
    //         {
    //             label: `${data.pairs[0]} / ${data.pairs[1]}`,
    //             data: closePrices,
    //             fill: true,
    //             borderColor: "rgb(155,129,236)", // Line color
    //             backgroundColor: chartRef.current
    //                 ? createGradient(chartRef.current.ctx) // Apply gradient fill if chart is loaded
    //                 : "rgba(75,192,192,0.2)", // Fallback color
    //             tension: 0.3,
    //         },
    //     ],
    // };

    // const chartOptions = {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     scales: {
    //         x: {
    //             title: {
    //                 display: true,
    //             },
    //         },
    //         y: {
    //             title: {
    //                 display: true,
    //             },
    //             beginAtZero: false,
    //         },
    //     },
    // };

    return (
        <div className={styles.chartWrapper}>
            <Line ref={chartRef} data={chartData} options={chartOptions} className={styles.line} />
        </div>
    );
};
