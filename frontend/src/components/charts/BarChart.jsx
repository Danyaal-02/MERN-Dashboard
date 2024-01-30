import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, PointElement, LineElement, LinearScale } from 'chart.js/auto';

const getRandomLightColor = () => {
    // Generate random RGB values in the range of 128-255 for brightness
    const r = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const g = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const b = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    // Construct CSS color string with light values
    return `rgba(${r}, ${g}, ${b}, 0.7)`; // Use alpha for transparency
}

const BarChart = ({ chartData }) => {
    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Published',
                data: Object.values(chartData),
                backgroundColor: Object.keys(chartData).map(() => getRandomLightColor()), // Generate random light colors
                borderWidth: 0,
                barThickness: 10,
                borderRadius: 5
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              color: 'white' 
            }
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'white' 
            }
          },
        },
    };

    return (
        <Bar data={data} options={options} />
    );
}

export default BarChart;
