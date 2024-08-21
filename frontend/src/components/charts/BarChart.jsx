import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, PointElement, LineElement, LinearScale } from 'chart.js/auto';

const getRandomLightColor = () => {
    const r = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const g = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const b = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

const BarChart = ({ chartData }) => {
    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Published',
                data: Object.values(chartData),
                backgroundColor: Object.keys(chartData).map(() => getRandomLightColor()),
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
