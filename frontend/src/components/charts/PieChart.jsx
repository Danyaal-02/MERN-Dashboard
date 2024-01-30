import React from 'react';
import { Pie } from "react-chartjs-2";

const getRandomLightColor = () => {
    // Generate random RGB values in the range of 128-255 for brightness
    const r = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const g = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const b = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    // Construct CSS color string with light values
    return `rgba(${r}, ${g}, ${b}, 0.7)`; // Use alpha for transparency
}

const PieChart = ({ chartData }) => {
    const labels = Object.keys(chartData);
    const dataValues = Object.values(chartData);
    
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: labels.map(() => getRandomLightColor()), // Generate random light colors
                borderWidth: 2,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
                color: '#ffffff' // Set legend labels color to white
            }
          },
        },
    }; 

    return (
        <Pie data={data} options={options} />
    )
}

export default PieChart;
